const request = require('supertest');
const app = require('../app');
const mongooseConnection = require("../dbconfig/connection.js");

describe('Test the api route', () => {
    it('Should 200 the GET method', async () => {
        const response = await request(app).get('/api/test');
        expect(response.statusCode).toBe(200);
    });
    it('Should 404 a random route', async () => {
        const response = await request(app).get('/api/nonExistentRoute');
        expect(response.statusCode).toBe(404);
    });
})

describe('Test the database route', () => {
    beforeAll(() => {
        return mongooseConnection.connect();
    });
    afterAll(() => {
        return mongooseConnection.disconnect();
    });
    
    it('Should return documents from the db test route', async () => {
        const response = await request(app).get('/api/test/db');
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
    });
})