export interface InputProps {
  isValidPassword?: boolean;
  showPassword: boolean;
  infoMessage?: string;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleShowPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  match?: boolean;
}
