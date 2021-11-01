import React from "react";
import debounce from "./";
import "./Button.css";

const Button = () => {
    const handleClick = (string) => {
        console.log("clicked", string);
    };
    const debouncedHandleClick = debounce(handleClick, 500);
    return (
        <>
            <div
                className="button"
                onClick={() => handleClick("without debounce")}
            >
                without debounce
            </div>
            <div
                className="button"
                onClick={() => debouncedHandleClick("with debounce")}
            >
                with debounce
            </div>
        </>
    );
};

export default Button;
