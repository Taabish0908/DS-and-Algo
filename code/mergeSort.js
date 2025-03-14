
function mergeSort(arr){
    if (arr.length <=1) return arr;

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid));

    return merge(left,right);
}
function merge(left, right){
    let i = 0 ; let j = 0 ; let result = []

    while( i <left.length && j < right.length){
        if (left[i] <= right[j]){
            result.push(left[i])
            i++
        }
        else {
            result.push(right[j])
            j++
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j))

}
console.log(mergeSort([56,54,74,84,56,12,85,84,0,1,98]))