const mongoose = require('mongoose');

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    companyName: {
        type: String,
        required: false,
      },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);