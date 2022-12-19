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
          <li>NextJS, React</li>
          <li>JavaScript, TypeScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React Bootstrap, Antd</li>
          <li>figma</li>
          <li>Mysql</li>
          <p className={classes.br}></p>
        </div>
        <h2 className={classes.heading}>프로젝트</h2>
        <div className={classes.About}>
          <div className={classes.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>크레파스 NFT 마켓 (2022년 5월 – 2022년 9월)</h4>
              <a href="https://www.crepas.io/" style={{ color: "#FC4A1A" }}>
                https://www.crepas.io
              </a>
            </div>
            <hr></hr>
            <p style={{ fontSize: "14px", lineHeight: "30px" }}>
              이더리움 컨트랙트를 통한 블록체인 NFT 결제시스템에서 프론트엔드
              개발했습니다.
              <br></br>
              이더리움 컨트랙트를 활용하여 NFT 생성, 발행, 구매, 고정가 판매등록
              및 경매가 판매등록, 경매참여 및 경매확정, 가격제안, 판매종료
              기능과 MyPage를 구현했습니다.
            </p>
            <p style={{ fontSize: "14px" }}>
              주요기능 - 정렬필터, 타이머, 더보기, 검색, 좋아요, 메신저 url
              공유, 페이지네이션
            </p>
            <p style={{ fontSize: "14px", fontWeight: "800" }}>
              스킬 - Next.js / 모바일 반응형 웹/ redux, redux-toolkit,
              redux-saga / antd
            </p>
            <p></p>
          </div>
          <p className={classes.br}></p>
        </div>

        <div className={classes.About}>
          <div className={classes.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>탑스키 (2022년 11월 - 2022년 12월 (진행중) ) </h4>
              <a
                href="https://leports.thenamed.co.kr/"
                style={{ color: "#FC4A1A" }}
              >
                https://leports.thenamed.co.kr
              </a>
            </div>
            <hr></hr>
            <p style={{ fontSize: "14px", lineHeight: "30px" }}>
              스키 강습 예약 웹사이트에서 프론트엔드 개발했습니다
              <br></br>
              주요 기능 - mainPage 팝업, 인증시간 Timer, Id/Pw 찾기, PW변경,
              로그인/회원가입 form 유효성검사 및 error message 커스텀 기능과
              모든페이지를 구현했습니다.
            </p>
            {/* <p style={{ fontSize: "14px" }}>
              주요기능 - 정렬필터, 타이머, 더보기, 검색, 좋아요, 메신저 url
              공유, 페이지네이션
            </p> */}
            <p style={{ fontSize: "14px", fontWeight: "800" }}>
              스킬 - Next.js, Typescript, styled-components, 모바일 반응형 웹,
              redux, redux-toolkit, redux-thunk
            </p>
            <p></p>
          </div>
          <p className={classes.br}></p>
        </div>

        <h2 className={classes.heading}>사이드 프로젝트</h2>
        <div className={classes.About}>
          <div className={classes.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>넷플릭스 </h4>
              <a
                href="https://togongs-netflix.netlify.app"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-netflix.netlify.app
              </a>
            </div>
            <hr></hr>
            {/* <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p> */}
            <div style={{ fontSize: "14px" }}>
              <p>정렬필터, 검색, 페이지네이션, 유튜브 영상 팝업</p>
              <p>반응형 웹(react bootstrap)</p>
              <p>redux / redux-toolkit / redux-thunk</p>
              <p>axios interceptors</p>
            </div>
          </div>
          <p className={classes.br}></p>
        </div>
        <div className={classes.About}>
          <div className={classes.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>H&M </h4>
              <a
                href="https://togongs-hnm.netlify.app"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-hnm.netlify.app
              </a>
            </div>
            <hr></hr>
            {/* <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p> */}
            <div style={{ fontSize: "14px" }}>
              <p>정렬필터, 검색, 더보기, 새로고침 시 로그인 유지</p>
              <p>반응형 웹(react bootstrap)</p>
              <p>redux / redux-toolkit / redux-thunk</p>
              <p>axios interceptors</p>
            </div>
          </div>
          <p className={classes.br}></p>
        </div>

        <div className={classes.About}>
          <div className={classes.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>미니 장바구니</h4>
              <a
                href="https://togongs-mini-cart.netlify.app/"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-mini-cart.netlify.app/
              </a>
            </div>
            <hr></hr>
            {/* <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p> */}
            <div style={{ fontSize: "14px" }}>
              <p>장바구니 기능, 결제 시 장바구니 목록 유지</p>
            </div>
          </div>
          <p className={classes.br}></p>
        </div>
        <div className={classes.About}>
          <div className={classes.label}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4>배경화면 검색 엔진</h4>
              <a
                href="https://togongs-wallpaper-search-engine.netlify.app/"
                style={{ color: "#FC4A1A" }}
              >
                https://togongs-wallpaper-search-engine.netlify.app/
              </a>
            </div>
            <hr></hr>
            {/* <p style={{ fontSize: "15px" }}>2022년 5월 – 2021년 9월</p> */}
            <div style={{ fontSize: "14px" }}>
              <p>무한스크롤, 정렬/필터링, 최근검색어</p>
            </div>
          </div>
          <p className={classes.br}></p>
        </div>
        <h2 className={classes.heading}>남김글</h2>
        <div className={classes.About}>
          <p style={{ width: "80%", fontWeight: "600", lineHeight: "30px" }}>
            능동적으로 프로젝트를 수행하고 다양한 기술과 협업 능력을 높이며
            프론트엔드 웹 개발자가 지녀야 할 <br></br>자질을 쌓기위해 노력중이고
            앞으로도 그럴것입니다. <br></br>항상 새로운 기술에 대한 관심과
            배우고자 하는 열망을 바탕으로 업무에 임하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
