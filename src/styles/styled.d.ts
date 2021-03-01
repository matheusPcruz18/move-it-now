import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        white: string;
        boxShadow: string;
        background: string;
        whiteLine: string;
        grayLine: string;
        text:string;
        textHighlight: string;
        title: string;
        red: string;
        green: string;
        blue: string;
        blueDark: string;
        blueTwitter: string;
        themeColor: string;
    }
}