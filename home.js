const burg=document.querySelector(".burg")

burg.addEventListener("click",click)

   console.log(burg) 



function click(){

    const ull=document.querySelector(".ull");

    // ull.style.display="block";

    ull.style.transform="translateX(-1px)";

    const header=document.querySelector("header");

  ull.style.transition="transform 2s";



}

