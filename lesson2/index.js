// const fs = require ( 'fs');

// fs.writeFile('demo1.txt', "This is sample text for creating new file", function(err){

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");    }
 

// const fs = require ( 'fs');

// fs.writeFile('demo2.txt', "This is sample text for creating new file", function(err){

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");  
//   }
  
// })




// const fs = require ( 'fs');

// fs.writeFile('demo4.txt', "This is sample text for creating new file", function(err){

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");  
//   }
  
// })





// })

// const fs = require ( 'fs');

// fs.writeFile('demo1.txt', "This is sample text for creating new file", (err)=>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");    }
 




// })



// const fs = require ( 'fs');

// fs.appendFile('demo1.txt', "I have a passion for it.", (err)=>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");    }
 




// })


// const fs = require ( 'fs');

// fs.readFile('demo1.txt', (err, data) =>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log(data);   
//  }
 




// })



// const fs = require ( 'fs');

// fs.readFile('demo1.txt', 'utf-8', (err, data) =>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log(data);   
//  }
 




// })



// const fs = require ( 'fs');

// fs.readFile('demo1.txt', 'utf-8', (err, data) =>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log(data);   
//  }
 




// })




// const fs = require ( 'fs');

// fs.rename('demo2.txt', 'demo3.txt', (err)=>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");  
//   }
  
// })




// const fs = require ( 'fs');

// fs.unlink('demo4.txt', (err)=>{

//     if(err)
//         {
//            console.log("err");
//         }
//     else
//     {
// console.log("Successful");  
//   }
  
// })


const fs = require ( 'fs');

fs.exists('demo1.txt', (result)=>{

    if(result)
        {
           console.log(" found");
        }
    else
    {
console.log("not found");  
  }
  
})
