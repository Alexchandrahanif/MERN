const joi = require("joi");

const tambahDataValidation = (data) => {
  const userSchema = joi.object({
    username: joi.string().joi.required(),
    email: joi.string().joi.required(),
    password: joi.string().joi.required(),
    phoneNumber: joi.string().joi.required(),
    photoUser: joi.string(),
    role: joi.string(),
    address: joi.string(),
  });

  return userSchema.validate(data);
};

module.exports.tambahDataValidation = tambahDataValidation;
