import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    role: {
        validate: {
            validator: (value: string) => {
                return ['admin', 'founder'].includes(value);
            },
            message: 'Invalid role',
        },
        type: String,
        required: true,
    },
});

const UserModel = mongoose.models.User || mongoose.model('User', schema);

export { UserModel };
