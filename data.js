//Your code comes  here


//for each

let favAuthors = [{
	names: "Joyce Carol Oates",
	penName: "Joyce Carol Oates",
	yearOfBirth: 1938,
	genres: ["gothic", "horror"],
	literaryMovement: ["absurd", "feminist"],
	notableWorks: ["Black water", "Blonde", "Them"],
},
{
	names: "Charles Michael Palahniuk",
	penName: "Chuck Palahniuk",
	yearOfBirth: 1962,
	genres: ["fiction", "horror", "satire"],
	literaryMovement: ["minimalism", "postmodernism"],
	notableWorks: ["Fight Club", "Invisible monsters", "Choke", "Rant"],
},
{
	names: "Angela Anaïs Juana Antolina Rosa Edelmira Nin y Culmell",
	penName: "Anais Nin",
	yearOfBirth: 1903,
	genres: ["diary"],
	literaryMovement: "feminist",
	notableWorks: ["Henry and June", "Fire: from a Journal of Love", "The diary of Anais Nin"],
},
{
	names: "Ian Russell McEwan",
	penName: "Ian McEwan",
	yearOfBirth: 1948,
	genres: ["gothic fiction", "postmodern"],
	literaryMovement: "postmodernism",
	notableWorks: ["Atonement", "Enduring love", "The cement garden"],
},
{
	names: "Marguerite Donnadieu",
	penName: "Marguerite Duras",
	yearOfBirth: 1914,
	genres: ["nouveau roman"],
	literaryMovement: "Nouveau Roman",
	notableWorks: ["Un barrage contre le Pacifique", "L'amant", "Hiroshima, mon amour"],
},
{
	names: "Ernest Miller Hemingway",
	penName: "Ernest Hemingway",
	yearOfBirth: 1899,
	genres: ["iceberg theory"],
	literaryMovement: "iceberg theory of omission",
	notableWorks: ["The old man and the sea", "For whom the bell tolls", "A farewell to arms"],
},
{
	names: "Doris May Tayler",
	penName: ["Doris Lessing", "Jane Somers"],
	yearOfBirth: 1919,
	genres: ["postmodern"],
	literaryMovement: ["postmodernism", "feminism"],
	notableWorks: ["The grass is singing", "Children of violence", "African short stories"],
},
{
	names: "Heinrich Karl Bukowski",
	penName: ["Henry Charles Bukowski", "Hank"],
	yearOfBirth: 1920,
	genres: "dirty realism",
	literaryMovement: "transgressive fiction",
	notableWorks: ["Post office", "Factotum", "Ham on rye", "Pulp"],
},
{
	names: "Aglaja Veteranyi",
	penName: "Aglaja Veteranyi",
	yearOfBirth: 1962,
	genres: "self referential",
	literaryMovement: "self referential",
	notableWorks: ["De ce fierbe copilul in mamaliga", "Raftul cu ultimele suflari"],
},
{
	names: "Jerome David Salinger",
	penName: "J.D. Salinger",
	yearOfBirth: 1919,
	genres: "realistic",
	literaryMovement: "first person narrative",
	notableWorks: ["The Catcher in the Rye", "Franny and Zoey", "Raise High the Roof Beam, Carpenters and Seymour: An Introduction"],
},
{
	names: "Adeline Virginia Woolf",
	penName: "Virginia Woolf",
	yearOfBirth: 1902,
	genres: "stream of consciousness",
	literaryMovement: ["modernism", "stream of consciousness"],
	notableWorks: ["Mrs Dalloway", "Orlando", "A room of one's own"],
},
{
	names: "John Kennedy Toole",
	penName: "John Kennedy Toole",
	yearOfBirth: 1937,
	genres: ["comedy", "gothic fiction"],
	literaryMovement: "first person narrative",
	notableWorks: ["A Confederacy of Dunces", "The neon bible"],
},
{
	names: "Sylvia Plath",
	penName: "Victoria Lucas",
	yearOfBirth: 1932,
	genres: ["confessional"],
	literaryMovement: "feminism",
	notableWorks: ["The bell jar", "Johhny Panic and the bible of dreams"],
},
];

// //console.log(favAuthors)

Object.values(favAuthors).forEach(val => {
	console.log(val.penName)
})

// favAuthors.forEach(value => {
// 	console.log(value.penName)
// });

//Callback breakdown

const authorsList = (authors, penNamesLogger) => {
	Object.values(authors).forEach(val => {
		penNamesLogger(val.penName)
	})
}

function penNamesLogger(favAuthors){
	console.log(favAuthors);
}

authorsList(favAuthors, penNamesLogger)

//Timeout

setTimeout(authorsList, 1000, favAuthors, penNamesLogger)




// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{ name: "favMovies", content: favMovies, type: "array" },
		{ name: "moviesList", content: moviesList, type: "function" },
		{ name: "titleLogger", content: titleLogger, type: "function" },
	]
} catch (error) {

	toExport = { error: error.message }

}

export { toExport };
