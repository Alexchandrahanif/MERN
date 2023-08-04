const { verifyAccessToken } = require("../helper/helper");
const { User } = require("../models/index");

const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    let payload = verifyAccessToken(authorization);
    let dataUser = await User.findOne({
      where: {
        id: payload.id,
      },
    });

    if (!dataUser) {
      throw { name: "Maaf Kamu Tidak Memiliki Hak Akses" };
    }

    // LOGIC FORCE LOGOUT
    // const forceLogout =
    //   !dataUser.statusActive || dataUser.flagDeleted ? true : false;

    // if (forceLogout) {
    //   throw { name: "Maaf Kamu Tidak Memiliki Hak Akses" };
    // }

    req.user = {
      id: dataUser.id,
      email: dataUser.email,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
