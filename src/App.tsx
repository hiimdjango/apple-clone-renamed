import "./App.css";
import { Footer, Header } from "./Components";
import {
  Hero,
  Introduction,
  IntroductionExtension,
  LastSection,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./Sections";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Introduction />
      <IntroductionExtension />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <LastSection />
      <Footer />
    </div>
  );
}

export default App;
