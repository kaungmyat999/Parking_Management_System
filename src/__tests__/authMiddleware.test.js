const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middlewares/authMiddleware');

describe('Auth Middleware', () => {
	let req, res, next;

	beforeEach(() => {
		req = {
			headers: {}
		};
		res = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		};
		next = jest.fn();
	});

	test('should call next if token is valid', () => {
		const token = jwt.sign({ id: 1 }, 'secret', { expiresIn: '1h' });
		req.headers['authorization'] = `Bearer ${token}`;

		authMiddleware(req, res, next);

		expect(next).toHaveBeenCalled();
	});

	test('should return 401 if no token is provided', () => {
		authMiddleware(req, res, next);

		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({ message: 'No token provided' });
	});

	test('should return 401 if token is invalid', () => {
		req.headers['authorization'] = 'Bearer invalidtoken';

		authMiddleware(req, res, next);

		expect(res.status).toHaveBeenCalledWith(401);
		expect(res.json).toHaveBeenCalledWith({ message: 'Unauthorized' });
	});
});