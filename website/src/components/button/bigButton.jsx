import './Style.scss'

export default function   BigButton(props){
    const { title } = props

    return (
        <button className='bigButton'>
            {title}
        </button>
    )
}