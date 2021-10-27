const name = "omkar";

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

// FIRST APPROCH
// module.exports.name = name;
// module.exports.add = add;
// module.exports.sub = sub;

// SECOND APPROCH
module.exports = { add, sub, name };
