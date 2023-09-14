const ipt1 = document.getElementById("ip1");
const ipt2 = document.getElementById("ip2");
const ipt3 = document.getElementById("ip3");
const ipt4 = document.getElementById("ip4");
const ipt5 = document.getElementById("ip5");
const ipt6 = document.getElementById("ip6");
const ipt7 = document.getElementById("ip7");
const ipt8 = document.getElementById("ip8");
const ipt9 = document.getElementById("ip9");

const btn = document.getElementById("btn");

btn.onclick = ()=>{
    console.log(ipt1.value+ipt2.value+ipt3.value+ipt4.value+ipt5.value+ipt6.value+ipt7.value+ipt8.value+ipt9.value)
}