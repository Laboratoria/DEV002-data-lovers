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
