import React from "react"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

import "./signpage.styles.scss"

const SignPage = () => (
  <div className='sign-page'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignPage
