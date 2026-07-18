import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Home />
      </main>
    </>
  );
}