// true = light, false = dark
var theme = true

theme = localStorage.getItem("theme");
document.body.setAttribute("theme", theme);

function switchTheme()
{
    theme = !theme;
    document.body.setAttribute("theme", theme)
    localStorage.setItem("theme", theme)
}

/*
competenza alfabetica funzionale, *
competenza multilinguistica,
competenza matematica e competenza in scienze, tecnologie e ingegneria, *
competenza digitale, *
competenza personale, sociale e capacità di imparare a imparare, *
competenza in materia di cittadinanza, *
competenza imprenditoriale,
competenza in materia di consapevolezza ed espressione culturali
*/