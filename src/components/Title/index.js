import './styles.css'

export const Title = ({ isRed }) => {

  console.log(isRed)

  return (
    <h1 className={isRed ? 'red' : ''}>Boa noite turma!</h1>
  )
}