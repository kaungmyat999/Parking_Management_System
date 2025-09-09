const assert = require('assert');
const userModule = require('../user');

describe('User Module', () => {
    it('should create a user', () => {
        const user = userModule.createUser('John Doe', 'john@example.com');
        assert.strictEqual(user.name, 'John Doe');
        assert.strictEqual(user.email, 'john@example.com');
    });

    it('should retrieve a user', () => {
        const user = userModule.getUser(1);
        assert.strictEqual(user.id, 1);
    });

    it('should update a user', () => {
        const updatedUser = userModule.updateUser(1, { name: 'Jane Doe' });
        assert.strictEqual(updatedUser.name, 'Jane Doe');
    });
});