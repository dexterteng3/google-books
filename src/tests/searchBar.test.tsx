import { shallow } from 'enzyme';
import * as React from 'react';

import SearchBar from '../components/searchBar';

jest.mock('../services/googleBooksService');

it('renders without crashing', () => {
    const mockSetBooks = jest.fn();
    const subject = shallow(<SearchBar setBooks={mockSetBooks}/>, undefined);
    expect(subject.find('#title-input').length).toBe(1);
});

xit('calls service when search is pressed', () => {
    const mockSetBooks = jest.fn();
    const subject = shallow(<SearchBar setBooks={mockSetBooks} />, {});
    subject.find('.search-button').simulate('click', {preventDefault: jest.fn()}); 
    expect(mockSetBooks).toBeCalled();
});
