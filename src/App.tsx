import { Route, Routes } from "react-router-dom";
import UseTodoList from "./pages/UseTodoList";
function App() {

  return (
    <Routes>
      <Route path="/" element={<UseTodoList />}/>
    </Routes>
  )
}

export default App
