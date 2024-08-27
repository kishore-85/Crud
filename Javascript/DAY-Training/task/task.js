let data=[
    {fname:'a',grade:1,score:[90,90,80]},
    {fname:'b',grade:5,score:[85,95,82]},
    {fname:'c',grade:6,score:[82,95,71]},
    {fname:'d',grade:2,score:[94,87,88]},
    {fname:'e',grade:3,score:[97,74,86]},
    {fname:'f',grade:7,score:[96,84,73]},
    {fname:'g',grade:8,score:[95,96,83]},
    {fname:'h',grade:4,score:[73,98,72]}
   
]


let filter_data= data.filter((val)=>{
    return val.grade<=5;
})


let a = filter_data.map((val)=>{
                  
          let b= val.score.reduce((result,cval)=>{
                  result=result+cval
                  return result;
          },0)         


          console.log(val)
          return val.score = b
})

let c=a.length;

console.log(a,'a')

let d= a.reduce((result,cval)=>{
    result=result+cval
    return result;
},0)

console.log(d/c,'average')

//2

let students =[
    {fname:'ram',school:'skv'},
    {fname:'govindh',school:'vsb'},
    {fname:'shalu',school:'mkce'},
    {fname:'kumar',school:'skv'},
    {fname:'gokul'}

]

let data_sum = students.reduce((result,cval)=>{
            if(cval.school in result){
                result[cval.school]++
            }
            else{
                result[cval.school]=1;
            }
            return result;
},{})

console.log(data_sum)