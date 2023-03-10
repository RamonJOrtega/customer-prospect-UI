//import "../styles/globals.css";
import BasicTable from "./Table";
import { ColorModeContext, useMode } from "../public/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import TopDisplay from "./TopDisplay";

export default function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <main className="content">
            <TopDisplay />
            <BasicTable></BasicTable>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
