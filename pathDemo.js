import path from "path";

const filePath = "./dir1/dir2/test.txt";

// basename - Get the last thing/file in a dir
const basename = path.basename(filePath);
console.log(basename);

// dirname() - Get the path of directory
const dirname = path.dirname(filePath);
console.log(dirname);

// extname() - Get file extension
const extname = path.extname(filePath);
console.log(extname);

// parse() - Gives the all info about the dir and path as an object
const parse = path.parse(filePath);
console.log(parse);
