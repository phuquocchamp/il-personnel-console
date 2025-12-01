import Navbar from "./components/Navbar"
import UsersPage from "./pages/User"

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-10">

        <UsersPage />
      </div>
    </>
  )
}

export default App