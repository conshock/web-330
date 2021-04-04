/*
============================================
; Title: Assignment 3.3
; Author: Conner Shockley
; Date: 4/3/2021
; Description: This program contains the 
; Beverage class.
;===========================================
*/

import { Product } from "./product.js";

export class Beverage extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}
