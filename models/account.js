const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
        
    }, 
    balance: {
        type: mongoose.Types.Decimal128,
        default:'100'
    }
}, {
    timestamps:true
})

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;