// --------------------------- READFILE ---------------------------

// import { readFile } from "node:fs/promises";

// const content = await Promise.all([
//   readFile("demo.txt", { encoding: "utf8" }),
//   readFile("app.js", { encoding: "utf8" }),
// ]);
// console.log(content);

// --------------------------- WRITE FILE ---------------------------

// import { writeFile } from "node:fs/promises";

// await writeFile("demo.txt", "heeeeeeeeeeeeeeeeeelo", {
//   flag: "a",
// });

// ---------------------------copyFile (copier fichier) , unlink (suprimer un fichier) , stat (informations sur le fichier)---------------------------

// --------------------------- Stat for file information ---------------------------

import { stat } from "node:fs/promises";

const i = await stat("demo.txt");
console.log(i);
console.log(i.birthtime);
