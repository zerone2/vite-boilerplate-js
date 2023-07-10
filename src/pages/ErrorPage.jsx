import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404 {error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
