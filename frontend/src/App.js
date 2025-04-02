import "./App.css";
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import { BrowserRouter as Router, Routes } from 'react-router-dom';


// function App() {
//   return (
//     <div className="App">
      
//       <Route path='/' component={HomePage} exact />
//         <Route path='/chats' component={ChatPage}/>
       
//     </div>
//   );
// }

// export default App;

function App () {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
  );
};

export default App;
