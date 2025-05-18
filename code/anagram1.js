
function anagram(str1,str2){
    if(str1.length !== str2.length) return false
    console.log('fdsfdsd')

    let count1 = {}
    let count2 = {}

    for(let i=0;i<=str1.length-1;i++){
        count1[str1[i]]  = (count1[str1[i]] || 0) + 1
        count2[str2[i]] = (count2[str2[i]] || 0) + 1
    }
    for( key in count1){
        console.log(count1,count2)
        if(count1[key] !== count2[key]) return false
        return true
    }
    
    
}



let str1 = 'soul'
let str2 = 'lous'
console.log(anagram(str1,str2))