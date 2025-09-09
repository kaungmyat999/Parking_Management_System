class AuthController {
    constructor(userService) {
        this.userService = userService;
    }

    async register(req, res) {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json({ message: 'User registered successfully', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const token = await this.userService.authenticateUser(email, password);
            res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    async getProfile(req, res) {
        try {
            const user = await this.userService.getUserById(req.user.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async updateProfile(req, res) {
        try {
            const updatedUser = await this.userService.updateUser(req.user.id, req.body);
            res.status(200).json({ message: 'Profile updated successfully', updatedUser });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const deleted = await this.userService.deleteUser(req.user.id);
            if (!deleted) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateUserRole(req, res) {
        try {
            const { userId, role } = req.body;
            const updatedUser = await this.userService.updateUserRole(userId, role);
            res.status(200).json({ message: 'User role updated successfully', updatedUser });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = AuthController;