import click from '../assets/image/career/click.jpg';
import tata from '../assets/image/career/tata.jpg';
import oasis from '../assets/image/career/oasis.jpg';
import itcen from '../assets/image/career/itcen.png';
import zeta from '../assets/image/career/zeta.png';
import msl from '../assets/image/career/msl.jpg';

export interface CompanyInfo {
    logo: string;
    title: string;
    time: string;
    language: string;
    tool: string;
    db: string;
    deploy: string;
    work: string;
    description: string;
    careers?: Careers[]
}

export interface Careers {
    items: CareerChildren
}

export interface CareerChildren {
    h4: string;
    h5: string;
    li: string[];
}

const clickCareer: Careers[] = [
    {
        items: {
            h4: "▎유통프로그램 개발/기획",
            h5: "2021.06 ~ 2021.09",
            li: [
                "회사 사수와 기존 유통프로그램 개발 자료 파악",
                "디자인 및 소스 코드 부족한 부분 개선"
            ]
        }
    },
    {
        items: {
            h4: "▎EMR프로그램 통계 그래프 기능 개발",
            h5: "2021.10 ~ 2022.02",
            li: [
                "EMR프로그램 내에 통계 및 그래프UI 추가 할 부분 결정",
                "EMR프로그램과 별도 라이브러리로 개발",
                "EMR프로그램에 적용 후 충돌 및 오류 사항 테스트 후 배포"
            ]
        }
    },
    {
        items: {
            h4: "▎EMR프로그램 설명서 PDFviewer 개발",
            h5: "2022.03 ~ 2022.06",
            li: [
                "devexpress를 사용하여 PDFviewerController 개발",
                "원본 pdf를 읽어서 해당 form에 맞는 부분만 띄워주는 viewer 개발",
                "메모리 부하 최적화 시킴으로써 프로그램 연동시 부담 줄임",
                "EMR프로그램과 연동 후 테스트 후 배포"
            ]
        }
    },
    {
        items: {
            h4: "▎EMR프로그램 클라이언트 요청 개발 및 기능개선",
            h5: "2021.09 ~ 2022.09",
            li: [
                "환자 정보 차트 및 병동 등 여러부분 에러 및 요청사항 해결",
                "클라이언트 요구사항 개발팀 회의 거쳐 기능 개발"
            ]
        }
    },
]

export const TataCareer: Careers[] = [
    {
        items: {
            h4: "▎스마트 팩토리 서버/웹 유지보수",
            h5: "2022.10",
            li: [
                "해외 법인별 웹 기능 체크 및 유지보수",
                "데이터베이스 프로시저 유지보수",
                "특이사항 엑셀 정리 후 보고"
            ]
        }
    }
]

export const OasisCareer: Careers[] = [
    {
        items: {
            h4: "▎스마트 iot 프로그램",
            h5: "2023.02",
            li: [
                "키오스크 전원관리 프로그램 개발",
                "호텔 카드키 websocket 사용해서 hex값 수정 및 저장"
            ]
        }
    }
]

export const ItcenCareer: Careers[] = [
    {
        items: {
            h4: "▎빅데이터 분석",
            h5: "2023.03 ~ 2023.05",
            li: [
                "국세청 요청자료 빅데이터 개발",
                "GitLab으로 버전 관리"
            ]
        }
    }
]

export const ZetaCareer: Careers[] = [
    {
        items: {
            h4: "▎소프트웨어 개발 및 서버 구축",
            h5: "2023.06 ~ 2023.08",
            li: [
                "modbus tcp client 프로그램 개발",
                "modbus data 서버 저장"
            ]
        }
    },
    {
        items: {
            h4: "▎모니터링 웹 및 백엔드 개발",
            h5: "2023.06 ~ 2023.08",
            li: [
                "modbus 실시간 data 모니터링 웹 개발",
                "modbus 실시간 data API 개발"
            ]
        }
    }
]

export const MslCareer: Careers[] = [
    {
        items: {
            h4: "▎관리자 웹 개발",
            h5: "2023.09 ~ ",
            li: [
                "사용자 실시간 데이터 모니터링 관리자 웹 개발",
                "그래프로 실시간 사용 데이터 및 저장 데이터등 확인 가능",
            ]
        }
    },
    {
        items: {
            h4: "▎앱 개발",
            h5: "2023.09 ~ ",
            li: [
                "네이티버 언어(Java,Kotlin,Swift)로 사용자 앱 개발",
                "전자 기기와 블루투스 통신 후 데이터 받아 UI 처리 및 API 전송"
            ]
        }
    },
    {
        items: {
            h4: "▎웹, 앱 백엔드 개발",
            h5: "2023.09 ~ ",
            li: [
                "실시간 데이터 처리",
                "보호자 앱 쪽 웹소켓 사용해 실시간 데이터 송수신 처리",
                "더불어 동시에 python으로 실시간 생체 데이터 분석 처리 후 DB 저장 프로그램 개발",
            ]
        }
    },
    {
        items: {
            h4: "▎클라우드 및 배포 환경 구축",
            h5: "2023.09 ~ ",
            li: [
                "AWS 배포 환경 구축",
                "docker 사용 , Kubernetes 적용 예정",
            ]
        }
    },
]

