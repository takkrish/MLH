const input = document.querySelector('#input'),
	button = document.querySelector('#button'),
	heading = document.querySelector('#word'),
	definition = document.querySelector('#definition'),
	synonym = document.querySelector('#synonym');

let word;

button.addEventListener('click', async () => {
	word = input.value;
	getSynonym(word);
	getDefinition(word);
});

const getSynonym = async (word) => {
	const data = await fetch(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
	)
		.then((res) => {
			console.log(res.json());
		})
		.catch((err) => console.log(err));
};

const getDefinition = async (word) => {
	const data = await fetch(
		`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=1bc126f1-b94a-4abc-9061-cbef998be7e5`
	)
		.then((response) => {
			console.log(response.json());
		})
		.catch((err) => {
			console.error(err);
		});
};
