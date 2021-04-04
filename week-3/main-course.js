/*
============================================
; Title: Assignment 3.3
; Author: Conner Shockley
; Date: 4/3/2021
; Description: This program contains the 
; MainCourse class.
;===========================================
*/

import { Product } from "./product.js";

export class MainCourse extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}