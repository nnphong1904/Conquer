/*change background color for button of navbar when clicked*/
var navLink=document.getElementsByClassName('nav-link');
var linkArr=[];
var currentIndex=-1;
for (var i=0;i<navLink.length;i++){
    linkArr.push(navLink[i]);
}
for (var i=0;i<linkArr.length;i++){
    linkArr[i].addEventListener('click',function(index){
        var tmp=linkArr.indexOf(index.target);
        if (currentIndex===tmp){
            linkArr[tmp].classList.remove('current');
            currentIndex=-1;
        }
        else if (currentIndex!=tmp)
        {
            linkArr[tmp].classList.add('current');
            if (currentIndex!==-1){
                linkArr[currentIndex].classList.remove('current');
            }
            currentIndex=tmp;
        }
    })
}

/*parallax background*/
const section1Background=document.getElementById('header-area');
window.addEventListener('scroll',function(){
    section1Background.style.backgroundPositionY=this.window.pageYOffset*0.7+ "px";
})

const section3Background=document.getElementById('services-area');

window.addEventListener('scroll',function(){
    section3Background.style.backgroundPositionY=this.window.pageYOffset*0.3+ "px";
    this.console.log(section3Background.style.backgroundPositionY);
})
