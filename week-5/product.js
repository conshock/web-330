/*
============================================
; Title: Assignment 5.2
; Author: Conner Shockley
; Date: 4/17/2021
; Description: Product program which contains
; the product class.
;===========================================
*/

// Create and export product class with name and price params.
export class Product
{
    constructor(name, price)
        {
            this.name = name;
            this.price = price;
            this.id = Math.random().toString(16).slice(2);
        }
}