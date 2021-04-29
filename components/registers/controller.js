const registerModel = require("./model");
const registerDto = require("./dto");

module.exports = {
  async postRegister(req, res) {
    const register = await registerModel.postRegister({
      fullName: req.body.name,
      email: req.body.email,
      product: req.body.product,
    });
    return res.status(200).json(registerDto.single(register));
  },
};
