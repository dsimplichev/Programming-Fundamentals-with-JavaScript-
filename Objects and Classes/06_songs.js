function song(arr){

class Song {
    constructor(typeList, name, time){
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
    print(){
        console.log(`${this.name}`)
    }
}

let rotations = arr.shift();
let typeOfTheList = arr.pop();

arr.map(el =>{
    let [type, name, time] = el.split('_');
    if(type == typeOfTheList || typeOfTheList == 'all') {
        let newSong = new Song(type, name, time)
        newSong.print()
    }
})


}
song([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])