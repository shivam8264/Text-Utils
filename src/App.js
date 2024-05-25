import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
    <Navbar title="TextUtils" link="Link" />
    <div className="container my-4 ">
      <h1>Enter The Text To Analyze</h1>
      <Textarea/>
    </div>
    </>
  );
}

export default App;
