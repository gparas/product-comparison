const Category = require('../model/category');

exports.addCategory = (req, res) => {
  const category = new Category({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
  category
    .save()
    .then(() => {
      res.send('category added successfully');
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.showCategory = (req, res, next) => {
  Category.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.status(400).send(err));
};

exports.singleCategory = (req, res) => {
  Category.findById(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => res.status(400).send(err));
};
