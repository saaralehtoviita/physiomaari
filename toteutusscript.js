fetch('https://saaralehtoviita.github.io/digitekniikat/toteutus25.JSON')
.then(function(response) {
    return response.json();
})
.then(function(tieto) {
    let placeholder = document.querySelector("#data-output");
    let out = `
        <div class="data-item">
            <h3>${tieto.toteutuksenNimi}</h3>
            <p><strong>Kuvaus:</strong> ${tieto.osallistujenLukumaara}</p>
            <p><strong>Nimi:</strong> ${tieto.osallistujenNimet}</p>
            <p><strong>Tunnus:</strong> ${tieto.toteutuksenAjankohta}</p>
            <p><strong>Opintopisteet:</strong> ${tieto.toteutuksenKestoViikkoina}</p>
            <img src="${tieto.kuva}" alt="Opintojakson kuva" style="max-width: 100%; height: auto;"/>
        </div>
    `;

    placeholder.innerHTML = out;
})
.catch(function(error) {
    document.getElementById("data-output").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});