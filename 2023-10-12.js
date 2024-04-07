/*
const a = 5 ;

let b = 5 ;

b = 10 ;


if(a > 20) {
    console.log("a가 20보다 큽니다.");
} else {
    console.log("a가 20보다 작습니다.");
}

for(let c = 1; c<=20; c++){
    console.log(c);
}
let d = 1
while(d<=10){
    console.log(d);
    d++;
}


let num1 = 2
let num2 = 3
function f(a,b){
console.log(a+b)
}
f(num1,num2)

function fn(a,b){
    return a+b
}
console.log(fn(79,47))

function i(a){
    if( 20>a && a>15 ){
        console.log("ok")
    }
}
i(17)
*/

// list를 사용하여 key : value로 key를 입력하여 value를 추출해냄
const test = [1, 2, 3, 4, 5];


for(let i = 0; i < test.length; i++){ //length는 거리라는 뜻으로 test라는 리스트의 총 길이를 말함
    console.log(test[i]);
}

console.log(test[0])


const obj = [{ //obj라는 변수 안에 리스트를 추가
    name: '박찬혁',
    age: '16',
    address: '123 Main St',
    school: '등촌중학교',
  },
  {
    name: '이지우선생님',
    age: '25',
  }
]

  console.log('내 이름은 ' + obj[1].name + '이고 나이는 ' + obj[1].age + '입니다.'); 

for(let n = 0; n < obj.length; n++){ //obj 안에 있는 리스트중 name을 순서대로 0,1로 뽑음
    console.log(obj[n].name)
}

obj.map(item=>{console.log(item.name)}) //화살표함수 map함수



// map으로 평균 구하기

function solution(numbers) {
    let sum = 0
    
    numbers.map((number) => {
        sum += number
    })
    
    return sum / numbers.length
}

console.log(solution([0,5,10,15,20]))

