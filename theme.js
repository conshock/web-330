setDefaultTheme();

function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

function toggleMode(x) 
{  
    let colorTheme = document.body.classList;
    let iconMode = x.classList;
    console.log(colorTheme.value, iconMode.value);
    
    setSelectedTheme();

}

// Need to figure out how to change the theme from the toggleMode function. We go from grabbing the body classlist
// and icon classlist to trying to the setSelectedTheme() function.