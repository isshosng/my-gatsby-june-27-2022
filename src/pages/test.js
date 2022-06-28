import React from "react"
import { Link } from 'gatsby';

function AboutPage() {
    return (
        <main>
            <title>Test</title>
            <div style={{display:"flex", gap:20}}>
              <Link href="/">Home</Link>
              <a href="/about">About</a>
              <a href="/test">Test</a>
              <a href="/test-test>">Test-Space</a>
            </div>

            <h1>This is Page of self-introduction</h1>
        </main>
    );
}

export default AboutPage;