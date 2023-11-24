import './Style.scss'
import ImgOne from '../../assets/imageone.jpg'
import Advantages from '../../assets/advantages.png'
import AdvantagesMobile from '../../assets/advantagemobile.png'
import ViewHeader from '../../components/header/header';
import { useNavigate } from 'react-router-dom';

export default function HomeView(){

    const navigate = useNavigate()

    function logout(){
        navigate("/")
    }
    
    return(
        <div>
            <ViewHeader/>            

            <button onClick={logout}>Logout</button>

            { /* Main */}
            <main className='containermain'>
                <div className='containerabout'>
                    <div className='containermain'>
                        <h2 className='h2'>AMANENSE</h2>
                        <img src={ImgOne} className='imgone' alt='advantages'></img>
                        <p className='p1'>Nosso aplicativo de saúde utiliza IA para gerar protocolos personalizados, oferecendo opções eficientes e agilizando atendimentos presenciais, conectando usuários e hospitais de forma prática e centrada no paciente.</p>
                        <button>Mais informacoes</button>
                    </div>

                    <div className='row'>
                        <div className='containermain'>
                            <p className='p2'>O que e?</p>
                            <p className='p1'>O Anameasy é uma solução inovadora projetada para otimizar a experiência do usuário no ambiente hospitalar, tornando o processo de triagem e burocracia no atendimento mais eficiente. Este aplicativo tem como objetivo facilitar a jornada do paciente e aprimorar a eficiência dos colaboradores do hospital</p>
                        </div>

                        <div className='containermain'>
                            <p className='p2'>O que ela fará</p>
                            <p className='p1'>A aplicação proposta visa aprimorar a experiência no setor de saúde, oferecendo aos usuários acesso personalizado aos serviços médicos. Ao preencher um formulário de anamnese, um sistema de inteligência artificial gera um protocolo de Manchester, classificando a gravidade do caso. Isso possibilita opções de atendimento online ou presencial em uma UBS ou hospital, considerando o plano de saúde cadastrado ou o SUS. A comunicação direta com o hospital, através de uma senha baseada no protocolo, agiliza o processo, proporcionando uma experiência eficiente e preparando a equipe médica. Em resumo, a aplicação integra tecnologia e protocolos médicos para promover acesso ágil e centrado no usuário aos serviços de saúde.</p>
                        </div>

                        <div className='containermain'>
                            <p className='p2'>O que e?</p>
                            <p className='p1'>O usuário preenche um formulário médico na plataforma, e nosso sistema de inteligência artificial processa as informações. Em seguida, geramos um protocolo de prioridade com base nos dados, classificando a gravidade. O aplicativo oferece opções personalizadas, como atendimento online ou presencial em UBS/hospital, considerando plano de saúde ou SUS. Optando pelo presencial, o sistema se comunica diretamente com o hospital escolhido, gerando uma senha alinhada ao protocolo e à disponibilidade da instituição. Essa senha agiliza o processo, proporcionando uma experiência eficiente para o usuário e preparando a equipe médica com antecedência. A integração de tecnologia, protocolos médicos e sistemas de saúde visa oferecer uma abordagem centrada no usuário, tornando o acesso aos serviços de saúde mais eficaz e personalizado</p>
                        </div>
                    </div>

                </div>

                <section>
                    <h2 className='h2'>Vantagens</h2>
                    <div className='containeradvantages'>
                        <img src={Advantages} className='advantages' alt='advantages'></img>
                        <img src={AdvantagesMobile} className='advantages-mobile' alt='advantages'></img>
                    </div>
                </section>
            </main>
        </div>
        
    )
}