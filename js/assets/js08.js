const text = "apple/kiwi/banana/orange/melon/pineapple/grapeapple";

// length
console.log('length:', text.length);

// split
console.log(text.split("/"));

// substring
console.log(text.substring(5));
console.log(text.substring(15));
console.log(text.substring(5, 20));

// 대소문자
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// includes
console.log(text.includes('dragon'));
console.log(text.includes('kiwi'));

// indexOf
console.log(text.indexOf('apple'));
console.log(text.indexOf('apple', 1));
