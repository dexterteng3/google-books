import * as React from 'react';
import '../styles/booksList.css';

interface IBooksListProps {
    items: IGoogleBook[];
}

export default function BooksList(props: IBooksListProps) {

    return (<div>
        <table>
            <tr id='header-row'>
                <th>Image</th>
                <th>Title</th>
                <th>Author(s)</th>
                <th>Publisher</th>
                <th>Published Date</th>
            </tr>
        {props.items.map((book: IGoogleBook) => {
            return (
            <tr id={book.id} key={book.id} >
                <td>
                    <a href={'https://books.google.com/books?id=' + book.id}>
                        {book.volumeInfo.imageLinks.smallThumbnail !== undefined ? <img src={book.volumeInfo.imageLinks.smallThumbnail} alt='new'/> : 'No Image' }
                    </a> 
                </td>
                <td>                    
                    <a href={'https://books.google.com/books?id=' + book.id}>
                        {book.volumeInfo.title !== undefined ? book.volumeInfo.title : 'Unknown Title'}
                    </a>
                </td>
                {book.volumeInfo.authors !== undefined ? <td>{book.volumeInfo.authors.join(', ')}</td> : <td>N/A</td> } 
                <td>{book.volumeInfo.publisher !== undefined ? book.volumeInfo.publisher : 'Unknown Publisher'}</td>
                <td>{book.volumeInfo.publishedDate !== undefined ? book.volumeInfo.publishedDate : 'N/A'}</td>
            </tr>);
        })}
        </table>
    </div>);
}
