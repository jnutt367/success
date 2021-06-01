let ginger = gsap.timeline()

.fromTo("h1", { y: -1000, x: 100, opacity: 0 }, { duration: 2, x: 0, ease: "elastic", fontSize: "30", fontFamily: "Open Sans", y: 0, opacity: 1 }, 10)
    .to("li", { duration: 2, scale: 1.2, ease: "elastic", color: "orange" })
    .fromTo("body", { backgroundColor: "transparent", opacity: 0 }, { duration: 10, backgroundColor: "orange", opacity: 1 }, 0)
    .to("body", { duration: 6, backgroundColor: "black" }, 10)