const userRepository = require('../repositories/userBridevRepository');

class UserBridevService {
  async readExcel(filePath) {
    try {
      const workbook = xlsx.readFile(filePath);
      
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      
      const excelData = xlsx.utils.sheet_to_json(worksheet);
      
      fs.unlinkSync(filePath);
      
      const formattedData = excelData.map(row => ({
        name: row['Nama'],
        email_work: row['Email Work'],
        email_brilian: row['Email Brilian'],
      }));

      return formattedData;
    } catch (error) {
      throw error;
    }
  }
  
  async createUser(user) {
    return await userRepository.create(user);
  }

  async getUsers() {
    return await userRepository.findAll();
  }

  async getUserById(id) {
    return await userRepository.findById(id);
  }

  async getUserByEmailWork(email_work) {
    return await userRepository.findByEmailWork(email_work);
  }

  async getUserByEmailBrilian(email_brilian) {
    return await userRepository.findByEmailBrilian(email_brilian);
  }

  async updateUser(id, user) {
    return await userRepository.update(id, user);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }
}

module.exports = new UserBridevService();
