import crypto from "crypto";

// createHash() - Creates a Hash
/* const hash = crypto.createHash("sha256");
hash.update("password");
console.log(hash.digest("hex")); */

// Random Bytes hash
/* crypto.randomBytes(16, (err, buff) => {
  if (err) console.log(err);
  console.log(buff.toString("hex"));
}); */

// Create Cypher and Decipher
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update("Yoo, keep it shushh!", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");
console.log(decrypted);
