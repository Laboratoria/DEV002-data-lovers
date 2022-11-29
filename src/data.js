export function getAllCharacters () {
	return fetch("https://hp-api.herokuapp.com/api/characters")
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		return data;
		})
		.catch((err) => {
		return err;
		})
}

export function sortingCharacters (charactersList){
	const newCharactersSorted = charactersList.sort((a, b) => {
		if(a.name < b.name) { return -1; }
		if(a.name > b.name) { return 1; }
		return 0
	})
	return newCharactersSorted
}

export function filterCharactersFun(charactersList, filterParam) {
	if (charactersList){
		return charactersList.filter(character => {
		return character.house === filterParam
		})
	}
}