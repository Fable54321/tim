
import styles from './App.module.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from '../Root/RootLayout';
import Me from '../Me/Me';
import AboutMe from '../About me/AboutMe';
import MyProjects from '../MyProjects/MyProjects';
import MySkills from '../My skills/MySkills';
import MyHobbies from '../MyHobbies/MyHobbies';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<RootLayout />} >
      <Route index element= {<Me />}/>
      <Route path='/about' element= {<AboutMe />} />
      <Route path='/projects' element= {<MyProjects />} />
      <Route path='/skills' element = {<MySkills />} />
      <Route path='/hobbies' element= {<MyHobbies />} />
    </Route>  
  )
)



function App() {
  return (
    <div className= {styles.App}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
