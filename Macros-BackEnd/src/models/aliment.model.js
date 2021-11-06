const mongoose = require('mongoose');
const {Schema} = mongoose;

let AlimentoSchema = new Schema({
    AlimentName:String,
    Calories:String,
    Fat:Number,
    Carbohidrats:Number,
    Protein:Number,
    Day:String,
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
});

module.exports = mongoose.model('Alimentos',AlimentoSchema);