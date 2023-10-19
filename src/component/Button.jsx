import { Link } from "react-router-dom";

const Button = (props) => {
    const { children, color, link } = props;
    return (
        <Link to={link}>
            <button className={`btn btn-${color} btn-outline w-full`}>{children}</button>
        </Link>
    )
}

export default Button;