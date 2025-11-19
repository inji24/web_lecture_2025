export default async function main() {
    console.log('start App')

    let currentIndex = 0;
    const menuitems = document.querySelectorAll(".menu-item");
    /* menu-item인 class를 다가져와라 index.html의 <div class="menu-item" */

    console.log(menuitems)

    menuitems[currentIndex].classList.add("select")

   window.addEventListener("keydown", (e) => {

    console.log(e.key)

    menuitems[currentIndex].classList.remove('select')

    if(e.key == "ArrowUp") {
        currentIndex--
    }

        if(currentIndex < 0) {
            currentIndex = 2
        }

    else if(e.key == "ArrowDown") {
        currentIndex++
        currentIndex %= 3
    }

    console.log(currentIndex)
    menuitems[currentIndex].classList.add('select')

    })

    /*키보드 다운*/



    /*var a = 1
    console.log(a)
    a = 7
    console.log(a)

    let b = 1
    console.log(b)
    b = 8 + a
    console.log(b)

    var a = 2;
    console.log(a)

    b = 3
    console.log(b)

    const c = 1
    console.log(c)
    c = 3
    console.log(c)*/



}