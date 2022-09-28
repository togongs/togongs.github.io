import React, { Component } from "react";
import classes from "./About.module.css";
import "animate.css/animate.min.css";

const About = () => {
  return (
    <div className={classes.box} id="about">
      <div
        offset={0}
        animateIn="fadeInLeft"
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        {/* <span className={classes.head}>ABOUT ME</span> */}
        <h2 className={classes.heading}>프로필</h2>
        <div className={classes.About}>
          <p>이름 정창우</p>
          <p>연락처 010-5145-1332</p>
          <p>이메일 jcw9828@gmail.com</p>
          <p className={classes.br}></p>
        </div>

        <h2 className={classes.heading}>경력</h2>
        <div className={classes.About}>
          <p>
            니아랩스 프론트엔드 웹 개발자
            <ul>
              <li>2022년 1월 – 현재</li>
            </ul>
          </p>
          <p>
            스파르타코딩클럽 항해99 3기
            <ul>
              <li>2021년 9월 – 2021년 12월</li>
            </ul>
          </p>
          <p>
            에이치앤비디자인 구매부서 사원
            <ul>
              <li>2020년 6월 – 2021년 6월</li>
            </ul>
          </p>
          <p className={classes.br}></p>
        </div>

        {/* <h2 className={classes.heading}>학력</h2>
        <div className={classes.About}>
          <p>학점은행제 경영학 학사</p>
          <p className={classes.br}></p>
        </div> */}

        <h2 className={classes.heading}>전문 기술</h2>
        <div className={classes.About} style={{ marginLeft: "50px" }}>
          <li>React, NextJS, NodeJS</li>
          <li>JavaScript(ES6)</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap, Antd</li>
          <li>figma</li>
          <li>Mysql, MongoDB</li>
          <p className={classes.br}></p>
        </div>

        <h2 className={classes.heading}>프로젝트</h2>
        <div className={classes.About}>
          <div className={classes.label}>
            <h4>크레파스 NFT 마켓</h4>
            <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p>
            <p style={{ fontSize: "14px" }}>
              이더리움 컨트랙트를 통한 블록체인 상에서의 NFT 결제시스템에서
              프론트엔드를 개발했습니다
            </p>
            <p style={{ fontSize: "14px" }}>
              모바일 반응형 / redux-toolkit / Antd 사용 / NEXT.js
            </p>
            <p>
              <a href="https://www.crepas.io/" style={{ color: "#FC4A1A" }}>
                https://www.crepas.io
              </a>
            </p>
          </div>
          <p className={classes.br}></p>
        </div>

        <h2 className={classes.heading}>사이드 프로젝트</h2>
        <div className={classes.About}>
          <div className={classes.label}>
            <h4>넷플릭스 </h4>
            <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p>
            <p>모바일 반응형 / redux-toolkit / Bootstrap</p>
            <p>
              <a
                href="https://togongs-netflix.netlify.app"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-netflix.netlify.app
              </a>
            </p>
          </div>
          <p className={classes.br}></p>
        </div>
        <div className={classes.About}>
          <div className={classes.label}>
            <h4>이미지 검색 </h4>
            <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p>
            <p>무한스크롤 / 검색기능 </p>
            <p>
              <a
                href="https://togongs-images-search.netlify.app"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-images-search.netlify.app
              </a>
            </p>
          </div>
          <p className={classes.br}></p>
        </div>
        <div className={classes.About}>
          <div className={classes.label}>
            <h4>h&m </h4>
            <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p>
            <p>정렬기능 / 검색기능 / load more </p>
            <p>
              <a
                href="https://togongs-hnm.netlify.app"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-hnm.netlify.app
              </a>
            </p>
          </div>
          <p className={classes.br}></p>
        </div>

        {/* <div className={classes.About}>
          <div className={classes.label}>
            <h4>Slack</h4>
            <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p>
            <p>채팅기능 / firebase 사용 / muterial UI </p>
            <p>
              <a href="https://www.crepas.io/" style={{ color: "#FC4A1A" }}>
                https://www.crepas.io
              </a>
            </p>
          </div>
          <p className={classes.br}></p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
