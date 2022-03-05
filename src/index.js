import "./style.css";
import { weatherSearch } from "./APIHandler";
import { BuildPage } from "./BuildPage";
import { EventHandler } from "./EventHandler";
import { DOMManip } from "./DOMManip";

export const weatherFunctions = (() => {
    const _markInvalid = elem => {
        elem.classList.add("invalid");
    };
    const _removeInvalid = elem => {
        elem.classList.remove("invalid");
    };
    const _checkValidity = () => {
        let searchInput = DOMManip.getElement("#search-input");
        searchInput.setCustomValidity("");
        if (searchInput.value == "") {
            searchInput.setCustomValidity("Please enter your a US City or Zip Code");
            searchInput.reportValidity();
            _markInvalid(searchInput);
            return false;
        }
        _removeInvalid(searchInput);
        return true;
    };

    async function search(e) {
        e.preventDefault();
        if (_checkValidity()) {
            try {
                const searchTerm = DOMManip.getElement("#search-input").value;
                console.log(searchTerm);
                BuildPage.makeLoading();
                const searchResults = await weatherSearch(searchTerm);
                await BuildPage.removeLoading();
                if (searchResults) {
                    BuildPage.displayWeather(searchResults);
                } else {
                    console.log("Couldn't find it");
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    return { search };
})();

const initPage = (() => {
    BuildPage.buildStartingPage();
    EventHandler.activateSearch();
})();
