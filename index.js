// Câu 1

// SƠ ĐỒ 3 KHỐI

// Input:3 so nguyen

// Process :1 lấy Input
// so sánh số 3 số với nhau số 
// in các sô theo thứ tụ từ bé đến lơn

// Output :3 số theo thứ tụ tăng dần

var num1=6
var num2=5
var num3=1

if(num1<num2 && num2<num3){
    console.log(num1,num2,num3)
}
else if(num1<num3 && num3<num2){
    console.log(num1,num3,num2)
}
else if(num2<num3 && num3<num1){
    console.log(num2,num3,num1)
}
else if(num2<num1 && num1<num3){
    console.log(num2,num1,num3)
}else if(num3<num1 && num1<num2){
    console.log(num3,num1,num2)
}else if(num3<num2 && num2<num1){
    console.log(num3,num2,num1)
}

// Câu 2

// SƠ ĐỒ 3 KHỐI

// Input:4 thanh vien trong gia dinh 

// Process :1 lấy Input
// dựa thep câu tl đưa ra lòi chào phù hợp
// in lời chào

// Output :lời chào theo từng đối tượng

var dad="Bo"
var mom="Me"
var brother="Anh"
var sister="Em"

var answer="Me"

if(answer===dad){
console.log("Xin chao bo!")
}
else if(answer===mom){
console.log("Xin chao me!")
}
else if(answer===brother){
console.log("Xin chao anh!")
}
else if(answer===sister){
console.log("Xin chao em!")
}


// Câu 3

// SƠ ĐỒ 3 KHỐI

// Input:3 so nguyen

// Process :1 lấy Input
// tìm số lẽ và chẵn
// in số lượng sô chẵn và lẽ

// Output :số lượng sô chẵn và lẽ

var num01=1
var num02=8
var num03=9

if(num01%2===0 && num02%2===0 && num03%2===0){
    console.log('co 3 so chan')
}else if(num01%2===1 && num02%2===0 && num03%2===0){
    console.log('co 2 so chan va 1 so le')}
else if(num01%2===0 && num02%2===1 && num03%2===0){
    console.log('co 2 so chan va 1 so le')}  
else if(num01%2===0 && num02%2===0 && num03%2===1){
    console.log('co 2 so chan va 1 so le')}  
else if(num01%2===1 && num02%2===1 && num03%2===0){
    console.log('co 1 so chan va 2 so le')}
else if(num01%2===0 && num02%2===1 && num03%2===1){
    console.log('co 1 so chan va 2 so le')}
else if(num01%2===1 && num02%2===0 && num03%2===1){
    console.log('co 1 so chan va 2 so le')}      
else if(num01%2===1 && num02%2===1 && num03%2===1){
    console.log('co 3 so le')}   



// Câu 4

// SƠ ĐỒ 3 KHỐI

// Input:3 canh cua tam giac 

// Process :1 lấy Input
// xac dinh xem la tam giac gi
// in ket qua 

// Output :loại tam giác

var side1=3
var side2=3
var side3=2


if(side1===side2&&side1===side3){
    console.log("Tam giác đều")}
else if(side1===side2 ||side3===side2||side3===side1 ){
    console.log("Tam giác cân")}
else if(side1*side1 + side2*side2=== side3*side3 
    ||side1*side1 + side3*side3=== side2*side2
    ||side3*side3 + side2*side2=== side1*side1){
    console.log("Tam giác vuông")
}