fetch("tiedot.JSON")
.then (function(response){
    return response.json();
}
)
.then(function(tiedot){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let tieto of tiedot) {
        out += `
            <tr> 
            <td>${tieto.otsikko}</td>
            <td>${tieto.kuvaus}</td>
            <td>${tieto.nimi}</td>
            <td>${tieto.tunnus}</td>
            <td>${tieto.opintopisteet}</td>
            </tr>
        `;
    }
    placeholder.innerHTML = out;
}) 
.catch(function(error) {
    document.getElementById("data-output").innerHTML = "<tr><td colspan='7'>Tietoa ei pystytä hakemaan</td></tr>";
});