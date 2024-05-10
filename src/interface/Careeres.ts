import click from '../assets/image/career/click.jpg';
import tata from '../assets/image/career/tata.jpg';
import oasis from '../assets/image/career/oasis.jpg';
import itcen from '../assets/image/career/itcen.png';
import zeta from '../assets/image/career/zeta.png';
import msl from '../assets/image/career/msl.jpg';

export interface CompanyInfo{
    logo:string;
    title:string;
    time:string;
    language:string;
    tool:string;
    db:string;
    deploy:string;    
    work:string;
    description:string;
    careers?:Careers[]
}

export interface Careers{
    items:CareerChildren
}

export interface CareerChildren{
    h4:string;
    h5:string;
    li:string[];
}

const clickCareer:Careers[] = [
    {items:{
        h4:"▎유통프로그램 개발/기획",
        h5:"2021.06 ~ 2021.09",
        li:[            
            "회사 사수와 기존 유통프로그램 개발 자료 파악",
            "디자인 및 소스 코드 부족한 부분 개선"
        ]
        }
    },
    {items:{
        h4:"▎EMR프로그램 통계 그래프 기능 개발",
        h5:"2021.10 ~ 2022.02",
        li:[
            "EMR프로그램 내에 통계 및 그래프UI 추가 할 부분 결정",
            "EMR프로그램과 별도 라이브러리로 개발",
            "EMR프로그램에 적용 후 충돌 및 오류 사항 테스트 후 배포"            
            ]
        }
    },
    {items:{
        h4:"▎EMR프로그램 설명서 PDFviewer 개발",
        h5:"2022.03 ~ 2022.06",
        li:[
            "devexpress를 사용하여 PDFviewerController 개발",
            "원본 pdf를 읽어서 해당 form에 맞는 부분만 띄워주는 viewer 개발",
            "메모리 부하 최적화 시킴으로써 프로그램 연동시 부담 줄임",
            "EMR프로그램과 연동 후 테스트 후 배포"
            ]
        }
    },
    {items:{
        h4:"▎EMR프로그램 클라이언트 요청 개발 및 기능개선",
        h5:"2021.09 ~ 2022.09",
        li:[
            "환자 정보 차트 및 병동 등 여러부분 에러 및 요청사항 해결",
            "클라이언트 요구사항 개발팀 회의 거쳐 기능 개발"
        ]
        }
    },
]

export const TataCareer:Careers[] = [
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
]

export const OasisCareer:Careers[] = [
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
]

export const ItcenCareer:Careers[] = [
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
]

export const ZetaCareer:Careers[] = [
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
]

export const MslCareer:Careers[] = [
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
    {items:{
        h4:"",
        h5:"",
        li:[]
    }},
]

export const containerItems:CompanyInfo[] = [
    {
        logo:click,
        title:'(주) 클릭소프트',
        time:'2021.03 ~ 2022.09',
        language:'C#, VB.NET',
        tool:'Vs Studio, Winform, DevExpress, Spread',
        db:'Mysql, MariaDB',
        deploy:'Svn',
        work:'정규직',
        description:'병원, 의원에서 사용하는 EMR 프로그램 개발 회사 입니다.\n '+
               '뿐만 아니라 유통프로그램 또한 여러 거래처를 두고 있습니다.\n'+
               '500개 이상의 거래처를 두고 있으며 많은 지역병원 의원에서 사용 중인 프로그램 입니다.\n'+
               '신입으로 처음 입사한 회사이며 코드리뷰, 프로젝트 발표, 새로도입한 UI 라이브러리 발표등을 자주 하였으며'+
               '경력 사수 한테 코드 점검도 받고 가독성을 높이는 코드를 많이 배웠습니다.'
        ,        
        careers:clickCareer ? clickCareer : []
    },

    {
        logo:tata,
        title:'타타컨설턴시서비스',
        time:'2022.10',
        language:'C#, Javascript',
        tool:'Winform, React',
        db:'Oracle',
        deploy:'',
        work:'계약직',
        description:'',        
        careers:TataCareer ? TataCareer : []
    },

    {
        logo:oasis,
        title:'(주) 오아시스스토리',
        time:'2023.02',
        language:'C#',
        tool:'Winform, Tcp, Socket',
        db:'',
        deploy:'',
        work:'프리랜서',
        description:'',        
        careers:OasisCareer ? OasisCareer : []
    },

    {
        logo:itcen,
        title:'아이티센',
        time:'2023.03 ~ 2023.05',
        language:'Python',
        tool:'Jupyter',
        db:'Mysql, Hive',
        deploy:'GitLab',
        work:'프리랜서',
        description:'',        
        careers:ItcenCareer ? ItcenCareer : []
    },

    {
        logo:zeta,
        title:'(주) 제타',
        time:'2023.06 ~ 2022.08',
        language:'C#, TypeScript, Flutter',
        tool:'Winform, ModbusTcp, Android, Node, Nest',
        db:'Mysql, MariaDB',
        deploy:'GitHub, Windows Server',
        work:'프리랜서',
        description:'',        
        careers:ZetaCareer ? ZetaCareer : []
    },

    {
        logo:msl,
        title:'(주) 엠에스엘',
        time:'2023.09 ~ ING',
        language:'TypeScript, C#, Java, Kotlin, Swift',
        tool:'GitHub, Docker, Node, Nest, React, Winform, Android, Xcode',
        db:'Mysql, MariaDB, MongoDB, Elasticsearch',
        deploy:'AWS, CloudType',
        work:'정규직',
        description:'',        
        careers:MslCareer ? MslCareer : []
    },
    
]