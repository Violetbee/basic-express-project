import express from 'express';
import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';
import contentRouter from './routes/contents.js';

const app = express();

const port = process.env.PORT || 3000;

//MIDDLEWARES
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//O sayfada kendinden sonra gelen tüm Route'larda çalışır
// app.use(logger);

//Sadece belirlenen Route'da çalışır
// app.use('/',logger,(req,res)=>{
//   console.log('this is the home page');
// })

// app.use('/users', (req, res, next) => {
//   res.send('users middleware working');
// });

//ROUTES

// USE ve GET arasındaki fark; USE ile Nested routes oluşturabiliyoruz.
app.use('/users', userRouter);

app.use('/posts', postRouter);

app.use('/contents', contentRouter);

//APP LISTEN
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
