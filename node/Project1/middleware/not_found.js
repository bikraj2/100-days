const notFound = (req, res) => {
  res.status(404).send("<h1>Not found</h1>");
};

module.exports = notFound