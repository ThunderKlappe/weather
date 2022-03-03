import { DOMManip } from "./DOMManip";
import logo from "./assets/logo.png";

export const BuildPage = (() => {
    const buildStartingPage = () => {
        const header = DOMManip.makeNewElement("div", "header", "", "Weather");
        const content = DOMManip.makeNewElement("div", "content");

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

        DOMManip.appendChildren(content, webLogo, searchForm);
        DOMManip.appendChildren(document.body, header, content);
    };

    return { buildStartingPage };
})();
