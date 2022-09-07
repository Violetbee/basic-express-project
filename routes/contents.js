import express from 'express';
const router = express.Router();

//express.Router() = we are able to chain nested routes with this method
router.get('/', (req, res) => {
  res.send('This router is the main page of Contents Router');
});

//router.route() = it gives us to chain router actions
router
  .route('/:contentId')
  .get((req, res) => {
    res.send(`This router gets contents with ${req.params.contentId}`);
  })
  .put((req, res) => {
    res.send(`This router updates contents with ${req.params.contentId}`);
  })
  .delete((req, res) => {
    res.send(`This router deletes contents with ${req.params.contentId}`);
  });

export default router;
