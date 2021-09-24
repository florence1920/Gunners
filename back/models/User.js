import  mongoose  from "mongoose";

//스키마 생성
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    id:{
        type: String,
        trim: true,
        unique:1
    },
    password:{
        type: String,
        maxlength:50
    }
})

//모델로 감싸주기 ! 이름 지정해주고 스키마 넣어주고
const User = mongoose.model('User', UserSchema);

export default User;