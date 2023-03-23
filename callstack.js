setTimeout(()=>{
    console.log(1);
}, 0);              
// მეორე გამოვა ეს

setTimeout(()=>{
    console.log(5);
}, 0);  
//  მესამე გამოვა ეს

console.log(2);   
// პირველი  გამოვა ეს


const getperson = () => {
    const p = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(Math.random() * 100 > 50){
                resolve([
                    {name: "Alex", age: 34},
                    {name: "John", age: 34},
                ]);
            }else{
                reject(Error("The person couldn't be fetched"));
            }
        }, 1000);
    });
    return p;
};

getperson().then(
    (result) => console.log(result),
    (error) => console.log(error)
);