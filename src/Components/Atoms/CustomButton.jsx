// CustomButton.jsx
import React, { useState } from 'react';

const CustomButton = ({ product, addToCart }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleCancel = () => {
        setShowPopup(false);
    };

    const handleAddToCart = () => {
        setShowPopup(false);
        addToCart(product);
    };

    return (
        <div className="relative">
            <button
                className="font-sm text-[10px] text-white border border-slate-400 bg-blue-700 px-3 py-1 rounded-full hover:bg-blue-600 hover:translate-y-[1px]"
                onClick={handleButtonClick}
            >
                Add to Cart
            </button>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center px-4 bg-gray-900 bg-opacity-95 rounded-3xl">
                    <div className="w-full px-4 py-3 text-xs text-center text-white bg-gray-900 border rounded-lg border-slate-600">
                        <p className="mb-5">Tambah ke Keranjang?</p>
                        <div className="flex justify-center gap-[2px]">
                            <button
                                className="px-3 py-1 mr-2 bg-red-600 rounded"
                                onClick={handleCancel}
                            >
                                Batal
                            </button>
                            <button
                                className="px-3 py-1 text-white bg-blue-700 rounded"
                                onClick={handleAddToCart}
                            >
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomButton;
