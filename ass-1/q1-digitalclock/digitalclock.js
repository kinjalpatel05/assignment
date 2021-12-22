setInterval(()=> {
    console.clear()
    let d=new Date();
    console.log(`${d.getDate()} - ${d.getMonth() + 1} - ${d.getFullYear()} | 
    ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()} : ${d.getSeconds()}`)
},1000)