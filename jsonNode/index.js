const fs = require("fs");

const bioData = {
  name: "Omkar",
  age: "28",
  email: "omkar@test.com",
};

// console.log(bioData.email);
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log(err);
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  //   console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});

// const objData = JSON.parse(jsonData);

// console.log(objData);

// TASKS
// 1. CONVERT TO JSON  DONE
// 2. ADD TO ANOTHER FILE  done
// 3. READ FILE done
// 4. AGAIN CONVERT FROM JSON TO OBJECT (REVERSE)
// 5. CONSOLING...
