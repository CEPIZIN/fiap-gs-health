// Class about { PROPS }
// passar informações 
import './minButton.scss'

export default function MiniButton(props) {
    
    const { title } = props

    return (
        <button className='MinButton'>
            {title}
        </button>
    )
}