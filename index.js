var navLink=document.getElementsByClassName('nav-link');
var linkArr=[];
var currentIndex=-1;
for (var i=0;i<navLink.length;i++){
    linkArr.push(navLink[i]);
}
for (var i=0;i<linkArr.length;i++){
    linkArr[i].addEventListener('click',function(index){
        var tmp=linkArr.indexOf(index.target);
        // if (linkArr[tmp].classList.contains('current')==true){
        //     linkArr[tmp].classList.remove('current');
        // }
        // else {
        //     linkArr[tmp].classList.add('current');
        // }

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