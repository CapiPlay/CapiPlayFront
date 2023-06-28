
import "./Input.css"

const Input = ({ placeholder, value, onChange, onClick, label }) => {
    return (
        <div class="form-group">
            <input type="text" class="form-control" required />
            <label>Nome</label>
        </div>
    )
}

export default Input