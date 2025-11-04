"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Tim Adkison
   Date:   10/28/25
   
   Filename: tc_cart.js
	
*/
//debugger;
var orderTotal = 0;
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";
for (var i=0; i< item.length; i++){
  var itemCost = itemPrice[i] * itemQty[i];
  cartHTML += "<tr>";
  cartHTML += "<td><img src='tc_"+item[i]+".png' alt='item' /></td>";
cartHTML += "<td>" + itemDescription[i] + "</td>";
  cartHTML += "<td>$" + itemPrice[i] + "</td>";
  cartHTML += "<td>" + itemQty[i] + "</td>";
  
  cartHTML += "<td>" +itemCost.toFixed(2) + "</td></tr>";
  
 orderTotal+=itemCost;
}
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>Subtotal</td>";
cartHTML += "<td>$" + orderTotal.toFixed(2) + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";
//debugger;
document.getElementById("cart").innerHTML = cartHTML;
