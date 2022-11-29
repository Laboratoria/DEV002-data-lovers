//npm test dom.spec.js

test("ocultar dotButton y mostrar characterButton", () => {
    document.body.innerHTML =
    `<button class="dotsButton" id="dotsButton" >...</button>;
    <button class="charactersButton inactive" id="charactersButton">Characters</button>;
    <button class="statusButton inactive" id="statusButton" >Dead or Alive?</button>`;
    require("../src/main");

    const dotsButton = document.getElementById("dotsButton")
    dotsButton.dispatchEvent(new Event("click"))
    const characterButton = document.getElementById("charactersButton")
    const statusButton = document.getElementById("statusButton")

    expect(characterButton.classList.contains("inactive")).toBe(false);
    expect(statusButton.classList.contains("inactive")).toBe(false);
});