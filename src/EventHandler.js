import { weatherFunctions } from ".";
import { DOMManip } from "./DOMManip";

export const EventHandler = (() => {
    const activateSearch = () => {
        DOMManip.getElement("#search-button").addEventListener("click", weatherFunctions.search);
    };

    return { activateSearch };
})();
