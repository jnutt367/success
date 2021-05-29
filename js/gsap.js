let ginger = gsap.timeline()

.fromTo("h1", { y: -1000, x: 100, opacity: 0 }, { duration: 2, x: 0, ease: "elastic", fontFamily: "fantasy", y: 0, opacity: 1 }, 15)

.fromTo("body", { backgroundColor: "transparent", opacity: 0 }, { duration: 10, backgroundColor: "orange", opacity: 1 }, 2)
    .to("body", { duration: 6, backgroundColor: "black" }, 11)