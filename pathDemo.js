import path from "path";
import url from "url";

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

// Getting __filename
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

// join() - Joins and constructs the path
const filePath2 = path.join(__dirname, "dir1", "dir2", "dir3");
console.log(filePath2);

//  resolve - Resolves the path that uses / or \ | Get absolute path
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "dir3");
console.log(filePath3);
