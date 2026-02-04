console.log("hello");

// cach khoi tao mang

let listNumber = [1,2,3,4,5];
let numbers = [];

// lay gia tri trong mang
// tai chi so index=3 va tai phan tu thu 3 (index=2)

console.log(listNumber[3]);

listNumber[4] = 10;
console.log(`Phan tu thu 5 sau khi cap nhat: ${listNumber[4]}`);

// xoa gia tri trong mang
// xoa phan tu tai dau mang: .shift()
console.log(`${listNumber} : ${listNumber}`);

// them gia tri vao mang
// Them vao dau mang : unshift()
console.log(`${listNumber} : ${listNumber.length}`);
listNumber.unshift(2);
console.log(`${listNumber} : ${listNumber.length}`);

// them vao vi tri bat ky
console.log(`${listNumber} : ${listNumber.length}`);
listNumber.splice(2,0,10);
console.log(`${listNumber} : ${listNumber.length}`);


