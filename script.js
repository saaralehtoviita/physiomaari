fetch('https://saaralehtoviita.github.io/digitekniikat/tiedot.JSON')
.then (function(response) {
    return response.json();
})
.then(function(tiedot) {
    let placeholder = document.querySelector("#data-output");
    let out = "";

        out += `
        <tr> 
            <td>${tiedot.otsikko}</td>
            <td>${tiedot.kuvaus}</td>
            <td>${tiedot.nimi}</td>
            <td>${tiedot.tunnus}</td>
            <td>${tiedot.opintopisteet}</td>
            <td>${tiedot.sisalto.join(', ')}</td>
            <td>
                ${tiedot.tekniikat.map(tekniikka => `<a href="${tekniikka.linkki}">${tekniikka.aihe}</a>`).join(', ')}
            </td>
        </tr>
        `;
        placeholder.innerHTML = out;
    })
.catch(function(error) {
    document.getElementById("data-output").innerHTML = "<tr><td colspan='7'>Tietoa ei pystytä hakemaan</td></tr>";
});