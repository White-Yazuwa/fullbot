/* Copyright (C) 2021 Vai838.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsenaDuplicated
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'astrology ?(.*)', fromMe: false }, async (message, match) => {
	if (match[1] === '') return await message.reply("Need zodiac sign");
	const url = `https://horoscope-api.herokuapp.com/horoscope/today/${match[1]}`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*☸️ ' + "Zodiac Sign" +':* ```' + match[1] + '```\n\n' +
		'*🔮 ' + "Prediction" +':* ```' + json.horoscope + '```\n' , MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "err..error", MessageType.text);
	}
});
