global.token = '5552008595:AAGKSnpP1OUWjbMxGujWG9Z53xvSvP0_uuM'

global.owner_id = '2057515577'

global.owner_user = 'MrYOUCHN'

global.APIs = { 

	neoxr: 'https://api.neoxr.eu.org/api'
}

global.APIKeys = { 

	'https://api.neoxr.eu.org/api': 'ZILhx15V'

}

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')



module.exports = (bot) => {

	if (bot) {

		global.botid = bot.id

		global.botname = bot.first_name

		global.botuser = bot.username

	}

}
