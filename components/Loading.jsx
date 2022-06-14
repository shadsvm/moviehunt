import { ImSpinner9 } from 'react-icons/im'

export default function Loading({className}){
  return (
    <div className={`${className} h-full flex justify-center items-center text-3xl`}>
      <ImSpinner9 className="animate-spin" />
    </div>)
}