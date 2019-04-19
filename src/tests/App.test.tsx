import { shallow } from 'enzyme';
import * as React from 'react';

import App from '../components/App';
import SearchBar from '../components/searchBar';
import BooksList from '../containers/booksList';

describe('App', () => {
    it('renders error when google returns nothing', () => {
        const subject = shallow(<App />, {});
        subject.setState({books: null});
        expect(subject.find('.error-text').length).toBe(1);
    });
    
    it('renders no error on page load', () => {
        const subject = shallow(<App />, {});
        subject.setState({books: []});
        expect(subject.find('.error-text').length).toBe(0);
    });
    
    it('does not render booklist when no books', () => {
      const subject = shallow(<App />, {});
      subject.setState({books: []});
      expect(subject.find(BooksList).length).toBe(0);
    });
    
    it('does not render booklist when no books', () => {
        const subject = shallow(<App />, {});
        subject.setState({books: ['something']});
        expect(subject.find(BooksList).length).toBe(1);
    });
    
    it('renders searchbar', () => {
        const subject = shallow(<App />, {});
        subject.setState({books: []});
        expect(subject.find(SearchBar).length).toBe(1);
    });    
});
