/*
*   JavaScript历史遗留问题
*/

function whatIsTrue(){
    if(undefined){
        console.log('undefined is true!');
    }
    if(null){
        console.log('NULL is true!');
    }
    if(''){
        console.log('\'\' is true!');
    }
    if('0'){
        console.log('0 is true!');
    }
    if(NaN){
        console.log('NaN is true!');
    }
}

/*
*   JS匿名函数
*/
function addLater(a, b, callback){
    setTimeout(function(){
        let sum = a + b;
        callback(sum);
    }, 1000);
}



function demo(){
    whatIsTrue();

    addLater(1, 2, function(result){
        console.log('result: ', result);
    });
}