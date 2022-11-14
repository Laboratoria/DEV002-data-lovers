export function getAllCharacters () {
	return fetch("https://hp-api.herokuapp.com/api/characters")
		.then((response) => {
			// The API call was successful!
			//console.log("success!", response);
		return response.json();
		})
		.then((data) => {
			// This is the JSON from our response
			//console.log("yay", data[0]);
		return data;
		})
		.catch((err) => {
			// There was an error
			console.warn("Something went wrong.", err);
		})
	}
