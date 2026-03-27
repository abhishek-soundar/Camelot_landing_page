import { Schema, model, models } from "mongoose";

const WaitlistSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  role: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Waitlist = models.Waitlist || model("Waitlist", WaitlistSchema);

export default Waitlist;
