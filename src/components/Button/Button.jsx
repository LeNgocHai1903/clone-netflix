import "./Button.css";

export const Button = ({ name, icon, backgroundColor, onClick, textColor }) => {
  return (
    <button className={`bg-${backgroundColor} common-button`} onClick={onClick}>
      <i
        className={`fas fa-${icon} mx-2`}
        style={{ color: `${textColor}` }}
      ></i>
      <span className={`text-${textColor}`}>{name}</span>
    </button>
  );
};
