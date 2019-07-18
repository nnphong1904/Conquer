var navLink=document.getElementsByClassName('nav-link');
var linkArr=[];
for (var i=0;i<navLink.length;i++){
    linkArr.push(navLink[i]);
}
console.log(linkArr);

for (var i=0;i<linkArr.length;i++){
    linkArr[i].addEventListener('click',function(index){
        console.log(index);
    })
}