// const btn = document.getElementById("btn");
// const inputBox = document.getElementById("inp");
// const text = document.getElementById("text");

// btn.addEventListener( "click" ,()=>{
//     let name = inputBox.value 
//     let greeting = `Hi, ${name} !!!`
//     text.innerHTML = greeting
// })

//Bài 1:
const btn = document.getElementById("btn");
const box = document.getElementById("box");

function getRandomColor(){
    let r = parseInt(Math.random() * 254);
    let g = parseInt(Math.random() * 254);
    let b = parseInt(Math.random() * 254);
    return `rgb(${r}, ${g}, ${b})`
}
btn.addEventListener("click", ()=>{
    let randomColor = getRandomColor();
    console.log(randomColor);
    box.style.backgroundColor = randomColor;
})


//Bài 2:
number.addEventListener("click", ()=>{
    let t = document.getElementById("number").value;
    document.getElementById("number").value = parseInt(t) + 1;
})
