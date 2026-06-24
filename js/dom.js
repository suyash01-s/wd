//DOM
// document.getElementById()
let c=document.getElementById("h11")
c.style.backgroundColor="yellow"
c.style.color="red"
c.style.textAlign="center"

// document.getElementsByClassName()
let a=document.getElementsByClassName("c1")
for(let i=0;i<a.length;i++){
    a[0].style.color="black"
    a[1].style.backgroundColor="red"
    a[i].style.font="bold"
}
// document.getElementsByTagName()
let b=document.getElementsByTagName("span")
for(let j=0;j<a.length;j++){
    b[j].style.backgroundColor="black"
    b[j].style.color="red"
    b[j].style.font="italic"
}
// document.querySelector()
let p = document.querySelector(".para")
p.style.backgroundColor="black"
p.style.color = "red"
p.style.fontSize = "30px"
// document.querySelectorAll()
