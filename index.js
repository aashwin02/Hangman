/*var words = "abcd" ;

for (let index = 0 ; index < words.length ; index++) {
    
    
}

for ( var i = 0 ; i < 3 ; i++ ) {
    alert(i) ;
    document.querySelectorAll(".kb")[i].addEventListener("click" , function() {
        alert("b"+ i) ;
        document.querySelectorAll(".par")[i].innerHTML = this.innerHTML ;
        /*alert("hi") ;
    })
}
/*document.querySelector(".kb").addEventListener("click" , function() {
    document.querySelector(".par").innerHTML = this.innerHTML ;
    /*alert("hi") ;*/
/*})*/
const arr = ["SCARF" , "HOODIE"] ;
const size_arr = arr.length ;
//const ind = Math.floor(Math.random()*size_arr) ;
var ans = arr[Math.floor(Math.random()*size_arr)] ;
var guessed = 0 ;
var size = ans.length ;
var lives = 6 ;

for ( var i = 0 ; i < size ; i++ ) {
    var new_div = document.createElement("div") ;
    new_div.classList.add("par") ;
    document.querySelector(".game").appendChild(new_div) ;
    new_div.innerHTML = "<h3>" + ans[i] + "</h3>" ;
    document.querySelectorAll(".par h3")[i].className = ans[i] ;
    //new_div.innerHTML = "<h3>" + ans[i] + "</h3>" ;
}
//put classes in order in which they appear for query selector
for ( var i = 0 ; i < size ; i++ ) {
    var a = 0 ; 
    while (true) {
        if ( document.querySelectorAll("." + ans[i])[a].style.visibility == "hidden" ) {
            a++ ;
        }
        else {
            document.querySelectorAll("." + ans[i])[a].style.visibility = "hidden" ;
            break ;
        }
    }
}

for ( var i = 0 ; i < 26 ; i++ ) {
    document.querySelectorAll(".kb")[i].addEventListener("click" , function () {
        eve(this) ;
    }) ;
}

function eve( th ) {
    if ( ans.includes(th.innerHTML) == true ) {
        var b = 0 ;
        var same = document.querySelectorAll("." + th.innerHTML) ;
        for ( var i = 0; i < same.length; i++) {
            same[i].style.visibility = "visible" ;
        }
        guessed = guessed + same.length ;
        if ( guessed == size ) {
            document.querySelector(".rem_live").innerHTML = "<h3>You WON the game</h3>" ;
            document.querySelector(".keyboard").style.visibility = "hidden" ;
        }
    }
    else {
        lives-- ;
        if ( lives == 0 ) {
            document.querySelector(".rem_live").innerHTML = "<h3>You are Hanged</h3>" ;
            document.querySelector(".keyboard").style.visibility = "hidden" ;
        }
        else {
            document.querySelector(".rem_live").innerHTML = "<h3>Remaining lives : " + lives + "</h3" ;
        }
        document.querySelector("#pic").setAttribute("src" , "images/Man" + lives + ".png") ;
    }
    th.disabled = true ;
    //document.querySelectorAll(".par").innerHTML = Event.innerHTML ;
}