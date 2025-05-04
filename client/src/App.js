
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Student from "./components/getstudent/Student";
import Course from "./components/getcourse/Course";
import Faculty  from './components/getfaculty/Faculty';

import Addstudent from "./components/addstudent/Addstudent";
import Addcourse from './components/addcourse/Addcourse';
import AddFaculty from './components/addfaculty/Addfaculty';

import Updatestudent from './components/updatestudent/Updatestudent';
import Updatecourse from './components/updatecourse/Updatecourse';
import Updatefaculty from './components/updatefaculty/Updatedaculty';

import Home from "./components/Home/Home";

import Visitcourse from "./componet_visit/Visitcourse";
import Visitfaculty from "./componet_visit/Visitfaculty"
import Adminform from './components/adminform/Adminform';


function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <Home /> ,
    },
    {
      path:"/Students",
      element: <Student /> ,
    },
    {
      path:"/addstudent",
      element: <Addstudent />,
    },
    {
      path:"/updatestudent/:id",
      element: <Updatestudent />,
    },{
      path:"/Course",
      element: <Course /> ,
    },
    {
      path:"/Addcourse",
      element:<Addcourse />,
    },
    {
      path: "/updatecourse/:id",
      element: <Updatecourse />,
    },
    {
      path:"/Faculty",
      element: <Faculty /> ,
    },
    {
      path:"/addfaculty",
      element: <AddFaculty />,
    },
    {
      path: "/updatefaculty/:id",
      element: <Updatefaculty />,
    },
    {
      path: "/visitcourse",
      element: <Visitcourse />,
    },
    ,
    {
      path: "/visitfaculty",
      element: <Visitfaculty />,
    },
    {
      path : "/adminform",
      element : <Adminform />,
    }
  ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>

  );
}

export default App;
