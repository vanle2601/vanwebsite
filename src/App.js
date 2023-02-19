import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills  from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;
