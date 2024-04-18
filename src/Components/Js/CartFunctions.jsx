// Fungsi untuk menambahkan produk ke keranjang
export const addToCart = (product, cartItems, setCartItems) => {
    // Periksa apakah produk sudah ada di keranjang
    const isProductInCart = cartItems.find(item => item.id === product.id);

    if (isProductInCart) {
        // Jika produk sudah ada di keranjang, tambahkan jumlahnya
        const updatedCartItems = cartItems.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    } else {
        // Jika produk belum ada di keranjang, tambahkan sebagai item baru
        const newCartItem = { ...product, quantity: 1 };
        setCartItems([...cartItems, newCartItem]);
    }
};

// Fungsi untuk mendapatkan daftar produk dalam keranjang
export const getCartItems = (cartItems) => {
    return cartItems;
};
