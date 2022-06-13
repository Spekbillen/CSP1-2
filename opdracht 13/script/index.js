$.ajax({url: 'https://restcountries.com/v3.1/all', success: result => {
        for (let item of result) {
            $('#landenTable').append(`
                <tr>
                    <td>${item['name']['common']}</td>
                    <td>${item['region']}   </td>
                    <td>${typeof item['borders'] !== 'undefined' ? item['borders'].length : ''}</td>
                </tr>
            `)
        }
}})