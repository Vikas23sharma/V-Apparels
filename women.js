let bag = [];
let cart = JSON.parse(localStorage.getItem("cart")) || []
let url = "https://636ca63291576e19e310f37b.mockapi.io//vwomen"

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        bag = data
        displaycard(data)
        console.log(data)
    })

function displaycard(data) {
    document.querySelector("#womencontainer").innerHTML = ""

    data.forEach(element => {
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.setAttribute("src", element.avatar)

        let name = document.createElement("h1")
        name.innerText = element.name

        let category = document.createElement("h3")
        category.innerText = "Category:" + element.category

        let color = document.createElement("h4")
        color.innerText = "Color:" + element.color

        let material = document.createElement("h4")
        material.innerText = "Material:" + element.material

        let des = document.createElement("h4")
        des.innerText = element.description

        let price = document.createElement("h2")
        price.innerText = "Price:" + `$${element.price}`

        let button = document.createElement("button")
        button.innerText = "ADD TO CART"
        button.addEventListener("click", function () {
            let cart = JSON.parse(localStorage.getItem("cart")) || []
            for (let i = 0; i < cart.length; i++) {
                if (cart[i].id == element.id) {
                    alert("Product Already In Cart!!")
                    return
                }
            }
            cart.push({ ...element, quantity: 1 })
            localStorage.setItem("cart", JSON.stringify(cart))
            alert("Product Added To Cart ")
        })

        div.append(image, name, category, price, button)
        document.querySelector("#womencontainer").append(div)
    });

}


document.querySelector("#search").addEventListener("click", search)
function search() {
    let searcheditem = document.querySelector("#searchbar").value
    console.log(bag)
    let newdata = bag.filter(function (element) {
        return element.category.toLowerCase().includes(searcheditem)
    })
    if (newdata.length == 0) { newdata = bag }
    displaycard(newdata)
}

document.querySelector("#sort_price").addEventListener("change", sortfn)
function sortfn() {
    let org = bag

    let sortby = document.querySelector("#sort_price").value

    if (sortby == "org") { displaycard(org) }
    else if (sortby == "LTH") { bag.sort(function (a, b) { return a.price - b.price }), displaycard(bag) }
    else if (sortby == "HTL") { bag.sort(function (a, b) { return b.price - a.price }), displaycard(bag) }

}

document.querySelector("#sort_color").addEventListener("change", filterfn)
function filterfn() {
    let colour = document.querySelector("#sort_color").value
    let newdata = bag.filter((element) => element.color == colour.toLowerCase())
    displaycard(newdata)

}

document.querySelector("#sort_material").addEventListener("change", filterfnmat)
function filterfnmat(){
    let colour = document.querySelector("#sort_material").value
    let newdata=bag.filter((element)=>element.material==colour.toLowerCase())
    displaycard(newdata)

}


document.querySelector("#sort_brand").addEventListener("change", filterfnbrand)
function filterfnbrand(){
    let colour = document.querySelector("#sort_brand").value
    let newdata=bag.filter((element)=>element.name==colour)
    displaycard(newdata)

}