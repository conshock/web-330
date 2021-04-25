/*
============================================
; Title: Float field
; Author: Conner Shockley
; Date: 4/24/2021
; Description: Float field script.
;===========================================
*/


// Float field class
export class FloatField
{
    constructor(name, field)
        {
            this.name = name;
            this.field = field;
        }
    
    validate() 
    {
        // ParseFloat input and if NaN we return false.
        let checkForNaN = parseFloat(this.field);
        return !isNaN(checkForNaN)
    }
    
    getMessage() 
    {
        return `${this.name} must be a float value. You entered ${this.field}`
    }
}