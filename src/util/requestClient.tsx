// tslint:disable-next-line: no-var-requires
const axios = require('axios');

const GOOGLE_PUBLIC_API_KEY = 'AIzaSyBPbRvs9BJRxkLbuVSDX2hUHhqTkjoCuGU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    method: 'get',
    params: {
        'key': GOOGLE_PUBLIC_API_KEY
    }
});
