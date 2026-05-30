import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Hero from './components/Hero';
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import LoginForm from './components/LoginForm';
import PostContainerList from './components/PostContainerList';
import CreatePost from './components/CreatePostForm';
import PostListProvider from './contextStore/PostListContext';

function App() {

  let [displayState, setDisplayState] = useState('hidden')
  let [selectedTab, setSelectedTab] = useState('Home')
  let [showLoginSection, setShowLoginSection] = useState('hidden')

  // user: null = not logged in | { name, email, photo } = logged in
  let [user, setUser] = useState(null)

  // Track how many posts a guest (not logged in) has made
  let [guestPostCount, setGuestPostCount] = useState(0)

  const displayShowFn = () => {
      setDisplayState('d-flex')
  }

  const displayHideFn = (event) => {
      event.preventDefault()
      setDisplayState('hidden')
  }

  const loginDetails = (value) => {
    setShowLoginSection(value)
  }

  // Called by LoginForm on submit
  const handleLogin = (userData) => {
    setUser(userData)
    setShowLoginSection('hidden')
  }

  // Called by Header profile dropdown logout
  const handleLogout = () => {
    setUser(null)
  }

  return (
    <>
      <PostListProvider>
        <div className='App-container'>
          <Sidebar displayState={displayState} setSelectedTab={setSelectedTab} displayHideFn={displayHideFn} selectedTab={selectedTab}></Sidebar>
          <Header
            displayShowFn={displayShowFn}
            setSelectedTab={setSelectedTab}
            loginDetails={loginDetails}
            user={user}
            handleLogout={handleLogout}
          ></Header>
          <div>
            <LoginForm showLoginSection={showLoginSection} loginDetails={loginDetails} handleLogin={handleLogin}></LoginForm>
            {selectedTab === 'Home' && <Hero></Hero>}
            {selectedTab === 'Home' ? <PostContainerList></PostContainerList> : <CreatePost setSelectedTab={setSelectedTab} user={user} guestPostCount={guestPostCount} onGuestPost={() => setGuestPostCount(c => c + 1)} loginDetails={loginDetails}></CreatePost>}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App
