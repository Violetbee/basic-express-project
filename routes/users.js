import express from 'express';
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.status(200).json(users);
  })
  .post((req, res) => {
    if (req.body.firstName && req.body.age) {
      users.push({ name: req.body.firstName, age: parseInt(req.body.age) });
      res.redirect(`/users/${users.length - 1}`);
    } else {
      console.log('error');
      res.render('users/new', {
        firstName: 'Boş geçilemez',
        age: 'Lütfen doldurunuz',
      });
    }
  })
  .put((req, res) => {
    res.send('The value has been changed.');
  })
  .delete((req, res) => {
    res.send('The value has been deleted');
  });

router.get('/new', (req, res) => {
  res.render('users/new');
});

const users = [
  {
    name: 'çağlar',
    age: 26,
  },
  {
    name: 'nazlı',
    age: 2,
  },
];
const getUser = (id) => {
  for (const user in users) {
    if (user.slice(-1) == id) {
      return users[user];
    }
  }
};

router
  .route('/:userId')
  .get((req, res) => {
    res
      .status(200)
      // .send(`You are successfully get the user ${req.params.userId}`);
      .send(req.user);
  })
  .put((req, res) => {
    res
      .status(200)
      .send(`You are successfully updated the user ${req.params.userId}`);
  })
  .delete((req, res) => {
    res
      .status(200)
      .send(`You are successfully deleted the user ${req.params.userId}`);
  });

router.param('userId', (req, res, next, id) => {
  req.user = getUser(id);
  next();
});

export default router;
