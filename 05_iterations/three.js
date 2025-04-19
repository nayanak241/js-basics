//Maps
const map= new Map()
map.set('IN',"India")
map.set('USA',"United States OF Amaerica")
map.set('FR',"France")

// console.log(map);
for(const [key,value]of map){
    console.log(key,':-',value);
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}
// for(const[key,value] of myObject){
//     console.log(key,':-',value);
// }