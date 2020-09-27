import { InputAdornment, TextField } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

const StyledInputs = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  gap: 2.5rem;
  place-content: center;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledSubmit = styled(Button)`
  max-width: 9rem;
  align-self: center;
`
const StyledTerms = styled.div`
  font-size: 0.7rem;
  align-self: center;
  margin-bottom: 0.5rem;
`

export const PaymentForm = () => {
  return (
    <StyledForm>
      <StyledInputs>
        <TextField
          id={'first name'}
          name={'firstName'}
          placeholder={'First Name'}
          label={'First Name'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id={'last name'}
          name={'lastName'}
          placeholder={'Last Name'}
          label={'Last Name'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id={'email'}
          name={'email'}
          placeholder={'Email'}
          label={'Email'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id={'confirm email'}
          name={'confirmEmail'}
          placeholder={'Confirm Email'}
          label={'Confirm Email'}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </StyledInputs>
      <StyledTerms>
        By submitting below, you agree to our{' '}
        <a href={'https://ribbonexperiences.com'} target={'__blank'} noreferrer noopener>
          Terms of Service
        </a>
      </StyledTerms>
      <StyledSubmit type={'submit'} color={'primary'} variant={'contained'}>
        BOOK NOW
      </StyledSubmit>
    </StyledForm>
  )
}
