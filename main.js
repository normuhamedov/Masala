// 1-masala
// let promt = prompt("ixtiyoriy son kiriting");
// alert(promt.length);


// 2-masala
// let promt = prompt("Ixtiyoriy son kiriting");
// if(promt % 2 == 0){
//     alert("Siz kiritgan son juft ekan")
// }else {
//     alert("Siz kiritgan son toq ekan")
// }


// 3-masala
// let promt = prompt("ixtiyoriy son kiriting");
// let xonali = promt.length;
// if(promt % 2 == 0){
//     alert(`Siz kiritgan son juft ekan va bu son ${xonali} xonali`)
// }else {
//     alert(`Siz kiritgan son toq ekan va bu son ${xonali} xonali`)
// }

// 4-masala
let a = prompt("1. Ixtiyoriy bir xonali son kiriting");
let b = prompt("2. Ixtiyoriy bir xonali son kiriting");
let c = prompt("3. Ixtiyoriy bir xonali son kiriting");

if (a >= b && a >= c) {
    if (b >= c) {
        alert("" + a + b + c);
    } else {
        alert("" + a + c + b);
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        alert("" + b + a + c);
    } else {
        alert("" + b + c + a);
    }
} else {
    if (a >= b) {
    alert("" + c + a + b);
} else {
    alert("" + c + b + a);
    }
}


// 5-masala
// let promt = prompt("Uch xonali son kiriting");
// let a = Math.floor(promt / 100);
// let b = Math.floor((promt / 10) % 10);
// let c = promt % 10
// alert(Math.min(a, b, c));

// 6-masala
// let promt = prompt("Uch xonali son kiriting");
// alert(Math.floor((promt / 10) % 10))

// 7-masala
// let speed = prompt("Tezlikni kiriting:");
// if (speed <= 70) {
//     alert("Hammasi yaxshi");
// } else {
//     let points = Math.floor((speed - 70) / 5);
//     alert(points >= 12 ? "Prava olindi" : "Pointlar: " + points);
// }

 
// 8-masala
// let birthYear = prompt("Tug'ilgan yilingizni kiriting:");
// let age = 2024 - birthYear;
// alert("Sizning yoshingiz: " + age);

// 9-masala 
// let promt = prompt("Ixtiyoriy son kiriting");
// if(promt > 0 && promt % 2 == 0){
//     alert("Siz Juft , Musbat son kiritdinggiz")
// }else if(promt < 0 && promt % 2 == 0){
//     alert("Siz Juft , Manfiy son kiritdinggiz")
// }else if(promt < 0 && promt % 2 != 0){
//     alert("Siz Toq , Manfiy son kiritdinggiz")
// }else if(promt == 0){
//     alert("Siz 0 sonini kiritdinggiz")
// }else{
//     alert("Siz Toq , Musbat son kiritdinggiz")
// }

// 10-masala

// let n = prompt("Sonni kiriting:");

// if (n % 3 == 0 && n % 5 == 0) {
//     alert("FizzBuzz");
// } else if (n % 3 == 0) {
//     alert("Fizz");
// } else if (n % 5 == 0) {
//     alert("Buzz");
// } else {
//     alert(n);
// }



// Rasimdagi masala 

// let dollar = 11000.34;
// let euro = 12354.03;
// let flight = 500 * dollar;
// let hotel = 250 * dollar;
// let museum = 120 * euro;
// let total = flight + hotel + museum;
// let promt = prompt("Qancha pulingiz bor? (so'mda kiriting)");
// if(promt >= total){
//     alert(`Oq yo'l, Alisher! Sizda ${promt - total} so'm ortib qolar ekan`);
// }else {
//     alert(`Alisher, ozgina sabr qilish kerak bo'lar ekan.Kamida ${total} so'm kerak, siz yana ${total - promt} so'm yig'ishinggiz kerak`);
// }