import html from '../assets/web/HTML.svg';
import css from '../assets/web/CSS.svg';
import emotion from '../assets/web/Emotion-Dark.svg';
import mui from '../assets/web/MaterialUI-Dark.svg';
import react from '../assets/web/React-Dark.svg';
import redux from '../assets/web/Redux.svg';
import sass from '../assets/web/Sass.svg';
import stylecpm from '../assets/web/StyledComponents.svg';
import tcss from '../assets/web/TailwindCSS-Dark.svg';
import ts from '../assets/web/TypeScript.svg';
import router from '../assets/web/react-router.svg';
import dart from '../assets/app/Dart-Dark.svg';
import flutter from '../assets/app/Flutter-Dark.svg';
import gradle from '../assets/app/Gradle-Dark.svg';
import java from '../assets/app/Java-Dark.svg';
import kotlin from '../assets/app/Kotlin-Dark.svg';
import express from '../assets/backend/ExpressJS-Dark.svg';
import firebase from '../assets/backend/Firebase-Dark.svg';
import js from '../assets/backend/JavaScript.svg';
import nest from '../assets/backend/NestJS-Dark.svg';
import node from '../assets/backend/NodeJS-Dark.svg';
import bts from '../assets/backend/TypeScript.svg';
import jwt from '../assets/backend/jwt.png';
import mongoose from '../assets/backend/mongoose.png';
import msa from '../assets/backend/msa.svg';
import socket from '../assets/backend/socket_io.png';
import swagger from '../assets/backend/swagger.png';
import aws from '../assets/cloud/AWS-Dark.svg';
import figma from '../assets/communication/Figma-Dark.svg';
import slack from '../assets/communication/slack.png';
import trello from '../assets/communication/trello.png';
import python from '../assets/data analysis/Python-Dark.svg';
import jupyter from '../assets/data analysis/jupyter.png';
import pyspark from '../assets/data analysis/pyspark.jpg';
import grafana from '../assets/data monitoring/Grafana-Dark.svg';
import prometheus from '../assets/data monitoring/Prometheus.svg';
import kibana from '../assets/data monitoring/kibana-done.png';
import kafka from '../assets/data pipeline/kafka-done.svg';
import logstash from '../assets/data pipeline/logstash.png';
import elasticsearch from '../assets/db/Elasticsearch-Dark.svg';
import mongodb from '../assets/db/MongoDB.svg';
import mysql from '../assets/db/MySQL-Dark.svg';
import redis from '../assets/db/Redis-Dark.svg';
import mariadb from '../assets/db/mariadb-done.svg';
import sh from '../assets/deploy/Bash-Dark.svg';
import docker from '../assets/deploy/Docker.svg';
import githubaction from '../assets/deploy/GithubActions-Dark.svg';
import nginx from '../assets/deploy/Nginx.svg';
import cloudtype from '../assets/deploy/cloudtype.svg';
import ftp from '../assets/deploy/ftp.jpg';
import iis from '../assets/deploy/iis.png';
import linux from '../assets/os/Linux-Dark.svg';
import ubuntu from '../assets/os/Ubuntu-Dark.svg';
import windows from '../assets/os/Windows-Dark.svg';
import csharp from '../assets/software/Csharp.svg';
import dotnet from '../assets/software/DotNet.svg';
import jest from '../assets/test tool/Jest.svg';
import jmeter from '../assets/test tool/Jmeter.png';
import sentry from '../assets/test tool/Sentry.svg';
import git from '../assets/versioncontrol/Git.svg';
import gitlab from '../assets/versioncontrol/GitLab-Dark.svg';
import github from '../assets/versioncontrol/Github-Dark.svg';
import svn from '../assets/versioncontrol/svn.jpg';

export interface imagesType{
    src:string;
    alt:string;
    text:string;    
}

export const WebImageList:imagesType[] = [
    {src:ts,alt:'WEB',text:''},
    {src:sass,alt:'WEB',text:''},
    {src:html,alt:'WEB',text:'HTML'},
    {src:css,alt:'WEB',text:'CSS'},    
    {src:react,alt:'WEB',text:'REACT'},
    {src:redux,alt:'WEB',text:'REDUX'},
    {src:router,alt:'WEB',text:'ROUTER'},
    {src:stylecpm,alt:'WEB',text:'Styled'},
    {src:tcss,alt:'WEB',text:'TWCSS'},
    {src:mui,alt:'WEB',text:'MUI'},    
    {src:emotion,alt:'WEB',text:'EMOTION'},    
]

