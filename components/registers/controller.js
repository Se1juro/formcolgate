const registerModel = require("./model");
const registerDto = require("./dto");
const json2xls = require("json2xls");
const fs = require("fs");
const path = require("path");
module.exports = {
  async postRegister(req, res) {
    const register = await registerModel.postRegister({
      fullName: req.body.fullName,
      email: req.body.email,
      product: req.body.product,
    });
    return res.status(200).json(registerDto.single(register));
  },
  async getExcel(req, res) {
    try {
      const data = [];
      const registers = await registerModel.getRegisters();
      if (!registers.length)
        return res.status(400).json({ message: "No hay datos registrados" });
      const registersParsed = registerDto.multiple(registers);
      registersParsed.map((register) =>
        data.push({
          nombre: register.fullName,
          email: register.email,
          lanzamiento: register.product,
        })
      );
      let xls = json2xls(data, {
        fields: {
          nombre: "string",
          email: "string",
          lanzamiento: "string",
        },
      });
      fs.writeFileSync(path.join(__dirname, "informe.xlsx"), xls, "binary");
      const excel = path.join(__dirname, "informe.xlsx");
      fs.readFile(excel, (err, content) => {
        res.writeHead(200, {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": 'attachment;filename="informe.xlsx"',
        });
        res.end(content);
      });
    } catch (error) {
      return error;
    }
  },
  async getRegisters(req, res) {
    const registers = await registerModel.getRegisters();
    return res.status(200).json(registerDto.multiple(registers));
  },
};
