import mongoose from 'mongoose';

//스키마 생성 
const LeagueSchema = mongoose.Schema({
    teamName:{
        type: String,
        required: true, 
        unique: true
    },
    pl:{
        type: Number, 
    },
    gd:{
        type: Number, 
    },
    pts:{
        type: Number, 
    },

})

const League = mongoose.model('League', LeagueSchema);

export default League;