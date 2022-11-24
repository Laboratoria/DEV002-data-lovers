import {characterNotFound} from "../src/main";

test("Check create characters conection to html", () => {
    document.body.innerHTML =
    `<div class="characterNotFound">
        <h3 class="notFound">No results for this search</h3>
    </div>`;
    require("./main.js");

    const resultSection = document.getElementById("results");

    resultSection.value = characterNotFound;

    expect(resultSection).toBe(characterNotFound)
});