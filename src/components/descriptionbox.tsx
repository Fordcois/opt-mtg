import React from 'react';

// Define the interface with optional power and toughness
interface DescriptionBoxProps {
    name: string;
    cost: string;
    type_line: string;
    power?: number; // Optional
    toughness?: number; // Optional
}

// Define the functional component with the correct typing
const DescriptionBox: React.FC<DescriptionBoxProps> = ({ name, cost, type_line, power, toughness }) => {
    return (
        <div style={{color:'red'}}>
            <h2>{name}</h2>
            <p>Cost: {cost}</p>
            <p>Type: {type_line}</p>
            {power !== undefined && <p>Power: {power}</p>}
            {toughness !== undefined && <p>Toughness: {toughness}</p>}
        </div>
    );
};

export default DescriptionBox;
