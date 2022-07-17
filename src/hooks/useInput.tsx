import { useState } from "react";
import { Password } from "../models/Password";

export default function useInput() {
  const [password, setPassword] = useState<Password>({
    firstPassword: "",
    secondPassword: "",
  });

  function inputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { value, name } = event.target;
    setPassword({
      ...password,
      [name]: value,
    });
  }
  return { password, inputChange };
}
