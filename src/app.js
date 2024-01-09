const dayjs = require('dayjs');
const localizedFormat = require('dayjs/plugin/localizedFormat')

dayjs.extend(localizedFormat)
now = dayjs();
currDayTime = now.format('LTS');
console.dir(currDayTime);

const currTime = document.querySelector('.time');
currTime.innerHTML = currDayTime;

const currDate = document.querySelector('.date');
console.log(currDate.textContent.trim());
currDate.innerHTML = now.format('LL');