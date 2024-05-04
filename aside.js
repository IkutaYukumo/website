(()=>{

    const button = document.getElementById('button');
    const aside = document.getElementById('aside');
    aside.style.display = 'none';

    const clickButton =(e)=>{
        e.preventDefault();
        if (aside.style.display == 'none') {
            aside.style.display = 'block';
           } else {
             aside.style.display = 'none';
           }
    }

    button.addEventListener('click',(e)=>clickButton(e));

})();