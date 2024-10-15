const users = [
  { id: 1, name: "kek" },
  { id: 2, name: "cheburek" },
];

const getUsers = (req, res) => {
  if (req.params.id) {
    return res.send(users.find((user) => user.id == req.params.id));
  }
  res.send(users);
};

const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push(user);
  res.send(user);
};

const updateUser = (req, res) => {
  const body = req.body;
  const indexOfUpdatingUser = users.findIndex((item) => item.id === body.id);
  if (indexOfUpdatingUser !== -1) {
    users[indexOfUpdatingUser] = { ...users[indexOfUpdatingUser], ...body };
    res.send(users[indexOfUpdatingUser]);
  } else {
    res.statusCode = 404;
    res.write(`User with id: ${req.body.id} not found`);
    res.end();
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
};
