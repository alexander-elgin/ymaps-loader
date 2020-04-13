/* global ymaps */

const remoteScriptLoader = require('remote-script-loader');
/* eslint-disable prefer-arrow-callback */
const load = function (options) {
    return new Promise(function (resolve) {
        return remoteScriptLoader.loadScriptOnce(
            'https://api-maps.yandex.ru/2.1/?lang=' + (options.lang || 'ru') + '_' + (options.region || 'RU') +
            '&apikey=' + options.apiKey,
            'ymaps',
        ).then(function () { ymaps.ready(resolve); });
    });
};

module.exports = load;
