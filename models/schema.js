import mongoose from 'mongoose'
const userData = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    createdOn: {
        type: Date,
        default: Date.now(),
    }
});
//? now create model
const userModel = mongoose.model('user', userData);

export default userModel;