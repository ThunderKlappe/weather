import "./style.css";
import { weatherSearch } from "./APIHandler";

async function testAPI() {
    console.log(await weatherSearch("97330"));
}

testAPI();
