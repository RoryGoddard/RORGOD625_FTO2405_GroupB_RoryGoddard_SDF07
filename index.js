let isLight = true
/* This function achieves two goals, firstly, it checks what the current background colour is and then flips it, to its opposite value, along with the text colour 
secondly, it switches the icon so that the user has a visual cue available that tells them what mode they are on now, and indicates to them that they can change it
I discuss the glaring limitations of this function on my github readme.

There are a number of limitations and problems with this fucntion, namely that its changing the values of the css variables instead of swapping variables themselves
This could lead to issues in the future if I were to change the values in the styles document to be completely different colours,
However I don't have the knowledge currently to implement this in a better way

The other glaring limitation with it is because I am hosting it on a live server, and I hope you will too, I have had to construct this 
convoluted template string in order to get the desired functionality with regards to the SVG files. This is a compatibility nightmare, I know, 
but I decided to go through with it for now as I really wanted to add this functionality, and I will learn to do it properly in the future 

***************Cancel above, I fixed it

Challenges faced - above, plus in JS bools are not capitalised!!!*/

function toggleDarkMode() {
    const root = document.documentElement;
    let protocol = location.protocol; 
    let domain = location.hostname; 
    let port = location.port; 
    const changeSVG = document.getElementById("svg-darkMode")

    if (isLight === true) {
        root.style.setProperty('--ig-light-background', 'rgb(0, 0, 0)');
        root.style.setProperty('--ig-light-text', 'whitesmoke');
        changeSVG.src = `./images/svg/moon.svg`
        isLight = false
    } else if(isLight === false) {
        root.style.setProperty('--ig-light-background', 'whitesmoke');
        root.style.setProperty('--ig-light-text', 'rgb(0, 0, 0)');
        changeSVG.src = `./images/svg/sun.svg`
        isLight = true
    }
}
