const express = require('express');
const app = express();
const port = 3001;
const path = require('path')
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');



app.set('view engine', 'ejs')
app.set('veiws', path.join(__dirname,'views'))

//POST 요청에서 req.body로 정보를 얻으려면 입력해야하는 코드
app.use(express.urlencoded({ extended: true }))
//json으로 부터 정보를 얻으려면 입력해야하는 코드
app.use(express.json())
app.use(methodOverride('_method'));

let comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment: 'Lol thats so funny'
    },
    {   
        id : uuid(),
        username:'Skyler',
        comment:'I like to go bird watching with my doggy'
    },
    {
        id : uuid(),
        username:'Sk8erboi',
        comment:'plz delete your account, todd'
    },
    {
        id : uuid(),
        username:'onlysaywoof',
        comment:'WOOF WOOF WOOF'
    }
]

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/tacos',(req,res)=>{
    res.send('Order Received from GET response!')
})

app.post('/tacos',(req,res)=>{
    //html파일의 input name값과 같은 이름이어야 함
    const {tacos, qty} = req.body
    res.send(`Here is your ${qty} ${tacos} Taco`)
})


//Comments CRUD!
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

//comments Create!!
//comments Create!!
//comments Create!!
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
//new.ejs의 폼테그에서 버튼을 누르면 실행되는 코드
app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push({username, comment, id:uuid() })
    //post요청을 보내고 다시 comments페이지로 돌아오게 하는 코드
    res.redirect('/comments')
})
//comments Create!!
//comments Create!!
//comments Create!!



//comments Show!!!
//comments Show!!!
//comments Show!!! 
app.get('/comments/:id',(req,res)=>{ // "/"를 안쳐서 에러가 났었다
    const {id} = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/details', {comment}) // comment 를 쳐서 에러가 났었다
})
//comments show!!!
//comments Show!!!
//comments Show!!!

//comments Update!!!
//comments Update!!!
//comments Update!!!
app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})
//comments Update!!!
//comments Update!!!
//comments Update!!!

//comments Delete!!!
app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c=>c.id !== id); //해당 아이디의 댓글을 제외한 다른 댓글들의 배열을 만든는 것
    res.redirect('/comments');
})


app.listen(port,(req,res)=>{
    console.log(`Listening on port ${port}!`);
})