import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="max-w[1440px] mx-auto space-y-20">
            <About />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
