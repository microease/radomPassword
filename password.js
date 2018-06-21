var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var english = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ENGLISH = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*"];

//随机颜色
function getColor() {
    var color = ["a", "b", "c", "d", "e", "f"];
    var numAndColor = num.concat(color);
    var str = "#";
    for (var i = 0; i < 6; i++) {
        var randomColor = parseInt(Math.random() * 16);
        str += numAndColor[randomColor];
    }
    return str;
}

//随机密码
var numAndeng = num.concat(english);
var numAndENG = num.concat(ENGLISH);
var numAndengAndENG = num.concat(english).concat(ENGLISH);
var numAndengAndENGAndSpecial = num.concat(english).concat(ENGLISH).concat(special);
var randomNumAndeng = "";
var randomNumAndENG = "";
var randomNumAndengAndENG = "";
var randomNumAndengAndENGAndSpecial = "";

function createPassword1() {

    //10位数数字和小写字母
    for (var i = 0; i < 10; i++) {
        var getRandomNumAndeng = parseInt(Math.random() * 36);
        randomNumAndeng += numAndeng[getRandomNumAndeng];
    }
    return randomNumAndeng;

}

function createPassword2() {

    //10位数数字和大写字母
    for (var i = 0; i < 10; i++) {
        var getRandomNumAndENG = parseInt(Math.random() * 36);
        randomNumAndENG += numAndENG[getRandomNumAndENG];
    }
    return randomNumAndENG;

}

function createPassword3() {

    //10位数字和大小写字母
    for (var i = 0; i < 10; i++) {
        var getRandomNumAndengAndENG = parseInt(Math.random() * 62);
        randomNumAndengAndENG += numAndengAndENG[getRandomNumAndengAndENG];
    }
    return randomNumAndengAndENG;

}

function createPassword4() {

    //16位数字和大小写字母和特殊字符
    for (var i = 0; i < 16; i++) {
        var getRandomNumAndengAndENGAndSpecial = parseInt(Math.random() * 70);
        randomNumAndengAndENGAndSpecial += numAndengAndENGAndSpecial[getRandomNumAndengAndENGAndSpecial];
    }
    return randomNumAndengAndENGAndSpecial;

}



console.log(getColor());

window.onload = function () {
    document.getElementById("randomColor").style.color = getColor();
    var htmlNumAndeng = document.getElementById("randomNumAndeng");
    htmlNumAndeng.value = createPassword1(); //设置10位数数字和大写字母
    var htmlNumAndeng = document.getElementById("randomNumAndENG");
    htmlNumAndeng.value = createPassword2(); //设置10位数数字和大写字母
    var htmlNumAndeng = document.getElementById("randomNumAndengAndENG");
    htmlNumAndeng.value = createPassword3(); //设置10位数字和大小写字母
    var htmlNumAndeng = document.getElementById("randomNumAndengAndENGAndSpecial");
    htmlNumAndeng.value = createPassword4(); //设置16位数字和大小写字母和特殊字符
}
