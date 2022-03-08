import './App.css'

import Projects  from "./components/Projects"

function App() {


  return (
    <div className="App">
      <header className="App-header">
        This is the header
      </header>
      <main>This is the Main
        <div>
          This is the Projects
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
