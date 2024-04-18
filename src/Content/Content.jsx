import React, { useState } from 'react';
import DummyDataProduct from '../Datas/DummyDataProduct';
import Card from '../Components/Molecules/Card';

const Content = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const updatedProducts = DummyDataProduct.map((p) => {
            if (p.id === product.id && p.harga > 0) {
                return { ...p, harga: p.harga - 1 };
            }
            return p;
        });
        setCartItems([...cartItems, product]);
        // Perbarui data produk dummy dengan nilai "Rp" yang diperbarui
        DummyDataProduct(updatedProducts);
    };

    const deleteItemFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.harga;
        });
        return totalPrice;
    };


    return (
        <div className="flex flex-row px-12 py-12">
            <div>
                <h1 className="text-sm font-semibold text-gray-600">Product List :</h1>
                <div className="flex flex-row flex-wrap justify-start gap-8 mt-4">
                    {DummyDataProduct.map((product) => (
                        <Card key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
            </div>
            <div className="w-[500px] mt-9 border border-light-500 bg-white drop-shadow-md rounded-3xl px-4 py-2">
                <h1 className="pt-2 text-sm font-semibold text-gray-600">Cart :</h1>
                <ul className="flex flex-col gap-5 pt-4">
                    {cartItems.map((item, index) => (
                        <li key={index} className="flex flex-row gap-4 text-sm font-semibold text-slate-600">
                            <div className="flex flex-col gap-2">
                                <img src={item.img} alt={item.nama_barang} className="inline-block w-16 h-16" />
                                <button className="px-3 py-[3px] bg-red-600 font-semibold rounded-full text-xs text-white" onClick={() => deleteItemFromCart(item.id)}>Delete</button>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs font-bold">{item.nama_barang}</h3>
                                <h3 className="text-xs">Rp <span>{formatPrice(item.harga)}</span></h3>
                            </div>
                        </li>
                    ))}
                </ul>
                {cartItems.length > 0 && (
                    <>
                        <hr className="border mt-7 border-slate-500" />
                        <div className="mt-2 text-sm font-semibold text-slate-600">Total Price : <span className="font-bold">{formatPrice(calculateTotalPrice())}</span></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Content;
