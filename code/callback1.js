// a call back is a function which is passed inside a function as an argument

function myProfile(name,callback){
    console.log(`i am ${name} and`)
    callback()
}
function address(){
    console.log(" i from india")
}

myProfile("taabish", address)
