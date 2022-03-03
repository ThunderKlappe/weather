import "./style.css";
import { weatherSearch } from "./APIHandler";
import { BuildPage } from "./BuildPage";

async function testAPI() {
    console.log(await weatherSearch("53208"));
}

testAPI();
BuildPage.buildStartingPage();
