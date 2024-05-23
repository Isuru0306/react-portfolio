import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import { baseTheme } from "./styles/theme.ts";

import "@fontsource/inter";
import "@fontsource/poppins";
import "@/locales/i18n-config.js";
import { FirebaseApp } from "./utils/firebase.ts";

FirebaseApp.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={baseTheme}>
    <App />
  </ChakraProvider>
);
