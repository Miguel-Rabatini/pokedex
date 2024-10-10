// react-router-dom
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <header className="h-14 min-w-80 pl-4 text-5xl">Pokédex</header>
      <Outlet />
      <footer className="min-w-80 py-1 text-center text-xs">
        Made by Miguel Rabatini Dias Santana
      </footer>
    </>
  );
};

export default App;
