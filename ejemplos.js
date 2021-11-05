let str ="test";
for (let char of str){
    if (char != "e")
    console.log(char)
}

let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1')

console.log( map.get(1)  );
console.log( map.get('1') );

console.log(map.size);


let john = {name:"john"};

let visitsCountMap = new Map();
visitsCountMap.set(john,123);
console.log(visitsCountMap.get(john));

let recibeMap = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas', 50]
]);

for(let vegetales of recibeMap.keys()){
    console.log(vegetales);
    console.log("<br>");
}


for (let amount of recibeMap.values()){
    console.log(amount);
    console.log("<br>");
}

for (let entry of recibeMap){
    console.log(entry)
    console.log("<br>")
}

let contactMap = new Map([
    ['Juan', 311547895],
    ['pepe', 321587498],
    ['pepito', 31587954],
    ['cr7', 3167787897],
    ['messi', 3116136557]
]);

for(let nombres of contactMap.keys()){
    console.log(nombres);
    console.log("<br>");
}

for (let numbers of contactMap.values()){
    console.log(numbers);
    console.log("<br>");
}


for (let contact of contactMap){
    console.log(contact)
    console.log("<br>")
}



let set = new Set();

let Sergio = {name: "Sergio"};
let Anderson = {name: "Anderson"};
let Pepe = {name: "Pepe"};
let Pan = {name: "Ochon"};
let Ochon = {name: "Ochon"};

set.add(Sergio);
set.add(Anderson);
set.add(Pepe);
set.add(Sergio);
set.add(Pepe);

console.log ( set.size + "<br> ")

for ( let user of set ){
    console.log(user.name);

}

let winners = new Set(["oranges", "apples", "bananas"]);

for (let value of winners) console.log(value);


winners.forEach((value, valueAgain,set) => {
    console.log(value + " ");
});

let visitedSet = new WeakSet();

let Santiago = {name: "Santiago"};
let Cristian = {name: "Cristian"};
let Jorge = {name: "Jorge"};

visitedSet.add(Santiago);
visitedSet.add(Cristian);
visitedSet.add(Jorge);

console.log(visitedSet.has(Santiago)+  "  ");

console.log(visitedSet.has(Anderson));


let student = {
    name : 'Anderson',
    age: 18,
    isAdmin: false,
    courses : ['html', 'css', 'js'],
    wife: null


};

let json = JSON.stringify(student);

console.log(typeof json + "<br>");

console.log(json);


class User {
    constructor(name) {
        this.name = name;
    }


sayHi() {
    console.log(this.name);
    }    
} 

let user = new User("Sergio");
user.sayHi();
