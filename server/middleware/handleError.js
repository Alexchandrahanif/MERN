const handleError = (err, req, res, next) => {
  console.log(err);
  let code = 500;
  let message = "Internal Server Error";

  if (
    err.name === "SequelizeValidationError" ||
    err.name == "SequelizeUniqueConstraintError"
  ) {
    code = 400;
    message = [];
    err.errors.forEach((el) => {
      message.push(el.message);
    });
  } else if (err.name === "Email/Password Salah") {
    code = 401;
    message = "Email/Password Salah";
  } else if (err.name === "Invalid authorization") {
    code = 401;
    message = "Akses Token Tidak Ada";
  }
  //
  else if (err.name === "Mohon Masukkan Password") {
    code = 400;
    message = "Mohon Masukkan Password";
  } else if (err.name === "Mohon Masukkan Email") {
    code = 400;
    message = "Mohon Masukkan Email";
  } else if (err.name === "Mohon Masukkan Nomor Telepon") {
    code = 400;
    message = "Mohon Masukkan Nomor Telepon";
  } else if (err.name === "Nomor Telepon Tidak Terdaftar") {
    code = 400;
    message = "Nomor Telepon Tidak Terdaftar";
  } else if (err.name === "Nomor Telepon Sudah Terdaftar") {
    code = 400;
    message = "Nomor Telepon Sudah Terdaftar";
  }
  //
  else if (err.name === "JsonWebTokenError") {
    code = 401;
    message = "Maaf Token Tidak Sesuai";
  } else if (err.name === "Maaf Kamu Tidak Memiliki Hak Akses") {
    code = 401;
    message = "Maaf Kamu Tidak Memiliki Hak Akses";
  } else if (err.name === "Forbidden") {
    code = 403;
    message = "Maaf Kamu Tidak Memiliki Hak Akses";
  }
  res.status(code).json({
    statusCode: code,
    message: message,
  });
};

module.exports = handleError;
