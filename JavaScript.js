let name = "sample.name";
console.log(name);
const age = 24;
if(age === 24){
    console.log("t");
};
switch (100){
    case 10:
        console.log(10);
        break;
    case 100:
        console.log(100);
        break;
    default:
        console.log(error);
        break;
};

let year = 2020;
while (year < 2024){
    year++;
    console.log(year);
};

for(let i=1; i<=5; i++){
    console.log(i);
};

let fluits=["apple", "banana"]
console.log(fluits);
console.log(fluits[1]);
fluits[0]="りんご";
console.log(fluits[0]);

const profile = {
    myname:"ono",
    age:24,
    greet:function(){
        console.log(this.myname+"です");
    }
}
profile.greet();

function weekly(day) {
    switch(day){
        case 0:
            return "月曜日";
        case null:
            return "null";
        default :
            return "error"
    }
}
console.log(weekly(0));
console.log(weekly(null));
console.log(weekly("1"));

let sum=(int1,int2)=>{
    return int1 + int2;
}
console.log(sum(5,10));

class animals {
    constructor(animal1, animal2) {
        this.animal1 = animal1;
        this.animal2 = animal2;
    }

    animal (){
        console.log(this.animal2, this.animal1);
    }
}
const animals1 = new animals("cat", "dog");
console.log(animals1);

export const sum2 = (a, b) => a + b;

export default animals1;

const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(num => num > 3);
console.log("findの結果:", foundNumber);

const doubled = numbers.map(num => num * 2);
console.log("mapの結果:", doubled);

const even = numbers.filter(num => num % 2 === 0);
console.log("filterの結果:", even);
