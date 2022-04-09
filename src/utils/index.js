export const PARSE_LANG = (obj, text, lang) => {
	if (lang === 'uz') {
		return obj[text];
	}
	return obj[`${text}_${lang}`];
};
