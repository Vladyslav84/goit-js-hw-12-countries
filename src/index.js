import './styles.css';
import templateCountry from './templates/templateCountry.hbs';
import debounce from '../node_modules/lodash.debounce';
import axios from '../node_modules/axios';

console.log(axios);

// fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies'
// ).then(responce => responce.json()).then(console.log(responce))

// Вопрос по запросу API  с сайта погоды. Залогинилась, получила ключ, который необходим для получения json, но файл так и не пришел http://joxi.ru/Dr8qyMBFJkDowm  Обьясните еще раз крос домен запросы, у вас на видео все получилось,а у меня нет? проверила в заголовке ответа Accept: */*   http://joxi.ru/eAOwYd9T64G8zA . 	"const YOUR_ACCESS_KEY = '1878e589c5a39020a48cb1b2ff19559d';
axios.get(
    `https://restcountries.eu/rest/v2/all?fields=name;capital;currencies`,
)
    .then(function (response) {
        return console.log(response.data);
    })
    // .then(console.log);