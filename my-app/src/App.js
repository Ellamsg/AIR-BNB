import "./App.css";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Data from "./components/Data";
import Nftsdata from "./components/Nftsdata";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nfts from "./components/Nfts";
import Nftselect from "./components/Nftselect";
function App() {
  const newData = Data.map((item1) => {
    return <Section {...item1} />;
  });
  const newnft = Nftsdata.map((item1) => {
    return <Nfts {...item1} />;
  });
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Main />
              <div className="sections ">{newData}</div>
              <Article />
            </Route>
            <Route path="/Nfts">
              <Nftselect/>
              <div className="sections">
              {newnft}
              </div>
              
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
