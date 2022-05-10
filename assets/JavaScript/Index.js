//Alerte pour le boutton
let myBtn = document.getElementById("barre")

function iza(){
    alert("Tsy madeha io button io !")
}

myBtn.addEventListener("click",iza)

//Animation sur les image de licorne
//Donne utilliser pour l'animation
dataLicorne =[{
    textLic : `Lulu Confetty`,
    imgLic : `assets/img/photo1.jpg`, 
},
{
    textLic : `Lapillon Magik`,
    imgLic : `assets/img/photo2.jpg`, 
},
{
    textLic : `El Ninjacorn`,
    imgLic : `assets/img/photo3.jpg`, 
},
{
    textLic : `Sweety Candy`,
    imgLic : `assets/img/photo4.jpg`, 
}]
let img = document.querySelectorAll('figure img');
let text = document.getElementsByTagName('figcaption');
let i = 0;
/**Fonctionnement de l'animation du Licorne
 * A chaque 3 secondes le licorne et son nom change de gauche a droite
 */
function animateLicorne(){
    if(i < dataLicorne.length -1){
        i ++ ;
         if(i == 1){
            text[i - 1].textContent = `${dataLicorne[1].textLic}`;
            img[i - 1].src = `${dataLicorne[1].imgLic}`;
            text[i].textContent = `${dataLicorne[2].textLic}`;
            img[i].src = `${dataLicorne[2].imgLic}`;
            text[i + 1].textContent = `${dataLicorne[3].textLic}`;
            img[i + 1].src = `${dataLicorne[3].imgLic}`;
            text[i + 2].textContent = `${dataLicorne[0].textLic}`;
            img[i + 2].src = `${dataLicorne[0].imgLic}`;
        }
        else if(i == 2){
            text[i - 2].textContent = `${dataLicorne[2].textLic}`;
            img[i - 2].src = `${dataLicorne[2].imgLic}`;
            text[i - 1].textContent = `${dataLicorne[3].textLic}`;
            img[i - 1].src = `${dataLicorne[3].imgLic}`;
            text[i].textContent = `${dataLicorne[0].textLic}`;
            img[i].src = `${dataLicorne[0].imgLic}`;
            text[i + 1].textContent = `${dataLicorne[1].textLic}`;
            img[i + 1].src = `${dataLicorne[1].imgLic}`;
        }
        else if(i == 3){
            text[i - 3].textContent = `${dataLicorne[3].textLic}`;
            img[i - 3].src = `${dataLicorne[3].imgLic}`;
            text[i - 2].textContent = `${dataLicorne[0].textLic}`;
            img[i - 2].src = `${dataLicorne[0].imgLic}`;
            text[i - 1].textContent = `${dataLicorne[1].textLic}`;
            img[i - 1].src = `${dataLicorne[1].imgLic}`;
            text[i ].textContent = `${dataLicorne[2].textLic}`;
            img[i].src = `${dataLicorne[2].imgLic}`;
        };
    }
    else{
        i = 0;
        text[i].textContent = `${dataLicorne[0].textLic}`;
        img[i].src = `${dataLicorne[0].imgLic}`;
        text[i + 1].textContent = `${dataLicorne[1].textLic}`;
        img[i + 1].src = `${dataLicorne[1].imgLic}`;
        text[i + 2].textContent = `${dataLicorne[2].textLic}`;
        img[i + 2].src = `${dataLicorne[2].imgLic}`;
        text[i + 3].textContent = `${dataLicorne[3].textLic}`;
        img[i + 3].src = `${dataLicorne[3].imgLic}`;
    }
}
setInterval('animateLicorne()', 3000)