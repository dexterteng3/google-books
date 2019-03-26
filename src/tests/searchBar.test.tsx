import { shallow } from 'enzyme';
import * as React from 'react';

import SearchBar from '../components/searchBar';

it('renders without crashing', () => {
    const mockSetBooks = jest.fn();
    const subject = shallow(<SearchBar setBooks={mockSetBooks}/>, {});
    expect(subject.find('#title-input').length).toBe(1);
    expect(subject.find('#author-input').length).toBe(1);
    expect(subject.find('.search-button').length).toBe(1);
});

// Promise causes expectation to be asserted before promise returns.
it('calls service when search is pressed', async () => {
    const mockItems = [{
        etag: 'etag',
        id: '1',
        kind: 'book',
        selfLink: 'www.selflink.com',
        volumeInfo: {
            authors: ['author1'],
            description: 'description',
            imageLinks: {
                smallThumbnail: 'www.small.com',
                thumbnail: 'www.image.com'
            },
            publishedDate: '12-01-01',
            publisher: 'publisher',
            title: 'title'
        }
    }];

    const response: IGoogleResponse = {
        data: {
            items: mockItems,
            kind: 'book',
            totalItems: 1
        }
    };

    const mockService = {
        searchBooks: (_: any) => {
            return Promise.resolve(response);
        }
    }

    const mockSetBooks = jest.fn();
    const subject = shallow(<SearchBar setBooks={mockSetBooks} service={mockService}/>, {});

    const button = subject.find('.search-button');
    await button.simulate('click', {preventDefault: jest.fn()}); 
    expect(mockSetBooks).toBeCalledWith(mockItems);
});

it('gracefully handles a service error', async () => {
    const mockService = {
        searchBooks: (_: any) => {
            return Promise.reject('error');
        }
    }

    const mockSetBooks = jest.fn();
    const subject = shallow(<SearchBar setBooks={mockSetBooks} service={mockService}/>, {});
    
    const button = subject.find('.search-button');
    try {
        await button.simulate('click', {preventDefault: jest.fn()}); 
    } catch {
        expect(mockSetBooks).toBeCalledWith(undefined)
    }
});