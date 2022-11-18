export const Course = ({ text, instrutor }) => {
  return (
    <i>
      Curso:
      <strong>{text}</strong>,
      <strong>{instrutor}</strong>
    </i>
  )
}