import React, {useState, useEffect} from "react"
import styled from "styled-components"
import * as fcl from "@blocto/fcl"

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`

console.log('-1');

const SignInOutButton = ({ user: { loggedIn } }) => {
  const signInOrOut = async (event) => {
    event.preventDefault()
    console.log('-2');
    if (loggedIn) {
      console.log('-3.1');
      fcl.unauthenticate()
    } else {
      console.log('-3.2');
      fcl.authenticate()
    }
  }

  return (
    <button onClick={signInOrOut}>
      {loggedIn ? 'Sign Out' : 'Sign In/Up'}
    </button>
  )
}

const CurrentUser = () => {
  const [user, setUser] = useState({})
  useEffect(() =>
    fcl
      .currentUser()
      .subscribe(user => setUser({...user}))
  , [])

  return (
    <Card>
      <SignInOutButton user={user} />
    </Card>
  )
}

export default CurrentUser
