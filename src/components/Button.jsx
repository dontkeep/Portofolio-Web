// eslint-disable-next-line react/prop-types
const Button = ({ text, onButtonClick }) => {
  return <button onClick={onButtonClick}>{text}</button>;
};

export default Button;