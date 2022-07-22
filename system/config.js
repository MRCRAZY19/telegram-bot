global.token = ''
عالمي . owner_id  =  '2057515577'
عالمي . owner_user       =       'MrYOUCHN'
global.APIs = { 
	neoxr: 'https://api.neoxr.eu.org/ZILhx15V'
}
global.APIKeys = { 
	'https://api.neoxr.eu.org/api': '5552008595:AAGKSnpP1OUWjbMxGujWG9Z53xvSvP0_uuM'
}
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

module.exports = (bot) => {
	if (bot) {
		global.botid = bot.id
		global.botname = bot.first_name
		global.botuser = bot.username
	}
}
