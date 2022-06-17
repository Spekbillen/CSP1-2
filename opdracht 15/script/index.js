let regions = [];
let countryData;
$.ajax({
    url: "https://restcountries.com/v3.1/all",
    success: (result) => {
        countryData = result;
        for (let item of result) {
            regions.includes(item.region) ? void 0 : regions.push(item.region);
        }
    },
    complete: () => {
        $(".continentSelect").append(`
            <select name="" id="country">
                ${regions.map((item) => {
                    return '<option value="' + item + '">' + item + "</option>";
                })}
            </select>
        `);
        $("#country").change((props) => {
            $(".countries").html(
                `
                <tr>
                    <th>Country</th>
                    <th>Capital(s)</th>
                    <th>Border countries</th>
                </tr> 
            ` +
                countryData.map((item) => {
                    if (props.target.value === item["region"]) {
                        return `
                            <tr>
                                <td>${item["name"]["common"]}</td>
                                <td>${item["capital"]}</td>
                                <td>${typeof item["borders"] !== "undefined" ? item["borders"].length : ""}</td>
                                <td>${typeof item['borders'] !== 'undefined' ? '<select name="country" id="country" onchange="country(this)"><option value="select" selected disabled></option>' + item['borders'].map(item => { return '<option value="' + item + '">' + item + '</option>'
                        }) + '</select>'
                            : ''
                        }</td>
                            </tr>
                        `;
                    }
                })
            );
        });
    },
});

function country(props) {
    for (let item of countryData) {
        if (item.cca3 === props.value) {
            $('.landInfo').html(`
                <ul>
                    <li>Land: ${item['name']['common']}</li>
                    <li>Hoofdstad: ${item['capital'][0]}</li>
                    <li>Populatie: ${item['population']}</li>
                <ul>
            `).css('display', 'block');
        }
    }
}
