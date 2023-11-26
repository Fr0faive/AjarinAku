import { Link } from "react-router-dom";

export const Button = (props) => {
  const { value, color, type, onClick, margin } = props;
  return (
    <button
      className={`btn btn-${color} btn-outline w-full ${margin}`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export const ButtonP = (props) => {
  const { value, color, link } = props;
  return (
    <Link to={link}>
      <button className={`btn ${color} text-white`}>{value}</button>
    </Link>
  );
};

export const ButtonClick = (props) => {
  const { value, color, onClick } = props;
  return (
    <button className={`btn ${color} text-white`} onClick={onClick}>
      {value}
    </button>
  );
};
