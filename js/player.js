export default class Player {
    constructor(name, point) {
        this.name = name;
        this.point = point;
    }
    addPoints(){
        this.point +=1;
    }
}