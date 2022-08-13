// Show Sub Menu 
let iconmenu = document.getElementById("icon-menu");

iconmenu.addEventListener("click" , ()=>{
    let mainmenu = document.getElementById("mainmenu");

    mainmenu.classList.toggle('active');
})

let item = document.querySelectorAll("li.item a");
console.log(item.parentCild)
item.forEach((elm) =>{
   console.log(elm)
    elm.addEventListener("click" , function(e){
        console.log(e)
        if(document.querySelector(".submenu.active")){
            document.querySelector(".submenu.active").classList.remove("active")
        }

        let menusub = e.target.nextElementSibling;
        
        if(menusub){
            menusub.classList.toggle("active")
            // if(document.querySelector(".submenu.active")){
            //     document.querySelector(".submenu.active").classList.remove("active")
            //     menusub.add("active")
            // }
            // menusub.classList.add("active")
        }
         
    })
    
})
////////////////////////////////////////////////////

// Click Header Search Btn
let searchBtn = document.getElementById("header-search");
let mainSearchCls = document.getElementById("mainSearch_close");

searchBtn.addEventListener("click",()=>{
    let mainSearch = document.getElementById("mainSearch");
    mainSearch.classList.add("search-active")
});

mainSearchCls.addEventListener("click",()=>{
    let mainSearch = document.getElementById("mainSearch");
    mainSearch.classList.remove("search-active")
})

// Go To Top Page
let backToUp = document.getElementById("scrollTop");

backToUp.addEventListener("click" , ()=>{
    // document.body.scrollTop = 0;
    let y = document.documentElement.scrollTop;

    let intScroll = setInterval(() => {
        if(y > 0){
            window.scrollTo(0, y);
            y -= 80;
        }else {
            window.scrollTo(0, 0);
            removeInterval(intScroll);
        }
        
    }, 10);
    
})

function removeInterval(interv){
    clearInterval(interv)
}

function scrollFunction(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToUp.classList.add('backToUp_show');
    }else{
        backToUp.classList.remove("backToUp_show");
    }
}

// Scroll Page In Menu Fixe
// let menuBar = document.querySelector(".header-sub");

// function scrollFunction2(){
//     if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
//         menuBar.classList.add("menuBarFixed")
//     }else{
//         menuBar.classList.remove("menuBarFixed")
//     }
// }

window.onscroll = ()=>{
    scrollFunction();
    // scrollFunction2();
}







