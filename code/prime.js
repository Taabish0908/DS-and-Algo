
function prime(array){
 for(let i =0;i<array.length;i++){
    let count = 0
    for(let j=1;j<=array[i];j++){
        if(array[i] % j === 0){
            count++
        }
    }
    if(count == 2){
       console.log(array[i])
    }
 }
 return array
}



let array = [2,6,4,3,1,8,45,87,96]
prime(array)