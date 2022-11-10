let url="https://636c8d25ad62451f9fccdbfa.mockapi.io//mom"
let bag=[];
fetch(url)
.then((res)=>res.json())
.then((data)=>{bag=data
    displaycard(data)
console.log(data)})

function displaycard(data){

    data.forEach(element => {
        let div=document.createElement("div")
        
        let image=document.createElement("img")
        image.setAttribute("src",element.avatar)

        let name=document.createElement("h1")
        name.innerText=element.name

        let category=document.createElement("h3")
        category.innerText="Category:"+element.category

        let color=document.createElement("h4")
        color.innerText="Color:"+element.color

        let material=document.createElement("h4")
        material.innerText="Material:"+element.material

        let des=document.createElement("h4")
        des.innerText=element.description

        let price=document.createElement("h2")
        price.innerText="Price:"+element.price

        let button=document.createElement("button")
        button.innerText="ADD TO CART"

        div.append(image,name,category,price,button)
        document.querySelector("#mencontainer").append(div)
    });
    
}