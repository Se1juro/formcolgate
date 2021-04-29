const registerDao = require("./dao");

module.exports = {
  async postRegister(register) {
    return registerDao.postRegister(register);
  },
  async getRegisters() {
    return registerDao.getRegisters();
  },
};
