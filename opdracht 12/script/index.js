$.ajax({url: 'https://restcountries.com/v3.1/all', success: result => {
        for (let item of result) {
            $('#landenTable').append(`
                <tr>
                    <td>${item['name']['common']}</td>
                    <td><img src="${item['flags']['png']}"></td>
                    <td>${typeof item['borders'] !== 'undefined' ? '<ul>' + item['borders'].map(item => {return `<li>${item}</li>`}).join('') + '</ul>' : ''}</td>
                </tr>
            `)
        }
}})