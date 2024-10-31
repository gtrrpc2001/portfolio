import { ReactNode } from "react";
import {
  adminWebImageList,
  analysisImgList,
  emrImageList,
  projectsImagesType,
  tingImageList,
} from "./Images";
import { SpanColorText } from "../component/SpanColorText/SpanColorText";

export interface ProjectList {
  title: string;
  time: string;
  people: number;
  work: boolean;
  imageList: projectsImagesType[];
  borderRadius: number;
  descripttion: ReactNode;
  mainFunction: string;
  github: string;
  frontend: string;
  backend: string;
  db: string;
  deploy: string;
}

export const Projects: ProjectList[] = [
  {
    title: "EMR",
    time: "21.03 ~ 22.09",
    people: 5,
    work: true,
    imageList: emrImageList,
    borderRadius: 0,
    descripttion: (
      <text>
        <b>병원, 의원 등에서 사용하는 winform기반 EMR 프로그램</b> 입니다.
        클라이언트 문의가 들어 오면 기능 수정 및 새로운 프로젝트 개발 담당
        하였습니다.
        <p />
        VB.NET 과 C#을 주로 사용하여 <SpanColorText text="CS방식을 처음" />{" "}
        접했었습니다.
        <p />
        DB에 Data 관리도 해야 했기 때문에 <SpanColorText text="MYSQL" />을 처음
        사용해 볼 수 있었고, Windows 프로그램에 깊이를 배우기 너무 좋았습니다.
        또한 Winform을 다루며 Data 가공 속도를 높이는 효율적인 부분도 담당
        하였으며 <SpanColorText text="Devexpress" />
        컴포넌트를 사용 하면서 formUI를 좀 더 유동적으로 사용해 보는 시간
        이였습니다.
      </text>
    ),
    mainFunction: "원무과, 진료실, 병동 등등 병원 프로그램",
    github: "보안상 소스 공개X",
    frontend: "Devexpress, Spread, form, Usercontroll",
    backend: "VB.Net, C#",
    db: "Mysql, Mariadb",
    deploy: "SVN",
  },

  {
    title: "Ting",
    time: "24.04 ~ ",
    people: 3,
    work: false,
    imageList: tingImageList,
    borderRadius: 0,
    descripttion: (
      <text>
        프로젝트팀에 들어가 소셜커뮤니티 앱에서 <b>백엔드</b>를 담당 하고
        있습니다. 실시간 위치를 지도에서 볼 수 있으며 다른 사용자 와 지역축제 및
        다양한 정보 공유를 할 수 있습니다.
        <p />
        <SpanColorText text="Nest" />
        로 개발을 하였으며 <SpanColorText text="Typescript" /> 를 사용
        하였습니다.
        <p />
        실시간으로 데이터를 받아야 하기때문에 메모리 관리에 신경을 썼습니다.
      </text>
    ),
    mainFunction: "채팅, 게시물, 위치공유",
    github: "https://github.com/gtrrpc2001/tingnest",
    frontend: "Flutter",
    backend: "Nest",
    db: "Mysql,Redis,MongoDB",
    deploy: "AWS (EC2)",
  },

  {
    title: "관리자 웹",
    time: "23.12 ~ 24.01",
    people: 1,
    work: true,
    imageList: adminWebImageList,
    borderRadius: 0,
    descripttion: (
      <text>
        현재 재직 중인 회사에서 서비스 중인 <b>건강관리 앱 관리자 웹페이지 </b>{" "}
        입니다. 사용자 생체 데이터를 실시간으로 모니터링 가능하며 그래프로 날짜,
        시간등을 선택 해서 지난 날의 데이터도 확인이 가능합니다.
        <p />
        <SpanColorText text="React" />
        로 개발을 하였으며 <SpanColorText text="Typescript" /> 를 사용
        하였습니다.
        <p />
        실시간으로 데이터를 받아야 하기때문에 메모리 관리에 신경을 썼습니다.
      </text>
    ),
    mainFunction: "실시간 사용자 데이터 모니터링",
    github: "https://github.com/gtrrpc2001/react",
    frontend: "React",
    backend: "Nest",
    db: "Mysql",
    deploy: "GitHub, Cloudtype, (Iis,Ftp)",
  },

  {
    title: "데이터 분석",
    time: "24.10 ~ ",
    people: 2,
    work: true,
    imageList: analysisImgList,
    borderRadius: 0,
    descripttion: (
      <text>
        사용자의 생체 데이터들을 실시간으로 <b>백엔드</b>와 소켓통신으로 받아{" "}
        <b>파이썬</b>을 사용하여 분석을 하고 있습니다. 실시간 나의 스트레스
        지수를 확인이 가능합니다.
        <p />
        <SpanColorText text="numpy,scipy,neurokit2 " />
        을 이용해 개발을 하였으며 <SpanColorText text="Python" />을 사용
        하였습니다.
        <p />
        실시간으로 데이터를 받아야 하기때문에 메모리 관리에 신경을 썼습니다.
        그리고 소켓 통신과 DB연결 connection 하는 부분에서 끊어졌을때는
        재연결시도 하는 작업또한 완료 했습니다.
      </text>
    ),
    mainFunction: "데이터분석, 스트레스 지수 데이터",
    github: "https://github.com/gtrrpc2001/stressAnalysis",
    frontend: "Kotlin, Swift",
    backend: "Python",
    db: "Mysql",
    deploy: "AWS (EC2)",
  },
];
