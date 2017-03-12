const MarkovChain = require('markovchain');
const fs = require('fs');

const fileName = './all-articles-on-my-website.txt';
const quotes = fs.readFileSync(fileName, 'utf8').replace(/[\n\r]/g,"");

const markov = new MarkovChain(quotes);

let totalQuotes = 5;
const quoteLengthLimit = 25;

while (totalQuotes--) {
	// Find quotes based on my writing, starting with the word 'the'
	const randomQuote = markov.start('The').end(quoteLengthLimit).process();
	console.log(`${randomQuote}\n`);
}