import './styles.css';
import templateCountry from './templates/templateCountry.hbs';
import debounce from '../node_modules/lodash.debounce';
import axios from '../node_modules/axios';
import manyContries from './templates/manyContries.hbs'

const carditem = document.querySelector('.carditem');
const input = document.querySelector('.input');

input.addEventListener('input', () => {
    let searhContry = input.value;
    GetCountry(searhContry);

});

function GetCountry(CountryName) {
    return axios.get(
        `https://restcountries.eu/rest/v2/name/${ CountryName }

`,
    )
        .then(function (response) {

            // const arr = response.data[0];
            // console.log(arr);
            // const renderPage1 = manyContries(arr);
            // carditem.innerHTML = renderPage1;

            if (response.data.length > 2)
            {
                const renderPage1 = manyContries(response.data[0]);
                carditem.innerHTML = renderPage1;

                // console.log(response.data);
            } else
            {
                // console.log(response.data.length);
                return response.data[0];
            }

        }).then(function (objCountry) {

            console.log(objCountry);

            const renderPage = manyContries(objCountry);
            carditem.innerHTML = renderPage;

        })

}
