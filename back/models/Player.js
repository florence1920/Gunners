import  mongoose  from "mongoose";

//스키마 생성
const PlayerSchema = mongoose.Schema({
    playerName:{
        type: String,
    },
    backNumber:{
        type: Number,
    },
    position:{
        kPos:{
            type: String,
        },
        ePos:{
            type: String,
        }
    },
    nation:{
        type:String
    },
    // stats:[
    //     {
    //         season:{
    //             type:Number
    //         },
    //         goal:{
    //             type:Number
    //         },
    //         assist:{
    //             type:Number
    //         },
    //         offside:{
    //             type:Number
    //         },
    //         card:{
    //             yellow:{
    //                 type:Number
    //             },
    //             red:{
    //                 type:Number
    //             }
    //         }
    //     },
        
    // ]
})

//모델로 감싸주기 ! 이름 지정해주고 스키마 넣어주고
const Player = mongoose.model('Player', PlayerSchema);

export default Player;