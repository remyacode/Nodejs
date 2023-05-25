//Task 2
/*
let name='Remya';
let age=22;
const hasH=true;
//error :: hasH=false;

const fun=(uname,uage,uhas)=>{
    return('Name:'
    + uname + ' Age:' + uage + ' Has Hobbies:' +uhas);
}

const addr=()=>1+2;

console.log(fun(name,age,hasH));
console.log(addr());


//objects-6

const stu={
    name:'remya',
    age:'22',
    greet(){
        console.log('Hi,I am '+ this.name);
    }
};

//task 3
/*tutorial 7
const hobbies =['Sports','Cooking'];
for(let hobby of hobbies){
    console.log(hobby);
}
console.log(hobbies.map(hobby=>{return 'Hobby'+hobby}));
console.log(hobbies);


//task 3.1
const hobbies =['apple', 'oranges' , '', 'mango', '' , 'lemon'];

console.log(hobbies.map(hobby=>{
    if(hobby==''){
                return hobby+'empty string'}
    else{
                    return hobby}
            
    }));

    const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

//task 4
//1
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

const { key1, key3} = { ...obj1}

console.log(key1, key3)

        //output: 1 1000
    
//2
const arr1 = ['value1', 'value2']

const [ val1, val2 ] = arr1



console.log(val1)

console.log(val2)

        //output: value1
                  value2

//3

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)

        //output: 1 1000


//task 5

//1
console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

console.log('d');

        //output: 
        a
        b
        d
        c 


//2
console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

setTimeout(() => console.log('d'), 0)

console.log('e');

    //output:
    a 
    b 
    e 
    d 
    c 



//3
const late = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



const S = async () => {

 console.log('a');

 console.log('b');



 await late(3000);



 console.log('c');

 console.log('d');



 console.log('e');

};



S();

        //output::
        a 
        b 
        c 
        d 
        e 

*/

