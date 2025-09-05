// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { Cursos } from "./pages/Cursos";
// import { Classes } from "./pages/Classes";
// import { Usuarios } from "./pages/Usuarios";
// import { Matriculas } from "./pages/Matriculas";
// // import ClassesPage from "./pages/ClassesPage";
// // import EnrollmentsPage from "./pages/EnrollmentsPage";
// // import UsersPage from "./pages/UsersPage";

// function App() {
//   return (
//     <Router>
//       <div>
//          <header>
//           <h1>Frontend Dot Digital Group</h1>
//           <nav>
//             <a href="/courses">Cursos</a>
//             <a href="/classes">Turmas</a>
//             <a href="/users">Usuários</a>
//             <a href="/enrollments">Matrículas</a>
//           </nav>
//         </header>

//         <main>
//           <Routes>
//             <Route path="/" element={<Navigate to="/courses" />} />
//             <Route path="/courses" element={<Cursos />} />
//             <Route path="/classes" element={<Classes />} />
//             <Route path="/users" element={<Usuarios />} />
//             <Route path="/enrollments" element={<Matriculas />} />
//           </Routes>
//         </main>


//         <footer>
//           <p>Desafio Frontend Dot Digital Group</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import { ListCourses } from "./pages/Courses/ListCourses";
import { ListClasses } from "./pages/Classes/ListClasses";
import { Users } from "./pages/Users";
import { Enrollment } from "./pages/Enrollments";
import "./styles/global.css";
import { CreateCourse } from "./pages/Courses/CreateCourse";
import { CreateClass } from "./pages/Classes/CreateClass";

export default function App() {
  return (
    <BrowserRouter>
      <header className="app">
        <div className="header-inner container">
          <div className="brand">
            <span>Dot Digital Group</span>
            <span className="brand-badge">Frontend</span>
          </div>
          <nav className="nav">
            <NavLink to="/courses">Cursos</NavLink>
            <NavLink to="/classes">Turmas</NavLink>
            <NavLink to="/enrollments">Matrículas</NavLink>
            <NavLink to="/users">Usuários</NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/courses" />} />
          <Route path="/courses" element={<ListCourses />} />
          <Route path="/courses/new" element={<CreateCourse />} />
          <Route path="/classes" element={<ListClasses />} />
          <Route path="/classes/new" element={<CreateClass />} />
          <Route path="/enrollments" element={<Enrollment />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>

      <footer className="footer small">Desafio Frontend — Dot Digital Group</footer>
    </BrowserRouter>
  );
}
