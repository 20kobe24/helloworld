/* eslint-disable jsx-a11y/anchor-is-valid */
import HelloWorld from './components/HalloWorld';
import './App.css';
import Button from './components/Button';
import List from './components/List';
function App() {
  return (
    <div className="App">
      <div>
        <header class="header">
          <Button />
          <HelloWorld />
          <List />
        </header>
      </div>
      <div>
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            © 2021 Copyrightfrom the best of the bestestsest<a> </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App;
