interface IBookQuery {
    author?: string;
    title?: string;
}

interface IGoogleBooksService {
    searchBooks(bookQuery: IBookQuery): Promise<IGoogleResponse>;
}

interface IGoogleResponse {
    data: IGoogleSearchResult;
}

interface IGoogleSearchResult {
    kind: string;
    totalItems: number;
    items: IGoogleBook[];
}

interface IGoogleBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: IBookInfo;
}

interface IBookInfo {
    title?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    imageLinks?: IImageLinks;
}

interface IImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}
