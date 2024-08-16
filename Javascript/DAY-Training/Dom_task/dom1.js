let tdata =['S_No','F_name','cmpy_Name','contact']
let tbody =[{
    id:1,
    fname:'kishore',
    age:25,
    country:'india',
    status:true
},
{
    id:2,
    fname:'naveen',
    age:50,
    country:'us',
    status:true
},
{
    id:3,
    fname:'prvn',
    age:21,
    country:'afgn',
    status:false
},
{
    id:4,
    fname:'prem',
    age:35,
    country:'sri-lanka',
    status:true
}
]
let table =document.createElement('table');
let theadrow =document.createElement('tr');
for(i=0;i<tdata.length;i++){
    let thead_th = document.createElement('th')
    thead_th.innerText=tdata[i];
    theadrow.appendChild(thead_th)
}
let table_body = document.createElement('tbody')

for(j=0;j<tbody.length;j++){
    let tbody_row= document.createElement('tr');

    let tbody_row_data1 =document.createElement('td')    //td-1
    tbody_row_data1.innerText= tbody[j].fname
    tbody_row.appendChild(tbody_row_data1)

    let tbody_row_data2 =document.createElement('td')    //td-2
    tbody_row_data2.innerText= tbody[j].age
    tbody_row.appendChild(tbody_row_data2)

    let tbody_row_data3 =document.createElement('td')
    tbody_row_data3.innerText= tbody[j].country    //td-3
    tbody_row.appendChild(tbody_row_data3)

    let tbody_row_data4 =document.createElement('td')    //td-4
    tbody_row_data4.innerText= tbody[j].status
    tbody_row.appendChild(tbody_row_data4)

    table_body.appendChild(tbody_row)
}

table.appendChild(theadrow)
table.appendChild(table_body)

document.body.appendChild(table)