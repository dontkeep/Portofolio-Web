import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Navbar />
      <Section title="About Me">
        Hello! I am a Fullstack developer passionate about all kinds of development, from android to web, and from front-end to back-end.
      </Section>
      <Section title="Projects">
        Here are some of my projects: will be added soon
        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </ul> 
      </Section>
      <Section title="Contact">
        Feel free to reach out at <strong>romadonadoni03@gmail.com</strong>
        <br /><br />
        <Button text="Say Hello!" onButtonClick={() => window.location.href = "mailto:romadonadoni03@gmail.com"}/>
      </Section>
      <Footer />
    </div>
  );
}

export default App
