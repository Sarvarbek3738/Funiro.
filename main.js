const apiLink =`https://fakestoreapi.com/products`
const cardsDiv = document.querySelector(".section2cards")
const showMoreBtn = document.querySelector("#showMoreBtn")
let data
let isClick = false

const getData = async (apiLink)=>{
    const req = await fetch(apiLink)
    data = await req.json()
    showData()
}

const showData = () => {
    if(isClick) {
        cardsDiv.innerHTML = ""
        data.forEach(element => {
            cardsDiv.innerHTML += `
            <div class="section2card">
                            <div class="hover">
                                <button>Add to cart</button>
                                <div class="tarmoq">
                                    <div><img src="./img/gridicons_share.svg" alt=""> <span>Share</span></div>
                                    <div><img src="./img/compare-svgrepo-com 1.svg" alt=""> <span>Compare</span></div>
                                    <div><img src="./img/Heart.svg" alt=""> <span>Like</span></div>
                                </div>
                            </div>
                            <img class="cardimg" src="${element.image}" alt="">
                            
                            <div class="block">
                                <h3> ${String(element.title).slice(0, 10)}</h3>
                                <p>${element.category}</p>
                                <div class="narx">
                                    <h4>Rp ${element.price} </h4>
                                    <h5>Rp 3.500.000</h5>
                                </div>
                            </div>
                        </div>`
        });
    }else {
        for(let i = 0 ; i < 4 ; i++) {
            cardsDiv.innerHTML += `
            <div class="section2card">
                            <div class="hover">
                                <button>Add to cart</button>
                                <div class="tarmoq">
                                    <div><img src="./img/gridicons_share.svg" alt=""> <span>Share</span></div>
                                    <div><img src="./img/compare-svgrepo-com 1.svg" alt=""> <span>Compare</span></div>
                                    <div><img src="./img/Heart.svg" alt=""> <span>Like</span></div>
                                </div>
                            </div>
                            <img class="cardimg" src="${data[i].image}" alt="">

                            <div class="block">
                                <h3>${String(data.title).slice(0, 10)}</h3>
                                <p>${data[i].category}</p>
                                <div class="narx">
                                    <h4>Rp ${data[i].price} </h4>
                                    <h5>Rp 3.500.000</h5>
                                </div>
                            </div>
                        </div>`
        }
    }
}

showMoreBtn.addEventListener("click" , () => {
    isClick = true
    showData()
    showMoreBtn.style.display = "none"
})

getData(apiLink)