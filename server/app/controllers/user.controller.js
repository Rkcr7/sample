exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send({
    username: user.username,
    email: user.email,
    roles: user.roles,
    display_name: user.display_name,
  });
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.hrBoard = (req, res) => {
  res.status(200).send("hR Content.");
};
