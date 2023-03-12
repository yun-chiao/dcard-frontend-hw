import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Issues from "./pages/Issues";
import SingleIssues from "./pages/SingleIssue";
import EditIssue from "./pages/EditIssue";
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/issues" element={<Issues/>}/>
          <Route path="/create" element={<EditIssue/>}/>
          <Route path="/edit/:id" element={<EditIssue/>}/>
          <Route path="/issue/:id" element={<SingleIssues/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
