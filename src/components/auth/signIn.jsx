import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInUserEmailPassword,
} from '../../utils/firebaseUtil';

import FormInput from '../customs/formInput';
import Button from '../customs/button';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      console.error(error);
    }
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  let { email, password } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signInUserEmailPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found');
          break;
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <div>
      <div className='sign-up-container'>
        <h2 className='title'>Already Have an Account?</h2>
        <span>Sign In</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            onChange={handleChange}
            value={email}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            onChange={handleChange}
            value={password}
            required
          />
          <div className='buttons-container'>
            <Button type='submit' buttonType='default'>
              Sign In
            </Button>
            <Button
              type='button'
              onClick={signInWithGoogle}
              buttonType='google'
            >
              Google Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
