const request = require('supertest');
const app = require('../app');

describe('User Registration', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/users/register')
            .send({ username: 'testuser', password: 'password' });
        expect(response.status).toBe(201);
    });
});