
/* c'est une fonction quin change la couleur des element de la sideOU ON CHERCHE A 
LIRE pour bien montrer l'element ou on cherche a lire */

var onglet = document.querySelectorAll('.side-bar ul a');
for(var i=0 ; i<onglet.length ;i++)
{
    onglet[i].addEventListener('click',function(e){
         var menu = this.parentNode.parentNode.parentNode;
          var li = this
         
         if (li.classList.contains('active')) {
              return false ;
        }
              menu.querySelector('.side-bar .active  ').classList.remove('active');
               li.classList.add('active');
    
    })
}
menu = document.querySelector('.nav')
contite = window.scrollY
top = menu.getBoundingClientRect().y 
p = document.querySelector('.side-bar')


window.addEventListener('scroll',function (e){
    contite = window.scrollY
    top = menu.getBoundingClientRect().y
    pY = p.getBoundingClientRect().y
    widthM = menu.getBoundingClientRect().width
    widthP = p.getBoundingClientRect().width
    hasScrolledClass = menu.classList.contains('fixed')


  
    if(contite>pY){
        p.classList.add('fixedP')
        p.style.width = widthP+"px"
    }else{
        p.classList.remove('fixedP')
    }
    
})

