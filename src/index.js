import "./style.css";
import { weatherSearch } from "./APIHandler";
import { BuildPage } from "./BuildPage";
import { EventHandler } from "./EventHandler";
import { DOMManip } from "./DOMManip";

async function testAPI() {
    console.log(await weatherSearch("53208"));
}

//testAPI();

export const weatherFunctions = (() => {
    async function search(e) {
        e.preventDefault();
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

    return { search };
})();

const initPage = (() => {
    BuildPage.buildStartingPage();
    EventHandler.activateSearch();
})();
