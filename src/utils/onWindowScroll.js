const fixedFilterContainer = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".filter-container").classList.add("filter-container--sticky");
    }else{
        document.querySelector(".filter-container").classList.remove("filter-container--sticky");
    }
}


function onWindowScroll() {
    window.onscroll = () => { 
        fixedFilterContainer();
    }
}

export default onWindowScroll;