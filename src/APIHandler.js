async function _getGeoCode(location) {
    try {
        let response;
        if (/^[0-9]{5}$/.test(location)) {
            response = await fetch(
                `http://api.openweathermap.org/geo/1.0/zip?zip=${location},US&appid=07635fa17157cfd961af367e15eeb273`
            );
            let place = await response.json();
            console.log(place);
            return place;
        } else {
            response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${location},US&limit=1&appid=07635fa17157cfd961af367e15eeb273`
            );
            let place = await response.json();
            console.log(place);
            return place[0];
        }
    } catch (err) {
        console.log(err);
    }
}

async function weatherSearch(location) {
    try {
        let geoCode = await _getGeoCode(location);

        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${geoCode.lat}&lon=${geoCode.lon}&APPID=07635fa17157cfd961af367e15eeb273&units=imperial`,
            { mode: "cors" }
        );
        return await response.json();
    } catch (err) {
        return err;
    }
}

export { weatherSearch };
