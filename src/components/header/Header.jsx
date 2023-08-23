
import ContentWrapper from '../contentWrapper/ContentWrapper.jsx'
import logo from '../../assets/movix-logo.svg'
import { useLocation, useNavigate } from 'react-router-dom'

function Header() {

  const [ show, setShow ] = useState("top")
  const [ lastScrollY, setLastScrollY ] = useState(0)
  const [ mobileMenu, setMobileMenu ] = useState(false)
  const [ query, setQuery ] = useState("")
  const [ showSearch, setShowSearch ] = useState("")

  const navigate = useNavigate();
  const location = useLocation()

  return (
    <div>Header</div>
  )
}

export default Header