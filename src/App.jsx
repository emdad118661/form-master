// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Grandpa from './Grandpa/Grandpa'
// import HookForm from './HookForm/HookForm'
// import ReusableForm from './ReusableForm/ReusableForm'
// import RefForm from './RefForm/RefForm'
// import SimpleForm from './SimpleForm/SimpleForm'
// import StatefulForm from './StatefulForm/StatefulForm'

function App() {
  
  // const handleSignUpSubmit = data =>{
  //   console.log('sign up', data);
  // }

  // const handleUpdateProfile = data =>{
  //   console.log('update profile', data);
  // }

  return (
    <>
      
      <h1>Form Master</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <ReusableForm handleSubmit={handleSignUpSubmit}>
        <div>
            <h2>Sing UP</h2>
            <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm handleSubmit={handleUpdateProfile} handleBtnText='Update'>
        <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
        </div>
      </ReusableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
