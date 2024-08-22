const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
    it('should return the correct status code', (done) => {
        request('http://localhost:7865/', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return the correct result', (done) => {
        request('http://localhost:7865/', (error, response, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should have the correct content type', (done) => {
        request('http://localhost:7865/', (error, response, body) => {
            expect(response.headers['content-type']).to.include('text/html');
            done();
        });
    });
});
