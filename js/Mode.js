const home = document.getElementById('home')
const menu = document.getElementById('menu')
const mode = document.querySelector('.mode')
const getInfo = document.getElementById('info')
const infoName = document.getElementById('info-name')
const infoCode = document.getElementById('info-code')

// Back to Main Menu
home.addEventListener('click', function () {
    showFade(mode)
    hideFade(getInfo)
    showFade(infoCode)
})
// For Host and Join Modes
mode.addEventListener('click', function (e) {
    switch (e.target.getAttribute('id')) {
        case 'host':
            HostMode()
            localStorage.setItem("mode", "host");
            break;
        case 'join':
            JoinMode()
            localStorage.setItem("mode", "join");
            break;

        default:
            break;
    }
})
function HostMode() {
    hideFade(mode)
    showFade(getInfo)
    hideFade(infoCode)

}
function JoinMode() {
    hideFade(mode)
    showFade(getInfo)

}
function hideFade(idName) {
    idName.style.display = "none"
}
function showFade(idName) {
    idName.style.display = "unset"
}


