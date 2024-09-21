const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn')
const color =document.querySelector('.color')

btn.addEventListener('click',function(){
    console.log(document.body);
    const RandomNumber= RandomFun()
    document.body.style.backgroundColor=colors[RandomNumber]

})

function RandomFun(){
    return Math.floor(Math.random()*colors.length);
}