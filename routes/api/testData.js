const express = require('express');
const router = express.Router();
const app = express();

// JSON not read by default - using instead of body parser
app.use(express.json());

// Data Models
const TestData = require('../../models/TestData');

// @route  GET api/items
// @desc   Get All Items
// @access Public
// already starting at /items/api
router.get('/', (req, res) => {
  //?
  TestData.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
  //   console.log(items);
});

// @route  POST api/items
// @desc   Post an Item
// @access Public
// already starting at /items/api
router.post('/', (req, res) => {
  //? only name is required based on how Schema was designed
  const newTestData = new TestData({
    name: req.body.name,
    comment: req.body.comment,
    date: req.body.date
  });
  console.log(newTestData);
  newTestData.save().then(testData => res.json(testData));
});

// @route  DELETE api/items/:id
// @desc   Deleta an Item
// @access Public
// already starting at /items/api
router.delete('/:id', (req, res) => {
  TestData.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
