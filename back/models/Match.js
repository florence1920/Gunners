import mongoose from 'mongoose';

//스키마 생성 
const MatchSchema = mongoose.Schema({
    matchData:{
        type: Date,
    },
    ground:{
        type: String, 
    },
    opponent:{
        type: String, 
    },
    leagueName:{
        type: String, 
    },

})

const Match = mongoose.model('Match', MatchSchema);

export default Match;