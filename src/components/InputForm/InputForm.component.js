import './InputForm.scss'

function InputForm({ handleChange, label, ...props }) {
    return (
        <div className="input-form--container">
            <input onChange={handleChange} {...props} />
            <label>{label}</label>
        </div>
    )
}

export {
    InputForm
}