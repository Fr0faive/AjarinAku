import { Link } from "react-router-dom";

export const Button = (props) => {
    const { children, color, link } = props;
    return (
        <Link to={link}>
            <button className={`btn btn-${color} btn-outline w-full`}>{children}</button>
        </Link>
    )
}


export const ButtonP = (props) => {
    const { children, color, link } = props;
    return (
        <Link to={link}>
            <button className={`btn ${color} text-white`}>{children}</button>
        </Link>
    )
}