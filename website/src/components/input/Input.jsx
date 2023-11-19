import './Input.scss'

export default function Input(props){

    const { title, placeholder } = props;

    return (
        <div className="containerinputs">
            <p className="pinput">{title}</p>
            <input type="text" placeholder={placeholder} className="input"/>
        </div>
    )
}