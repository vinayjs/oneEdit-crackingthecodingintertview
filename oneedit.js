const charMap =(str)=>{
    let obj ={};
    for (let i of str)
    (!obj(i))?obj[i]=1:obj[i]++;
    return obj;
}

const oneAway = ( str1,str2)=>{
    if(str1 === str2) 
      return false;
    const obj1 =charMap(str1);
    const obj2 = charMap(str2);
    let counter = 0;
    for(let i in obj1){
       
        if(obj1[i]!== obj2[i])
            counter++;
        else if(counter>=2){
            return false;
        }
        
    }
    return true;
}

const w1 ="pale";
const w2= "ple"
console.logo(oneAway(w1,w2));