import mongoose from 'mongoose';

const schema = new mongoose.Schema({}, { strict: false });

const FounderModel = mongoose.models.founder || mongoose.model('founder', schema);

export { FounderModel };
