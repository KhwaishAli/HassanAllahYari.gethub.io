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

let fil_1 = document.getElementById("fil_1");
let fil_2 = document.getElementById("fil_2");
let fil_3 = document.getElementById("fil_3");
let fil_4 = document.getElementById("fil_4");
let fil_5 = document.getElementById("fil_5");
let fil_6 = document.getElementById("fil_6");
let fil_7 = document.getElementById("fil_7");
let fil_8 = document.getElementById("fil_8");
let fil_9 = document.getElementById("fil_9");
let fil_10 = document.getElementById("fil_10");
let fil_11 = document.getElementById("fil_11");
let fil_12 = document.getElementById("fil_12");
let fil_13 = document.getElementById("fil_13");
let fil_14 = document.getElementById("fil_14");
let fil_15 = document.getElementById("fil_15");
let fil_16 = document.getElementById("fil_16");
let fil_17 = document.getElementById("fil_17");
let fil_18 = document.getElementById("fil_18");
let fil_19 = document.getElementById("fil_19");
let fil_20 = document.getElementById("fil_20");
let fil_21 = document.getElementById("fil_21");
let fil_22 = document.getElementById("fil_22");
let fil_23 = document.getElementById("fil_23");
let fil_24 = document.getElementById("fil_24");
let fil_25 = document.getElementById("fil_25");
let fil_26 = document.getElementById("fil_26");
let fil_27 = document.getElementById("fil_27");
let fil_28 = document.getElementById("fil_28");

let fil_1_content = document.getElementById("fil_1_content");
let fil_2_content = document.getElementById("fil_2_content");
let fil_3_content = document.getElementById("fil_3_content");
let fil_4_content = document.getElementById("fil_4_content");
let fil_5_content = document.getElementById("fil_5_content");
let fil_6_content = document.getElementById("fil_6_content");
let fil_7_content = document.getElementById("fil_7_content");
let fil_8_content = document.getElementById("fil_8_content");
let fil_9_content = document.getElementById("fil_9_content");
let fil_10_content = document.getElementById("fil_10_content");
// let fil_11 = document.getElementById("fil_11");
// let fil_12 = document.getElementById("fil_12");
// let fil_13 = document.getElementById("fil_13");
// let fil_14 = document.getElementById("fil_14");
// let fil_15 = document.getElementById("fil_15");
// let fil_16 = document.getElementById("fil_16");
// let fil_17 = document.getElementById("fil_17");
// let fil_18 = document.getElementById("fil_18");
// let fil_19 = document.getElementById("fil_19");
// let fil_20 = document.getElementById("fil_20");
// let fil_21 = document.getElementById("fil_21");
// let fil_22 = document.getElementById("fil_22");
// let fil_23 = document.getElementById("fil_23");
// let fil_24 = document.getElementById("fil_24");
// let fil_25 = document.getElementById("fil_25");
// let fil_26 = document.getElementById("fil_26");
// let fil_27 = document.getElementById("fil_27");
// let fil_28 = document.getElementById("fil_28");

let case_fil = 1;
cod_act();


// switch (case_fil) {
//     case 2:
//         fil_2.style.backgroundColor = "rgb(40, 40, 40)";
//         fil_2.style.color = "rgb(255, 255, 255)";
//         break;

//     case 3:
//         fil_3.style.backgroundColor = "rgb(40, 40, 40)";
//         fil_3.style.color = "rgb(255, 255, 255)";
//         break;

//     default:
//         fil_1.style.backgroundColor = "rgb(40, 40, 40)";
//         fil_1.style.color = "rgb(255, 255, 255)";
//         break;
// }



