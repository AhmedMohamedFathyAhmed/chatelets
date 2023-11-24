var clickSetting=document.querySelector(".setting-box-icon .fas ");
console.log(clickSetting);
clickSetting.onclick=function(){ 
   this.classList.toggle("fa-spin");
   console.log(this);
   document.querySelector(".setting-box").classList.toggle("open");
}

// click color black


$(".color-gold").click(function(){ 
   $(".animate").css({"color":"#a17110"});
   $(".paragraph").css({"color":"#a17110"});
   $(".cover-icon").css({"background-color":"#a17110"});
   $(".button").css({"background-color":"#a17110", "border":"none"});
   console.log("gooo");
  
})


$(".color-bnafsge").click(function(){ 
   $(".color-bnafsge").css("color");
      $(".animate").css({"color":"#b335c5"});
   $(".paragraph").css({"color":"#b335c5"});
   $(".cover-icon").css({"background-color":"#b335c5"});
   $(".button").css({"background-color":"#b335c5", "border":"none"});
  
})



$(".color-green").click(function(){ 
   $(".color-green").css("color");
      $(".animate").css({"color":"rgb(33 231 154)"});
   $(".paragraph").css({"color":"rgb(33 231 154)"});
   $(".cover-icon").css({"background-color":"rgb(33 231 154)"});
   $(".button").css({"background-color":"rgb(33 231 154)", "border":"none"});
})


$(".color-orange").click(function(){ 
   $(".color-orange").css("color");
      $(".animate").css({"color":"orange"});
   $(".paragraph").css({"color":"orange"});
   $(".cover-icon").css({"background-color":"orange"});
   $(".button").css({"background-color":"orange", "border":"none"});
  
})


$(".color-blue").click(function(){ 
   $(".color-blue").css("color");
      $(".animate").css({"color":"#17a2b8d4"});
   $(".paragraph").css({"color":"#17a2b8d4"});
   $(".cover-icon").css({"background-color":"#17a2b8d4"});
   $(".button").css({"background-color":"#17a2b8d4", "border":"none"});
  
})


const person = {
   firstName: "John",
   lastName : "Doe",
   id     : 5566,
   fullName : function() {
     return this.firstName + " " + this.lastName;
   }
 };
 
 // Display data from the object:
 document.getElementById("demo").innerHTML = person.fullName;

// $(window).load(function(){

//     var body = $("body"),
//         universe = $("#universe"),
//         solarsys = $("#solar-system");
  
//     var init = function() {
//       body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
//         $(this).removeClass('hide-UI').addClass("set-speed");
//         $(this).dequeue();
//       });
//     };
  
//     var setView = function(view) { universe.removeClass().addClass(view); };
  
//     $("#toggle-data").click(function(e) {
//       body.toggleClass("data-open data-close");
//       e.preventDefault();
//     });
  
//     $("#toggle-controls").click(function(e) {
//       body.toggleClass("controls-open controls-close");
//       e.preventDefault();
//     });
  
//     $("#data a").click(function(e) {
//       var ref = $(this).attr("class");
//       solarsys.removeClass().addClass(ref);
//       $(this).parent().find('a').removeClass('active');
//       $(this).addClass('active');
//       e.preventDefault();
//     });
  
//     $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
//     $(".set-zoom").click(function() { body.toggleClass("zoom-large zoom-close"); });
//     $(".set-speed").click(function() { setView("scale-stretched set-speed"); });
//     $(".set-size").click(function() { setView("scale-s set-size"); });
//     $(".set-distance").click(function() { setView("scale-d set-distance"); });
  
//     init();
  
//   });