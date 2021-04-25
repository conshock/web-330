/*
============================================
; Title: Float min field
; Author: Conner Shockley
; Date: 4/24/2021
; Description: Float min field script.
;===========================================
*/

// Float-max-field class
export class FloatMinField
{
    constructor(name, field, min)
        {
            this.name = name;
            this.field = field;
            this.min = min;
        }
    
    // Validates the minimum amount for any field it's applied to.
    validate() 
    {
        let floatField = parseFloat(this.field);
        return (floatField > this.min);
    }

    // If the field is under this minimum, then the following messages displays.
    getMessage()
    {
        return `${this.name} must be more than ${this.max}. You entered ${this.field}.`;
    }
}