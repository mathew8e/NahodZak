// js main script
var ZakoveInp
var ZakoveArr

function vypoc(){
    ZakoveInp = document.getElementsByClassName('Zakinput')[0].value
    ZakoveArr = ZakoveInp.split(",")
    for (var i = 0; i<ZakoveArr.length; i++){
        ZakoveArr[i] = ZakoveArr[i].trim()
    }
    document.getElementsByClassName("outp")[0].innerText = ZakoveArr[Math.floor(Math.random() * (ZakoveArr.length))]
}