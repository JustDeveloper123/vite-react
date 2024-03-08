import ReactSVG from '@assets/React-icon.svg';
import Counter from '@components/Counter.jsx';

const App = () => (
  <main>
    <h1>Vite + React JS</h1>
    <Counter />
    <img src={ReactSVG} alt="ReactJS logo" height="100px" />
  </main>
);

export default App;
