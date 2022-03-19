const btn = document.getElementById("btn");
const input = document.getElementById("input");
const div = document.getElementById("hover");


// click

btn.addEventListener('click',(event)=>{
    console.log(event);
    alert(event.target.id,"clicked")
})
// div.addEventListener('click',(event)=>{
//     console.log(event);
//     alert(event.target.id,"clicked")
// })
input.addEventListener('blur',(event)=>{
    console.log(event);
    console.log("user has typed",event.target.value);
})
input.addEventListener('keyup',(event)=>{
    console.log(event.target.value);
})


div.addEventListener('mousemove',(event)=>{
    // console.log(event.clientX,event.clientY);
    console.log(event.offsetX,event.offsetY);
})
div.addEventListener('dblclick',(event)=>{
    console.log("user has double clicked");
})

// input.addEventListener('')