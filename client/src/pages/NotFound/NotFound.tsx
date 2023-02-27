import { useNavigate } from 'react-router-dom'
import { RiQuillPenLine } from 'react-icons/ri'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="mb-2 text-center font-serif text-4xl font-bold">Not found</h1>
        <p className="mx-auto text-gray-600">
          The page you are looking for does not exist... yet
        </p>
        <div className="mx-auto mt-8 flex gap-4">
          <button className="btn btn--dark" onClick={() => navigate(-1)}>
            Go back
          </button>
          <a href="mailto:dashpash@gmail.com" className="btn btn--outline gap-2">
            <RiQuillPenLine className="h-4 w-4" />
            Report an issue
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
