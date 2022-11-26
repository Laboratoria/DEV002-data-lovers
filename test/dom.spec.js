//npm test dom.spec.js

test("ocultar dotButton y mostrar characterButton", () => {
    document.body.innerHTML =
    `<button class="dotsButton" id="dotsButton" >...</button>;
    <button class="charactersButton inactive" id="charactersButton">Characters</button>`;
    require("../src/main");

    const dotsButton = document.getElementById("dotsButton")
    dotsButton.dispatchEvent(new Event("click"))
    const characterButton = document.getElementById("charactersButton")

    expect(characterButton.classList.contains("inactive")).toBe(false);
});