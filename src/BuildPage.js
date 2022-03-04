import { DOMManip } from "./DOMManip";
import logo from "./assets/logo.png";

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
    const displayWeather = weatherInfo => {
        _minimizeSearch();
        console.log(weatherInfo);
    };

    return { buildStartingPage, makeLoading, removeLoading, displayWeather };
})();
