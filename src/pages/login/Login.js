
import { useEffect, useState } from "react";
import "./Login.css"

const Login = () => {
    const [windowHeight, setWindowHeight] = useState(document.documentElement.scrollHeight)

    useEffect(() => {
        const handleResize = () => {
            const newTotalHeight = document.documentElement.scrollHeight
            setWindowHeight(newTotalHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="container__all__login" style={{height: `${windowHeight}px`}}>
            <div className="container__login">
                {windowHeight}
            </div>
        </div>
    )
}

export default Login;