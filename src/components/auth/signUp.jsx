import { useState } from 'react';

import {
  createUserDocumentFromAuth,
  createUserEmailPassword,
} from '../../utils/firebaseUtil';

import FormInput from '../customs/formInput';
import Button from '../customs/button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
export default function SignUp() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createUserEmailPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2 className='title'>Don't have an account?</h2>
      <span>Sign Up</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          onChange={handleChange}
          value={displayName}
          required
        />
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
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type='submit' buttonType='inverted'>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
