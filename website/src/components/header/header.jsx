import './header.scss'
import img from '../../assets/logo.png'

//header reutilizavel 
export default function ViewHeader(){
    return(
            <div className='container-header'>
                <img src={img} alt="imagem Logo"/>
                <p>Global Solutions 2023 - Engenharia de Software</p>
            </div>
    )
}