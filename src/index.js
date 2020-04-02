const load = ({ lang, region, apiKey }) => new Promise((resolve) => {
    if (window.ymaps === undefined) {
        const yandexMapScript = document.createElement('SCRIPT');
        yandexMapScript.setAttribute('src',
            `https://api-maps.yandex.ru/2.1/?lang=${lang || 'ru'}_${region || 'RU'}&apikey=${apiKey}`);
        yandexMapScript.setAttribute('async', '');
        yandexMapScript.setAttribute('defer', '');
        yandexMapScript.setAttribute('type', 'text/javascript');

        yandexMapScript.onload = () => ymaps.ready(resolve);
        document.body.appendChild(yandexMapScript);
    } else {
        resolve();
    }
});

module.exports = load;
