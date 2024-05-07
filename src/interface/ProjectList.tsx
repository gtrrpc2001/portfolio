import { ReactNode } from "react"
import { emrImageList, projectsImagesType } from "./Images"
import { SpanColorText } from "../component/SpanColorText/SpanColorText"

export interface ProjectList{
    title:string
    time:string
    people:number
    work:boolean
    imageList:projectsImagesType[]
    borderRadius:number
    descripttion: ReactNode;
    mainFunction:string
    github:string
    frontend:string
    backend:string
    db:string
    deploy:string
}

export const Projects:ProjectList[] = [
    {
    title:'EMR',
    time:'21.03 ~ 22.09',
    people:5,
    work:true,
    imageList:emrImageList,
    borderRadius:0,
    descripttion: (
        <text>
        <b>병원,의원 등에서 사용하는 winform기반 EMR 프로그램</b> 입니다. 
        클라이언트 문의가 들어 오면 기능 수정 및 새로운 프로젝트 개발 담당 하였습니다.
        <p/>
        VB.NET 과 C#을 주로 사용하여 <SpanColorText text='CS방식을 처음'/>접했었습니다.
        <p/>
        DB에 Data 관리도 해야 했기 때문에 <SpanColorText text='MYSQL'/>을 처음 사용해 볼 수 있었고, 
        Windows 프로그램에 깊이를 배우기 너무 좋았습니다.
        또한 Winform을 다루며 Data 가공 속도를 높이는 효율적인 부분도 담당 하였으며 <SpanColorText text='Devexpress'/>컴포넌트를
         사용 하면서 formUI를 좀 더 유동적으로 사용해 보는 시간 이였습니다.
        </text>
    ),
    mainFunction:'원무과, 진료실, 병동 등등 병원 프로그램',
    github:'보안상 소스 공개X',
    frontend:'Devexpress, Spread, form, Usercontroll',
    backend:'VB.Net, C#',
    db:'Mysql, Mariadb',
    deploy:'SVN'
    },

    {
        title:'test',
        time:'',
        people:0,
        work:true,
        imageList:[],
        borderRadius:0,
        descripttion: (
            <text>
            <b></b> 
            
            <p/>
            
            <p/>
             <SpanColorText text='test'/>                      
            </text>
        ),
        mainFunction:'',
        github:'',
        frontend:'',
        backend:'',
        db:'',
        deploy:''
        },
]