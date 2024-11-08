import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; 
import PlanCreation from './pages/PlanCreation';
import Chatbot from './pages/Chatbot';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css';
import theme from './theme';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-plan" element={<PlanCreation />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
