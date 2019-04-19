import * as moxios from 'moxios';
import GoogleBooksService from '../services/googleBooksService';
import requestClient from '../util/requestClient';

describe('Integration Tests mock out axios and test googleBooksService and requestClient', () => {
    beforeEach(() => {
      moxios.install(requestClient);
    });

    afterEach(() => {
      moxios.uninstall(requestClient);
    });

    it('should call googleapi with key', async (done) => {
        const googleBooksService = new GoogleBooksService();

        googleBooksService.searchBooks({}) 
        .then(done);

        await moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            expect(request.url).toBe('https://www.googleapis.com/books/v1/volumes?key=AIzaSyBPbRvs9BJRxkLbuVSDX2hUHhqTkjoCuGU&q=');
            done();
          });
    });

    it('should call googleapi with title and author', async (done) => {
        const googleBooksService = new GoogleBooksService();

        googleBooksService.searchBooks({title: 'hello', author: 'goodbye'}) 
        .then(done);

        await moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            expect(request.url).toBe('https://www.googleapis.com/books/v1/volumes?key=AIzaSyBPbRvs9BJRxkLbuVSDX2hUHhqTkjoCuGU&q=intitle:hello%2Binauthor:goodbye');
            done();
          });
    });

    it('should properly split title and author', async (done) => {
        const googleBooksService = new GoogleBooksService();

        googleBooksService.searchBooks({title: "Gravity's Rainbow", author: 'Dexter Teng'}) 
        .then(done);

        await moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            expect(request.url).toBe("https://www.googleapis.com/books/v1/volumes?key=AIzaSyBPbRvs9BJRxkLbuVSDX2hUHhqTkjoCuGU&q=intitle:Gravity's+Rainbow%2Binauthor:Dexter+Teng");
            done();
          });
    });
});
