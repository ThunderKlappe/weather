import { DOMManip } from "./DOMManip";
import logo from "./assets/logo.png";
import cityData from "./city.json";

export const BuildPage = (() => {
    const buildStartingPage = () => {
        const header = DOMManip.makeNewElement("div", "header", "", "Weather");
        const content = DOMManip.makeNewElement("div", "content");
        const homeContainer = DOMManip.makeNewElement("div", "home-container", "starting");

        const webLogo = new Image();
        webLogo.src = logo;
        webLogo.setAttribute("id", "website-logo");

        const searchForm = DOMManip.makeNewElement("form", "search-form");
        const searchInput = DOMManip.makeNewElement(
            "input",
            "search-input",
            "",
            "",
            { type: "text" },
            { required: null },
            { placeholder: "Enter a US city or zip code" }
        );
        const searchButton = DOMManip.makeNewElement("button", "search-button", "", "Search");
        DOMManip.appendChildren(searchForm, searchInput, searchButton);

        DOMManip.appendChildren(homeContainer, webLogo, searchForm);
        content.appendChild(homeContainer);
        //DOMManip.appendChildren(content, webLogo, searchForm);

        DOMManip.appendChildren(document.body, header, content);
    };

    const makeLoading = () => {
        const loadingContainer = DOMManip.makeNewElement("div", "loading-container");
        const loadingIcon = DOMManip.makeNewElement("i", "loading-icon", "fa-solid fa-sun");
        loadingContainer.appendChild(loadingIcon);
        document.body.appendChild(loadingContainer);
    };
    const removeLoading = () => {
        DOMManip.getElement("#loading-container").remove();
    };
    const _minimizeSearch = () => {
        const homeContainer = DOMManip.getElement("#home-container");
        homeContainer.classList.add("minimized");
    };

    const _clearContent = () => {
        const content = DOMManip.getElement("#content");
        if (content.childNodes.length > 1) {
            content.lastElementChild.remove();
        }
    };
    const _buildWeatherPage = () => {
        const content = DOMManip.getElement("#content");
        _clearContent();
        const weatherContainer = DOMManip.makeNewElement("div", "weather-container", "starting");
        const cityName = DOMManip.makeNewElement("div", "city-name");
        const weatherDisplay = DOMManip.makeNewElement("div", "weather-display");
        const weatherDescriptionContainer = DOMManip.makeNewElement("div", "weather-description-container");
        const weatherIconContainer = DOMManip.makeNewElement("div", "weather-icon-container");
        const weatherIcon = DOMManip.makeNewElement("img", "weather-icon");
        const weatherDescription = DOMManip.makeNewElement("div", "weather-description");
        const currentTemp = DOMManip.makeNewElement("div", "current-temp", "weather-info");
        const feelsLike = DOMManip.makeNewElement("div", "feels-like", "weather-info");
        const cloudCover = DOMManip.makeNewElement("div", "cloud-cover", "weather-info");
        const humidity = DOMManip.makeNewElement("div", "humidity", "weather-info");
        weatherIconContainer.appendChild(weatherIcon);
        DOMManip.appendChildren(weatherDescriptionContainer, weatherIconContainer, weatherDescription);
        DOMManip.appendChildren(
            weatherDisplay,
            weatherDescriptionContainer,
            currentTemp,
            feelsLike,
            cloudCover,
            humidity
        );
        DOMManip.appendChildren(weatherContainer, cityName, weatherDisplay);
        content.appendChild(weatherContainer);
    };
    const _getCity = weatherInfo => {
        const cityID = weatherInfo.id;
        for (let i = 0; i < cityData.length; i++) {
            let city = cityData[i];
            if (city.id == cityID) {
                return { name: city.name, state: city.state };
            }
        }
    };
    const _fillInWeatherData = weatherInfo => {
        console.log(weatherInfo.weather[0]);
        DOMManip.getElement(
            "#weather-icon"
        ).src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`;
        DOMManip.getElement("#weather-description").textContent =
            weatherInfo.weather[0].description.toUpperCase();
        DOMManip.getElement("#current-temp").innerHTML = `Current Temperature: ${weatherInfo.main.temp}&deg;`;
        DOMManip.getElement("#feels-like").innerHTML = `Feels Like: ${weatherInfo.main.feels_like}&deg;`;
        DOMManip.getElement("#cloud-cover").textContent = `Cloud Cover: ${weatherInfo.clouds.all}%`;
        DOMManip.getElement("#humidity").textContent = `Humidity: ${weatherInfo.main.humidity}%`;
        const cityInfo = _getCity(weatherInfo);
        DOMManip.getElement("#city-name").textContent = `${cityInfo.name}, ${cityInfo.state}`;
    };
    const displayWeather = weatherInfo => {
        _minimizeSearch();
        _buildWeatherPage();
        _fillInWeatherData(weatherInfo);

        console.log(weatherInfo);
    };

    return { buildStartingPage, makeLoading, removeLoading, displayWeather };
})();
