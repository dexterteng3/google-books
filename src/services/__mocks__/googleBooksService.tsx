export default class GoogleBooksService implements IGoogleBooksServiceInterface {
    public searchBooks(bookQuery: IBookQuery): Promise<IGoogleResponse> {
        const response: IGoogleResponse = {
            data: {
                items: [{
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
                }],
                kind: 'book',
                totalItems: 1
            }
        };

        return Promise.resolve(response);
    }
}