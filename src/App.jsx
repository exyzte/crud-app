import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Nav from './components/Nav';
import './App.css'



function App() {
  

  return (
    <>
    <div className='page-center'>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/Home" element={ <Home /> }/> {/* path is the name you give to the route, exatc helps the browser understand that it should only return the parent route when there is an exact math on the URL*/}
          <Route exact path="/About" element={ <About /> } />
          <Route exact path="/Contact" element={ <Contact />} />
          
            <Route path="postList" element={ <PostList />} />
            <Route path="postform" element={ <PostForm />} />
          <Route exact path="/PostList" element={ <PostList />} />
        </Routes>
      </Router>
      
      </div>
    </>
  )
}

export default App
