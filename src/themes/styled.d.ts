import { MyTheme } from "./theme";

// extend it
declare module "styled-components" {
    export interface DefaultTheme extends MyTheme {}
}
