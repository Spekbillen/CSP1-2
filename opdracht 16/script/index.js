$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?lat=52.5168&lon=6.0830&appid=43dc92bc24e6f3c48cb3ccbaeb80567a&units=metric&lang=nl",
    success: (result) => {
        for(item of result.list) {
            console.log()
            $('#weerTable').append(`
                <tr>
                    <td>${item.dt_txt.substr(0,11)}</td>
                    <td>${item.dt_txt.substr(11, 5)}</td>
                    <td>${Math.round(item.main.temp)}&#8451;</td>
                    <td>${Math.round(item.main.humidity)}&#37;</td>
                    <td>${Math.round(item.main.pressure)} &#13169;</td>
                    <td>${item.weather[0].description}</td>
                    <td><img src="https://openweathermap.org/img/wn/${item.weather[0].icon}.png" ></td>
                    <td>${item.wind.speed} km/h</td>
                    <td><img src="https://www.pngkey.com/png/full/135-1358587_vector-arrow-transparent-background.png" style="transform: rotate(${item.wind.deg - 90}deg)"></td>
                </tr>
            `)
        }

    }
});
