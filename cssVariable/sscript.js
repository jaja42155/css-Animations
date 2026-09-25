let color = document.getElementById('chooser')

color.addEventListener('input', SetProperty)

function SetProperty() {
 document.documentElement.style.setProperty('--main-color', color.value)
}