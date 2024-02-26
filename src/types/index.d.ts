export interface TextProps {
  fontSize?: number
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  textAlign?: 'left' | 'right' | 'center' | 'justify'
  color?: string
  children: React.ReactNode
}

export interface LoginForm {
  email: string
  password: string
}

export interface SignupForm {
  name: string
  lastName: string
  phoneNumber: string
  dni: string
  birthDate: string
  address: string
  email: string
  password: string
  sex: 'male' | 'female'
}

export interface ForgotForm {
  email: string
  password: string
  confirmPassword: string
}

export interface ErrorResponse {
  error: string
  status: number
}