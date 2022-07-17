import { ReactElement } from "react";
import { ChecklistProps } from "../../models/Checklist";
import "./list.css";

export default function Checklist({
  validLength,
  hasNumber,
  upperCase,
  lowerCase,
  specialChar,
  requiredLength,
  firstPasswordLength,
}: ChecklistProps): ReactElement {
  return (
    <ul className="list">
      <li>Valid length: {validLength ? <span>✅</span> : <span>❌</span>}</li>
      <li>Has a number: {hasNumber ? <span>✅</span> : <span>❌</span>}</li>
      <li>One uppercase Character: {upperCase ? <span>✅</span> : <span>❌</span>}</li>
      <li>One lowercase Character: {lowerCase ? <span>✅</span> : <span>❌</span>}</li>
      <li>Has special characters: {specialChar ? <span>✅</span> : <span>❌</span>}</li>
      <li>
        Has required length:{" "}
        {requiredLength <= firstPasswordLength ? <span>✅</span> : <span>❌</span>}
      </li>
    </ul>
  );
}
