import { Link } from "react-router-dom";

export const Button = (props) => {
  const { value, color, link } = props;
  return (
    <Link to={link}>
      <button
        className={`btn btn-${color} btn-outline w-full`}
        type="submit"
        onClick={console.log("clicked")}
      >
        {value}
      </button>
    </Link>
  );
};

export const ButtonP = (props) => {
  const { children, color, link } = props;
  return (
    <Link to={link}>
      <button className={`btn ${color} text-white`}>{children}</button>
    </Link>
  );
};
