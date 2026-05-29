import { useState, useReducer } from 'react'
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

  return (
    <>
      <PostListProvider>
        <div className='App-container'>
          <Sidebar displayState={displayState} setSelectedTab={setSelectedTab} displayHideFn={displayHideFn} selectedTab={selectedTab}></Sidebar>
          <Header displayShowFn={displayShowFn} setSelectedTab={setSelectedTab} loginDetails={loginDetails}></Header>
          <div className='px-5'>
            <LoginForm showLoginSection={showLoginSection} loginDetails={loginDetails}></LoginForm>
            {selectedTab === 'Home' && <Hero></Hero>}
            {selectedTab === 'Home' ? <PostContainerList></PostContainerList> : <CreatePost setSelectedTab={setSelectedTab}></CreatePost>}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  )
}

export default App
