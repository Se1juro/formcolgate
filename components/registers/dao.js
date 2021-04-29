const registerSchema = require("./schema");

module.exports = {
  async postRegister(register) {
    return new Promise((resolve, reject) => {
      const newRegister = new registerSchema(register);
      newRegister.save((err, doc) => {
        if (err) reject(err);
        return resolve(doc);
      });
    });
  },
  async getRegisters() {
    return new Promise((resolve, reject) => {
      registerSchema.find({}).exec((err, doc) => {
        if (err) reject(err);
        return resolve(doc);
      });
    });
  },
};
