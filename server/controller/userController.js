const userModel = require("../model/userModel");

class Controller {
  // GET ALL USER
  static async getAllUser(req, res, next) {
    const dataUser = await userModel.find();
    res.status(200).json({
      message: "Berhasil Menampilkan Data Users",
      data: dataUser,
    });
    try {
    } catch (error) {
      next(error);
    }
  }

  // GET ONE USER
  static async getOneUser(req, res, next) {
    try {
      const { id } = req.params;
      const dataUser = await userModel.findOne({ _id: id });

      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }

      res.status(200).json({
        message: "Berhasil Menampilkan Data User",
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE USER
  static async createUser(req, res, next) {
    try {
      const {
        username,
        email,
        password,
        phoneNumber,
        photoUser,
        role,
        address,
      } = req.body;

      // VALIDASI USERNAME
      const dataUsername = await userModel.findOne({ username: username });
      if (dataUsername) {
        throw { name: "Username Sudah Terdaftar" };
      }
      // VALIDASI EMAIL
      const dataUserName = await userModel.findOne({ email: email });
      if (dataUserName) {
        throw { name: "Email Sudah Terdaftar" };
      }
      // VALIDASI PHONENUMBER
      const dataPhoneNumber = await userModel.findOne({
        phoneNumber: phoneNumber,
      });
      if (dataPhoneNumber) {
        throw { name: "Phone Number Sudah Terdaftar" };
      }

      const dataNewUser = await userModel({
        username,
        email,
        password,
        phoneNumber,
        photoUser,
        role,
        address,
      });

      const data = await dataNewUser.save();

      res.status(201).json({
        message: "Berhasil Membuat Data User Baru",
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE USER
  static async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const {
        username,
        email,
        password,
        phoneNumber,
        photoUser,
        role,
        address,
      } = req.body;

      // VALIDASI ID
      const dataUser = await userModel.findOne({ _id: id });
      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }
      // VALIDASI USERNAME
      const dataUsername = await userModel.findOne({ username: username });
      if (dataUsername) {
        throw { name: "Username Sudah Terdaftar" };
      }
      // VALIDASI EMAIL
      const dataUserName = await userModel.findOne({ email: email });
      if (dataUserName) {
        throw { name: "Email Sudah Terdaftar" };
      }
      // VALIDASI PHONENUMBER
      const dataPhoneNumber = await userModel.findOne({
        phoneNumber: phoneNumber,
      });
      if (dataPhoneNumber) {
        throw { name: "Phone Number Sudah Terdaftar" };
      }

      const data = await userModel.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            username,
            email,
            password,
            phoneNumber,
            photoUser,
            role,
            address,
          },
        }
      );

      res.status(200).json({
        message: "Berhasil Memperbaharui Data User",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE USER
  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const dataUser = await userModel.findOneAndDelete({ _id: id });
      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }
      res.status(200).json({
        message: "Berhasil Menghapus Data User",
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = Controller;
