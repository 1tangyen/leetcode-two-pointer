/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	tokens = s.split(' ');
	for (let i = 0; i < tokens.length; i++) {
		const character = tokens[i].split('');
		character.reverse();
		tokens[i] = character.join('');
	}
	return tokens.join(' ');
};
