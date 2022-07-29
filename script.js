
const toggle = document.querySelector(".toggle")
const bg = document.querySelector(".label")
const ball = document.querySelector(".ball")
const form = document.querySelector('.form')
document.querySelector('.homeb').addEventListener("click",()=>{
    document.querySelector('.homeb').scrollIntoView({behavior:"smooth"})
})  
document.querySelector('.aboutb').addEventListener("click",()=>{
    document.querySelector('.grsc').scrollIntoView({behavior:"smooth"})
})  
document.querySelector('.whyp').addEventListener("click",()=>{
    document.querySelector('.work').scrollIntoView({behavior:"smooth"})
})  
var body = document.body
// if(document.body.style.backgroundColor === "rgb(33, 34, 39)"){
    // if(document.getElementsByTagName("body").style.backgroundColor === "#212227")
// toggle.addEventListener("click",async()=>{
function start(){
    const form = document.querySelector('.form')
    form.scrollIntoView({behavior:"smooth"})
    d.querySelector('.form').scrollIntoView()
}
// form.addEventListener("")
ScrollReveal({reset:true,distance:"600px",duration:2000,delay:100})
ScrollReveal().reveal('.form',{delay:200,"origin":"left"})
ScrollReveal().reveal('.para',{delay:200,"origin":"top",reset:false})
ScrollReveal().reveal('.started',{delay:200,"origin":"top",reset:false})
ScrollReveal().reveal('.growth',{delay:200,"origin":"bottom",reset:true})
ScrollReveal().reveal('.gpara',{delay:200,"origin":"bottom",reset:true})
ScrollReveal().reveal('.title',{delay:200,"origin":"top",reset:false})
ScrollReveal().reveal('.icons',{delay:200,"origin":"right",reset:true})
ScrollReveal().reveal('.why',{delay:200,"origin":"top",reset:true})
ScrollReveal().reveal('.how',{delay:200,"origin":"right",reset:true})
ScrollReveal().reveal('.se',{delay:200,"origin":"left",reset:true})
ScrollReveal().reveal('.tw',{delay:200,"origin":"right",reset:true})
ScrollReveal().reveal('.ac',{delay:200,"origin":"top",reset:true})
body.style.backgroundColor = "rgb(33, 34, 39)"
type.style.backgroundColor = "rgb(33, 34, 39)"
document.querySelector(".gpara").style.color = "white"
document.querySelector('.navbar').style.backgroundColor = "rgb(33, 34, 39)"
function Darkmode(){

    const checkbox = document.querySelector(".checkbox")
    if(checkbox.checked){
        body.style.backgroundColor = "white"
        body.style.transition = "ease-in-out"
        type = document.querySelector('.container')
        // type.style.backgroundColor = "white"
        document.querySelector(".gpara").style.color = "black"
        document.querySelector(".navbar").style.color = "black"
        const navbar = document.getElementById("nav")
        navbar.style.background = "white"
        
        // bg.style.backgroundColor = "white"
        // ball.style.backgroundColor = "rgb(33, 34, 39)"
    }
    else{
        type = document.querySelector('.container')
        body.style.backgroundColor = "rgb(33, 34, 39)"
        // type.style.backgroundColor = "rgb(33, 34, 39)"
        document.querySelector(".gpara").style.color = "white"
        document.querySelector('.navbar').style.backgroundColor = "rgb(33, 34, 39)"
        document.querySelector('.navbar').style.color = "white"
        // bg.style.backgroundColor = "rgb(33, 34, 39)"
        // ball.style.backgroundColor = "white"
    }
}
// insta = 1200
// likedin = 0
// facebook = 0
// logolinkedin = d.querySelector(".fa-linkedin")
// logoyt = d.querySelector('.fa-youtube')
// igfollows = document.querySelector('.igf')
// start = true
// i = 0 
// if(start === true){
//     i = i++
//     setTimeout(()=>{

//         igfollows.innerText = i
//     },10)

// }
//     // })
// }