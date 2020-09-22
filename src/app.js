import Header from './components/Header'
import User from './components/User'
import Knob from './components/Knob'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      <div class="knobs-container">
       ${Knob()}
      </div>
      ${await User()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;