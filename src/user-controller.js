const users = [
  { id: 0, name: "kek" },
  { id: 1, name: "cheburek" },
  { id: 2, name: "cheburek321" },
];

const getUsers = (req, res) => {
  let { id } = req.params;
  if (id) {
    const indexOfUpdatingUser = users.findIndex(
      (item) => item.id === Number(id)
    );
    if (indexOfUpdatingUser !== -1) {
      res.send(users[indexOfUpdatingUser]);
      res.end();
    } else {
      res.statusCode = 404;
      res.write(`User with id: ${id} not found`);
      res.end();
    }
  } else {
    res.send(users);
  }
};

const getUsersOld = (req, res) => {
  if (req.params.id) {
    return res.send(users.find((user) => user.id == req.params.id));
  } else {
    const indexOfUser = users.findIndex((item) => item.id);
    if (indexOfUser == -1) {
      res.statusCode = 404;
      res.end();
      res.write(`User with id: ${req.body.id} not found`);
    }
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
