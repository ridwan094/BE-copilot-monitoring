const userBridevService = require('../services/userBridevService');
const validator = require('validator');

class UserBridevController {
  async createUser(req, res) {
    try {
      let errorResults = [];
      if (req.headers['insert-type'] === 'bulk-excel') {
        const filePath = req.file.path;
        const excelData = await userBridevService.readExcel(filePath);
  
        for (let i = 0; i < excelData.length; i++) {
          try {
            const { name, email_work, email_brilian } = excelData[i];
  
            if (!name) {
              errorResults.push(`Error row ${i + 1}: Name is required`);
              continue;
            }
  
            if (!email_work) {
              errorResults.push(`Error row ${i + 1}: Email Work is required`);
              continue;
            }
  
            if (!validator.isEmail(email_work)) {
              errorResults.push(`Error row ${i + 1}: Invalid work email`);
              continue;
            }
  
            if (!email_brilian) {
              errorResults.push(`Error row ${i + 1}: Email Brilian is required`);
              continue;
            }
  
            if (!validator.isEmail(email_brilian)) {
              errorResults.push(`Error row ${i + 1}: Invalid brilian email`);
              continue;
            }

            const existing_email_work = await userBridevService.getUserByEmailWork(email_work);
            const existing_email_brilian = await userBridevService.getUserByEmailBrilian(email_brilian);
            if(existing_email_brilian || existing_email_work) {
              errorResults.push(`Error row ${i + 1}: Email Work or Email Brilian already exists`);
            } 

            await userBridevService.createUser(excelData[i]);
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
        const { name, email_work, email_brilian } = req.body;
  
        if (!name) {
          return res.status(400).json({ message: "Name is required" });
        }
  
        if (!email_work) {
          return res.status(400).json({ message: "Email Work is required" });
        }
  
        if (!validator.isEmail(email_work)) {
          return res.status(400).json({ message: "Invalid work email" });
        }
  
        if (!email_brilian) {
          return res.status(400).json({ message: "Email Brilian is required" });
        }
  
        if (!validator.isEmail(email_brilian)) {
          return res.status(400).json({ message: "Invalid brilian email" });
        }
        
        const existing_email_work = await userBridevService.getUserByEmailWork(email_work);
        const existing_email_brilian = await userBridevService.getUserByEmailBrilian(email_brilian);
        if(existing_email_brilian || existing_email_work) {
          return res.status(400).json({ message: "Email Brilian or Email Work is already Exist" });
        } 
  
        const user = await userBridevService.createUser(req.body);
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
      const user = await userBridevService.getUserByEmailWork(req.params.email_work);
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
    console.log(req);
    try {
      const user = await userBridevService.getUserByEmailBrilian(req.params.email_brilian);
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
      const { name, email_work, email_brilian, status } = req.body;
      
      if (!name) {
        return res.status(400).json({ message: "Name is required" });
      }
  
      if (!email_work) {
        return res.status(400).json({ message: "Email Work is required" });
      }
  
      if (!validator.isEmail(email_work)) {
        return res.status(400).json({ message: "Invalid work email" });
      }
  
      if (!email_brilian) {
        return res.status(400).json({ message: "Email Brilian is required" });
      }
  
      if (!validator.isEmail(email_brilian)) {
        return res.status(400).json({ message: "Invalid brilian email" });
      }
  
      if (!validator.isInt(status.toString())) {
        return res.status(400).json({ message: "Status must be an integer" });
      }
  
      const existingUser = await userBridevService.getUserById(req.params.id);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const existingEmailWork = await userBridevService.getUserByEmailWork(email_work);
      const existingEmailBrilian = await userBridevService.getUserByEmailBrilian(email_brilian);
  
      if (existingEmailWork && existingEmailWork.id !== existingUser.id) {
        return res.status(400).json({ message: "Email Work already exists" });
      }
  
      if (existingEmailBrilian && existingEmailBrilian.id !== existingUser.id) {
        return res.status(400).json({ message: "Email Brilian already exists" });
      }
  
      const updatedUser = await userBridevService.updateUser(req.params.id, req.body);
      res.status(200).json({ message: "Data updated successfully", data: updatedUser });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const existingUser = await userBridevService.getUserById(req.params.id);
      if (!existingUser) {
        return res.status(404).json({ message: "User Id not found" });
      }
      await userBridevService.deleteUser(req.params.id);
      res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserBridevController();
