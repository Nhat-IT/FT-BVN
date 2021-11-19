// var aTags = document.querySelectorAll(".image-item a")
// aTags.forEach(aTag =>{
//     aTag.addEventListener('click', event=>{
//         event.preventDefault();
//         var link = aTag.getAttribute("href");
//         var viewer = document.querySelector(".viewer img")
//         viewer.setAttribute("src",link)
//     })
// })

// class ImageViewer{
//     constructor(viewID){
//         this.id = viewID;
//         this.init();
//         this.listenEvent();
//     }
//     init(){
//         this.viewDiv = document.getElementById(this.id)
//         this.aTags = document.querySelectorAll("#" + this.id + " .image-item a")
//         this.img = document.querySelector("#" + this.id + " .viewer img")
//     }
//     listenEvent(){        
//         this.aTags.forEach(aTag =>{
//             aTag.addEventListener('click', event=>{
//                 event.preventDefault();
//                 var link = aTag.getAttribute("href")
//                 this.img.src = link
//             })
//         })
//     }
// }

// var imv1 = new ImageViewer("viewerID1")

//----------------------------------------------------------


