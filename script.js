let acc = document.getElementsByClassName("accordion");
let hiddenMenu = document.querySelector("#hidden-menu")
let mainContent = document.querySelector("main")
let footerContent = document.querySelector("footer")
const drinks = document.querySelector("#drinks")
const food = document.querySelector("#food")
const athomecoffee = document.querySelector("#athomecoffee")
const merchandise = document.querySelector("#merchandise")
const menuH2 = document.querySelector("#menu-h2")
const catSpan = document.querySelector("#category-span")
const menuBasket = document.querySelector("#calc-sec")
const menuLeft = document.querySelector(".menu-left-side")
const menuMain = document.querySelector("#menu-mainn")
const calcEnd = document.querySelector(".calc-end")
let data = []

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let chevron = this.querySelector(".fa-chevron-down");
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      chevron.style.transform = 'rotate(0deg)';
      chevron.style.transition = '.5s';

    } else {
      panel.style.display = "block";
      chevron.style.transform = 'rotate(180deg)';
      chevron.style.transition = '.5s';
    }
  });
}

function openHiddenMenu(){
  console.log('salam');
  hiddenMenu.classList.toggle('openMenu')
  mainContent.classList.toggle('hideContent');
  footerContent.classList.toggle('hideContent');
}
  document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".mySwiper", {
      cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
    });
  });


// fetch('https://starbucks.yetim.me/menu')
//   .then(response => response.json())
//   .then(jsonData => {
//       console.log(jsonData);
    
//   })

fetch('data/db.json')
.then(res => res.json())
.then(jsondata => {
    data.push(jsondata)
    console.log(data[0].menu.drinks[0].more[0].img);
    data.map(item => {
        item.menu.drinks.forEach(element => {
        drinks.innerHTML += `     
                         <div class="drink" href="" onclick="openMenuItems('${element.name}')">
                            <div class="drink-img">
                                <img src="${element.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${element.name}</p>
                            </div>
                        </div>               
                    `
    });
  })
  data.map(item => {
      console.log(item.menu);
      item.menu.food.forEach(element => {
        
        food.innerHTML += `      
                         <div class="drink" href="" onclick="openMenuItems('${element.name}')">
                            <div class="drink-img">
                                <img src="${element.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${element.name}</p>
                            </div>
                        </div>               
                    `
    });
  })
  data.map(item => {
    item.menu.athomecoffee.forEach(element => {
        
        athomecoffee.innerHTML += `    
                         <div class="drink" href="" onclick="openMenuItems('${element.name}')">
                            <div class="drink-img">
                                <img src="${element.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${element.name}</p>
                            </div>
                        </div>               
                    `
    });
  })
  data.map(item => {
    item.menu.merchandise.forEach(element => {
        
        merchandise.innerHTML += 
                            `     
                         <div class="drink" href="" onclick="openMenuItems('${element.name}')">
                            <div class="drink-img">
                                <img src="${element.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${element.name}</p>
                            </div>
                        </div>               
                    `
    });
  })
})

function openMenuItems(arg){
    drinks.innerHTML = ''
    food.innerHTML = ''
    athomecoffee.innerHTML = ''
    merchandise.innerHTML = ''
    data.forEach(item => {
        item.menu.drinks.forEach(drink => {
            if (drink.name === arg) {
                menuH2.innerHTML = drink.name
                catSpan.innerHTML = `menu/${drink.name}`
                drink.more.forEach(elem => {
                    drinks.innerHTML += `   
                         <div class="drink" href="" onclick="openCalcSec('${elem.name}')">
                            <div class="drink-img">
                                <img src="${elem.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${elem.name}</p>
                            </div>
                        </div>`
                })
                
            }
        });
        item.menu.food.forEach(foodItem => {
            if (foodItem.name === arg) {
                menuH2.innerHTML = foodItem.name
                catSpan.innerHTML = `menu/${foodItem.name}`
                foodItem.more.forEach(elem => {
                    food.innerHTML += `   
                         <div class="drink" href="" onclick="openCalcSec('${elem.name}')">
                            <div class="drink-img">
                                <img src="${elem.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${elem.name}</p>
                            </div>
                        </div>`
                })
                
            }
        });
        item.menu.athomecoffee.forEach(homecoffe => {
            if (homecoffe.name === arg) {
                menuH2.innerHTML = homecoffe.name
                homecoffe.more.forEach(elem => {
                    athomecoffee.innerHTML += `   
                
                         <div class="drink" href="" onclick="openCalcSec('${elem.name}')">
                            <div class="drink-img">
                                <img src="${elem.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${elem.name}</p>
                            </div>
                        </div>`
                })  
            }
        });
        item.menu.merchandise.forEach(merchandise => {
            if (merchandise.name === arg) {
                menuH2.innerHTML = merchandise.name
                merchandise.more.forEach(elem => {
                    merchandise.innerHTML += `   
                
                         <div class="drink" href="" onclick="openCalcSec('${elem.name}')">
                            <div class="drink-img">
                                <img src="${elem.img}" alt="Hot Coffees" />
                            </div>
                            <div class="drinks-text">
                                <p>${elem.name}</p>
                            </div>
                        </div>`
                })
                
            }
        });
    });
}

function openCalcSec(arg){
    
    menuH2.innerHTML = '';
    menuLeft.innerHTML = '';
    menuMain.style.display = ' none'
    let htmlContent = '';

    data.forEach(element => {
        element.menu.drinks.forEach(drink => {
            drink.more.forEach(more => {
                if (more.name === arg) {
                    console.log(more);
                    catSpan.innerHTML = `menu/${drink.name}/${more.name}`;

                    htmlContent = `
                        <div class="calc-sec-inner">
                            <div style="paddind: 30px 0;"><div class="basket-img" style="background: url('${more.img}') center/contain no-repeat;"></div></div>
                            <div>
                                <h3>${more.name}</h3>
                                <p>${more.calories} Calories</p>
                            </div>
                        </div>
                       
                    `;
                    calcEnd.innerHTML = `
                    <div class="size-options">
                    <h4>Size Options</h4>
                    <div class="size-img">
                        <div class="size">
                            <img src="img/size2svg.svg" />
                            <h6>short</h6>
                            <p>8 fl oz</p>
                        </div>
                        <div class="size">
                            <img src="img/size3.svg" />
                            <h6>Tall</h6>
                            <p>12 fl oz</p>
                        </div>
                        <div class="size">
                            <img src="img/size4svg.svg" />
                            <h6>Grande</h6>
                            <p>16 fl oz</p>
                        </div>
                        <div class="size">
                            <img src="img/size5.svg" />
                            <h6>Venti</h6>
                            <p>20 fl oz</p>
                        </div>
                    </div>
                </div>
                <div class="include">
                <h4>What's Included</h4>
                <select name="" id=""><option>Milk Foam</option></select>
                <select name="" id=""><option>2% Milk</option></select>
                <select name="" id=""><option>Steamed Hot</option></select>
                <select name="" id=""><option>Chai pumps</option></select>
                <select name="" id=""><option>Waters</option></select>
            </div>
                    `
                }
            });
        });
    });

    menuBasket.innerHTML = htmlContent;
}
