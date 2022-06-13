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
                                <td>${ typeof item["borders"] !== "undefined" ? item["borders"].length : ""}</td>
                            </tr>
                        `;
                    }
                })
            );
        });
    },
});
