import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main";
import { GlobalStyle } from "../styles/GlobalStyles";

export const RoutesApp: React.FC = () => {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
      </BrowserRouter>
    )
  };