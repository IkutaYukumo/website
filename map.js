(()=>{

    const button1 = document.getElementsByClassName('floorButton1');

    const map = document.querySelectorAll('floorMap');
    map.style.display = 'none';

    const clickButton =(e)=>{
        e.preventDefault();
        map.style.display = 'none';
        map[1].style.display = 'block';
    }

    button1.addEventListener('click',(e)=>clickButton(e));

})();