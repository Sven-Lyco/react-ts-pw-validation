import { ReactElement } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ButtonProps } from "../../models/Button";
import "./button.css";

export default function Button({ showPassword, onClick }: ButtonProps): ReactElement {
  return (
    <button className="button" onClick={onClick}>
      {showPassword ? <BsEye /> : <BsEyeSlash />}
    </button>
  );
}
