const { loadScriptOnce } = require('remote-script-loader');

const load = ({ lang, region, apiKey }) => new Promise(resolve => loadScriptOnce(
    `https://api-maps.yandex.ru/2.1/?lang=${lang || 'ru'}_${region || 'RU'}&apikey=${apiKey}`,
    'ymaps',
).then(() => ymaps.ready(resolve)));

module.exports = load;
