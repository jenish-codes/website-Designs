



// gallery seeMore seeLess Script

const seeMore = document.querySelector('.seeMore');
const seeLess = document.querySelector('.seeLess');

seeMore.addEventListener('click',(e) =>{
    if(seeMore.classList.contains('seeMore')){
        seeLess.classList.add('active-cbtn')
        seeMore.classList.remove('active-cbtn')
        click
    }
});

seeLess.addEventListener('click',(e) =>{
    if(seeLess.classList.contains('seeLess')){
        seeMore.classList.add('active-cbtn')
        seeLess.classList.remove('active-cbtn')
    }
});