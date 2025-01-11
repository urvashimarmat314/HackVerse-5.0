import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";
// import Navbar from "./components/Footer/Navbar";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <LandingPage/>
      <ContactPage/>
    </h1>
  )
}