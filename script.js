// For UI/UX 
const _home = document.getElementById('home')
const _menu = document.getElementById('menu')
const _mode = document.querySelector('.mode')
const _Join = document.getElementById('join')
const _getInfo = document.getElementById('info')
const _infoCode = document.getElementById('info-code')

// Back to Main Menu
_home.addEventListener('click', function () {
    showFade(_mode)
    hideFade(_getInfo)
    showFade(_infoCode)
    showFade(howto)
})

_Join.addEventListener('click', function () {
    hideFade(_mode)
    showFade(_getInfo)
    hideFade(howto)
})

function hideFade(idName) {
    idName.style.display = "none"
}
function showFade(idName) {
    idName.style.display = "block"
}

// "How to play" popup
document.getElementById('howto').addEventListener('click', function () {
    showFade(popupID)
    hideFade(_menu)

})
document.getElementById('closePop').addEventListener('click', function () {
    hideFade(popupID)
    showFade(_menu)
})





