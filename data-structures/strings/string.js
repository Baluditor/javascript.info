let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos === -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

str = '';

for (let i = 0; i < 70000; i++) {
  // str += String.fromCharCode(i);
}

console.log(str);


function ucFirst(str) {
  console.log(str[0].toUpperCase()+str.slice(1));
}

ucFirst('Adri');

function checkSpam(str) {
  return str.toUpperCase().includes('XXX') || str.toLowerCase().includes('viagra')
}


console.log(checkSpam('buy ViagRa Now'));
console.log(checkSpam('free xxxxxxx'));
console.log(checkSpam('innocent rabbit'));

function truncate(str, maxLen) {
  if (str.length > maxLen) return str.slice(0, maxLen -1) + `...`;
  return str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate('Hi all!'));

function extractMoney(str) {
  return +str.slice(1)
}

console.log(extractMoney('$120'));
