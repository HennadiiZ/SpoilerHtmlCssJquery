console.log("666")






$(document).ready(function(){
    $('.block__title').click(function(event){
           $(this).toggleClass('active').next().toggle(300);
        // $(this).toggleClass('active').next().slideToggle(300);
    });
});


// $(document).ready(function(){
//     $('.block__title').click(function(event){
//            if($('.block').hasClass('one')){
//             $('.block__title').not($(this)).removeClass('active');
//             $('.block__text').not($(this).next()).slideUp(300);
//            }
//             $(this).toggleClass('active').next().toggle(300);
//         //$(this).toggleClass('active').next().slideToggle(300);
//     });
// });





// const block__title = document.querySelectorAll('.block__title');
// const block__text = document.querySelectorAll('.block__text')

// block__title.forEach((block,indx)=>{

//     block.addEventListener('click',(e)=>{
  
//         if(e.target.classList.contains('block__title')){
//             block__text.forEach((text, index)=>{
    
//                 if(e.target === 'block__title'){
//                     block__title[indx].style.display = 'block'
//                 }
//             })           
//         }
//     })
// })