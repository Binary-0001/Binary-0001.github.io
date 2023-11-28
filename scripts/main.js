/**
 * 注释
 */
let myHeading = document.querySelector("h1");
myHeading.textContent = ""

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

// document.querySelector("html").addEventListener("click", () => {
//     alert("点击下方链接立即体验！");
// })

var myPic = document.querySelector("img");
myPic.addEventListener("click", ()=>{
    let mySrc = myPic.getAttribute("src");
    if(mySrc === "images/mypic.jpeg") {
        myPic.setAttribute("src","images/mypic2.jpg" )
    }else{
        myPic.setAttribute("src","images/mypic.jpeg" )
    }
})

let mybutton = document.querySelector("button");

function setUserName(){
    let myName = prompt("请输入你的名字");
    if(!myName) {
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "尊贵的会员"+ myName+"，欢迎光临"
    }
    
}

if(!localStorage.getItem("name")) {
    setUserName();
}else{
    let storeName = localStorage.getItem("name");
    myHeading.textContent = "尊贵的会员"+ storeName+"，欢迎光临"
}

mybutton.addEventListener("click",()=>{
    setUserName();
})