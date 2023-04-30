// BT Array
// var languages = ['Javascript', 'PHP', 'Java', 'C#'];
// 1. Thay the "PHP" bang "Python"

// var phpPlace = languages.indexOf('PHP');
// if (phpPlace !== -1) languages.splice(phpPlace, 1, 'Python');
// console.log(languages);

// 2. Tim tu ngan nhat va dai nhat trong mang

// var longElement = languages[0];
// var shortElement = languages[0];
// for (var i = 0; i < languages.length - 1; i++) {
//     if (longElement.length < languages[i + 1].length) longElement = languages[i + 1];
//     if (shortElement.length > languages[i + 1].length) shortElement = languages[i + 1];
// }
// console.log(shortElement);
// console.log(longElement);

// 3. Tim cac tu chua chuoi "Java"

// var haveJava = [];
// for (const value of languages) {
//     if (value.includes('Java')) haveJava.push(value);
// }
// console.log(haveJava);

// 4. Them phan tu "Dart" vao dau mang va "Kolin" vao cuoi mang

// languages.unshift('Dark');
// languages.push('Kolin');
// console.log(languages);

// 5. Hop nhat mang ban dau voi mang sau: ["Flutter","Laravel","ExpressJS",".Net"]

// languages = languages.concat(["Flutter", "Laravel", "ExpressJS", ".Net"]);
// console.log(languages);


// BT Function
// 1. Viet ham tinh chu vi va ham tinh dien tich hinh tron bằng 1 trong 2 cách (prompt)
// + star function
// + use 2 function

// function* calcCircle(r) {
//     yield perimeterCircle = 2 * r * Math.PI;
//     yield areaCircle = Math.PI * r ** 2;
//     return {
//         "perimeterCircle": perimeterCircle,
//         "areaCircle": areaCircle,
//     };
// }
// var valueCircle = calcCircle(3);
// var perimeterCircle = valueCircle.next().value;
// var areaCircle = valueCircle.next().value;
// console.log(valueCircle.next().value);

// var perimeterCircle = r => 2 * r * Math.PI;
// var areaCircle = r => Math.PI * r ** 2;

// 2. Viết hàm tính tổng các số nguyên tố

// function sumPrimes(n) {
//     var sum = 0;
//     for (var i = 1; i <= n; i++) {
//         if (isPrime(i)) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// sumPrimes(7);

//c1:
// function isPrime(n) {
//     var flag = true;
//     if (n <= 1) flag = false;
//     else if (n == 2) flag = true;
//     else {
//         for (var i = 2; i < n; i++) {
//             if (n % i == 0) {
//                 flag = false;
//                 break;
//             }
//         }
//     }
//     if (flag == true) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

//c2:
// function isPrime(n) {
//     if (n <= 1) return false;
//     else if (n === 2) return true;
//     else {
//         for (var i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) { return false; }
//             else continue;
//         }
//         return true;
//     }
// }

// console.log(isPrime(1));
// console.log(isPrime(3));
// console.log(isPrime(6));



// 3. https://cdn.tgdd.vn//GameApp/1323643//Slide25-800x450.png

// function calcValue(n) {
//     var sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i * (i + 1);
//     }
//     return sum;
// }
// console.log(calcValue(3));

// 4. Nhap vao so cua ban in ra so lien truoc, lien sau cua so do, trung binh nhan cua 3 so

// function printNumber(n) {
//     return {
//         frontNumber: n - 1,
//         nextNumber: n + 1,
//         result: Math.cbrt((n - 1) * (n + 1) * n),
//     };
// }

// console.log(printNumber(3));;

// 5. Tinh n giai thua

// var result = 1;

//c1:
// function calcFactorial(n) {
//     result *= n;
//     n -= 1;
//     if (n >= 1) calcFactorial(n);
//     return result;
// }


//c2:
// function calcFactorial(n) {
//     for (var i = n; i > 0; i--) {
//         result *= i;
//     }
//     return result;
// }

// console.log(calcFactorial(5));
