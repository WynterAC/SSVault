---
raindrop_id: 745524669
raindrop_highlights:
  65e0de557348e4bd5b568d8e: ba16ffa1e0fa178d6b5e9094045871e8
---

# Metadata
Source URL:: https://stephango.com/tidy


---
# Tidy Reader

A bookmarklet that makes web articles more readable.

## Highlights

> [!quote]+ Updated on Thu Feb 29 2024 12:43:17 GMT-0700
>
> javascript: (function() {
&gt;    console.log(&#39;start&#39;);
&gt;    var jsCode = document.createElement(&#39;script&#39;);
&gt;    jsCode.setAttribute(&#39;src&#39;, &#39;https://cdn.rawgit.com/mozilla/readability/8525c6af/Readability.js&#39;);
&gt;    window.tidyHtml = (function() {
&gt;        var loc = document.location;
&gt;        var uri = {
&gt;            spec: loc.href,
&gt;            host: loc.host,
&gt;            prePath: loc.protocol + &#39;//&#39; + loc.host,
&gt;            scheme: loc.protocol.substr(0, loc.protocol.indexOf(&#39;:&#39;)),
&gt;            pathBase: loc.protocol + &#39;//&#39; + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf(&#39;/&#39;) + 1)
&gt;        };
&gt;        var article = new Readability(uri, document).parse();
&gt;        document.children[0].innerHTML = article.content;
&gt;        var styles = `@media (prefers-color-scheme: dark) {:root {--background: #222;--text: white;--text-muted: #999;}}@media (prefers-color-scheme: light) {:root {--background: white;--text: black;--text-muted: #666;}}* {font-family: -apple-system, BlinkMacSystemFont, &quot;Inter&quot;, &quot;IBM Plex Sans&quot;, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;}code, pre {font-family: IBM Plex Mono, monospace;font-size: calc(1rem + 0.5vw);}html {box-sizing: border-box;width: 100%;height: 100%;font-size: 62.5%;background-color: var(--background) !important;}body {font-size: calc(1.6rem + 0.5vw);line-height: 1.8;margin: 0 auto;width: 40em;max-width: 88%;color: var(--text);background-color: var(--background);}.page {margin: 2rem auto;background: var(--background);padding: 0 0 20rem 0;}h1 {font-size: 44px !important;letter-spacing: -0.5px !important;line-height: 46px !important;margin: 22px 0 15px 0 !important;}h2 {font-size: 35px;line-height: 38px;font-weight: bold;}h3 {font-size: inherit;font-weight: bold;border-bottom: 1px solid #333;}ul {margin: 1rem;}ol {margin: 1rem;}video, img {max-width: 100%;}a {color: var(--text);text-decoration: underline;}a:visited {opacity: 0.6;color: var(--text-muted);}blockquote {margin: 0;padding: 0.1em 0 0.1em 2em;border-left: 2px solid #ccc;color: var(--text-muted);}pre {background-color: #ccc;padding: 1rem;}code {color: var(--text-muted);}pre &gt; code {color: #333;}`
&gt;        var tidyStyle = document.createElement(&quot;style&quot;)
&gt;        tidyStyle.innerText = styles
&gt;        document.head.appendChild(tidyStyle)
&gt;    });
&gt;    jsCode.onload = tidyHtml;
&gt;    document.body.appendChild(jsCode);
&gt;}());
