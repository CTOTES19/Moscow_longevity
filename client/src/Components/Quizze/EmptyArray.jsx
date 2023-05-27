import { QuastionData  } from '../../data/data';

export let map = [];   

QuastionData.forEach(item => {

  const res = item.total

  for (let i = 0; i<res.length; i++) {

    let sum = 0;
    res[i].forEach((item, i) => {
      sum = item;
      map[sum] = map[sum] ? map[sum] + 1 : 1;
    })
  }
})
console.log(map)


