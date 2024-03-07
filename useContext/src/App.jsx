import FunctionContextComponent from "./FunctionContextComponent"
import { ThemeProvider } from "./ThemeContext"



function App() {

  // const [darkTheme, setDarkTheme] = useState(true);

  // function toggleTheme() {
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }

  return (
    <>
      {/* <ComponentA/> */}
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
}

export default App
