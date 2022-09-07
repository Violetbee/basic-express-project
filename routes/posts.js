import express from 'express';
const router = express.Router();

const logger = (req, res, next) => {
  let newUrl = req.originalUrl;
  console.log(`You are at the ${newUrl}`);
  next();
};
router.get('/', logger, (req, res) => {
  res.send('this router will render posts');
});

router
  .use(logger)
  .route('/:id')
  .get((req, res) => {
    const paramId = req.params.id;
    res.send(`Get User with ID ${paramId}`);
  })
  .put((req, res) => {
    res.send(`Update User with ID ${paramId}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${paramId}`);
  });

//router.route ile aynı şeyi yapıyor.
// router.get('/:id', (req, res) => {
//   const paramId = req.params.id;
//   res.send(`Get User with ID ${paramId}`);
// });
// router.put('/:id', (req, res) => {
//   const paramId = req.params.id;
//   res.send(`Update User with ID ${paramId}`);
// });
// router.delete('/:id', (req, res) => {
//   const paramId = req.params.id;
//   res.send(`Delete User with ID ${paramId}`);
// });

router.get('/author', (req, res) => {
  res.send('this is author page');
});

export default router;
