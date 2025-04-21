const sentences = [
"Her scream silenced the rowdy teenagers.",
"The wind whispered secrets only she could hear.",
"His footsteps vanished with the morning fog.",
"The silence between them spoke volumes.",
"She laughed like the world wasn’t burning.",
"He smiled, but his eyes told another story.",
"The rain hid her tears like an old friend.",
"Time froze when he said her name.",
"Their shadows danced before they did.",
"She left a note, but no explanation.",
"His lies tasted like honey and ash.",
"She wore hope like a broken crown.",
"The fire crackled louder than their conversation.",
"His absence filled the entire room.",
"The stars blinked as if watching.",
"Her silence roared louder than his anger.",
"They laughed like they’d never been hurt.",
"His voice trembled like a leaf in winter.",
"The candle flickered as if afraid.",
"The mirror didn’t recognize her anymore.",
"His voice cracked like shattered glass.",
"She carried storms in her heartbeat.",
"The night swallowed their words whole.",
"Her smile was both invitation and warning.",
"He vanished like a dream at dawn.",
"The coffee was cold, just like her goodbye.",
"She wore pain like a well-fitted dress.",
"His goodbye felt like a lifetime sentence.",
"The echo of her heels haunted the hall.",
"She held her breath until he looked away.",
"The clock ticked louder after he left.",
"He searched for answers in her silence.",
"She built walls no one could climb.",
"His name was a poem she forgot how to read.",
"The breeze carried their last goodbye.",
"She danced like no one was watching, because no one was.",
"The thunder answered her rage.",
"His shadow left before he did.",
"She whispered promises into the wind.",
"The letter smelled of rain and regret.",
"Her hands shook, but she kept typing.",
"He dreamed of her in grayscale.",
"She sang to keep the silence away.",
"The moonlight made her secrets shine.",
"He blinked, and she was gone.",
"Her heartbeat synced with the raindrops.",
"Their last hug lasted forever in her memory.",
"He remembered her in unfinished sentences."


];

const getRandomSentence = () => {
	const randomIndex = Math.floor(Math.random() * sentences.length);
	const sentence = sentences[randomIndex];
	return sentence;
};

export default getRandomSentence;
