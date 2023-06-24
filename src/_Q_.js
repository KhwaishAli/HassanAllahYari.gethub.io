var case_search = 0;

const _media = () => {
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