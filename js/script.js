const container=document.getElementById('container');

for(let i = 1; i <= 100; i++ ){
    let element;

    if((i % 3==0) && (i % 5==0)){
        console.log('FizzBuzz')
        element=`<div class="box box-red">FizzBuzz</div>`
    }
    else if(i % 3== 0){
        console.log('Fizz')
        element=`<div class="box box-green">Fizz</div>`
    }
    else if (i % 5== 0){
        console.log('Buzz')
        element=`<div class="box box-black box-yellow">Buzz</div>`
    }
    else{
        console.log(i)
        element=`<div class="box box-blue">${i}</div>`
    }

    container.innerHTML += element
    
    
}