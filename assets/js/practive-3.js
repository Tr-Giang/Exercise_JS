// BTVN: Array + Function
// var foods = ['Pizza', 'Pho Bo', 'Ramen', 'Sushi', 'Banh My'];
// 1. Sap xep tang dan va giam dan theo so luong ky tu

//c1:
// function findMinLength() {
//     let minLength = foods[0];
//     for (var i = 0; i < foods.length; ++i) {
//         if (foods[i].length < minLength.length) minLength = foods[i];
//     }
//     return minLength;
// }

// var ascendingFoods = [];

// for (let i = foods.length - 1; i >= 0; i--) {
//     var idMinLength = foods.indexOf(findMinLength());

//     ascendingFoods = ascendingFoods.concat(foods.splice(idMinLength, 1));
// }
// console.log(ascendingFoods);

// var decreaseFoods = ascendingFoods.reverse();

// console.log(decreaseFoods);

//c2:

// var ascendingFoods = foods.sort((a, b) => a.length - b.length);
// var decreaseFoods = foods.sort((a, b) => b.length - a.length);

// console.log(decreaseFoods);



// 2. Bien doi mang sang dang: "Pizza" => "Pizza - 5"

// for (const index in foods) {
//     var value = `${foods[index]} - ${Math.floor(Math.random() * 10)}`;
//     foods[index] = value;
// }

// console.log(foods);

// 3. Nhap vao cac mon ban thich: "Mi Tom, Keo bong" => Them cac mon tu format tren vao mang

// var favoriteFoods = "Mi Tom, Keo bong";

// foods = foods.concat(favoriteFoods.split(', '));

// console.log(foods);

// 4. Tao mot mang moi gom cac mon chua chu "a"

// var foodsHasA = [];
// for (const value of foods) {
//     if (value.includes('a')) foodsHasA.push(value);
// }
// console.log(foodsHasA);

// 5. Tim nhung mon chua 5 ky tu

// var foodsHas5Char = [];
// for (const value of foods) {
//     if (value.length == 5) foodsHas5Char.push(value);
// }
// console.log(foodsHas5Char);


// BTVN: Object
// 1. Tạo object person gồm các thông tin sau: id,name,address,age,email. Tạo các getter, setter tương ứng với mỗi thuộc tính, Tạo 1 method để in ra toàn bộ thông tin của object

var person = {
    id: 1,
    name: 'NguyenTruongGiang',
    address: 'HungYen',
    age: 25,
    email: 'truonggiang190398@gmail.com',
};

// Setters and getters:
//id :
person.id = 2;
console.log(person.id);
//name:
person.name = 'Nguyen Truong Giang';
console.log(person.name);
//address:
person.address = 'Hung Yen';
console.log(person.address);
//age:
person.age = 24;
console.log(person.age);
//email:
person['email'] = 'nguyentruonggiang190398@gmail.com';
console.log(person['email']);

//Method print:
person.print = function () {
    console.log('id: ', this.id);
    console.log('name: ', this.name);
    console.log('address: ', this.address);
    console.log('age: ', this.age);
    console.log('email: ', this.email);
};

person.print();

// 2. Thêm key-value về github của bạn (github là một đối tượng gồm các thuộc tính: id, username, url) và mức lương mong muốn (number), cập nhật tên của bạn thành dạng rút gọn, ví dụ: "Dang Tran Quyen" => "Tran Quyen" || "Quyen Dang", xóa mức lương đó đi

person.github = {
    id: 1,
    username: 'Tr-Giang',
    url: 'https://github.com/Tr-Giang'
};
person.salary = 1000;
person.name = 'Truong Giang';
delete person.salary;
console.log(person);

// 3. Đóng băng 2 thuộc tính email và github (sử dụng defineProperties)

Object.defineProperties(person, {
    email: {
        writable: false,
    },
    github: {
        writable: false,
    }
});
console.log(person);

// 4. Duyệt qua key-value của object bằng 2 cách (for/in || Object.entries)

for (const key in person) {
    console.log(`${key}:`, person[key]);
}
console.log(Object.entries(person));

// 5. Thêm một phương thức để lấy ra thông tin github (return), Cho object salary, hãy gộp nó vào object ban đầu
//lay thong tin github:
person.getGithub = function () {
    return this.github;
};
var github = person.getGithub();
console.log(github);

//Obj salary:
var salary = {
    salary: 1000,
};

Object.assign(person, salary);

console.log(person);

