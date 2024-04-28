import { MouseEventHandler, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export interface SearchBarProps {
  searchInput: string;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: {
    name: string;
  };
  emoji: string;
  capital: string;
  currency: string;
}

export interface Data {
  country: Country;
}

export interface ContentModalProps {
  idCountry: string;
}

export interface CardProps {
  countries: Country[];
  onClick: (code: string) => void;
}
