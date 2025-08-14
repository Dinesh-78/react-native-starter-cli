
export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export interface FonttextProps {
  text: string,
    size?: number;
    color?: string;
    weight?: "normal" | "bold" | "light" | "medium";
    style?: object;
    align?: "left" | "center" | "right";
    lineHeight?: number;
    letterSpacing?: number;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
};

export interface ButtonProps {
  title: String;
  onpress: () => void;
  style?: object;
  textStyle?: object;
  loading?: boolean;
  icon?: IconProps;
  text?: string;
  type?: "primary" | "secondary" | "tertiary";
  variant?: "solid" | "outline" | "text";
  disabled?: boolean;
};