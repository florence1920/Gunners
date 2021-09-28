import express from 'express';
const app = express();
const port = 3000;
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js'

//application/json 타입 읽을 수 있도록
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cors
app.use(cors());

//몽구스 DB 연결
mongoose.connect('mongodb+srv://admin:admin@cluster0.snwm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(()=> { console.log('MongoDB Connected');})
  .catch(err => {console.log(err);})

  //port 연결 되었는지 확인 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//회원가입 
app.post('/register', (req,res)=>{
    //회원 가입 할 때 필요한 정보를 client에서 가져옴
    //데이터 베이스에 투입 !
    const user = new User(req.body);
    //몽고 db에 저장
    user.save((err,userInfo)=>{
      if(err) return res.json({success:false,err});
      return res.status(200).json({
        success:true
      })
    })
})



