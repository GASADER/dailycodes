const key = [1,2,3,4,5,6,7] 
const value = ["a","b","c","d","e","f","g"]

const result = {}

key.forEach((key,i) => result[key]=value[i])
console.log(result)