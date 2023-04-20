// Class => Generate Object

export class ComponentService {
    /*
	{
		priceInput : DOM-INPUT-1,
		quantityInput : DOM-INPUT-2
	}
	
	*/
    constructor() {
        this.priceInput = document.getElementById('product-price');
        this.quantityInput = document.getElementById('product-quantity');
        this.shippingInput = document.getElementById('product-shipping');
        this.resultBox = document.getElementById('result');
        this.totalBtn = document.getElementById('total-btn');
    }

    getInputs() {
        let price = this.priceInput.value;
        let quantity = this.quantityInput.value;
        let shipping = this.shippingInput.value;
        return [price, quantity, shipping];
    }

    showPrice(price) {
        this.resultBox.innerText = price;
    }

    onClick(callback) {
        this.totalBtn.addEventListener('click', callback);
    }
}

// const myComponet = new ComponentService()
