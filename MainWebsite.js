const MenuBtn = document.querySelector('.MenuButton')
let MenuOpen = false;
MenuBtn.addEventListener('click', () => {
    if (MenuOpen == false){
        MenuBtn.classList.add('open');
        document.getElementById("MenuSlide").style.opacity = 0.8;
        MenuOpen = true;
    }else {
        MenuBtn.classList.remove('open');
        document.getElementById("MenuSlide").style.opacity = 0;
        MenuOpen = false;
    }
})

function RemoveMenuSlide()
{
    document.getElementById("MenuSlide").style.opacity = 0;
    MenuBtn.classList.remove('open');
    document.getElementById("MenuSlide").style.opacity = 0;
    MenuOpen = false;
}

function DoPopupSubDiv(Elmt)
{
    if (document.getElementById(Elmt).style.height <= "0px") 
    {
        document.getElementById(Elmt).style.height = "200px";
    }
    else
    {
        document.getElementById(Elmt).style.height = "0px";
    }
}