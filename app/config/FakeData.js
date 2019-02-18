let data = [
  {
    id: 0,
    name: 'John White',
    email: 'john@white.com',
    dob: '01/01/1950',
    camp: 'Northwest',
    hometown: '',
    phone: '555-555-5550',
    profession: 'Construction'
  },
  {
    id: 1,
    name: 'James White',
    email: 'james@white.com',
    dob: '01/01/1950',
    camp: 'Northwest',
    hometown: '',
    phone: '555-555-5550',
    profession: 'Construction'
  },
  {
    id: 2,
    name: 'Jim Brown',
    email: 'jim@brown.com',
    dob: '01/01/1950',
    camp: 'Northwest',
    hometown: '',
    phone: '555-555-5550',
    profession: 'Construction'
  },
  {
    id: 3,
    name: 'Jack Green',
    email: 'jack@green.com',
    dob: '01/01/1950',
    camp: 'Northwest',
    hometown: '',
    phone: '555-555-5550',
    profession: 'Construction'
  },
  {
    id: 4,
    name: 'Jed Black',
    email: 'jed@black.com',
    dob: '01/01/1950',
    camp: 'Northwest',
    hometown: '',
    phone: '555-555-5550',
    profession: 'Construction'
  }
];

export function updateRefugee(id, newData) {
  data[id] = { ...data[id], ...newData };
}

export function createRefugee(newData) {
  data = data.concat({ ...newData, id: data.length });
}

export function getRefugee(id) {
  return data[id];
}

export function getAll() {
  return data;
}
