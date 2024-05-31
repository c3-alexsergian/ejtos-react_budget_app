// Currency.js
import React, { useState } from 'react';

const Currency = ({ onSelectCurrency }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState({ name: "Pound", symbol: "£" });

    const currencies = [
        { name: "Dollar", symbol: "$" },
        { name: "Pound", symbol: "£" },
        { name: "Euro", symbol: "€" },
        { name: "Rupee", symbol: "₹" }
    ];

    const handleSelect = (currency) => {
        setIsOpen(false);
        setSelectedCurrency(currency);
        onSelectCurrency(currency); // Pass selected currency to parent component
    };

    return (
        <div className="currency-dropdown">
            <button 
                className="currency-button"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    width: '170px'
                }}
            >
                Currency ({selectedCurrency ? `${selectedCurrency.symbol} ${selectedCurrency.name}` : ""})
            </button>
            {isOpen && (
                <div className="currency-options">
                    {currencies.map((currency, index) => (
                        <div 
                            key={index} 
                            className="currency-option"
                            onClick={() => handleSelect(currency)}
                            style={{ backgroundColor: selectedCurrency === currency ? 'white' : 'green', color: selectedCurrency === currency ? 'black' : 'white' }}
                        >
                            {currency.symbol} {currency.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Currency;
