import './App.css';
import Body from './components/Body';
import Headers from './components/Headers';
import Input from './components/Input';
import HeaderState from './context/HeaderState';
import BodyState from './context/BodyState';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Response from './components/Response';
import History from './components/History';
import ResponseState from './context/ResponseState';
function App() {
  return (
    <>
      <HeaderState>
        <BodyState>
          <ResponseState>
            <BrowserRouter>
              <Input />
              <History />
              <Routes>
                <Route path="/" element={<Headers />} />
                <Route path="/body" element={<Body />} />
              </Routes>
              <Response />
            </BrowserRouter>
          </ResponseState>
        </BodyState>
      </HeaderState>
    </>
  );
}

export default App;
