import { weatherFunctions } from ".";
import { DOMManip } from "./DOMManip";

export const EventHandler = (() => {
    const activateSearch = () => {
        DOMManip.getElement("#search-button").addEventListener("click", weatherFunctions.search);
    };
    const activateTempToggle = () => {
        DOMManip.getElement("#temp-scale-toggle").addEventListener("click", weatherFunctions.convertTemp);
    };

    return { activateSearch, activateTempToggle };
})();
