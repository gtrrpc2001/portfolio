import './Main.scss'
import { Aboutme } from './aboutme/Aboutme';
import { Archiving } from './archiving/Archiving';
import { Career } from './career/Career';
import { Head } from './head/Head';
import { Project } from './project/Project';
import { Skills } from './skills/Skills';
import { scrollRef } from '../../action/scroll';

type Props = {
    scroll:(id:string) => void,
    refes:scrollRef
}
export const Main = ({scroll,refes}:Props) => {
    return (
        <main className="main">            
            <div ref={refes.Head}>
                <Head/>
            </div>
            <div ref={refes.Aboutme}>
                <Aboutme scroll={scroll}/>
            </div>
            <div ref={refes.Skills}>
                <Skills scroll={scroll}/>
            </div>
            <div ref={refes.Archiving}>
                <Archiving scroll={scroll}/>
            </div>
            <div ref={refes.Project}>
                <Project scroll={scroll}/>
            </div>
            <div ref={refes.Career}>
                <Career scroll={scroll}/>
            </div>
        </main>
    );
}