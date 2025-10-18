import url from "url";

const urlString = "https://google.come/search?q=hello+world";

// URL object
const urlObj = new URL(urlString);

console.log(urlObj);

// URL object in String format
console.log(url.format(urlObj));

// File path URL - import.meta.url (Meta data about URL file)
console.log(import.meta.url);

// fileUrlToPath() - Convert URL to regular path
console.log(url.fileURLToPath(import.meta.url));

const params = urlObj.searchParams;
// Search params as an object
console.log(params);

// Get Query param
console.log(params.get("q"));

// Append params
params.append("limit", "5");
console.log(params);

// Delete params
params.delete("limit");
console.log(params);
