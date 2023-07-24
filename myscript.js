import { featureProductNav } from "./Data/featureProductNav.js"
import { imageSlider } from "./Data/imageSlider.js"
import { TopOffersProductData } from "./Data/TopOffers_Product.js"

let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_searchEl = document.querySelector(".recent_search")

let recentArray = ["mobile", "phone"]
form_search.addEventListener("submit", (e) => {
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
});

function renderRecent() {
    let recent_search_html = ''
    recentArray.forEach(el => {
        recent_search_html += `
            <div class="recent_list">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>${el}</p>
            </div>
        `
    })
    recent_searchEl.innerHTML = recent_search_html
}

renderRecent()



/**********feature Product JS**************/
let featureProduct_listEl = document.querySelector(".featureProduct_list")
let featureProductListHTML = ''

// Assuming featureProductNav is an array of objects with properties like link, img, name, and subNavigation
featureProductNav.forEach(el => {
    featureProductListHTML += `
        <div class="featureProduct_item">
            <a href="${el.link}">
                <div class="featureProduct_image">
                    <img src="${el.image}"/>
                </div>
                <p class="featureProduct_name">
                    ${el.name}
                    ${el.subNavigation ? `<i class="fa-solid fa-angle-down featureProduct_icon_more"></i>` : ""}
                </p>
            </a>
        </div>
    `
})

// Set the generated HTML to the featureProduct_listEl element
featureProduct_listEl.innerHTML = featureProductListHTML
console.log(featureProductListHTML)


/***********image Slider*************/
let imageSliderListEl = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''
console.log(imageSlider)

imageSlider.forEach(el => {
    imageSliderListHTML += `
        <div class="imageSliderItems">
            <a href="${el.link}">
                <img src="${el.img}"/>
            </a>
        </div>
    `
})

imageSliderListEl.innerHTML = imageSliderListHTML

let previous_imgBtnEl = document.getElementById("previous_imgBtn")
let next_imgBtn = document.getElementById("next_imgBtn")
let start = 0;
let end = -400;

previous_imgBtnEl.addEventListener("click", handlePreviousImg)
next_imgBtn.addEventListener("click", handleNextImg)

function handlePreviousImg() {
    let imageallList = document.querySelectorAll(".imageSliderItems")
    console.log(imageallList)
    if (start < 0) 
        start += 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function handleNextImg() {
    let imageallList = document.querySelectorAll(".imageSliderItems")
    console.log(imageallList)
    if (start > end)
      start -= 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function renderImageSlider(){
    if(start > end){
        handleNextImg()
    }
    else{
        start = 100
    }
}

setInterval(renderImageSlider,5000)


/***********************TopOffers_Product_Item****************************/
let TopOffers_Product_ItemEl = document.querySelector(".TopOffers_Product_Item")
let TopOffersProduct_html = ""
console.log(TopOffersProductData)

TopOffersProductData.forEach(el =>{
    TopOffersProduct_html += `
    <div class="TopOffers_items">
            <div class="TopOffers_Images_Product">
              <a href="${el.link}">   
                <img src="${el.img}"/>
              <a>  
            </div>
            <div class="TopOffers_More_option">
                <p class="TopOffers_Product_Name">${el.name}</p>
                <p class="TopOffers_discount">${el.discount}</p>
                <p class="TopOffers_brand">${el.brand}</p>
               
            </div>
    </div>
    `
})
TopOffers_Product_ItemEl.innerHTML = TopOffersProduct_html


let TopOffers_Btn_rightEl = document.getElementById("TopOffers_Btn_right")
let TopOffers_Btn_leftEl = document.getElementById("TopOffers_Btn_left")
TopOffers_Btn_leftEl.style.display = "none"

TopOffers_Btn_right.addEventListener("click",function(){
    TopOffers_Product_ItemEl.style.transform = `translateX(-90%)`
    TopOffers_Btn_rightEl.style.display = "none"
    TopOffers_Btn_leftEl.style.display = "block"
})

TopOffers_Btn_leftEl.addEventListener("click",function(){
    TopOffers_Product_ItemEl.style.transform = `translateX(0%)`
    TopOffers_Btn_rightEl.style.display = "block"
    TopOffers_Btn_leftEl.style.display = "none"
})





/******************footer section*********************/

