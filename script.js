// true = light, false = dark
var theme = true

document.body.setAttribute("theme", theme);
// document.addEventListener("mousedown", () => {switchTheme()})

function switchTheme()
{
    theme = !theme;
    document.body.setAttribute("theme", theme)
}