const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    googleId: String,
    credits: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

mongoose.model('User', userSchema);
