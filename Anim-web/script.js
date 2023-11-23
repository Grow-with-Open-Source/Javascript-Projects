var crsr = document.querySelector("#cursor")
var big = document.querySelector("#big-curs")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ "px"
    crsr.style.top = dets.y + "px"
    big.style.left = dets.x - 150 + "px"
    big.style.top = dets.y - 150 + "px"
})

var h3all = document.querySelectorAll("#nav h3")
h3all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "100px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers: true,
        start: "top 0%",
        end: "top -5%",
        scrub: 1,
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -90%",
        scrub: 1,
    }
})
gsap.from("#about img, #about #ab1 ",{
    y:30,
    opacity: 0,
    duration: 0.1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers: true,
        start: "top 88%",
        end: " top 85%"
    }
})
gsap.from("#page2 #cards .card",{
    scale: 0.5,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        // markers: true,
        start: "top 88%",
        end: " top 85%"
    }
})
gsap.from("#page3 #para #img1",{
    x:-30,
    y:-30,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#para",
        scroller: " body",
        start: "top 88%",
        end: "top 85%",
    }
})
gsap.from("#page3 #para #img2",{
    x:30,
    y:30,
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger:"#para",
        scroller: " body",
        start: "top 88%",
        end: "top 85%",
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        start: "top 88%",
        end: "top 85%",
    }
})