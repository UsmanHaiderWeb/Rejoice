function startVideo(a, b, c) {
  if (window.innerWidth > 700) {
    a.addEventListener("mouseenter", function () {
      if (c) {
        gsap.to(c,{opacity: 0, duration: 0.5})
        b.classList.remove("opacity-0")
      }
      let video = b;
      video.play()
    })
    a.addEventListener("mouseleave", function () {
      if (c) {
        gsap.to(c,{opacity: 1, duration: 0.5, onComplete: () => b.classList.add("opacity-0")})
      }
      let video = b;
      video.pause()
      video.currentTime = 0
    })
  } else if(window.innerWidth <= 700){
    let count = false
    gsap.to(a,{
      scrollTrigger: {
        trigger: b,
        scroller: "body",
        start: "top 60%",
        end: 'top 60%',
        scrub: true
      },
      onComplete: () => {
        if (c) {
          gsap.to(c,{opacity: 0, duration: 0.5})
          b.classList.remove("opacity-0")
        }
        let video = b;
        video.play()
      }
    })
    
    gsap.to(a,{
      scrollTrigger: {
        trigger: b,
        scroller: "body",
        start: "top -30%",
        end: 'top -30%',
        scrub: true
      },
      onComplete: () => {
        if (c) {
          gsap.to(c,{opacity: 1, duration: 0.5, onComplete: () => b.classList.add("opacity-0")})
        }
        let video = b;
        video.pause()
        video.currentTime = 0
      }
    })
  }
}
startVideo(document.querySelector(".video1"), document.querySelector(".video1 > video"), document.querySelector(".video1 > img"))
startVideo(document.querySelector(".video2"), document.querySelector(".video2 > video"), document.querySelector(".video2 > img"))
startVideo(document.querySelector(".video3"), document.querySelector(".video3 > video"), document.querySelector(".video3 > img"))




function loader() {
  let tl = gsap.timeline()
  document.querySelector("main").style.height = "110vh"
  document.querySelector("footer").style.display = "none"
  document.querySelector("nav").style.opacity = 0
  setTimeout(()=> {
    document.querySelector("main").style.height = "max-content"
    document.querySelector("footer").style.display = "flex"
  }, 4500)
  setTimeout(function () {
    tl.to(".loader h4 span",{
      opacity: 1,
      x: 0,
      duration: 2,
      stagger: 0.5,
      onComplete: function () {
        gsap.to(".loader", {
          opacity: 0,
          duration: 3
        })
      }
    })
    tl.to(".loader h4",{
      opacity: 0,
      duration: 0.2,
      stagger: 0,
      delay: 0.2
    })
    tl.to("nav", {
      opacity: 1,
      duration: 1,
    }, 'loader')
    tl.to(".rejouice span", {
      opacity: 1,
      y: 0,
      x: 0,
      ease: "back.out",
      duration: 0.8,
      stagger: .08
    }, 'loader')
  }, 2000)
}
loader()

function splitText(a, b) {
  let clutter = ""
  a.innerText.split(b).forEach(element => {
    if (b == " ") {
      clutter += ` <span> ${element} </span> `
      a.innerHTML = clutter;
    } else {
      clutter += `<span>${element}</span>`
      a.innerHTML = clutter;
    }
  });
}
splitText(document.querySelector(".rejouice"), "")
splitText(document.querySelector(".footerRejouice"), "")
splitText(document.querySelector(".page2_content"), " ")


function page2_content_animation() {
  gsap.from(".page2_content span", {
    y: 50,
    opacity: 0,
    stagger: 0.05,
    ease: "back.out",
    scrollTrigger: {
      trigger: ".page2_content",
      scroller: "body",
      start: "top 50%",
      end: "top 50%"
    }
  })
}
page2_content_animation()

function animate_pageHeadings(a) {
  gsap.from(a, {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: a,
      scroller: "body",
      start: "top 80%",
      end: "top 80%"
    }
  })
}
animate_pageHeadings(document.querySelectorAll(".page3Content"))
animate_pageHeadings(document.querySelectorAll(".about"))


function animateFooterRejouice() {
  gsap.from(".footerRejouice span", {
    opacity: 0,
    y: -100,
    ease: "back.out",
    duration: 0.8,
    stagger: .08,
    scrollTrigger: {
      trigger: "footer",
      scroller: "body",
      start: 'top 20%',
      end: "top 20%"
    }
  })
}
animateFooterRejouice()