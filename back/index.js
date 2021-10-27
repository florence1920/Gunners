import express from 'express';
const app = express();
import bcrypt from 'bcrypt';
const port = 3000;
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/User.js'
import League from './models/League.js'
import Match from './models/Match.js'
import Player from './models/Player.js'
import { newToken } from './utils/auth.js';

//application/json 타입 읽을 수 있도록
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cors
app.use(cors());

//몽구스 DB 연결

mongoose.connect('mongodb+srv://admin:admin@cluster0.471li.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(()=> { console.log('MongoDB Connected');})
  .catch(err => {console.log(err);})

  //port 연결 되었는지 확인 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//회원
//1 회원 가입
app.post('/register', (req,res)=>{
    //회원 가입 할 때 필요한 정보를 client에서 가져옴
    //데이터 베이스에 투입 !
    //const user = new User(req.body);
    const user = new User(req.body);
    bcrypt.hash(user.password, 10, (error, hashedPassword)=>{
      if(error){
        console.log(error);
        return res.status(500).json({
          error
        });
      }else{
        const newUser = new User({
          id : user.id,
          password: hashedPassword,
          userName : user.userName
        });
        newUser.save((error, saved) =>{
          if(error){
            console.log(error);
            res.status(409).send(error);
          }else{
            console.log(saved);
            res.send(saved)
          }
        });
      }
    })
    
})
//2 로그인
app.post('/login', (req,res)=>{
  console.log('back');
  User.findOne({
    id: req.body.id
  })
  .then(user =>{
    console.log(user);
    if(!user){
      res.status(401).send('Authentication failed. User not found');
    }
    bcrypt.compare(req.body.password, user.password, (error, result)=>{
      if(error){
        res.status(500).send('Internal Server Error');
      }
      if (result) {
        // create token with user info
        const token = newToken(user);

        // current logged-in user
        const loggedInUser = {
          id: user.id,
        };

        // return the information including token as JSON
        res.status(200).json({
          success: true,
          user: loggedInUser,
          message: 'Login Success',
          token: token,
        });
      } else {
        res.status(401).json('Authentication failed. Wrong password.');
      }
    })

  })
})

app.get('/' ,async(req,res)=>{
  try{
    const user = await User.find();
    console.log(user)    ;
    res.json({
      user
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

//admin
//league
app.post('/admin/league', (req,res)=>{
  const league = new League(req.body);
  league.save((err)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
})

app.get('/admin/league' ,async(req,res)=>{
  try{
    const league = await League.find({});
    console.log(league);
    res.json({
      league
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

//matches
app.post('/admin/matches', (req,res)=>{
  const match = new Match(req.body);
  match.save((err)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
})

app.get('/admin/matches' ,async(req,res)=>{
  try{
    const match = await Match.find({});
    res.json({
      match
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

//player
app.post('/admin/player', (req,res)=>{
  const player = new Player(req.body);
  console.log(player);
  player.save((err)=>{
    if(err) return res.json({success:false,err});
    return res.status(200).json({
      success:true
    })
  })
})

app.get('/admin/player' ,async(req,res)=>{
  try{
    const player = await Player.find({});
    res.json({
      player
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

//특정 선수 
app.get('/admin/player/edit/:player' ,async(req,res)=>{
  try{
    const player = await Player.findOne({
      playerName : req.params.player
    });
    res.json({
      player
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})

//특정선수 데이터 수정
app.put('/admin/player/edit/:player' ,async(req,res)=>{
  try{
    const updatePlayer = await Player.findOneAndUpdate(
      {playerName : req.params.player},
      req.body
    )
    res.json({
      updatePlayer
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})