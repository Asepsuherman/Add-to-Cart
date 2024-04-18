// Card.jsx
import React from 'react';
import CustomButton from '../Atoms/CustomButton';

const Card = ({ product, addToCart }) => {
    const handleAddToCart = () => {
        updateRp(product.id);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    return (
        <div className="flex flex-col w-48 h-auto overflow-visible bg-white border rounded-3xl border-light-500 drop-shadow-md">
            <div className="hover:bg-slate-800 rounded-t-3xl">
                <img className="inline-block w-full h-auto px-3 pt-3 transition-transform duration-1000 hover:scale-125" src={product.img} alt={product.nama_barang} />
            </div>
            <div className="px-3 py-2 bg-slate-800">
                <h1 className="mb-2 text-sm font-bold text-white">{product.nama_barang}</h1>
                <p className="text-xs text-white">{product.deskripsi}</p>
            </div>
            <div className="flex flex-row items-center justify-between h-full px-3 py-4 bg-slate-800 rounded-b-3xl">
                <h3 className="bg-gray-700 rounded-full px-3 py-1 text-[10px] font-sm text-white border border-slate-400">
                    <span>Rp </span> {formatPrice(product.harga)}
                </h3>
                <CustomButton product={product} addToCart={addToCart} handleAddToCart={handleAddToCart} />
            </div>
        </div>
    );
};

export default Card;
