let str1 = "Welcome to this Javascript Guide!";
console.log("str1", str1, typeof str1 );

let arr1 = str1.split(" ");//через пробіл
console.log("arr1", arr1, typeof arr1 );

let temp = [];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i], typeof arr1[i]);
    arr2 = arr1[i].split("");
    console.log(arr2, typeof arr2);
    arr2.reverse();
    console.log(arr2, typeof arr2);
    str2 = arr2.join("");
    console.log(str2, typeof str2);
    temp.push(str2);
}
console.log(temp);
let result = temp.join(" ");
console.log(result, typeof result);


let input = document.getElementById('input');
