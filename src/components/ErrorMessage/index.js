import { Center } from "devextreme-react/cjs/map";
import { useEffect } from "react";

const ErrorPopup = ({ message, onClose }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 5000); // Adjust the time (in milliseconds) as needed

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div
      style={{
        position: "relative",
        top: "10px",
        // right: "10px",
        padding: "10px",
        background: "red",
        color: "white",
        // width: "90%",
        display: "flex",
        justifyContent: Center,
        alignItems: "flex-end",
        // marginRight: "20px",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          "text-aline": "center",
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default ErrorPopup;
