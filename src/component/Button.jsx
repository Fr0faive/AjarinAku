const Button = (props) => {
    const { children, color } = props;
    return (
        <button className={`btn btn-${color}`}>{children}</button>
    )
}

export default Button;