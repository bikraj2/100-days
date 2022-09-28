const getjobs = (req, res) => {
  res.send('all jobs');
};
const getjob = (req, res) => {
  res.send('jobs');
};
const createjobs = (req, res) => {
  res.send('create jobs');
};
const updatejobs = (req, res) => {
  res.send('updatejobs');
};
const deletejobs = (req, res) => {
  res.send('delete jobs');
};
module.exports = {
  getjob,
  getjobs,
  createjobs,
  updatejobs,
  deletejobs,
};
