(()=>{

    const button = document.getElementById('button');
    const aside = document.getElementById('aside');
    aside.classList.add("none");

    const clickButton =(e)=>{
        e.preventDefault();
        if (aside.classList.contains("none")) {
            aside.classList.remove("none");
           } else {
             aside.classList.add("none");
           }
    }

    button.addEventListener('click',(e)=>clickButton(e));

})();
