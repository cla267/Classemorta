// true = light, false = dark
var theme = true
var UserDataPath;
var stat;
var stats = [];

let go = false;

var jsonFile = [
    {
      "name": "ALFABETICA FUNZIONALE",
      "indicators": [
        "Analisi e comprensione delle informazioni (domande, libro di testo, videolezioni, dispense)",
        "Argomentazione (utilizzo delle conoscenze, collegamenti, coerenza logica, correttezza e ampiezza del lessico specifico per sostenere la propria tesi e capacità di confutare eventuali obiezioni o rispondere a domande)"
      ]
    },
    {
      "name": "PERSONALE, SOCIALE E IMPARARE A IMPARARE",
      "indicators": [
        "Capacità di lavorare individualmente e in gruppo (Teamwork)",
        "Consapevolezza di sé nel processo di apprendimento",
        "Collaborazione nei lavori di gruppo (teamwork)"
      ]
    },
    {
      "name": "COMUNICAZIONE ORALE",
      "indicators": [
        "Contatto visivo, postura, chiarezza/tono di voce, ritmo e capacità di coinvolgere l'uditorio"
      ]
    },
    {
      "name": "SCIENTIFICA",
      "indicators": [
        "Investigare utilizzando il metodo scientifico"
      ]
    },
    {
      "name": "MATEMATICA E SCIENTIFICA",
      "indicators": [
        "Problem solving"
      ]
    }
  ]

theme = localStorage.getItem("theme") === "true";
document.body.setAttribute("theme", theme);

function switchTheme()
{
  theme = !theme;
  document.body.setAttribute("theme", theme)
  localStorage.setItem("theme", theme)
}

function setStat()
{
  jsonFile.forEach((stat)=>{stats.push(new Stat(stat['indicators']))})
  // stat = new Stat(jsonFile[1]['indicators'])
}

window.main_variables.path().then((result)=>{
  UserDataPath = result;
});

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