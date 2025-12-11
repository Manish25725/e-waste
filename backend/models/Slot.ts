import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
  date: { type: Number, required: true }, // Keeping simple number day for demo (1-31)
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Available', 'Booked', 'Unavailable'], 
    default: 'Available' 
  },
  bookedBy: { type: String, default: null }, // Could be a User ObjectId ref in future
}, {
  timestamps: true
});

// Transform _id to id for frontend compatibility
slotSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  }
});

const Slot = mongoose.model('Slot', slotSchema);
export default Slot;