import * as React from 'react';
import '../styles/booksList.css';

interface IBooksListProps {
    items: IGoogleBook[];
}

const DEFAULT_TITLE = 'Unknown Title';
const DEFAULT_AUTHORS = 'N/A';
const DEFAULT_PUBLISHERS = 'Unknown Publisher';
const DEFAULT_PUSHLISHED_DATE = 'N/A';
const DEFAULT_IMG_SRC = 'https://www.classicposters.com/images/nopicture.gif'

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
            const volumeInfo = book.volumeInfo ? book.volumeInfo : {} as IBookInfo;
            const imageLinks = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : {} as IImageLinks;
            const title = volumeInfo.title ? volumeInfo.title : DEFAULT_TITLE;
            const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : DEFAULT_AUTHORS;
            const publisher = volumeInfo.publisher ? volumeInfo.publisher : DEFAULT_PUBLISHERS;
            const publishedDate = volumeInfo.publishedDate ? volumeInfo.publishedDate : DEFAULT_PUSHLISHED_DATE;

            return (
            <tr id={book.id} key={book.id} >
                <td>
                    <a href={'https://books.google.com/books?id=' + book.id}>
                        {(imageLinks.smallThumbnail) ? <img src={imageLinks.smallThumbnail} alt='new'/> : <img src={DEFAULT_IMG_SRC} height='192' width='128' alt='new'/> }
                    </a> 
                </td>
                <td>                    
                    <a href={'https://books.google.com/books?id=' + book.id}>
                        {title}
                    </a>
                </td>
                <td>{authors}</td>
                <td>{publisher}</td>
                <td>{publishedDate}</td>
            </tr>);
        })}
        </table>
    </div>);
}
