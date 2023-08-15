// let box=document.getElementById('box')
// let rax=document.getElementById('rax')
// let cv=document.getElementById('cv')
// let po=document.getElementById('po')

// setTimeout(()=>{
//     box.style.display='block'
// },1000)

// setTimeout(()=>{
//    rax.style.display='block'
// },2000)


// setTimeout(()=>{
//     cv.style.display='block'
// },3000)

// setTimeout(()=>{
//     po.style.display='block'
// },4000)






let main=document.getElementById("main")
let pp=document.getElementsByClassName("im")
console.log(pp)

if(localStorage.getItem('pic')==null)
{
    let y=JSON.parse(localStorage.getItem('pic'));
    main.setAttribute('src',y)
}

for (let i = 0 ; i < pp.length ; i++)
{
    pp[i].addEventListener('click',function (){
        let x=pp[i].getAttribute('src')
        main.setAttribute('src',x)
       localStorage.setItem('pp',JSON.stringify(x))
    })
}


