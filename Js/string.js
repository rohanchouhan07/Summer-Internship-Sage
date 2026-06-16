
//! string 
// length
let name ='rohan mera naam'
let name2='                 papi                  '
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name2.trim())//remove the space btw right and leftt
console.log(name2.trim().length)
console.log(name.includes("rohan"));//find the availability
console.log(name.startsWith('rohan mera'));
console.log(name.endsWith('naam'));
console.log(name.indexOf('naam'));
console.log(name.lastIndexOf('m'));
console.log(name.slice(2,14));
console.log(name.substring(2,14));
console.log(name.replace("mera","my"));
console.log(name.replaceAll("a","w"));
console.log(name.split(" "));
