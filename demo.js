// Initialize Shery.js functions
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  images: ["photos/ad1.jpg", "photos/ad5.jpg", "photos/ad4.jpg"]
});

// Use GSAP with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Pin and animate elements in .fleftelm
gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
  y: "-300%",
  ease: "power1.out"
});

// Ensure sections are correctly selected
let sections = document.querySelectorAll(".fleftelm");
let images = document.querySelectorAll(".images img");

// Implement Shery.js image effect with proper ScrollTrigger configuration
Shery.imageEffect(".images img", "", {
  style: 5,
  slideStyle: (setScroll) => {
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (prog) => {
          setScroll(prog.progress + index);
          // Animate corresponding image
          gsap.to(images[index], {
            y: prog.progress * -100 + "%",
            ease: "power1.out"
          });
        }
      });
    });
  }
});


Shery.textAnimate(".txt" /* Element to target.*/, {
    //Parameters are optional.
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  Shery.textAnimate(".style" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

Shery.imageEffect(".img", {
    style: 6,
    // debug: true,
    config: {"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.346666576244213},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.85,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });

// Shery.imageEffect(".img", {
//     style: 2 /*OR 5 for different variant */,
//     debug: true,
//   });