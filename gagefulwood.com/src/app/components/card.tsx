import React from 'react';

type CardProps = {
    title: string;
    description: string;
    bgColor: string;
}
// come back and add optionals and conditional rendering
const Card: React.FC<CardProps> = ({title, description, bgColor}) => {
    return (
        <div className={`${bgColor} p-4 rounded-lg shadow-md`}>
            <h3 className="text-3xl font-semibold mb-2">{title}</h3>
            <p className="text-white">{description}</p>
        </div>
    );
};

export default Card;