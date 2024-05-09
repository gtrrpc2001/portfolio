import './Main.scss'
import { Aboutme } from './aboutme/Aboutme';
import { Archiving } from './archiving/Archiving';
import { Career } from './career/Career';
import { Head } from './head/Head';
import { Project } from './project/Project';
import { Skills } from './skills/Skills';
import { ScrollProps, scrollRef } from '../../action/scroll';

const sections = [
    { Component: Head, refName: 'Head' },
    { Component: Aboutme, refName: 'Aboutme' },
    { Component: Skills, refName: 'Skills' },
    { Component: Archiving, refName: 'Archiving' },
    { Component: Project, refName: 'Project' },
    { Component: Career, refName: 'Career' },
  ];

export const Main = ({scroll,refes}:ScrollProps) => {
    return (
        <main className="main">
            {sections.map(({Component,refName}) => (
                <div ref={refes ? refes[refName] : undefined}>
                    <Component scroll={scroll}/>
                </div>
            ))} 
        </main>
    );
}