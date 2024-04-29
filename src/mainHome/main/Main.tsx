import './Main.scss'
import { Aboutme } from './aboutme/Aboutme';
import { Head } from './head/Head';
import { Skills } from './skills/Skills';


export const Main = () => {
    return (
        <main className="main">            
            <Head/>
            <Aboutme/>
            <Skills/>                     
        </main>
    );
}