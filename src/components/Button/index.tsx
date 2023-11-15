import React from "react";
import './index.scss'
interface ButtonProps {
    type?: 'add' | 'remove' | 'checkout'
    title?: string
    disabled?: boolean
    onClick?: () => void
}
const Button: React.FC<ButtonProps> = ({ type = 'add', title, disabled = false, onClick }) => {

    return (
        <>
            <button className={`btn ${(type == 'add' && 'add') ||
                (type == 'remove' && 'remove') ||
                (type == 'checkout' && 'checkout')
                }`} disabled={disabled} onClick={onClick}>
                {title}
            </button>
        </>
    )
}
export default Button;