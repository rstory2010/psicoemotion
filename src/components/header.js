
import Logo from '../components/logo'

function Header() {

    return (
    <nav className="mx-auto w-full">
        <div className='p-1 md:p-2 lg:p-3 bg-verde h-14 flex justify-center'>      
           <Logo className='h-32 w-32 ' />
        </div>
    </nav>
)}
  
export default Header