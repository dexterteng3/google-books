import requestClient from '../util/requestClient';

export default class GoogleBooksService implements IGoogleBooksService {
    public async searchBooks(bookQuery: IBookQuery): Promise<IGoogleResponse> {
        const authorQuery = this.splitString(bookQuery.author) !== '' ? '+inauthor:' + bookQuery.author : ''
        const titleQuery = this.splitString(bookQuery.title) !== '' ? 'intitle:' + bookQuery.title : ''

        return await requestClient.get('/volumes', {
            params: {
                q: titleQuery + authorQuery
            }
        });
    }

    private splitString(uncleanString?: string): string {
        if (uncleanString != null) {
            return uncleanString.replace(' ', '+');
        }
        return '';
    }
}
