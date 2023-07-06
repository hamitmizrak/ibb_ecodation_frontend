// JS 1995 yılında Brandan Eich tarafından yazılıyor.
// Cross platform
// OOP uygun.

//single Comment
/*
multiple Comment
*/

// console.log("loglama");
// console.info("info");
// console.warn("warn");
// console.error("error");

// alert("pop-up bilgilendirme-1");
// window.alert("pop-up bilgilendirme-2");
// window.document.writeln("ekranda yazı");

// Variable
// var result=4423;
// console.log(typeof result+" => "+result);

// var result=44.23;
// console.log(typeof result+" => "+result);

// var result="Js öğreniyorum";
// console.log(typeof result+" => "+result);

// var result=true;
// console.log(typeof result+" => "+result);

// Naming Convensition
// var deneme="JS Data";
// console.log(deneme);

// var deneme44="JS Data";
// console.log(deneme44);

// var $deneme44="JS Data";
// console.log($deneme44);

// var _$deneme44="JS Data";
// console.log(_$deneme44);

// var denemeVerisi="JS Data";
// console.log(denemeVerisi);

//var &~44$deneme44="JS Data";
//console.log(44$deneme44);

// interpreter, compiler 
// senkron, asenkron ?

// whoisting
// result2=56;
// var result2;

///////////////////////////////////////////////////
// Operators
// + - * ** / %
// ! DEĞİL &&=VE ||=VEYA
// x++
// x--
// ++x
// --x

// =   ATAMA
// ==  EŞİT  (TÜRÜNE BAKMA)
// === EŞİT  (TÜRÜNE BAK)

// var number1=40;
// var number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// cast
// Number
// String()
// var userData=Number(prompt("Lütfen sayı giriniz"));
// console.log(userData+45);

// undefined
// var result4;
// console.log(result4);

// // NaN: Not A Number
// var result5="asd"/4;
// console.log(result5);

// // isNaN
// var result6=4;
// console.log(isNaN(result6)); //false: sayıdır

// // Infinity
// console.log(4/0);

///////////////////////////////////////////////////
// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.min(4,1,99,555,25,-100));
// console.log(Math.max(4,1,99,555,25,-100));

// console.log(Math.sqrt(16));
// console.log(Math.abs(-25));
// console.log(Math.pow(2,5));

// console.log(Math.floor(3.9));
// console.log(Math.ceil(3.1));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));

// console.log(Math.sin(45));
// console.log( Math.round(Math.random()*9+1));

//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

///////////////////////////////////////////////////
// Number 
// var sayi=15000;
// console.log(sayi);

// var sayi2=1.5E+4;
// console.log(sayi2);

// binary,octal,decimal, hexadecimal

// binary : 0-1
// var binary=0b00011;
// console.log(binary);

// octal : 0-1-2-3-4-5-6-7
// var octal=0o7612;
// console.log(octal);

// decimal : 0-1-2-3-4-5-6-7-8-9
// var decimal=123456;
// console.log(decimal);

// hexdecimal : 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F
// var hexadecimal=0xffa;
// console.log(hexadecimal);

// Number() parseInt() nedir aralarındaki farklar ?
// String() data.toString nedir aralarındaki farklar ?
// Cast
// database, port , api (string)
// console.log(Number("10")+10);
// console.log(parseInt("10")+10);

// console.log(String(30)+10);
// var number=30;
// console.log(number.toString()+10);

///////////////////////////////////////////////////
// var, let, const

// var data1=11;
// console.log(data1);

// var data1=22;
// console.log(data1);

// let data2=33;
// console.log(data2);

// let data3=33;
// data3=44;
// console.log(data3);

// const data4=55;
// console.log(data4);

// const data5=55;
// data5=66;
// console.log(data5);

///////////////////////////////////////////////////
// string
// let str="js ÖĞreniyorum js ";
// console.log(str);

// console.log(str.length);
// console.log(str.trim().length);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str.charAt(0));

