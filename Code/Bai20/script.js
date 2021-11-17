// var btn = document.getElementById("click")
// btn.addEventListener('click', function(event){
//     event.stopPropagation();
//     event.preventDefault();
//     console.log(event.target);
// })

// var ltcs = document.getElementById("ltcs")
// ltcs.addEventListener('click',event =>{
//     // event.stopPropagation();
//     event.preventDefault();
//     console.log("aaa");
// })

// var hihi = () => {
//     console.log("hihi");
// }

// var ong = document.getElementById("ong")
// ong.addEventListener('click', event =>{
//     console.log("ong")
// })

// var buttons = document.querySelectorAll(".btn1")
// buttons.forEach(button =>{
//     button.addEventListener('click', event =>{
//         console.log(event.target)
//     })
// })

// var dropdowns = document.querySelectorAll(".dropdown > a")
// dropdowns.forEach(dropdown =>{
//     dropdown.addEventListener('click', function(event){
//         var state = dropdown.getAttribute('open')
//         if(state){
//            dropdown.removeAttribute('open')
//         }
//         else{
//             dropdown.setAttribute('open', true)
//         }
//     })
// })

var groups = document.querySelectorAll(".group > a")

groups.forEach(group =>{
    group.addEventListener('click', event=>{
        event.preventDefault();
        var state = group.getAttribute("open");
        if(state){
            group.removeAttribute("open")
        }
        else{
            group.setAttribute("open",true)
        }
    })
})