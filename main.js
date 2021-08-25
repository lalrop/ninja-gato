function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const images =["cat0.png","cat1.png","cat2.png","cat3.png","cat4.png",
            "ninja0.png","ninja1.png","ninja2.png","ninja3.png","ninja4.png"
] 

$(function(){
    $("img").on("click", function () {
        $(this).attr("src","img/"+images[getRandomInt(10)])  ;
    });
})
