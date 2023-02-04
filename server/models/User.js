const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    googleId: String,
  },
  { versionKey: false, timestamps: true }
);

mongoose.model('User', userSchema);
