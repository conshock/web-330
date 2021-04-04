/*
============================================
; Title: Assignment 3.3
; Author: Conner Shockley
; Date: 4/3/2021
; Description: This program contains the 
; Bill class.
;===========================================
*/

export class Bill 
{
    constructor(_beverages, _appetizers, _mainCourses, _desserts)
    {
        _beverages = [];
        _appetizers = [];
        _mainCourses = [];
        _desserts = [];
    }
    
    addBeverage(beverage)
    {
        this._beverages.push(beverage);
    }

    addAppetizer(appetizer)
    {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse)
    {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert)
    {
        this._desserts.push(dessert);
    }

    getTotal()
    {
        let total = 0;

        let beverageTotal = this._beverages.forEach(function(beverage)
        {
            total += parseFloat(beverage.price);
        })

        let appetizerTotal = this._apmainCourse.forEach(function(appetizer)
        {
            total += parseFloat(appetizer.price);
        })

        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse)
        {
            total += parseFloat(mainCourse.price);
        })

        let dessertTotal = this._desserts.forEach(function(dessert)
        {
            total += parseFloat(dessert.price);
        })

        return total;
    }

}