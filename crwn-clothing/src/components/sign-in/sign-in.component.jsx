import React from "react"
import FormInput from "../form-input/form-input-component"
import CustomButton from "../custom-button/custom-button.component"
import "./sign-in.styles.scss"

import { signInWithGoogle } from "../../firebase/firebase.utils.js"

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.state({ email: "", password: "" })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <label></label>
          <FormInput
            name='password'
            type='password'
            value={this.state.email}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <label></label>
          <div className='buttons'>
            <CustomButton type='submit'>Sign iN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
