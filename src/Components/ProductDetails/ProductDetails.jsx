import { useState } from "react"
import "./ProductDetails.css"
import plusicon from "/assets/Images/icon-plus.svg"
import minusicon from "/assets/Images/icon-minus.svg"
import Cart from "/assets/Images/icon-cart.svg"

function ProductDetails(onAddToCart ){
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
        <div id="alldiv">

        <div id="product-detail">
            <p id="snek">SNEAKER COMPANY</p>
            <h1 id="Fallhead">Fall Limited Edition Sneakers</h1>
            <p id="pargdetail">These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            </div>
            
            <div id="price">
                <span id="current-price">$125.00</span>
                <span id="discount">50% </span>
                <del id="original-price">$250.00</del>
                
            </div>

            <div id="countcart">
            <div id="quantity-control">
                <button id="minus" onClick={decrementQuantity}>
                    <img src={minusicon} />
                </button>
                <span>{quantity}</span>
                <button id="plus" onClick={incrementQuantity}>
                <img src={plusicon} />
                </button>
            </div>
            <div id="addcart">
                <img src={Cart} />
            <button id="add-to-cart" onClick={() => onAddToCart(quantity)}>
                Add to Cart
            </button>
        </div>
        </div>

        </div>
    );
}

export default ProductDetails