function cod_act() {
    if (case_fil == 1) {
        fil_1.style.backgroundColor = "rgb(40, 40, 40)";
        fil_1.style.color = "rgb(255, 255, 255)";

        fil_1_content.style.display = "block";
    }else{
        fil_1.style.backgroundColor = "rgb(230, 230, 230)";
        fil_1.style.color = "rgb(0, 0, 0)";

        fil_1_content.style.display = "none";
    }
    if (case_fil == 2) {
        fil_2.style.backgroundColor = "rgb(40, 40, 40)";
        fil_2.style.color = "rgb(255, 255, 255)";

        fil_2_content.style.display = "block";
    }else{
        fil_2.style.backgroundColor = "rgb(230, 230, 230)";
        fil_2.style.color = "rgb(0, 0, 0)";

        fil_2_content.style.display = "none";
    }
    if (case_fil == 3) {
        fil_3.style.backgroundColor = "rgb(40, 40, 40)";
        fil_3.style.color = "rgb(255, 255, 255)";

        fil_3_content.style.display = "block";
    }else{
        fil_3.style.backgroundColor = "rgb(230, 230, 230)";
        fil_3.style.color = "rgb(0, 0, 0)";

        fil_3_content.style.display = "none";
    }
    if (case_fil == 4) {
        fil_4.style.backgroundColor = "rgb(40, 40, 40)";
        fil_4.style.color = "rgb(255, 255, 255)";

        fil_4_content.style.display = "block";
    }else{
        fil_4.style.backgroundColor = "rgb(230, 230, 230)";
        fil_4.style.color = "rgb(0, 0, 0)";

        fil_4_content.style.display = "none";
    }
    if (case_fil == 5) {
        fil_5.style.backgroundColor = "rgb(40, 40, 40)";
        fil_5.style.color = "rgb(255, 255, 255)";

        fil_5_content.style.display = "block";
    }else{
        fil_5.style.backgroundColor = "rgb(230, 230, 230)";
        fil_5.style.color = "rgb(0, 0, 0)";

        fil_5_content.style.display = "none";
    }
    if (case_fil == 6) {
        fil_6.style.backgroundColor = "rgb(40, 40, 40)";
        fil_6.style.color = "rgb(255, 255, 255)";

        fil_6_content.style.display = "block";
    }else{
        fil_6.style.backgroundColor = "rgb(230, 230, 230)";
        fil_6.style.color = "rgb(0, 0, 0)";

        fil_6_content.style.display = "none";
    }
    if (case_fil == 7) {
        fil_7.style.backgroundColor = "rgb(40, 40, 40)";
        fil_7.style.color = "rgb(255, 255, 255)";

        fil_7_content.style.display = "block";
    }else{
        fil_7.style.backgroundColor = "rgb(230, 230, 230)";
        fil_7.style.color = "rgb(0, 0, 0)";

        fil_7_content.style.display = "none";
    }
    if (case_fil == 8) {
        fil_8.style.backgroundColor = "rgb(40, 40, 40)";
        fil_8.style.color = "rgb(255, 255, 255)";

        fil_8_content.style.display = "block";
    }else{
        fil_8.style.backgroundColor = "rgb(230, 230, 230)";
        fil_8.style.color = "rgb(0, 0, 0)";

        fil_8_content.style.display = "none";
    }
    if (case_fil == 9) {
        fil_9.style.backgroundColor = "rgb(40, 40, 40)";
        fil_9.style.color = "rgb(255, 255, 255)";

        fil_9_content.style.display = "block";
    }else{
        fil_9.style.backgroundColor = "rgb(230, 230, 230)";
        fil_9.style.color = "rgb(0, 0, 0)";

        fil_9_content.style.display = "none";
    }
    if (case_fil == 10) {
        fil_10.style.backgroundColor = "rgb(40, 40, 40)";
        fil_10.style.color = "rgb(255, 255, 255)";

        fil_10_content.style.display = "block";
    }else{
        fil_10.style.backgroundColor = "rgb(230, 230, 230)";
        fil_10.style.color = "rgb(0, 0, 0)";

        fil_10_content.style.display = "none";
    }
    // if (case_fil == 11) {
    //     fil_11.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_11.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_11.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_11.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 12) {
    //     fil_12.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_12.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_12.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_12.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 13) {
    //     fil_13.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_13.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_13.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_13.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 14) {
    //     fil_14.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_14.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_14.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_14.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 15) {
    //     fil_15.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_15.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_15.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_15.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 16) {
    //     fil_16.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_16.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_16.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_16.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 17) {
    //     fil_17.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_17.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_17.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_17.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 18) {
    //     fil_18.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_18.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_18.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_18.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 19) {
    //     fil_19.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_19.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_19.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_19.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 20) {
    //     fil_20.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_20.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_20.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_20.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 21) {
    //     fil_21.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_21.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_21.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_21.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 22) {
    //     fil_22.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_22.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_22.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_22.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 23) {
    //     fil_23.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_23.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_23.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_23.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 24) {
    //     fil_24.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_24.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_24.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_24.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 25) {
    //     fil_25.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_25.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_25.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_25.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 26) {
    //     fil_26.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_26.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_26.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_26.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 27) {
    //     fil_27.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_27.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_27.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_27.style.color = "rgb(0, 0, 0)";
    // }
    // if (case_fil == 28) {
    //     fil_28.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_28.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_28.style.backgroundColor = "rgb(230, 230, 230)";
    //     fil_28.style.color = "rgb(0, 0, 0)";
    // }


    
    // if (case_fil == 1) {
    //     fil_1.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_1.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 2) {
    //     fil_2.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_2.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 3) {
    //     fil_3.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_3.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 4) {
    //     fil_4.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_4.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 5) {
    //     fil_5.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_5.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 6) {
    //     fil_6.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_6.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 7) {
    //     fil_7.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_7.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 8) {
    //     fil_8.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_8.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 9) {
    //     fil_9.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_9.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 10) {
    //     fil_10.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_10.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 11) {
    //     fil_11.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_11.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 12) {
    //     fil_12.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_12.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 13) {
    //     fil_13.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_13.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 14) {
    //     fil_14.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_14.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 15) {
    //     fil_15.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_15.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 16) {
    //     fil_16.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_16.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 17) {
    //     fil_17.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_17.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 18) {
    //     fil_18.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_18.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 19) {
    //     fil_19.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_19.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 20) {
    //     fil_20.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_20.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 21) {
    //     fil_21.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_21.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 22) {
    //     fil_22.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_22.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 23) {
    //     fil_23.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_23.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 24) {
    //     fil_24.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_24.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 25) {
    //     fil_25.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_25.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 26) {
    //     fil_26.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_26.style.color = "rgb(255, 255, 255)";
    // }else if (case_fil == 27) {
    //     fil_27.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_27.style.color = "rgb(255, 255, 255)";
    // }else{
    //     fil_28.style.backgroundColor = "rgb(40, 40, 40)";
    //     fil_28.style.color = "rgb(255, 255, 255)";
    // }
    
}


