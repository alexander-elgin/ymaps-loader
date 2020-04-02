# Загрузчик Яндекс Карт

## Установка
```sh
$ npm install ymaps-loader
```

## Использование
```javascript
import load from 'ymaps-loader';

load({ apiKey: '<YOUR-API-KEY>'}).then(() => {
    // The global variable `ymaps` is available now
});
```
