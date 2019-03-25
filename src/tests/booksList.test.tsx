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
});

it('shows multiple rows', () => {
    const subject = shallow(<BooksList items={[testBook, testBook]}/>, {});
    const dataRows = subject.find('tr');
    expect(dataRows.length).toBe(3);
});
