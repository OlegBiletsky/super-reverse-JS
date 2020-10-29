function superReverse (str1) {
    let arr1 = str1.split(" ");
    let temp = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1[i].split("");
        arr2.reverse();
        let str2 = arr2.join("");
        temp.push(str2);
    }
    let result = temp.join(" ");
return result;
}


let input = document.getElementById('input');
let result = document.getElementById('result');
let btn = document.getElementById('btn');
btn.onclick = ok;

function ok() {
    let user_str = input.value;
    result.textContent = superReverse(user_str);
}