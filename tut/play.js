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

*/
//task 3.1
const hobbies =['apple', 'oranges' , '', 'mango', '' , 'lemon'];

console.log(hobbies.map(hobby=>{
    if(hobby==''){
                return hobby+'empty string'}
    else{
                    return hobby}
            
    }));
