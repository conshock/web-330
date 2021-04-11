/*
============================================
; Title: Assignment 4.2
; Author: Conner Shockley
; Date: 4/11/2021
; Description: This is the food-model program.
;===========================================
*/

// The FoodModel class sets up the food model objects in the calorie-converter app.
export class FoodModel 
{

    // Three parameters: ID, name, and calories.
    constructor(id, name, calories)
        {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
}
