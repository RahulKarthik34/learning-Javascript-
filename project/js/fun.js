// function find(arr){
//     let largest = arr[0]
//     for (let i = 1; i< arr.length; i++){
//         if ( arr[i]>largest){
//             largest = arr[i]
//         }
//     }
//     return largest

// }

// console.log(find([0,1,0,0,0]))


// function  find(arr){
//  return Math.max(...arr)
// }
// console.log(find([0,1,5,0,0]))


// let arr=[1,2,3,1,"d,","w",3]
// let uniqe = arr.filter(element =>{
//     return typeof element ==="number"
// })

// console.log(uniqe)

// function find(arr){
//     return arr[0 ]
// }
// console.log(find([1,2, 3, 4, 7]))

// let arr=[1,2,3,1,2,3]
// let arr1 =arr.slice(1)
// console.log(arr1)

//  let main =[11,22,12,123,1]
//  console.log(Math.max(...main))



// **** no of elements in object ****
// let obj={
//     name :"rahul",
//     age : 23,
//     city : "delhi"
// }

// console.log(Object.keys(obj).length)

let arr=[{
    name :"rahul",
    age : 23,
    city : "delhi",
    gender : "male"
},
{
    name :"karthik",
    age : 24,
    city : "datah",
    gender : "male"
},
{
    name :"guru",
    age : 24,
    city : "bangalore",
    gender : "female"
}]

let result = arr.filter((obj=>{
    return (obj.gender === "male")
}))

console.log(result)