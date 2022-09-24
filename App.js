//import logo from './logo192.png';
import './App.css';
//import image from './images/my3.jpg'
import image2 from './images/my3.jpg'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Form from './components/Form.js';
import { useState } from 'react';
import ToDolist from './ToDolist';

function Det() {
  return (
    <div>
      <div className='someClass'>
        <header>
          <h1>Developer site</h1>
          <p><strong>This is my portfolio</strong></p>
          <h6>Contact no:7337742882<br />
            Gmail:sal@gmail.com
          </h6>
        </header>
      </div>
    </div>
  );
}
function Site() {
  return (
    <div className='target'>
      <body>
        <img src={image2} alt='' />
        <h1 calss="display-4 fw normal">SALMAN SAIKALGAR</h1>
        <p><strong>HELLO</strong> <strong><a href="https://youtube.com/" >CLICK HERE</a></strong></p>
        <p>Iam a beginer in ios and web developement</p>
        <hr />
        <h3>book and  teachings</h3>
        <ul>
          <li>book number 1</li>
          <li>book number 2</li>
        </ul>
        <h3>hi this is order form of list</h3>
        <ol>
          <li>hloo man</li>
          <li>hi brooo</li>
        </ol>
        <hr />
        <h3>About Me</h3>
        <Link to='/about'>About</Link>
        <table cellspacing="10">
          <thead>
            <tr>
              <th>dates</th>
              <th>work</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>In year 2019</td>
              <td>I complete my HCS</td>
            </tr>
            <tr>
              <td>In year 2020</td>
              <td>I complete my 2nd HCS</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3>My skills</h3>
        <table cellspacing="10">
          <tbody>
            <tr>
              <td>ios development</td>
              <td>⭐⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>Web development</td>
              <td>⭐⭐⭐⭐</td>
            </tr>
            <tr>
              <td>Photography</td>
              <td>⭐⭐</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3>My contact details</h3>
        <Link to='/Contact'>Access contact details here</Link>
        <h3>My Team details</h3>
        <Link to='/Team'>Access team details here</Link>
      </body>
    </div>
  )
}
function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phone: Phone
    }
    console.log(data);
  };
  return (
    <div className='phone'>
      <form onSubmit={handleSubmit}>
        <label>Your name</label><br />
        <input type="text" value={name} placeholder='text' onChange={(e) => setName(e.target.value)} /><br />
        <label> Enter your email</label><br />
        <input type="email" value={email} placeholder='text' onChange={(e) => setEmail(e.target.value)} /><br />
        <label>enter your password</label><br />
        <input type="password" name="value" /><br />
        <label>Enter your phone number</label><br />
        <input type="text" value={Phone} placeholder='text' onChange={(e) => setPhone(e.target.value)} /><br />
        <label for="Branch">choose yor branch</label>
        <select name="Branch" id="Branch">
          <option value="CSE">CSE</option>
          <option value="EC">EC</option>
          <option value="MECH">MECH</option>
          <option value="CIVIL">CIVIL</option>
        </select><br />
        <label>Your message</label><br />
        <input type="text" tabindex="10" /><br />
        <textarea cols="30" rows="10"></textarea><br />
        <button className='but'>submit</button>
      </form>
    </div>
  )
}
function About() {
  return (
    <div>
      <p><h1>he is the famous football palyer</h1></p>
    </div>
  )
}

function SiteDet() {
  return (
    <div>
      <Det />
      <Site />
    </div>
  )
}
function Teams() {
  return (
    <div className='Sport'>
      <h1>Team Names</h1>
      <table className='table' border='5%' >
        <thead>
          <td>Team Name</td>
          <td>Tream Ratings</td>
        </thead>
        <tbody>
          <tr>Warriors
            <td>⭐⭐⭐⭐⭐</td>
          </tr>
          <tr>Avengers
            <td>⭐⭐⭐⭐</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
function Navbar(){
  return(
    <div>
      <Link to='/ToDolist'>ToDolist</Link>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/' element={<SiteDet />} />
          <Route path='/about' element={<About />} />
          <Route path='/Team' element={<Teams />}></Route>
          <Route path='/form' element={<Form />}></Route> */}
          <Route path='/ToDolist' element={<ToDolist />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
