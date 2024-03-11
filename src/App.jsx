import './App.css';
import ClassList from './ClassList';
import { Footer } from './Footer.jsx';
import { Header } from './Header.jsx';

function App() {
  return (
    <html data-theme="byu" className="flex flex-col h-screen overflow-hidden">
      <Header />
      <ClassList/>
      <Footer />
    </html>
  );
}

export default App;
