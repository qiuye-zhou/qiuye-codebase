window.onload = () => {
    let button = document.getElementsByTagName("button");
    let result = document.querySelector(".result");
    let ac = document.querySelector("#ac");
    let bs = document.querySelector("#bs");
    let prev = document.querySelector("#prev");
    let getresult = document.querySelector("#getresult");
    let prevnum = "";
    for (let i = 0; i < button.length; ++i) {
        button[i].onmousedown = function () {
            this.classList.add("show");
        }
        button[i].onmouseup = function () {
            this.classList.remove("show");
        }
        if (i !== 0 && i !== 3 && i !== 15 && i !== 19) {
            button[i].onclick = function () {
                result.innerHTML += this.innerHTML;
            }
        }
    }
    getresult.onclick = () => {
        prevnum = result.innerHTML = eval(result.innerHTML);
    }
    ac.onclick = () => {
        result.innerHTML = "";
    }
    bs.onclick = () => {
        let re = result.innerHTML;
        result.innerHTML = re.slice(0, re.length - 1);
    }
    prev.onclick = () => {
        result.innerHTML += prevnum;
    }
    console.warn("简单的web计算器demo\nC清空\nB退格\nP上一次的计算结果")
}