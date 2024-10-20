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

const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;
  if (!req.body) {
    res.statusCode = 404;
    res.write(`Request ${req.body} does not contain required fields`);
    res.end();
  } else {
    res.statusCode = 201;
    users.push(user);
    res.send(user);
  }
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
