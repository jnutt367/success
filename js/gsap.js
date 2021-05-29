let ginger = gsap.timeline()

.fromTo("h1", { y: -1000, x: 100, opacity: 0 }, { duration: 2, x: 0, ease: "elastic", fontFamily: "fantasy", y: 0, opacity: 1 }, 10);

gsap.fromTo("body", { opacity: 0 }, { opacity: 1 }, 5)