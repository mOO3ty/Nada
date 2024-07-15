///<reference types="../@types/jquery"/>


$(function () {


$('.lds-ring').fadeOut(1000,function () {
    $(".loadingScreen").slideUp(1000, function () {
        $("body").css("overflow", "auto")
        $(".loadingScreen").remove()
    })
    
})

})









$('.navOpen').on("click",function () {
    $('.navs').animate({ left:"0px"  } ,500)
    $('.mainContent').animate({ width:"50%", marginRight:"0px"  } ,500)
    $('.mainHome h1 , .mainHome p').animate({  marginLeft:"100px"  } ,500)
    $('.navOpen i').animate({marginLeft:"-60px"},1000)

    
})
$('.closeIcone').on("click",function () {
    $('.navs').animate({ left:"-250px"  } ,700)

    $('.mainContent').animate({ width:"90%", marginRight:"150px"  } ,900)
    $('.mainHome h1 , .mainHome p').animate({  marginLeft:"0px"  } ,900)
    $('.navOpen i').animate({marginLeft:"0px"},900)
$('body , html').animate({scrollTop:"0"},1)


    
})


$('#dropDown h2').on("click",function (e) {
// $(e.target).next().slideDown(1000)
$(e.target).next().animate({height: "toggle"},1000)
$(e.target).next().siblings("#dropDown div").slideUp(1000)

})
let countDownDate = new Date("Jan 1, 2025 12:00:00").getTime();
// let countDownDate = new Date("July 6, 2024 15:37:25").getTime();
let x =setInterval(function () {
    let now = new Date().getTime();
    let diff = countDownDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $("#duration .days").html(days +" "+"D")
    $("#duration .hours").html(hours +" "+"h")
    $("#duration .minutes").html(minutes +" "+"m")
    $("#duration .seconds").html(seconds+" " +"s")
      

    if (diff < 0) {
        clearInterval(x);
        $("#duration .days").html("EXPIRED Days")
        $("#duration .hours").html("EXPIRED Hours")
        $("#duration .minutes").html("EXPIRED Minutes")
        $("#duration .seconds").html("EXPIRED Seconds")
      }
},1000)

$("#home aside a").on("click",function (e) {

let secoffset=$(e.target.getAttribute("href")).offset().top
$('body ,html').animate({scrollTop:secoffset},2200)
    
})
let maxLength = 100;

$('textarea').on("keyup",function (e) {
    let difference = maxLength - $('textarea').val().length;
    if(difference > 0){
      $('#Contact .item2 p span').text(difference);
    }else{
      $('#Contact .item2 p span').text(" your available character finished");

       
    }
    })


  