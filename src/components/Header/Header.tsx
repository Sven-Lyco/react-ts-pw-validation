import { ReactElement } from "react";
import { HeaderProps } from "../../models/Header";
import "./header.css";

export default function Header({ headline }: HeaderProps): ReactElement {
  return <h1 className="header">{headline}</h1>;
}
