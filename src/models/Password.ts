interface PasswordProps {
  firstPassword: string;
  secondPassword: string;
}

export class Password implements PasswordProps {
  firstPassword: string = "";
  secondPassword: string = "";
}
