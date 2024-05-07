import './Main.scss'
import { Aboutme } from './aboutme/Aboutme';
import { Archiving } from './archiving/Archiving';
import { Head } from './head/Head';
import { Project } from './project/Project';
import { Skills } from './skills/Skills';


export const Main = () => {
    return (
        <main className="main">            
            <Head/>
            <Aboutme/>
            <Skills/>
            <Archiving/>
            <Project/>                   
        </main>
    );
}