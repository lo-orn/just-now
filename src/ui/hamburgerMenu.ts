
const navList = document.getElementById("navList") as HTMLUListElement
const hamburgerMenu = document.getElementById("hamburgerMenu") as HTMLSpanElement
console.log(hamburgerMenu)


export const toggleHamburgerMenuFunction = () => {
    hamburgerMenu.addEventListener("click", (e) => {
    e.stopPropagation()
    navList.classList.toggle("open")
    });

    document.addEventListener("click", (e) => {
        if(!hamburgerMenu.contains(e.target as Node) && !navList.contains(e.target as Node)){
            navList.classList.remove("open")
        }
    })

}
