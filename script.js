function buyProduct(productName, productLink) {
    const confirmPurchase = confirm(`Are you sure you want to buy the ${productName}?`);
    if (confirmPurchase) {
        window.open(productLink, '_blank');
    }
}
