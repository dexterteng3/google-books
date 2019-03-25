import * as React from 'react';

import GoogleBooksService from '../services/googleBooksService';

interface ISearchBarProps {
    setBooks: (books: IGoogleBook[]) => void;
}

interface ISearchBarState {
    title: string;
    author: string;
}

export default class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
    constructor(props: ISearchBarProps) {
        super(props);
        this.state = {
            author: '',
            title: ''
        }

        this.performSearch = this.performSearch.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);
    }

    public render() { 
        return (
            <div>
                <form id='search-form'>
                    <input type='text' id='title-input' placeholder='Title...' onChange={this.updateTitle}/>
                    <input type='text' id='author-input' placeholder='Author...' onChange={this.updateAuthor}/>
                    <button className='search-button' onClick={this.performSearch}>
                        Search
                    </button>
                </form>
            </div>
        );
    }

    private performSearch(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();

        const uncleanTitle = this.state.title;
        const uncleanAuthor = this.state.author;

        const service = new GoogleBooksService;
        service.searchBooks({
            author: this.splitString(uncleanAuthor),
            title: this.splitString(uncleanTitle)
        }).then(response => {
            this.props.setBooks(response.data.items);
        });
    };

    private splitString(uncleanString?: string): string {
        if (uncleanString != null) {
            return uncleanString.replace(' ', '+');
        }
        return '';
    }

    private updateTitle(title: React.ChangeEvent<HTMLInputElement>) {
        this.setState({title: title.target.value});
    }

    private updateAuthor(author: React.ChangeEvent<HTMLInputElement>) {
        this.setState({author: author.target.value});
    }
}
