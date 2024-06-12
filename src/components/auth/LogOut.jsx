import LogoutIcon from "../../assets/icons/logout.svg"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"



const LogOut = () => {
    const navigate = useNavigate()
    const {setAuth} = useAuth()

    const handleLogOut = () => {
        setAuth({})
        navigate("/login")
    }
  return (
    <button
    onClick={handleLogOut}
    className="icon-btn">
    <img src={LogoutIcon} alt="Logout" />
  </button>
  )
}

export default LogOut