import { InputAdornment, TextField } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import EmailIcon from '@material-ui/icons/Email'
import { Button } from '@material-ui/core'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

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

export type FormValues = {
  firstName: string
  lastName: string
  email: string
  confirmEmail: string
}

const StyledTextField = styled(TextField)`
  min-height: 5rem;
`

type Props = {
  onSubmit: (values: FormValues) => void
}

export const PaymentForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, errors, getValues, formState } = useForm({ mode: 'onBlur' })
  const { isValid } = formState

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputs>
        <StyledTextField
          id={'first name'}
          name={'firstName'}
          placeholder={'First Name'}
          label={'First Name'}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          inputRef={register({
            required: 'Required',
          })}
          error={!!errors.firstName}
          helperText={errors.firstName && errors.firstName.message}
        />
        <StyledTextField
          id={'last name'}
          name={'lastName'}
          placeholder={'Last Name'}
          label={'Last Name'}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          inputRef={register({
            required: 'Required',
          })}
          error={!!errors.lastName}
          helperText={errors.lastName && errors.lastName.message}
        />
        <StyledTextField
          id={'email'}
          name={'email'}
          placeholder={'Email'}
          label={'Email'}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          inputRef={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid format of email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
        />
        <StyledTextField
          id={'confirm email'}
          name={'confirmEmail'}
          placeholder={'Confirm Email'}
          label={'Confirm Email'}
          required
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          inputRef={register({
            required: 'Required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid format of email address',
            },
            validate: (value) => value === getValues('email'),
          })}
          error={!!errors.confirmEmail}
          helperText={errors.confirmEmail && errors.confirmEmail.message}
        />
      </StyledInputs>
      <StyledTerms>
        By submitting below, you agree to our{' '}
        <a href={'https://ribbonexperiences.com'} target={'__blank'} rel="noreferrer noopener">
          Terms of Service
        </a>
      </StyledTerms>
      <StyledSubmit type={'submit'} color={'primary'} variant={'contained'} disabled={!isValid}>
        BOOK NOW
      </StyledSubmit>
    </StyledForm>
  )
}
