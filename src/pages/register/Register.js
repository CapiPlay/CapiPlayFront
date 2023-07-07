
import { useEffect, useState } from "react"

import "./Register.css"

const Register = () => {

    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="container__all__register" style={{height: `${windowHeight}px`}}>
            
            <form>


            </form>

        </div>
    )
}

export default Register