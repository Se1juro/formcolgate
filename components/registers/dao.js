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
};
