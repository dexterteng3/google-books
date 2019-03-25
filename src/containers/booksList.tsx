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
                    <a href={"https://books.google.com/books?id=" + book.id}>
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt='new'/>
                    </a> 
                </td>
                <td>                    
                    <a href={"https://books.google.com/books?id=" + book.id}>
                        {book.volumeInfo.title}
                    </a>
                </td>
                <td>{book.volumeInfo.authors.join(',')}</td>
                <td>{book.volumeInfo.publisher}</td>
                <td>{book.volumeInfo.publishedDate}</td>
            </tr>);
        })}
        </table>
    </div>);
}
