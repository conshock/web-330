/*
============================================
; Title: Assignment 3.3
; Author: Conner Shockley
; Date: 4/3/2021
; Description: This program contains the 
; Bill class.
;===========================================
*/

// Creating Bill class with four parameters for menu items.
export class Bill 
{
    // Each parameters is set to an empty array.
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    {
        // Each array will be filled with the value of each menu item.
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }
    
    // Will add value to the respective array.
    addBeverage(beverage)
    {
        this._beverages.push(beverage);
    }

    // Will add value to the respective array.
    addAppetizer(appetizer)
    {
        this._appetizers.push(appetizer);
    }

    // Will add value to the respective array.
    addMainCourse(mainCourse)
    {
        this._mainCourses.push(mainCourse);
    }

    // Will add value to the respective array.
    addDessert(dessert)
    {
        this._desserts.push(dessert);
    }

    // getTotal function adds together each array to produce a total value.
    getTotal()
    {
        // Set total equal to zero.
        let total = 0;

        // For each item checked on the menu, that items value will be added to the total.
        let beverageTotal = this._beverages.forEach(function(beverage)
        {
            total += parseFloat(beverage.price);
        });

        // For each item checked on the menu, that items value will be added to the total.
        let appetizerTotal = this._appetizers.forEach(function(appetizer)
        {
            total += parseFloat(appetizer.price);
        });

        // For each item checked on the menu, that items value will be added to the total.
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
        {
            total += parseFloat(mainCourse.price);
        });

        // For each item checked on the menu, that items value will be added to the total.
        let dessertTotal = this._desserts.forEach(function(dessert)
        {
            total += parseFloat(dessert.price);
        });

        // Log total to console for debugging.
        console.log(`The total is ${total}`);

        // Return total up to the 2nd decimal place.
        return total.toFixed(2);
    }

}