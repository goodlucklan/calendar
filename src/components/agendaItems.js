const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays) {
  return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

export const agendaItems = [
  {
    title: dates[0],
    data: [{hour: '4pm', duration: '1h', title: 'QUIMICA GENERAL'}]
  },
  {
    title: dates[1],
    data: [
      {hour: '4pm', duration: '1h', title: 'INGLES I'},
      {hour: '4pm', duration: '1h', title: 'COMPRENSION Y REDACCION'}
    ]
  },
  {
    title: dates[2],
    data: [
      {hour: '4pm', duration: '1h', title: 'INTRODUCCION A LA MATERI'},
      {hour: '5pm', duration: '1h', title: 'MATEMATICA I'},
      {hour: '5pm', duration: '1h', title: 'QUIMICA GENERAL'}
    ]
  },
  {
    title: dates[3],
    data: [{hour: '4pm', duration: '1h', title: 'INGLES'}]
  },
  {
    title: dates[4],
    data: [{hour: '4pm', duration: '1h', title: 'QUIMICA GENERAL'}]
  },
  {
    title: dates[5],
    data: [
      {hour: '9pm', duration: '1h', title: 'COMPRENSION Y REDACCION'},
      {hour: '10pm', duration: '1h', title: 'INGLES'},
      {hour: '9pm', duration: '1h', title: 'INTRODUCCION A LA MATERI'},
      {hour: '12pm', duration: '1h', title: 'MATEMATICA I'}
    ]
  },
  {
    title: dates[6], 
    data: [
      {hour: '4pm', duration: '1h', title: 'QUIMICA GENERAL'}
    ]
  },
  {
    title: dates[7], 
    data: [{hour: '4pm', duration: '1h', title: 'QUIMICA GENERAL'}]
  },
  {
    title: dates[8],
    data: [
      {hour: '4pm', duration: '1h', title: 'COMPRENSION Y REDACCION'},
      {hour: '4pm', duration: '1h', title: 'INGLES'},
      {hour: '9pm', duration: '1h', title: 'INTRODUCCION A LA MATER'},
      {hour: '12pm', duration: '1h', title: 'MATEMATICA I'}
    ]
  },
  {
    title: dates[9],
    data: [
      {hour: '1pm', duration: '1h', title: 'INTRODUCCION A LA MATER'},
      {hour: '2pm', duration: '1h', title: 'MATEMATICA I'},
      {hour: '3pm', duration: '1h', title: 'QUIMICA GENERAL'}
    ]
  },
  {
    title: dates[10], 
    data: [
      {hour: '12am', duration: '1h', title: 'QUIMICA GENERAL'}
    ]
  },
  {
    title: dates[11],
    data: [
      {hour: '5pm', duration: '1h', title: 'INTRODUCCION A LA MATERIA'},
      {hour: '5pm', duration: '1h', title: 'MATEMATICA I'},
      {hour: '3pm', duration: '1h', title: 'QUIMICA GENERAL'}
    ]
  },
  {
    title: dates[12], 
    data: [
      {hour: '5pm', duration: '1h', title: 'MATEMATICA I'}
    ]
  },
  {
    title: dates[13], 
    data: [
      {hour: '5pm', duration: '1h', title: 'INTRODUCCION A LA MAT'}
    ]
  }
];

export function getMarkedDates() {
  const marked = {};

  agendaItems.forEach(item => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !(item.data[0])) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
}