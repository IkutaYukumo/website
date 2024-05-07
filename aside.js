(()=>{

    const button = document.getElementById('button');
    const aside = document.getElementById('aside');
    aside.classList.add("none");

    const clickButton =(e)=>{
        e.preventDefault();
        if (aside.style.display == 'none') {
            aside.classList.remove("none");
           } else {
             aside.classList.add("none");
           }
    }

    button.addEventListener('click',(e)=>clickButton(e));

})();
