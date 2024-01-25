import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/cinema/MovieList";
import { useThemeContext } from "./context";

export default function Page() {
  const { darkMode } = useThemeContext();

  return (
    <div className={`h-full w-full ${darkMode && "dark"}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