// console.log(str.indexOf("js"));
// console.log(str.lastIndexOf("js"));

// console.log(str.concat("sona"));
// console.log(str.replace(str,"değiştir"));

// console.log(str.substring(1));
// console.log(str.substring(0,4));

// Ödev 
// ÖDEV NOT:5 adımı beraber yapalım.
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

///////////////////////////////////////////////////
// Function (Normal)
// 1 retursuz Parametresiz
// function retursuzParametresiz() {
//     console.log("deneme");
// }
// retursuzParametresiz();

// // 2 retursuz Parametresiz
// function retursuzParametreli(adi) { // parametre: adi
//     console.log("deneme " + adi);
// }
// retursuzParametreli("HamitM") // argüman: "HamitM"

// // 3 retursuz Parametresiz
// function returnluParametresiz() {
//     return "deneme55";
// }
// let result3 = returnluParametresiz();
// console.log(result3);

// // 4 retursuz Parametresiz
// function returnluParametreli(soyadi) {
//     return "deneme66 " + soyadi;
// }
// let result4 = returnluParametreli("Mizrak");
// console.log(result4);

///////////////////////////////////////////////////
// // Normal Function
// function normal() { }

// // Anonymous (Function)
// let anonymous = function () { }

// // Arrow (Function)
// let arrow = () => { }

///////////////////////////////////////////////////
// let veya const
// arrow function

///////////////////////////////////////////////////
// function deneme1(){
//     console.log("normal function");
// }
// deneme1();

// const deneme2= function (){
//     console.log("anonymous function");
// }
// deneme2();

// const deneme3=  ()=>{
//     console.log("arrow function function");
// }
// deneme3();

// Immedia Function ()();
// (function(){
//     console.log("deneme4");
// })();

///////////////////////////////////////////////////
// condition
const condi = () => {
    let number = 4;
    if (number >= 2) {
        console.log("Büyüktür");
    } else {
        console.log("Küçüktür");
    }
}
condi();

const condi2 = () => {
    let number = 4;
    if (number >= 2)
        console.log("Büyüktür");
    else
        console.log("Küçüktür");

}
condi2()

const condi3 = () => {
    let number = 4;
    let result = (number >= 2) ? "Büyüktür" : "Küçüktür";
    console.log(result);
}
condi3()

const condi4 = () => {
    let number = 4;
    console.log((number >= 2) ? "Büyüktür" : "Küçüktür");
}
condi4();

const condi5 = () => {
    let number = 4;
    if (number == "1") {
        console.log("1");
    } else if (number == 2) {
        console.log("2");
    } else if (number == 3) {
        console.log("3");
    } else if (number === 4) {
        console.log("4");
    } else {
        console.log("1<=X<=5 dışındadır");
    }
}
condi5();

const condi6 = () => {
    let number = 4;
    // break   : döngü kırmak
    // return  : metot kırmak
    // continue: 1 kereye mahsus es geç sonra döngüye devam et.
    switch (number) {
        case 1:
            console.log("1");
            break; // döngü kırmak
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("3");
            break;
        case 4:
            console.log("4");
            break;
        default:
            console.log("1<=X<=5 dışındadır");
            break;
    }
}
condi6();
///////////////////////////////////////////////////////
// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

let isOddEven = () => {
    const result = 4;
    if (result % 2 == 0)
        console.log("çifttir");
    else
        console.log("tektir");
}
isOddEven()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

////////////////////////////////////////////////////////
// loop

let loop = () => {
    for (let i = 1; i <= 10; i++) {
        document.write(i + " ")
    }
}
loop();
document.writeln("<br/>")

let loop2 = () => {
    let i = 1; 
    while (i <= 10) {
        document.write(i + " ")
        i++
    }
}
loop2();

document.writeln("<br/>")

let loop3 = () => {
    let i = 1; 
    do{
       document.write(i + " ")
        i++;
    }
    while (i <= 10);
}
loop3();

// Örnekler
