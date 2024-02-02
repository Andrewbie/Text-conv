import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForms from './components/TextForms';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [alert,setAlert] = useState(null)

  const showAlert = (msg,Type)=>{
    setAlert({
      msg : msg,
      type : Type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==="light"){
      newMode("dark")
      newTxtCol("light")
      document.body.style.background = '#56585d'
      showAlert(
        "Dark Mode Enabled","success"
      )
    }
    else{
      newMode("light")
      newTxtCol("dark")
      document.body.style.background = 'white'
      showAlert(
        "light Mode Enabled","success"
      )
    }
  }

  const [txtCol,newTxtCol] = useState("dark")

  const [mode,newMode]=useState('light')
  return (
    
    <>
    <Router>
    <Navbar title="Text-Conv" nav2="about text-conv" mode={mode} toggleMode={toggleMode} txtCol={txtCol}/>
    <Alert mode={mode} alert={alert}/>

    <Routes>
  <Route path="/" element={<TextForms heading="Enter your Text to perform analyzation" mode={mode} txtCol={txtCol} showAlert={showAlert}/>}>
    {/* <Route path="tasks" element={<DashboardTasks />} /> */}
  </Route>
  <Route path="about" element={<About mode={mode} txtCol={txtCol}/>} />
</Routes>
           
</Router>   
    </>
    
  );
}

export default App;
