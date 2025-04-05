// const name="Ravi"
// const repo = "binjhade"
// // console.log(name + repo+ "Amla");
// console.log(`Hello my name is ${name} and my surname is ${repo}`);

const name = new String('Ravi')
console.log(name[0]);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('a'));
const newname = name
console.log(newname.substring(0,2));
const newstring = new String('Binjhade')
const ans = newstring.slice(-5, 5)
console.log(ans);

const newstringone = "    Ravi    "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://Ravi.com/Ravi%20Binjhade"
console.log(url);
console.log(url.replace('%20', '-'));
console.log(url.includes('Ravi'));

const namestring = "Ravi-Binjhade-Amla"
console.log(namestring.split('-'));

const str = new String('he said \"Hello|\"')//('he said "Hello"')
console.log(str);






















