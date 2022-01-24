
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'
import './App.css'
{/* import the zodiac array */}
import { zodiac } from './data'

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      {/* the Header component needs a string passed in as the `name` prop */}
      <Header
        name='Alice Hsing'/>
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
      <Main
        zodiacs='{ zodiac }'/>

      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer year='1986'/>
  
    </div>
  )
}

export default App
