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
