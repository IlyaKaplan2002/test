// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // data = JSON.stringify(users);

// // // console.log(data);

// // let markup = "";

// // for (const user of users) {
// //   markup += `<tr><td>${user.name}</td><td>${user.email}</td></tr>`;
// // }

// // document.querySelector(".testTable").innerHTML = markup;

// // function readFile(file, callback) {
// //   const rawFile = new XMLHttpRequest();
// //   rawFile.overrideMimeType("application/json");
// //   rawFile.open("GET", file, true);
// //   rawFile.onreadystatechange = function () {
// //     if (rawFile.readyState === 4 && rawFile.status == "200") {
// //       callback(rawFile.responseText);
// //     }
// //   };
// //   rawFile.send(null);
// // }

// // const showData = (text) => console.log(JSON.parse(text));
// // const changeData = (text) => (text = "");

// // readFile("./data.json", showData);

// // fetch("./data.json")
// //   .then((response) => response.json())
// //   .then((users) => console.log(users))
// // .catch((error) => console.log(error));
// // const options = {
// //   method: "POST",
// //   body: JSON.stringify(PostToAdd),
// //   headers: {
// //     "Content-Type": "application/json; charset=UTF-8",
// //   },
// // };

// const options = (data) => {
//   const config = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };

//   return config;
// };

// console.log(options(users));

// // console.log(JSON.stringify(users));

// fetch("./test.json", options(users))
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

const postToAdd = {
  author: "Mango",
  body: "CRUD is awesome",
};

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch("./test.json", options)
  .then((response) => response.json())
  .then((post) => console.log(post))
  .catch((error) => console.log(error));
