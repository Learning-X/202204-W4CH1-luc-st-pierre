const Button = ({ text, action }) => {
  return (
    <button type="button" onClick={action}>
      {text}
    </button>
  );
};

export default Button;
