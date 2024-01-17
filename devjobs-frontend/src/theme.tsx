import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// const theme = {
//   config: {
//     intialColorMode: "dark",
//     useSystemColorMode: true,
//   },
//   styles: {
//     global: {
//       body: {
//         margin: 0,
//         "font-family":
//           "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif",
//         "-webkit-font-smoothing": "antialiased",
//         "-moz-osx-font-smoothing": "grayscale",
//       },

//       code: {
//         "font-family":
//           "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',monospace", 
//       },
//     },
//   },
// };

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

const theme = extendTheme({config})

export default theme

//export default extendTheme(theme);