export const containerItems: CompanyInfo[] = [
    {
        logo: click,
        title: '(주) 클릭소프트',
        time: '2021.03 ~ 2022.09',
        language: 'C#, VB.NET',
        tool: 'Vs Studio, Winform, DevExpress, Spread',
        db: 'Mysql, MariaDB',
        deploy: 'Svn',
        work: '정규직',
        description: '병원, 의원에서 사용하는 EMR 프로그램 개발 회사 입니다.\n ' +
            '뿐만 아니라 유통프로그램 또한 여러 거래처를 두고 있습니다.\n' +
            '500개 이상의 거래처를 두고 있으며 많은 지역병원 의원에서 사용 중인 프로그램 입니다.\n' +
            '신입으로 처음 입사한 회사이며 코드리뷰, 프로젝트 발표, 새로도입한 UI 라이브러리 발표등을 자주 하였으며\n' +
            '경력 사수 한테 코드 점검도 받고 가독성을 높이는 코드를 많이 배웠습니다.'
        ,
        careers: clickCareer ? clickCareer : []
    },

    {
        logo: tata,
        title: '타타컨설턴시서비스',
        time: '2022.10',
        language: 'C#, Javascript',
        tool: 'Winform, React',
        db: 'Oracle',
        deploy: '',
        work: '계약직',
        description: '한국 주 거래처 한온시스템 , 스마트 팩토리 프로그램 개발 회사 입니다.\n' +
            '외국계 회사이다 보니 해당 업체에 상주 하며 일을 했었으며\n' +
            '여러 업무 및 회의 전달은 회사 이메일 및 사이트로 진행 되었습니다.',
        careers: TataCareer ? TataCareer : []
    },

    {
        logo: oasis,
        title: '(주) 오아시스스토리',
        time: '2023.02',
        language: 'C#',
        tool: 'Winform, Tcp, Socket',
        db: '',
        deploy: '',
        work: '프리랜서',
        description: '스마트 iot 프로그램 개발 및 펌웨어 또한 개발 하는 회사 입니다.',
        careers: OasisCareer ? OasisCareer : []
    },

    {
        logo: itcen,
        title: '아이티센',
        time: '2023.03 ~ 2023.05',
        language: 'Python',
        tool: 'Jupyter',
        db: 'Mysql, Hive',
        deploy: 'GitLab',
        work: '프리랜서',
        description: '공공기관 소프트웨어 공급 업체 입니다.\n' +
            '국세청 빅데이터 분석가로 포지션 배정 받았습니다',
        careers: ItcenCareer ? ItcenCareer : []
    },

    {
        logo: zeta,
        title: '(주) 제타',
        time: '2023.06 ~ 2022.08',
        language: 'C#, TypeScript, Flutter',
        tool: 'Winform, ModbusTcp, Android, Node, Nest',
        db: 'Mysql, MariaDB',
        deploy: 'GitHub, Windows Server',
        work: '프리랜서',
        description: 'SI업무 느낌이 강한 개발 회사 입니다.\n' +
            '거래처 필요한 프로그램 및 앱,웹등 개발을 합니다.\n' +
            '주 거래처는 현대 공장, 삼성 pcb 입니다.',
        careers: ZetaCareer ? ZetaCareer : []
    },

    {
        logo: msl,
        title: '(주) 엠에스엘',
        time: '2023.09 ~ ING',
        language: 'TypeScript, C#, Java, Kotlin, Swift',
        tool: 'GitHub, Docker, Node, Nest, React, Winform, Android, Xcode',
        db: 'Mysql, MariaDB, MongoDB, Elasticsearch',
        deploy: 'AWS, CloudType',
        work: '정규직',
        description: '건강관리 장치 연구 및 생산 , 소프트웨어 개발 회사 입니다.\n' +
            '전자기기를 통해서 사용자 실시간 데이터 측정 및 확인이 가능하며\n' +
            '데이터 분석 등등 생체 데이터 수집 및 분석 개발을 하고 있습니다.',
        careers: MslCareer ? MslCareer : []
    },

]