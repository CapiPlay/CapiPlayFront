
import { useEffect, useState } from "react"
import "./ChooseCategory.css"

// Components
import Button from "../../../components/button/Button";
import categorys from './CategoryData.js';

const ChooseCategory = ({ back }) => {

    const [windowHeight, setWindowHeight] = useState(document.documentElement.scrollHeight)
    let defaultDesktopHeight = 0
    const [listChooseCategory, setListChooseCategory] = useState([])
    // const [chooseCategory, setChooseCategory] = useState([])

    useEffect(() => {
        defaultDesktopHeight = windowHeight

        const handleResize = () => {
            const currentHeight = document.documentElement.scrollHeight

            if (currentHeight < defaultDesktopHeight) {
                setWindowHeight(defaultDesktopHeight)
            } else {
                setWindowHeight(currentHeight)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const clickChooseCategory = (cat) => {
        if (listChooseCategory.includes(cat)) {
            const updatedList = listChooseCategory.filter((item) => item !== cat)
            setListChooseCategory(updatedList)
        } else {
            setListChooseCategory([...listChooseCategory, cat])
        }
    }

    const category = (cat) => {
        return (
            <div className="category"
                onClick={() => clickChooseCategory(cat)}
                style={listChooseCategory.includes(cat) ? style : {}}
            >
                <div>
                    <img src={cat.img} alt={cat.text} />
                </div>
                <span>{cat.text}</span>
            </div>
        )
    }

    const style = {
        margin: "0px",
        marginBottom: "2rem",
        border: "4px solid var(--purple)"
    }

    return (
        <div className="container__all__chooseCategory" style={{ height: `${windowHeight}px` }} >
            <div className="container__chooseCategory">
                <h1>Cadastro</h1>
                <h2>Selecione as categorias de seu interesse</h2>
                <div className="chooseCategory">
                    {
                        categorys.map((cat, i) => {
                            return <div key={i}>{category(cat)}</div>
                        })
                    }
                </div>
                <div className="container__buttons__chooseCategory">
                    <div>
                        <Button
                            onClick={() => back()}
                            label={"Pular"}
                            principal={false}
                        />
                    </div>
                    <div>
                        <Button
                            label={"Confirmar"}
                            principal={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCategory