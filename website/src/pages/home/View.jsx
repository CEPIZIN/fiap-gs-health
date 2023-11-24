import './Style.scss'
import ImageBackground from '../../assets/imageone.jpg'
import ViewHeader from '../../components/header/header';

export default function HomeView(){
    
    return(
        <div>
            <div className='header'>
            <ViewHeader/>            
            </div>

            <div className='containerfirst'>
                <img src={ImageBackground} />
            </div>

        </div>
        
    )
}