import React from 'react'

export default function Header() {
    return (
        <div className="flex items-center justify-between px-20 py-3 bg-white drop-shadow-lg">
            <div className="flex flex-row items-center gap-1">
                <img src="./Asset/LogoNasa.png" alt="logo-nasa"
                    className="w-10"
                />
                <h1 className="text-sm font-semibold text-gray-700">NASA </h1>
            </div>
            <div className="flex flex-row gap-8 hover:cursor-default">
                <h3 className="text-xs font-medium text-gray-700 hover:text-gray-500 hover:cursor-pointer">Home</h3>
                <h3 className="text-xs font-bold text-gray-700 hover:text-gray-500 hover:cursor-pointer">Catalog</h3>
                <h3 className="text-xs font-medium text-gray-700 hover:text-gray-500 hover:cursor-pointer">Event</h3>
                <h3 className="text-xs font-medium text-gray-700 hover:text-gray-500 hover:cursor-pointer">Promo</h3>
            </div>
        </div >
    )
}
