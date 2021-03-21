/*
============================================
; Title: Assignment 1.3
; Author: Conner Shockley
; Date: 3/15/2021
; Description: This program will switch the 
; theme of a page based on used selection 
; and what values have been stored in the 
; browser to set a default theme.
;===========================================
*/

// The first thing that happens in the script is setting the default theme based on the user's browser storage.
setDefaultTheme();

// Logging the current theme to make sure all is working correctly.
console.log(`The current theme is the ${document.body.classList}.`);

// This function sets the theme based on the user's browser storage.
function setDefaultTheme()
{
    // Each variable below is pulling from the localStorage of the browser to determine the theme.
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    // The 3 lines below set the theme, iconMode, and iconText based on the user's browser storage.
    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

// This is the onclick function that toggles the theme and sets the default theme.
function toggleMode(x) 
{  
    let colorTheme = document.body.classList.value;
    let iconMode = document.getElementById("icon-mode").classList.value;
    
    // Using an if-else statement, we can toggle the theme and icon.
    if (document.body.classList.value === "dark-theme") {
        // If the body class is set to dark-theme, then we change to light-theme.
        document.body.classList.value = "light-theme";
        // The next 3 lines changes the visual aspect of the theme switch icon and text.
        document.getElementById("icon-mode").classList.remove("fa-toggle-on");
        document.getElementById("icon-mode").classList.add("fa-toggle-off");
        document.getElementById("icon-text").innerHTML = "Light Mode"
        // The next 3 lines set the theme, icon, and icon text to be saved into the browser localStorage.
        localStorage.setItem('colorTheme', 'light-theme')
        localStorage.setItem('iconText', 'Light Mode')
        localStorage.setItem('iconMode', 'fa-toggle-off')
    } else {
        // If the body class is set to light-theme, then we change to dark-theme
        document.body.classList.value = "dark-theme";
        // The next 3 lines changes the visual aspect of the theme switch icon and text.
        document.getElementById("icon-mode").classList.remove("fa-toggle-off");
        document.getElementById("icon-mode").classList.add("fa-toggle-on");
        document.getElementById("icon-text").innerHTML = "Dark Mode"
        // The next 3 lines set the theme, icon, and icon text to be saved into the browser localStorage.
        localStorage.setItem('colorTheme', 'dark-theme')
        localStorage.setItem('iconText', 'Dark Mode')
        localStorage.setItem('iconMode', 'fa-toggle-on')
    }

    // Log the theme change in the console to make sure all is working properly.
    console.log("The theme has been changed to " + document.body.classList.value + ".");
}