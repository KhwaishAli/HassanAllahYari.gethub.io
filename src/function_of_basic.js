let Down_off = document.getElementById("Down_off");
function Down() {
    window.scrollTo(10000, 10000);
}


menu_act = 1;
function menu_moble() {
    let menu_up = document.getElementById("menu_moble");
    if (menu_act == 0) {
        menu_up.style.left = "250px";
        menu_act = 1;
        return
    }
    if (menu_act == 1) {
        menu_up.style.left = "300vw";
        menu_act = 0;
        return
    }
}
var case_per = 0;




function C_O() {
    let navigation_bar = document.getElementById("navigation_bar");
    if (case_per == 0) {
        navigation_bar.style.width = "250px";
        case_per = 1;
        return
    }
    if (case_per == 1) {
        navigation_bar.style.width = "50px";
        case_per = 0;
        return
    }
}
let menu_up = document.getElementById("menu_moble");
let navigation_bar = document.getElementById("navigation_bar");

var lastscrolltop = 0;
var header = document.getElementById("header");
window.addEventListener("scroll", function () {
    var scrolltop = this.window.pageYOffset || document.documentElement.scrollTop;
    if (scrolltop > lastscrolltop) {
        menu_up.style.left = "300vw";
        header.style.display = "none";
        menu_act = 0;
        case_per = 0;
        navigation_bar.style.width = "50px";
        preloader_of_filter.style.marginTop = "0px";
    } else {
        menu_up.style.left = "300vw";
        header.style.display = "block";
        menu_act = 0;
        case_per = 0;
        navigation_bar.style.width = "50px";
        if(case_search == 1){
            preloader_of_filter.style.marginTop = "50px";
        }else{
            preloader_of_filter.style.marginTop = "150px";
        }
    }
    lastscrolltop = scrolltop;
})
 
case_search = 0;

const media = () => {
    let query = window.matchMedia("(max-width: 750px)");
    if (query.matches) {
        let search_moble$A = document.getElementById("search_moble_A");
        let search_ipt_moble = document.getElementById("search_ipt_moble");
        let search_moble$B = document.getElementById("search_moble_B");
        const search_moble = document.getElementById("search_moble");
        const search_contain = document.getElementById("search_contain");
        let logo_space = document.getElementById("logo_space");
        let desbat = document.getElementById("desbat");
        search_ipt_moble.style.width = "0px";
        search_ipt_moble.style.display = "none";
        search_moble.style.position = "relative";
        search_moble.style.zIndex = "1000";
        search_moble.style.marginLeft = "20px";

        search_moble.style.width = "auto";


        // dis!
        desbat.style.height = "100%";
        header.style.height = "150px";



        search_moble$B.style.display = "none";
        search_moble$A.style.width = "50px";
        search_moble$B.style.borderRadius = "10px";
        search_moble$A.style.borderRadius = "10px";
        if (case_search == 0) {
            search_ipt_moble.style.width = "100%";
            search_ipt_moble.style.display = "block";
            search_moble.style.position = "fixed";
            search_moble.style.left = "0vw";
            search_moble.style.top = "0px";
            search_moble.style.zIndex = "1000";
            search_moble.style.marginLeft = "0px";

            search_moble.style.width = "97.9vw";


            // dis!
            desbat.style.height = "0px";
            desbat.style.overflow = "hidden";
            header.style.height = "50px";

            search_moble$B.style.display = "flex";
            search_moble$A.style.width = "50px";
            search_moble$B.style.borderRadius = "0px";
            search_moble$A.style.borderRadius = "0px";

            preloader_of_filter.style.marginTop = "50px";
            case_search = 1;
            return;
        }
        if (case_search == 1) {
            search_ipt_moble.style.width = "0px";
            search_ipt_moble.style.display = "none";
            search_moble.style.position = "relative";
            search_moble.style.zIndex = "1000";
            search_moble.style.marginLeft = "20px";

            search_moble.style.width = "auto";


            // dis!
            desbat.style.height = "100%";
            header.style.height = "150px";



            search_moble$B.style.display = "none";
            search_moble$A.style.width = "50px";
            search_moble$B.style.borderRadius = "10px";
            search_moble$A.style.borderRadius = "10px";
            preloader_of_filter.style.marginTop = "150px";
            case_search = 0;
            return;
        }
    }
}

const media_ = () => {
    let query_allways = window.matchMedia("(max-width: 1000px)");
    if (query_allways.matches) {
        let search_ipt_moble = document.getElementById("search_ipt_moble");


        search_ipt_moble.style.width = "300px";
        case_search = 0;
        // return;
    }
    let query_three = window.matchMedia("(max-width: 950px)");
    if (query_three.matches) {
        let search_ipt_moble = document.getElementById("search_ipt_moble");


        search_ipt_moble.style.width = "250px";
        case_search = 0;
        // return;
    }

    let query_two = window.matchMedia("(max-width: 900px)");
    if (query_two.matches) {
        let search_ipt_moble = document.getElementById("search_ipt_moble");


        search_ipt_moble.style.width = "200px";
        case_search = 0;
        // return;
    }

    let query_one = window.matchMedia("(max-width: 850px)");
    if (query_one.matches) {
        let search_ipt_moble = document.getElementById("search_ipt_moble");


        search_ipt_moble.style.width = "150px";
        case_search = 0;
        // return;
    }

    let query_out_moble = window.matchMedia("(max-width: 800px)");
    if (query_out_moble.matches) {
        let search_moble$A = document.getElementById("search_moble_A");
        let search_ipt_moble = document.getElementById("search_ipt_moble");
        let search_moble$B = document.getElementById("search_moble_B");
        const search_moble = document.getElementById("search_moble");
        const search_contain = document.getElementById("search_contain");
        let logo_space = document.getElementById("logo_space");
        let desbat = document.getElementById("desbat");

        search_ipt_moble.style.width = "100px";
        search_ipt_moble.style.display = "block";
        search_moble.style.position = "relative";
        search_moble.style.zIndex = "1000";
        search_moble.style.marginLeft = "50px";

        search_moble.style.width = "auto";


        // dis!
        desbat.style.height = "100%";
        header.style.height = "150px";



        search_moble$B.style.display = "flex";
        search_moble$A.style.width = "50px";
        search_moble$B.style.borderRadius = "10px";
        search_moble$A.style.borderRadius = "10px";
        case_search = 0;
        // return;
    }
    let query_moble = window.matchMedia("(max-width: 750px)");
    if (query_moble.matches) {
        let search_moble$A = document.getElementById("search_moble_A");
        let search_ipt_moble = document.getElementById("search_ipt_moble");
        let search_moble$B = document.getElementById("search_moble_B");
        const search_moble = document.getElementById("search_moble");
        const search_contain = document.getElementById("search_contain");
        let logo_space = document.getElementById("logo_space");
        let desbat = document.getElementById("desbat");

        search_ipt_moble.style.width = "0px";
        search_ipt_moble.style.display = "none";
        search_moble.style.position = "relative";
        search_moble.style.zIndex = "1000";
        search_moble.style.marginLeft = "20px";

        search_moble.style.width = "auto";


        // dis!
        desbat.style.height = "100%";
        header.style.height = "150px";



        search_moble$B.style.display = "none";
        search_moble$A.style.width = "50px";
        search_moble$B.style.borderRadius = "10px";
        search_moble$A.style.borderRadius = "10px";
        case_search = 0;

        // return;
    }
    
    
}
onload = media_;
onresize = media_;