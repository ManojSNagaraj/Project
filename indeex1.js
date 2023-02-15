let div=document.createElement("div")
let p=document.createElement("p")
let h3=document.createElement("h3")

p.innerText="Hello"
h3.innerText="Byeee"

p.style.color="red"
h3.style.color="blue"

document.body.appendChild(div)

div.appendChild(p)
div.appendChild(h3)