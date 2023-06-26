import Products from "../components/Products/Products";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
  
    // Warunek sprawdzający, czy bieżąca ścieżka to "/", czyli strona główna
    if (location.pathname === "/" ) {
      return <Products />;
    }
  
    return null;
  };
  export default Home;