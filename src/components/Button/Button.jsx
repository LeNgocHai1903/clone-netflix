import "./Button.scss";

export const Button = ({ onClick, type }) => {
  let button;
  switch (type) {
    case "info":
      button = (
        <button className={`bg-gray-400 common-button`} onClick={onClick}>
          <i className={`fas fa-info mx-2`} style={{ color: `white` }}></i>
          <span className={`text-white`}>More Info</span>
        </button>
      );
      break;
    case "play":
      button = (
        <button className={`bg-white common-button`} onClick={onClick}>
          <i className={`fas fa-play mx-2`} style={{ color: `black` }}></i>
          <span className={`text-black`}>Play</span>
        </button>
      );
      break;
    default:
  }

  return (
      <>{button}</>
  );
};
