let adNum = 0
function change_ad()
{
    
    if (adNum % 2 === 0)
    {
        document.getElementsByClassName('adText')[0].innerHTML = 'NEW! 10OZ Head-TO-TOE HEALING OINTMENT | <a href="">Shop Now</a>';
        adNum ++;
    }
    else
    {
        document.getElementsByClassName('adText')[0].innerHTML = 'SHOP OUR NEW DIAPER PRINTS! | <a href="">Shop Now</a>';
        adNum ++;
    }
    
}