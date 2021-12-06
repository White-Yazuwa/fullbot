
const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const axios = require('axios');
const Language = require('../language');
const { errorMessage, infoMessage } = require('../helpers');
const Lang = Language.getString('instagram') ;




Asena.addCommand({ pattern: 'cowin ?(.*)', fromMe: false,  desc: "Gives you vaccine updates from cowin site for a particular pincode for a particular week starting from the day given.\n Use .cowin <pincode>;<dd-mm-yy>."}, async (message, match) => {
    
        const userName = match[1]
        
        var pin, date;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        date = split[1];
        pin = split[0];
}
    /* if (!match[1] return await message.sendMessage("give me the pincode and date seperated by ; .")   
    if (!pin) return await message.sendMessage("give me the pincode")
    if (!date) return await message.sendMessage("where is the date")*/
    await message.sendMessage(" Loading...")
          
    await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          name,
          address,
         state_name,
         district_name,
        block_name,
       pincode,
        from,
        to,
        fee_type,
        } = response.data.centers[0]


        const msg = `*${"Centre name"}*: ${name}\n*${"Address"}*: ${address}\n*${"State"}*: ${state_name}\n*${"District"}*: ${district_name}\n*${"Block"}*: ${block_name}\n*${"Pincode"}*: ${pincode}\n*${"From"}*: ${from}\n*${"To"}*: ${to}\n*${"Fee"}*: ${fee_type}\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })

   
 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[0].sessions[0]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })


 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          name,
          address,
         state_name,
         district_name,
        block_name,
       pincode,
        from,
        to,
        fee_type,
        } = response.data.centers[1]


        const msg = `*${"Centre name"}*: ${name}\n*${"Address"}*: ${address}\n*${"State"}*: ${state_name}\n*${"District"}*: ${district_name}\n*${"Block"}*: ${block_name}\n*${"Pincode"}*: ${pincode}\n*${"From"}*: ${from}\n*${"To"}*: ${to}\n*${"Fee"}*: ${fee_type}\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })

      


 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[0].sessions[0]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })


  await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[0].sessions[1]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })


  await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          name,
          address,
         state_name,
         district_name,
        block_name,
       pincode,
        from,
        to,
        fee_type,
        } = response.data.centers[2]


        const msg = `*${"Centre name"}*: ${name}\n*${"Address"}*: ${address}\n*${"State"}*: ${state_name}\n*${"District"}*: ${district_name}\n*${"Block"}*: ${block_name}\n*${"Pincode"}*: ${pincode}\n*${"From"}*: ${from}\n*${"To"}*: ${to}\n*${"Fee"}*: ${fee_type}\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })

   
 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[2].sessions[0]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })
 
 
  await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          name,
          address,
         state_name,
         district_name,
        block_name,
       pincode,
        from,
        to,
        fee_type,
        } = response.data.centers[3]


        const msg = `*${"Centre name"}*: ${name}\n*${"Address"}*: ${address}\n*${"State"}*: ${state_name}\n*${"District"}*: ${district_name}\n*${"Block"}*: ${block_name}\n*${"Pincode"}*: ${pincode}\n*${"From"}*: ${from}\n*${"To"}*: ${to}\n*${"Fee"}*: ${fee_type}\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })

   
 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[3].sessions[0]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })
 
 
 
  await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          name,
          address,
         state_name,
         district_name,
        block_name,
       pincode,
        from,
        to,
        fee_type,
        } = response.data.centers[4]


        const msg = `*${"Centre name"}*: ${name}\n*${"Address"}*: ${address}\n*${"State"}*: ${state_name}\n*${"District"}*: ${district_name}\n*${"Block"}*: ${block_name}\n*${"Pincode"}*: ${pincode}\n*${"From"}*: ${from}\n*${"To"}*: ${to}\n*${"Fee"}*: ${fee_type}\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })

   
 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[4].sessions[0]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })
 
  await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          name,
          address,
         state_name,
         district_name,
        block_name,
       pincode,
        from,
        to,
        fee_type,
        } = response.data.centers[5]


        const msg = `*${"Centre name"}*: ${name}\n*${"Address"}*: ${address}\n*${"State"}*: ${state_name}\n*${"District"}*: ${district_name}\n*${"Block"}*: ${block_name}\n*${"Pincode"}*: ${pincode}\n*${"From"}*: ${from}\n*${"To"}*: ${to}\n*${"Fee"}*: ${fee_type}\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })

   
 await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
      .then(async (response) => {
        const {
          date,
          available_capacity,
         min_age_limit,
         vaccine,
        } = response.data.centers[5].sessions[0]


        const msg = `*${"Min Age Limit"}*: ${min_age_limit}\n*${"Date"}*: ${date}\n*${"Available capacity"}*: ${available_capacity}\n*${"Vaccine"}*: ${vaccine}\n\n`

       
        await message.sendMessage(message.jid, msg,MessageType.text,{quoted:message.data})
      })
 
 
      .catch(
        async (err) => await message.client.sendMessage(message.jid,"Error", MessageType.text, {quoted: message.data}),
      )
  },

 )

