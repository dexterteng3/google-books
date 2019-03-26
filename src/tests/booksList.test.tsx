import { shallow } from 'enzyme';
import * as React from 'react';

import BooksList from '../containers/booksList';
 
const testBook: IGoogleBook = {
    etag: 'etag',
    id: 'myId',
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
}

it('creates table correctly', () => {
    const subject = shallow(<BooksList items={[testBook]}/>, {});

    const headers = subject.find('#header-row').find('th');
    const dataRow = subject.find('#myId').find('td');

    expect(headers.length).toBe(5);
    expect(headers.get(0).props.children).toBe('Image');
    expect(headers.get(1).props.children).toBe('Title');
    expect(headers.get(2).props.children).toBe('Author(s)');
    expect(headers.get(3).props.children).toBe('Publisher');
    expect(headers.get(4).props.children).toBe('Published Date');

    expect(dataRow.length).toBe(5);
    expect(dataRow.get(0).props.children.props.href).toBe('https://books.google.com/books?id=myId');
    expect(dataRow.get(0).props.children.props.children.props.src).toBe('www.small.com')
    expect(dataRow.get(1).props.children.props.children).toBe('title');
    expect(dataRow.get(1).props.children.props.href).toBe('https://books.google.com/books?id=myId');
    expect(dataRow.get(2).props.children).toBe('author1');
    expect(dataRow.get(3).props.children).toBe('publisher');
    expect(dataRow.get(4).props.children).toBe('12-01-01');
});

it('shows multiple rows', () => {
    const subject = shallow(<BooksList items={[testBook, testBook]}/>, {});
    const dataRows = subject.find('tr');
    expect(dataRows.length).toBe(3);
});

it('shows N/A for undefined fields', () => {
    const undefinedAuthor: IGoogleBook = {
        etag: 'etag',
        id: 'myId',
        kind: 'book',
        selfLink: 'www.selflink.com',
        volumeInfo: {
            authors: undefined,
            description: 'description',
            imageLinks: {
                smallThumbnail: undefined,
                thumbnail: undefined
            },
            publishedDate: undefined,
            publisher: undefined,
            title: undefined
        }
    }

    const subject = shallow(<BooksList items={[undefinedAuthor]}/>, {});
    const dataRow = subject.find('#myId').find('td');

    expect(dataRow.length).toBe(5);
    expect(dataRow.get(0).props.children.props.href).toBe('https://books.google.com/books?id=myId');
    expect(dataRow.get(0).props.children.props.children).toBe('No Image')
    expect(dataRow.get(1).props.children.props.children).toBe('Unknown Title');
    expect(dataRow.get(1).props.children.props.href).toBe('https://books.google.com/books?id=myId');
    expect(dataRow.get(2).props.children).toBe('N/A');
    expect(dataRow.get(3).props.children).toBe('Unknown Publisher');
    expect(dataRow.get(4).props.children).toBe('N/A');})
