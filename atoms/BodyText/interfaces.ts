import { StyleProp, TextStyle } from "react-native";

export interface Props extends BodyTextStylesType {
  children: string;
}

export interface BodyTextStylesType {
  style?: StyleProp<TextStyle>;
}