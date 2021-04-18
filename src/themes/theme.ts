export const colors = {
    black: "#000000",
    white: "#FFFFFF",
    lightGrey: "#DCDCDC",
    blue: "#5DADE2",
    lightGrayishOrange: "#F3F2F1",
};

export const lightTheme = {
    backgroundColor: colors.lightGrayishOrange,
    textColor: colors.black,
    borderColor: colors.lightGrey,
    linkColor: colors.blue,
};

export const darkTheme = {
    backgroundColor: colors.black,
    textColor: colors.white,
    borderColor: colors.lightGrey,
    linkColor: colors.blue,
};

export type MyTheme = typeof lightTheme;
