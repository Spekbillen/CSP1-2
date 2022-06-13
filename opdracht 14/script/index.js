let countryObject;

$.ajax({url: 'https://restcountries.com/v3.1/all', success: result => {
    countryObject = result;
        for (let item of result) {
            $('#landenTable').append(`
                <tr>
                    <td>${item['name']['common']}</td>
                    <td>${item['region']}   </td>
                    <td>${typeof item['borders'] !== 'undefined' ? item['borders'].length : ''}</td>
                    <td>${typeof item['borders'] !== 'undefined' ? '<select name="country" id="country" onchange="country(this)"><option value="select" selected disabled></option>' + item['borders'].map(item =>{return '<option value="' + item + '">' + item + '</option>'}) + '</select>' : ''}</td>
                </tr>
            `)
        }
    }
})

function country(props){
    for (let item of countryObject){
        if (item.cca3 === props.value){
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