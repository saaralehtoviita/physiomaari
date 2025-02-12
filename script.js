fetch('https://saaralehtoviita.github.io/digitekniikat/tiedot.JSON')
.then(function(response) {
    return response.json();
})
.then(function(tieto) {
    let placeholder = document.querySelector("#data-output");
    let out = `
        <div class="data-item">
            <h3>${tieto.otsikko}</h3>
            <p><strong>Kuvaus:</strong> ${tieto.kuvaus}</p>
            <p><strong>Nimi:</strong> ${tieto.nimi}</p>
            <p><strong>Tunnus:</strong> ${tieto.tunnus}</p>
            <p><strong>Opintopisteet:</strong> ${tieto.opintopisteet}</p>
            <p><strong>Sisältö:</strong> ${tieto.sisalto.join(', ')}</p>
            <p><strong>Tekniikat:</strong> ${tieto.tekniikat.map(tekniikka => `<a href="${tekniikka.linkki}">${tekniikka.aihe}</a>`).join(', ')}</p>
            <img src="${tieto.kuva}" alt="Opintojakson kuva" style="max-width: 100%; height: auto;"/>
        </div>
    `;

    placeholder.innerHTML = out;
})
.catch(function(error) {
    document.getElementById("data-output").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
});