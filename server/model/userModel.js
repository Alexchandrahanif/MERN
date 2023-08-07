const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // username
  username: {
    type: String,
    required: true,
  },

  // email
  email: {
    type: String,
    required: true,
  },

  // password
  password: {
    type: String,
    required: true,
  },

  // phoneNumber
  phoneNumber: {
    type: String,
    required: true,
  },

  // photoUser
  photoUser: {
    type: String,
  },

  // address
  role: {
    type: String,
    required: true,
    enum: {
      values: ["Admin", "Customer", "Super Admin", "Client"],
    },
  },

  address: {
    type: String,
    required: true,
  },
});

// userSchema.set("toJSON", {
//   virtuals: true,
//   versionkey: false,
//   transform: function (doc, ret) {
//     delete ret._id;
//   },
// });

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});
module.exports = mongoose.model("users", userSchema);
