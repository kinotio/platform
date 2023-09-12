import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faXmark,
  faCircleInfo,
  faTriangleExclamation,
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons'

const AlertComponent = ({
  type = 'info',
  message,
  onClose
}: {
  type?: string
  message?: string
  onClose?: any
}) => {
  const iconByType: any = {
    info: faCircleInfo,
    warn: faTriangleExclamation,
    error: faCircleExclamation
  }

  const bgColorByType: any = {
    info: 'bg-blue-500',
    warn: 'bg-yellow-500',
    error: 'bg-red-500'
  }

  return (
    <div className={`w-full text-white absolute top-0 ${bgColorByType[type]}`}>
      <div className='container flex items-center justify-between px-6 py-4 mx-auto'>
        <div className='flex'>
          <FontAwesomeIcon icon={iconByType[type]} style={{ fontSize: 24 }} />

          <p className='mx-3'>{message}</p>
        </div>

        <button
          className='p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: 24 }} />
        </button>
      </div>
    </div>
  )
}

export default AlertComponent
