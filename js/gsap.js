let ginger = gsap.timeline()

.fromTo("h1", { y: -1000, x: 100, opacity: 0 }, { color: "skyblue", duration: 2, x: 0, ease: "elastic", fontSize: "30", fontFamily: "cursive", y: -130, opacity: 1 }, 10)
    .to("li", { duration: 2, scale: 1.2, ease: "elastic", color: "skyblue" })
    .fromTo("body", { backgroundColor: "transparent", opacity: 0 }, { duration: 10, backgroundColor: "black", opacity: 1 }, 0)
    .to("h2", { color: "white", fontFamily: "serif", borderRadius: "10" })
    .to("body", { duration: 6, backgroundColor: "black" }, 10)
    .fromTo("h3", { x: -300, y: -250 }, { x: 55, y: -270, color: "skyblue" }, 10)
    .to("h3", { duration: 3, fontFamily: "sans serif" }, 11)
let title = gsap.timeline()

.to("h1", { duration: 5, ease: "elastic", fontFamily: "serif" }, 11)
    .to("#hire", { y: -850, padding: "10", border: "1px solid grey", duration: 5, display: "grid", width: "50%" }, 3)
    .to("#name", { duration: 5, scale: 1.2, ease: "elastic", color: "skyblue" }, 10)