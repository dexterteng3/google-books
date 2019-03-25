import requestClient from '../util/requestClient';

export default class GoogleBooksService implements IGoogleBooksServiceInterface {
    public async searchBooks(bookQuery: IBookQuery): Promise<IGoogleResponse> {
        const authorQuery = bookQuery.author !== '' ? '+inauthor:' + bookQuery.author : ''
        const titleQuery = bookQuery.title !== '' ? 'intitle:' + bookQuery.title : ''

        return await requestClient.get('/volumes', {
            params: {
                q: titleQuery + authorQuery
            }
        });
    }
}
