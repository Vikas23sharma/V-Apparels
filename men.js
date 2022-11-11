let url="https://636c8d25ad62451f9fccdbfa.mockapi.io//mom"
let bag=[];
let cart=JSON.parse(localStorage.getItem("cart")) ||[]
fetch(url)
.then((res)=>res.json())
.then((data)=>{bag=data
    displaycard(data)
    console.log(data)
})

function displaycard(data){

    document.querySelector("#mencontainer").innerHTML=""
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
        price.innerText="Price:"+`$${element.price}`

        let button=document.createElement("button")
        button.innerText="ADD TO CART"
        button.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || []
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id == element.id) {
                    alert("Product Already In Cart!!")
                    return
                }
            }
            cart.push({ ...element,quantity: 1 })
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Product Added To Cart ")
        })

        div.append(image,name,category,price,button)
        document.querySelector("#mencontainer").append(div)
    });
    
}


document.querySelector("#search").addEventListener("click",search)
function search(){
   let searcheditem=document.querySelector("#searchbar").value
   console.log(bag)
   let newdata=bag.filter(function(element){
    return element.category.toLowerCase().includes(searcheditem)
   })
  if(newdata.length==0){newdata=bag}
   displaycard(newdata)
}