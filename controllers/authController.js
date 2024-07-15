const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

class AuthController {
  async register(req, res) {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await userRepository.create({ email, password: hashedPassword });

    res.status(201).json({ user });
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await userRepository.findByEmail(email);
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    await userRepository.updateIsLogin(user.id, true);

    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });

    res.status(200).json({ token });
  }

  async logout(req, res) {
    const userId = req.userId;

    await userRepository.updateIsLogin(userId, false);

    res.status(200).json({ message: 'Logged out successfully' });
  }
}

module.exports = new AuthController();
