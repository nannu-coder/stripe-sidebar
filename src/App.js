import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Submenu from "./Components/Submenu";
import { AppProvider } from "./Context/AppProvider";

function App() {
  return (
    <AppProvider>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </AppProvider>
  );
}

export default App;
