import * as React from 'react';

import BooksList from '../containers/booksList';
import '../styles/App.css';
import SearchBar from './searchBar';

interface IAppState {
  books: IGoogleBook[];
}

export class App extends React.Component<{}, IAppState> {
// tslint:disable-next-line: member-access
  state = {
    books: []
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dexters Book Searcher</h1>
        </header>
        <div>
          <SearchBar setBooks={this.setBooks}/>
          {this.state.books == null &&
            <div className='error-text'>Google found nothing! Please try your search again.</div>
          }
          {this.state.books != null && this.state.books.length > 0 &&
            <BooksList items={this.state.books}/>
          }
        </div>
      </div>
    );
  }
  
  public setBooks = (books: IGoogleBook[]) => {
    this.setState({
      books
    });
  }
}

export default App;
