setInterval(() => {
    const url = document.URL;
    const about_url = "http://localhost/pageloader-main/about";
    const contact_url = "http://localhost/pageloader-main/contact";
    const suport_url = "http://localhost/pageloader-main/suport";
    const blog_url = "http://localhost/pageloader-main/blog";

    
    if (url == about_url || url == contact_url || url == suport_url || url == blog_url ){
        document.getElementById("Data_Main").style.height = "0";
        document.getElementById("Data_Main").style.paddingTop = "0";
        document.getElementById("footer_main").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("Data_Main").style.opacity = "0";
            document.getElementById("footer_main").style.opacity = "0";
        }, 1000);
    }else{
        document.getElementById("Data_Main").style.height = "200vh";
        document.getElementById("Data_Main").style.paddingTop = "250px";
        setTimeout(() => {
            document.getElementById("Data_Main").style.opacity = "1";
            document.getElementById("footer_main").style.opacity = "1";

        }, 1000);
    }
}, 100);