function fil_act1() {
    case_fil = 1;
    cod_act();
    preloader_of_filter_act();
}
function fil_act2() {
    case_fil = 2;
    cod_act();
    preloader_of_filter_act();
}
function fil_act3() {
    case_fil = 3;
    cod_act();
    preloader_of_filter_act();
}
function fil_act4() {
    case_fil = 4;
    cod_act();
    preloader_of_filter_act();
}
function fil_act5() {
    case_fil = 5;
    cod_act();
    preloader_of_filter_act();
}
function fil_act6() {
    case_fil = 6;
    cod_act();
    preloader_of_filter_act();
}
function fil_act7() {
    case_fil = 7;
    cod_act();
    preloader_of_filter_act();
}
function fil_act8() {
    case_fil = 8;
    cod_act();
    preloader_of_filter_act();
}
function fil_act9() {
    case_fil = 9;
    cod_act();
    preloader_of_filter_act();
}
function fil_act10() {
    case_fil = 10;
    cod_act();
    preloader_of_filter_act();
}
function fil_act11() {
    case_fil = 11;
    cod_act();
    preloader_of_filter_act();
}
function fil_act12() {
    case_fil = 12;
    cod_act();
    preloader_of_filter_act();
}
function fil_act13() {
    case_fil = 13;
    cod_act();
    preloader_of_filter_act();
}
function fil_act14() {
    case_fil = 14;
    cod_act();
    preloader_of_filter_act();
}
function fil_act15() {
    case_fil = 15;
    cod_act();
    preloader_of_filter_act();
}
function fil_act16() {
    case_fil = 16;
    cod_act();
    preloader_of_filter_act();
}
function fil_act17() {
    case_fil = 17;
    cod_act();
    preloader_of_filter_act();
}
function fil_act18() {
    case_fil = 18;
    cod_act();
    preloader_of_filter_act();
}
function fil_act19() {
    case_fil = 19;
    cod_act();
    preloader_of_filter_act();
}
function fil_act20() {
    case_fil = 20;
    cod_act();
    preloader_of_filter_act();
}
function fil_act21() {
    case_fil = 21;
    cod_act();
    preloader_of_filter_act();
}
function fil_act22() {
    case_fil = 22;
    cod_act();
    preloader_of_filter_act();
}
function fil_act23() {
    case_fil = 23;
    cod_act();
    preloader_of_filter_act();
}
function fil_act24() {
    case_fil = 24;
    cod_act();
    preloader_of_filter_act();
}
function fil_act25() {
    case_fil = 25;
    cod_act();
    preloader_of_filter_act();
}
function fil_act26() {
    case_fil = 26;
    cod_act();
    preloader_of_filter_act();
}
function fil_act27() {
    case_fil = 27;
    cod_act();
    preloader_of_filter_act();
}
function fil_act28() {
    case_fil = 28;
    cod_act();
    preloader_of_filter_act();
}

let preloader_of_filter = document.getElementById("preloader_of_filter");
let loaded = document.getElementById("loaded");
let loading = document.getElementById("loading");

function preloader_of_filter_act() {
    window.scrollTo(0,0);
    preloader_of_filter.style.display = "flex";
    setTimeout(() => {
        loading.style.rotate = "180deg";

        loaded.style.rotate = "360deg";
        loaded.style.transition = "1s";

        loaded.style.width = "50px";
        loading.style.width = "50px";
        // loaded.style.height = "50px";
        // loading.style.height = "50px";
        return;
    }, 100);
    setTimeout(() => {
        loading.style.rotate = "0deg";
        loaded.style.rotate = "0deg";
        preloader_of_filter.style.display = "none";

        loaded.style.width = "0px";
        loading.style.width = "0px";
        // loaded.style.height = "0px";
        // loading.style.height = "0px";
        return;
    }, 1000);
}









