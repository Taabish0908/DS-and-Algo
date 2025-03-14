
function flatArray(array){

    let result = []
    for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
           result =  result.concat(flatArray(array[i]))
        }else{
           result.push(array[i])
        }
    }
    return result
}

let array = [3,2,[259,2,1,[45,96]],20]

console.log(flatArray(array))