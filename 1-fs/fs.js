//make functions that grabs the data

//make it interactive with the terminal, find a way to submit commands 
//and create a variable with input command argv


//need pets.json file to export and require in fs.js
// fs.js

let fs = require("fs");
let selection = process.argv[2];
let readSelection = process.argv[3];
const { exit, argv } = require("node:process");

if (argv) {
  read();
}

function read() {
  if (!selection) {
    console.error("Usage: node fs.js [read | create | update | destroy]");
    exit(1);
  } else {
    fs.readFile("../pets.json", "utf-8", function (error, data) {
      if (error) {
        console.error(error);
      } else {
        let parsedData = JSON.parse(data);

        for (let i = 0; i < parsedData.length; i++) {
          if (
            selection === "read" &&
            i.toString() === "0" &&
            readSelection === "0"
          ) {
            console.log(parsedData[0]);
          } else if (
            selection === "read" &&
            i.toString() === "1" &&
            readSelection === "1"
          ) {
            console.log(parsedData[1]);
          } else if (
            selection === "read" &&
            readSelection !== "0" &&
            readSelection !== "1"
          ) {
            console.error("Usage: node fs.js read INDEX");
            break;
          }
        }
      }
    });
  }
}




















//
// let fs = require('fs');
// let selection = process.argv[2];
// let {exit} = require('node:process');
// if (!selection) {
//     console.error('Usage: node fs.js [read | create | update | destroy]')
//     exit(1);
// }
// function read() {
//     fs.readFile('./../pets.json', 'utf8', (error, data) => {
//         if(error){
//             console.log(error);
//             exit(1);
//         }
//         let result = JSON.parse(data)
//         console.log(result);
//     })
// }
// if (selection) {
//     read();
// }
// //console.log(process.argv)















// let fs = require("fs");
// //import fs from "fs"
// //import {exit} from "node:process"
// const { exit } = require("node:process");
// const { argv } = require("process");

// //Usage: node fs.js [read | create | update | destroy]

// exit(1);
// let read = process.argv[2];

// console.log(read);

// if(read) {
//   readJSON();
// }
// function readJSON() {
//   fs.readFile("./pets.json", "utf-8", function (error, data) {
//     if (error) {
//       console.log(error);
//     } else {
//       for (let i = 0; i < data.length; i++) {
//         console.log(data);
//       }
//     }
//   });
// }