export const AppImageList:imagesType[] = [
    {src:dart,alt:'APP',text:'DART'},
    {src:flutter,alt:'APP',text:'FLUTTER'},
    {src:gradle,alt:'APP',text:'GRADLE'},
    {src:java,alt:'APP',text:'JAVA'},
    {src:kotlin,alt:'APP',text:'KOTLIN'}
]

export const BackendImageList:imagesType[] = [
    {src:js,alt:'Backend',text:''},
    {src:bts,alt:'Backend',text:''},
    {src:swagger,alt:'Backend',text:''},
    {src:express,alt:'Backend',text:'EXPRESS'},
    {src:firebase,alt:'Backend',text:'FIREBASE'},    
    {src:nest,alt:'Backend',text:'NEST'},
    {src:node,alt:'Backend',text:'NODE'},    
    {src:jwt,alt:'Backend',text:'JWT'},
    {src:mongoose,alt:'Backend',text:'MONGOOSE'},
    {src:msa,alt:'Backend',text:'MSA'},
    {src:socket,alt:'Backend',text:'SOCKET'},    
]

export const CloudImageList:imagesType[] = [
    {src:aws,alt:'Cloud',text:'AWS'}
]

export const CommunicationImageList:imagesType[] = [
    {src:figma,alt:'Communication',text:'FIGMA'},
    {src:slack,alt:'Communication',text:'SLACK'},
    {src:trello,alt:'Communication',text:'TRELLO'}
]

export const AnalysisImageList:imagesType[] = [
    {src:python,alt:'Analysis',text:'PYTHON'},
    {src:jupyter,alt:'Analysis',text:'JUPYTER'},
    {src:pyspark,alt:'Analysis',text:'PYSPARK'}
]

export const MonitoringImageList:imagesType[] = [
    {src:grafana,alt:'Monitoring',text:'GRAFANA'},
    {src:prometheus,alt:'Monitoring',text:'PROMETHEUS'},
    {src:kibana,alt:'Monitoring',text:''}
]

export const PipelineImageList:imagesType[] = [
    {src:kafka,alt:'Pipeline',text:'KAFKA'},
    {src:logstash,alt:'Pipeline',text:'LOGSTASH'}
]

export const DbImageList:imagesType[] = [
    {src:elasticsearch,alt:'Db',text:'ELASTICSEARCH'},
    {src:mongodb,alt:'Db',text:'MONGODB'},
    {src:mysql,alt:'Db',text:'MYSQL'},
    {src:redis,alt:'Db',text:'REDIS'},
    {src:mariadb,alt:'Db',text:''}
]

export const DeployImageList:imagesType[] = [
    {src:sh,alt:'Deploy',text:'SHELL SCRIPT'},
    {src:docker,alt:'Deploy',text:'DOCKER'},
    {src:githubaction,alt:'Deploy',text:'GITHUB ACTION'},
    {src:nginx,alt:'Deploy',text:'NGINX'},
    {src:cloudtype,alt:'Deploy',text:'CLOUDTYPE'},
    {src:ftp,alt:'Deploy',text:''},
    {src:iis,alt:'Deploy',text:''}
]

export const OsImageList:imagesType[] = [
    {src:linux,alt:'Os',text:'LINUX'},
    {src:ubuntu,alt:'Os',text:'UBUNTU'},
    {src:windows,alt:'Os',text:'WINDOWS'}
]

export const SoftwareImageList:imagesType[] = [
    {src:csharp,alt:'Software',text:''},
    {src:dotnet,alt:'Software',text:''}
]

export const TestImageList:imagesType[] = [
    {src:jest,alt:'Test',text:'JEST'},
    {src:jmeter,alt:'Test',text:''},
    {src:sentry,alt:'Test',text:'SENTRY'}
]

export const VersionImageList:imagesType[] = [
    {src:git,alt:'Version',text:'GIT'},
    {src:gitlab,alt:'Version',text:'GITLAB'},
    {src:github,alt:'Version',text:'GITHUB'},
    {src:svn,alt:'Version',text:''}
]
