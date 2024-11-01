import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
