$(document).ready(function(){
            $(".Education_container").on("click mouseenter",function(){
                $(this).children(".Education_details").show("slow");
            })

            $(".Education_container").on("mouseleave",function(){
                $(this).children(".Education_details").hide("slow");
            })

            $(".courseContainer").on("click mouseenter",function(){
                $(this).find(".courseDetails").show("slow");
            })

            $(".courseContainer").on("mouseleave",function(){
                $(this).find(".courseDetails").hide("slow");
            })
            $("#contact").on("click",function(){
                $(this).children("#contactDetails").toggle();
            })

            
    window.onscroll = function() {myFunction()};
      
    var navlist = document.getElementById("navigation");
    var sticky = navlist.offsetTop;
    function myFunction() {
        if (window.scrollY >= sticky) {
            navlist.classList.add("sticky")
        } 
          else {
              navlist.classList.remove("sticky");
          }
    }
});




