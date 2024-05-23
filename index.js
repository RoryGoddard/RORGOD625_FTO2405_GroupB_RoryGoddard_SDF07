let isLight = true

/* I know this isn't the best way to achieve the desired result as I am changing the values of the css instead of swapping around the variables, 
but admittedly, I couldn't get that to work, so I settled on this. I am confident there is a better way to do it */
function toggleDarkMode() {
    const root = document.documentElement;
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
