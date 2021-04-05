/*
============================================
; Title: Assignment 3.3
; Author: Conner Shockley
; Date: 4/3/2021
; Description: This program contains the 
; Dessert class.
;===========================================
*/

// Import product class from product.js
import { Product } from "./product.js";

// Create Dessert class.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}