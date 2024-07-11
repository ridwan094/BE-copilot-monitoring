const userService = require('../services/userBridevService');

class UserBridevController {
  async createUser(req, res) {
    try {
      let errorResults = [];
      if (req.headers['insert-type'] === 'bulk-excel') {
        const filePath = req.file.path;
        const excelData = await userService.readExcel(filePath);

        for (let i = 0; i < excelData.length; i++) {
          try {
            await userService.createUser(excelData[i]);
          } catch (error) {
            errorResults.push(`Error row ${i + 1}: ${error.message}`);
          }
        }

        if (errorResults.length > 0) {
          res.status(400).json({ errors: errorResults });
        } else {
          res.status(201).json({ message: 'All users inserted successfully' });
        }
      } else {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUsers(req, res) {
    try {
      const users = await userBridevService.getUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userBridevService.getUserById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserByEmailWork(req, res) {
    try {
      const user = await userBridevService.getUserByEmailWork(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserByEmailBrilian(req, res) {
    try {
      const user = await userBridevService.getUserByEmailBrilian(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const user = await userBridevService.updateUser(req.params.id, req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      await userBridevService.deleteUser(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserBridevController();
