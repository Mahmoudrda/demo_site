document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    let total = 0;

    // Add event listeners to "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const product = this.parentElement;
            const productName = product.getAttribute("data-name");
            const productPrice = parseInt(product.getAttribute("data-price"));

            // Add product to the cart
            const cartItem = document.createElement("li");
            cartItem.textContent = `${productName} - $${productPrice}`;

            // Create a "Remove" button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-from-cart");

            // Add the "Remove" button to the cart item
            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);

            // Update total price
            total += productPrice;
            totalPriceElement.textContent = `Total: $${total}`;

            // Add event listener to the "Remove" button
            removeButton.addEventListener("click", function () {
                navigator
                cartItems.removeChild(cartItem); // Remove the item from the cart

                // Update the total price
                total -= productPrice;
                totalPriceElement.textContent = `Total: $${total}`;
            });
        });
    });
});
navigator