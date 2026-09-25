let color = document.querySelector('input.shift')
let flou = document.getElementById("blur")
let spacing = document.getElementById("spacing")


spacing.addEventListener("input", () => {
  document.documentElement.style.setProperty("--spacing",spacing.value + "vh")
})


flou.addEventListener("input", () => {
  document.documentElement.style.setProperty("--blur",flou.value + "vh")
})

color.addEventListener("input", () => {
  document.documentElement.style.setProperty("--color",color.value)
})
