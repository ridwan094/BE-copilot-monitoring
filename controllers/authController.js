const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserRepository = require('../repositories/userRepository');

exports.register = async (req, res) => {
  const { email, password, role_id } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const user = await UserRepository.createUser({ email, password: hashedPassword, role_id });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserRepository.findUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user.id, role_id: user.role_id, email: user.email }, process.env.JWT_SECRET);
    await UserRepository.updateLoginStatus(user.id, true);
    res.json({ "token" : token, "userInfo" : user });
  } catch (error) {
    res.status(500).json({ message: error.message, "error" : "have an error" });
  }
};

exports.logout = async (req, res) => {
  const userId = req.user.id;
  try {
    await UserRepository.updateLoginStatus(userId, false);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
