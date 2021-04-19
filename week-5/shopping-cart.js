/*
============================================
; Title: Assignment 5.2
; Author: Conner Shockley
; Date: 4/17/2021
; Description: Shopping-cart program which 
; contains the ShoppingCart class. Also
; adding web component here.
;===========================================
*/


// ShoppingCart class.
export class ShoppingCart
{
    // Constructor with only 1 parameter: _products.
    constructor(_products)
    {
        // _products is equal to an empty array.
        this._products = [];
    }

    // Count() counts how many objects are added to the 
    count()
    {
        // Log the array to the console to make sure products are being pushed properly.
        console.log(`The products array contains: [${this._products}]`);
        return this._products.length;
        
    }

    // addProduct() function adds a product object to the empty _products array.
    addProduct(product)
    {
        this._products.push(product);
    }


    * myIterator() {

        for (let product of this._products) {
            document.getElementById('productID').innerHTML = 'testid';
            document.getElementById('productName').innerHTML = 'testname';
            document.getElementById('productValue').innerHTML = 'testvalue';
            yield product;
        }
    }
}