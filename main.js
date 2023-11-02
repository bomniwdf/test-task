import fetch from 'node-fetch';

export default async function getDates() {
    const re = /([A-Za-z–]{3,20}\s|[A-Za-z]{3,10}\s|\d{1,2}\s)+((\d{1,2})(th|rd))(?=\.)/;
    const url = 'http://numbersapi.com/random/year';
    const datesArr = [];
    let i = 0;

    do {
        i += 1;
        const response = await fetch(url);
        const text = await response.text();
        const date = re.exec(text);
        if (date) datesArr.push(date[0]);
    } while (i < 100);

    return datesArr;
}

