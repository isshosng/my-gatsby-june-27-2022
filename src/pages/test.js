import { Link } from "gatsby";
import React from "react";

function TestPage() {
  return (
    <main>
      <title>테스트</title>

      <div style={{display:"flex", gap: 20}}>
        <Link href="/">Home</Link>
        <a href="/about">About</a>
        <a href="/test">Test</a>
        <a href="/test-test">Test-Space</a></div>

      <h1>테스트 페이지 입니다.</h1>
    </main>
  );
}

export default TestPage;