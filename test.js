// const test = new URL('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
// const urlParams = test.searchParams

// console.log(urlParams)

// const first = urlParams.get('name')
// console.log(first)

// const second = urlParams.getAll("name")
// console.log(second)

const section = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/'
const urlParams = new URLSearchParams(section)

console.log(section)
console.log(urlParams)