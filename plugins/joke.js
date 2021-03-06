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

Asena.addCommand({pattern: 'joke ?(.*)', fromMe: false }, async (message, match) => {
	if (match[1] === 'xx') return await message.reply("Sorry!");
	const url = `https://official-joke-api.appspot.com/random_joke`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🗣️ ' + "JOKE" +'* ```' + json.setup + '```\n\n' +
		'*😆' + "PUNCHLINE" +'* ```' + json.punchline+ '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "err..error", MessageType.text);
	}
});
