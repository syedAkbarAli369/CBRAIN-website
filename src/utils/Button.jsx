


const Button = ({className, text}) => {
    return (
        <div className={`button-box relative ${className}`}>
            <button className="absolute border-none text-gray-400 border-r-[10px] cursor-pointer hover:text-[#7e00d2]">{text}</button>
        </div>
    )
}

export default Button