/*
============================================
; Title: Assignment 5.2
; Author: Conner Shockley
; Date: 4/17/2021
; Description: Cart-component program which 
; contains the CartComponent class. Also
; adding web component here.
;===========================================
*/

// The CartComponent class adds a web component.
// Export?
export class CartComponent extends HTMLElement
{
    constructor()
        {
            super();
        }

        // Adding web component for Shopping Cart icons.
        connectedCallback() 
        {
            this.innerHTML = 
                `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
        }
}

customElements.define("cart-component", CartComponent);