<?php
   ini_set("error_reporting", 1);
   header("Cache-Control: no-cache, no-store, must-revalidate, max-age=0");
   header("Cache-Control: pre-check=0, post-check=0", false);
   header("Pragma: no-cache");

   if ( $_GET["rel"]!="page") {
?>
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Allahyari</title>
   <!-- <link rel="stylesheet" href="./src/style.css"> -->

   <link rel="icon" type="icon" href="./image_html/HASAN.png">

   <link rel="stylesheet" href="./src/css/_style_.css">
   <link rel="stylesheet" href="./src/css/_header_.css">
   <link rel="stylesheet" href="./src/css/_main_.css">
   <link rel="stylesheet" href="./src/css/_foot_.css">

   <link rel="stylesheet" href="./src/css/blog_.css">

                  <!-- Media-Query -->

   <link rel="stylesheet" href="./src/css/_media_Q.css">
</head>
<body>

    <!-- <section class="animation">
        <div class="A">

        </div>
        <div class="B">

        </div>
        <div class="C">

        </div>
        <div class="D">

        </div>
    </section> -->
    <nav class="nav_main" id="navigation_bar" onclick="C_O()">
        <div class="end_pageside" onclick="Down()">
            <div class="hover_A" id="Down_off" onclick="Down()">
                <div class="A" onclick="Down()">
                    <img src="./image_html/down-arrow.png">
                </div>
                <div class="p" onclick="Down()">
                    <p onclick="Down()">
                        Down off
                    </p>
                </div>
            </div>
            <div class="hover_absote" onclick="Down()">
                <div class="container" onclick="Down()">
                    <div class="hover">
                        <img class="B" src="./image_html/down-arrow_write.png">
                    </div>
                    <div class="p" onclick="Down()">
                        <p onclick="Down()">
                            Down off
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <section class="fixed">
        <header class="header_main" id="header">
            <div class="like_a_menu">
            <a href="index" rel="page"><div class="logo_space" onclick="fil_act1()" id="logo_space">
                    <div class="logo">
                        <div class="span_items">
                            <!-- <span class="A">
                                Hasan
                            </span>
                            <span class="B">
                                .Allahyari
                            </span> -->
                            <img src="./image_html/HASAN.png">

                        </div>
                    </div>
                </div>
            </a>
                <div class="desbat" id="desbat">
                    <div class="colum_one">
                        <div class="menu">
                            <ul>
                                <li>
                                    <a  href="blog" rel="page"><div class="hover"> Blog </div></a>
                                </li>
                                <li>
                                    <a href="contact" rel="page"> <div class="hover"> Contact </div></a>
                                </li>
                                <li>
                                    <a href="suport" rel="page"> <div class="hover"> Suport </div> </a>
                                </li>
                                <li>
                                    <a href="about" rel="page"> <div class="hover"> About </div> </a>
                                </li>
                            </ul>
                        </div>
                        <div class="menu_mini" onclick="menu_moble()">
                            <img src="./image_html/menu (2).png">
                        </div>
                    </div>
                    <div class="Subscribe">
                        <div class="search_bar" id="search_moble">
                            <div class="search" id="search_contain">
                                <div class="btn_A" id="search_moble_A" onclick="media()">
                                    <img src="./image_html/search.png">
                                </div>
                                <input type="text" class="search_ipt" placeholder="Search your own" id="search_ipt_moble">
                                <div class="btn_B" id="search_moble_B">
                                    <img src="./image_html/close.png">
                                </div>
                            </div>
                        </div>
                        <a href="https://www.youtube.com/@HassanAllahyari" target="_blank">
                            <div class="click">
                                Subscribe
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <div class="filter" id="menu_">
            <div class="hover">
                <ul>
                    <a href="index" rel="page"> <li id="fil_1" onclick="fil_act1()">All</li>            </a>
                    <a href="index" rel="page"> <li id="fil_2" onclick="fil_act2()">Ghadeer</li>        </a>
                    <a href="index" rel="page"> <li id="fil_3" onclick="fil_act3()">Abu_Bakr</li>       </a>
                    <a href="index" rel="page"> <li id="fil_4" onclick="fil_act4()">Omari_Scholars</li> </a>
                    <a href="index" rel="page"> <li id="fil_5" onclick="fil_act5()">Ayesha</li>         </a>
                    <a href="index" rel="page"> <li id="fil_6" onclick="fil_act6()">Dajjaliyya</li>     </a>
                    <a href="index" rel="page"> <li id="fil_7" onclick="fil_act7()">Sahaba</li>         </a>
                    <a href="index" rel="page"> <li id="fil_8" onclick="fil_act8()">Unknown</li>        </a>
                    <a href="index" rel="page"> <li id="fil_9" onclick="fil_act9()">Unknown</li>        </a>
                    <a href="index" rel="page"> <li id="fil_10" onclick="fil_act10()">Unknown</li>      </a>

                                        <!-- undifined -->

                    <!-- <li id="fil_11" onclick="fil_act11()">Nabi</li> -->
                    <!-- <li id="fil_12" onclick="fil_act12()">Home</li>
                    <li id="fil_13" onclick="fil_act13()">Trending</li>
                    <li id="fil_14" onclick="fil_act14()">New</li>
                    <li id="fil_15" onclick="fil_act15()">Funny</li>
                    <li id="fil_16" onclick="fil_act16()">Uneke</li>
                    <li id="fil_17" onclick="fil_act17()">Also </li>
                    <li id="fil_18" onclick="fil_act18()">Funny</li>
                    <li id="fil_19" onclick="fil_act19()">Uneke</li>
                    <li id="fil_20" onclick="fil_act20()">Also </li>
                    <li id="fil_21" onclick="fil_act21()">Imam</li>
                    <li id="fil_22" onclick="fil_act22()">Nabi</li>
                    <li id="fil_23" onclick="fil_act23()">Home</li>
                    <li id="fil_24" onclick="fil_act24()">Trending</li>
                    <li id="fil_25" onclick="fil_act25()">New</li>
                    <li id="fil_26" onclick="fil_act26()">Funny</li>
                    <li id="fil_27" onclick="fil_act27()">Uneke</li>
                    <li id="fil_28" onclick="fil_act28()">Also </li> -->

                                            <!-- End -->
                </ul>
            </div>
        </div>
   </section>
    <section class="menu_moble" id="menu_moble">
        <div class="menu">
            <ul>
                <li>
                    Blog
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Saport
                </li>
                <li>
                    About
                </li>
            </ul>
        </div>
    </section>

    <section class="preloader_of_filter" id="preloader_of_filter">
        <div id="loaded">
            <div id="loading"></div>
        </div>
    </section>

<main class="main_main" id="Data_Main">
        <div style="display: none;" class="content" id="fil_1_content">
            <h1>Section of "All"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_2_content">
            <h1>Section of "Ghadeer"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_3_content">
            <h1>Section of "Abu_Bakr"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_4_content">
            <h1>Section of "Omari_Scholars"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_5_content">
            <h1>Section of "Ayesha"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_6_content">
            <h1>Section of "Dajjaliyya"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_7_content">
            <h1>Section of "Sahaba"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_8_content">
            <h1>Section of "Unknown"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_9_content">
            <h1>Section of "Unknown"</h1>
        </div>
        <div style="display: none;" class="content" id="fil_10_content">
            <h1>Section of "Unknown"</h1>
        </div>
</main>
        
   <div class="content" id="load">
<?php } ?>