import { JSX } from "react"
import Dashboard from "./pages/Dashboard/dashboard"


const mockItemCounts = {
  componentes: 10,
  computador: 5,
  notebook: 3,
  materiais: 20,
  cabos: 15,
};


function App():JSX.Element {

  return (
      <>
         <Dashboard userName="SeuNome" itemCounts={mockItemCounts} />
      </>
  )
}

export default App
