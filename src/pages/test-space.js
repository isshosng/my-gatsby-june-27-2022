import React from "react";

const TestSpacePage = () => {
  return (
    <main>
      <title>테스트 스페이스</title>
      <div style={{display: "flex"}}>
        <a href="/">로고</a>
        <div style={{flexGrow:1}}></div>
        <a href="/test">테스트</a>
        <a href="/test-space">테스트 스페이스</a>
      </div>
      <h1>테스트 스페이스 페이지 입니다.</h1>
    </main>
  );
};

export default TestSpacePage;