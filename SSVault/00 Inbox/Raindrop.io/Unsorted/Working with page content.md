---
raindrop_id: 757277949
raindrop_highlights:
  65fb6b8a5a926c91023d471d: 526bc402b31529f3a5ab88afdfbc2fa1
  65fb6b9010a5a0d6caaac716: 026303311f14ca57a1261686ec27e4fb
  65fb6b9e592feb0ab882ccdc: 97177682d577a5f4ac65a2521c699206
  65fb6ba6eb97ba82a1087404: 2eef4f1b97f34a4303e2812b5ff11f45
  65fb6bac5a926c91023d4bed: 69486d87d4a500c843ec211b55dd7ef5
  65fb6bb510a5a0d6caaacb94: 29496bff19d8b0912348ea0657f358f3
  65fb6bc2592feb0ab882d0d3: 34b8c84bbd7829a42a1aa04a288e7037
  65fb6bd610a5a0d6caaacff2: 92b6762b9def2d02357832f205361779
  65fb6be55a926c91023d53ca: b3ad695440b1bd3675e381a6f1f8e8fb
  65fb6beebfe9461ac8c804c7: c6480acb117772db85fba5a51cee3da2
  65fb6bfdcadc8b1e0e04e984: 110f3b40b65f05bd513f96116dc13597
  65fb6c07bfe9461ac8c807eb: 8250eaa041d39c85064111fdafd88b44
  65fb6c15bfe9461ac8c809cc: c838830aaff4fa7f0c6783535d501c7b
  65fb6c2a592feb0ab882de7d: b4d5d1763bbba141f4cc570650a7117c
  65fb6c3dbfe9461ac8c80eb7: a28f4f32c28151d07be14ed1700d3a36
  65fb6c477f262b64d4811362: 23728c319d11e282296b241dd27a0cf9
  65fb6c5410a5a0d6caaadf55: 83dad975323b669309010242fcdee5c8
  65fb6c60eb97ba82a1088b8c: 67762838b02421c4af5d253ad35da027
  65fb6c6c10a5a0d6caaae282: ca824585494cba073c9da450d996659d
  65fb6c81eb97ba82a10890d0: 0cad55d27e8e312f19a3fae27a61a438
  65fb6c8abfe9461ac8c81a22: 6871622a582569ff907257e667d6e554
  65fb6c97406e05bd773196da: 73a210f1ecea6a3941e239a7a7bc534b
  65fb6c9cbfe9461ac8c81cf2: abe08a621d6acbdbab57220a0d0448e9
  65fb6ca9bfe9461ac8c81edf: f151795a17be2f670cca0ae505058104
  65fb6cae406e05bd77319a23: 83d0a258c2455e27c643cd81ec9952e6
  65fb6cb310a5a0d6caaaecfa: 8b3cdaf6194717d776296f6239f331aa
  65fb6cc5bfe9461ac8c822d5: 34533d630990516306415396a5c4d838
  65fb6ccfbfe9461ac8c82407: dfa531d8254f4ccc7d38df44f10d349d
  65fb6cd8eb97ba82a1089c6f: 7759048b2f9b696cd8d16356d8aa1be1
  65fb6cddbfe9461ac8c825d7: 31057cc4579e15f06f836c0e1d5388b6
  65fb6cee592feb0ab882f9f7: 2694e7a3abeed92e4255774291056799
  65fb6cf610a5a0d6caaaf5a1: c00cc7196b381bccdc5b689fbcf62237
  65fb6d00406e05bd7731a445: 4d021c548afe368419b08355a1d61000
  65fb6d1210a5a0d6caaaf991: 84fc20fbdb9a467394aee910db026c14
  65fb6d36eb97ba82a108a834: b219b33cf1160f587e5fea405a97a04a
  65fb6d3d7f262b64d4813495: 7432191f102d75c9b50e347c5171a56a
  65fb6d475a926c91023d8301: 475424b39ca657d3211c838579fd08bd
  65fb6d4abfe9461ac8c83438: 0d5a0bd88c61b881a06e991e1b714b57
  65fb6d4f7f262b64d481370e: 7754e8259378b5bbf7ba02170aaec1f2
  65fb6d6bcadc8b1e0e051aaa: a45a10a0bd19788dfa3fe4401bde1f69

---

# Metadata
Source URL:: https://developers.notion.com/docs/working-with-page-content


---
# Working with page content

Learn about page content and how to add or retrieve it with the Notion API.

## Highlights

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> These blocks are referred to as the page&#39;s children. Each block has a type, such as a paragraph, a heading, or an image. Some types of blocks, such as a toggle list, have children of their own

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Let&#39;s start with a simple example, a paragraph block:

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> {
&gt;  &quot;object&quot;: &quot;block&quot;,
&gt;  &quot;id&quot;: &quot;380c78c0-e0f5-4565-bdbd-c4ccb079050d&quot;,
&gt;  &quot;type&quot;: &quot;paragraph&quot;,
&gt;  &quot;created_time&quot;: &quot;&quot;,
&gt;  &quot;last_edited_time&quot;: &quot;&quot;,
&gt;  &quot;has_children&quot;: false,
&gt;
&gt;  &quot;paragraph&quot;: {
&gt;    &quot;text&quot;: [/* details omitted */]
&gt;  }
&gt;}

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Paragraph blocks include common properties which every block includes: object, type, created_time, last_edited_time, and has_children. In addition, it contains type-specific information inside the paragraph property. Paragraph blocks have a text property. Other block types have different type-specific properties.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> block has child blocks: a paragraph followed by an indented todo block:

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> {
&gt;  &quot;object&quot;: &quot;block&quot;,
&gt;  &quot;id&quot;: &quot;380c78c0-e0f5-4565-bdbd-c4ccb079050d&quot;,
&gt;  &quot;type&quot;: &quot;paragraph&quot;,
&gt;  &quot;created_time&quot;: &quot;&quot;,
&gt;  &quot;last_edited_time&quot;: &quot;&quot;,
&gt;  &quot;has_children&quot;: true,
&gt;
&gt;  &quot;paragraph&quot;: {
&gt;    &quot;text&quot;: [/* details omitted */],
&gt;    &quot;children&quot;: [
&gt;      {
&gt;        &quot;object&quot;: &quot;block&quot;,
&gt;        &quot;id&quot;: &quot;6d5b2463-a1c1-4e22-9b3b-49b3fe7ad384&quot;,
&gt;        &quot;type&quot;: &quot;to_do&quot;,
&gt;        &quot;created_time&quot;: &quot;&quot;,
&gt;        &quot;last_edited_time&quot;: &quot;&quot;,
&gt;        &quot;has_children&quot;: false,
&gt;  
&gt;        &quot;to_do&quot;: {
&gt;          &quot;text&quot;: [/* details omitted */],
&gt;          &quot;checked&quot;: false
&gt;        }
&gt;      }
&gt;    ]
&gt;  }
&gt;}

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Child blocks are represented as a list of blocks inside the type-specific property

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Pages are also blocks

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> When retrieving a list of child blocks, you can use the page ID as a block ID.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> When a child page appears inside another page, it&#39;s represented as a child_page block

> [!info]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Rich text

> [!info]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Modeling content as blocks

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> In the previous block examples, the omitted value of the text property is a list of rich text objects

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> &quot;content&quot;: &quot;Grocery List&quot;,
&gt;    &quot;link&quot;: null
&gt;  },
&gt;  &quot;annotations&quot;: {
&gt;    &quot;bold&quot;: false,
&gt;    &quot;italic&quot;: false,
&gt;    &quot;strikethrough&quot;: false,
&gt;    &quot;underline&quot;: false,
&gt;    &quot;code&quot;: false,
&gt;    &quot;color&quot;: &quot;default&quot;
&gt;  },
&gt;  &quot;plain_text&quot;: &quot;Grocery List&quot;,
&gt;  &quot;href&quot;: null
> > Richtextobjects

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> for type-specific configuration

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> configuration related to that type in the text

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> does not depend on the type, such as annotations, plain_text, and href, are at the top level of the rich text object.

> [!info]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Creating a page with content

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Pages can be created with child blocks using the create a page endpoint

> [!danger]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> This endpoint supports creating a page within another page, or creating a page within a database.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Let&#39;s try creating a page within another page with some sample content. We will use all three parameters for this endpoint

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> parent parameter is be a page parent.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> type&quot;: &quot;page_id&quot;,
&gt;  &quot;page_id&quot;: &quot;494c87d0-72c4-4cf6-960f-55f8427f7692

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> The URL ends in a page ID.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> 32 character long string

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> 8-4-4-4-12

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> It&#39;s more common for an integration to receive a page ID by calling the search endpoint.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> The properties parameter is an object which describes the page properties

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Name&quot;: {
&gt;    &quot;type&quot;: &quot;title&quot;,
&gt;    &quot;title&quot;: [{ &quot;type&quot;: &quot;text&quot;, &quot;text&quot;: { &quot;content&quot;: &quot;A note from your pals at Notion&quot; } }]
&gt;  }

> [!danger]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Page properties within a database

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> The children parameter is a list of block objects which describe the page content

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> object&quot;: &quot;block&quot;,
&gt;    &quot;type&quot;: &quot;paragraph&quot;,
&gt;    &quot;paragraph&quot;: {
&gt;      &quot;rich_text&quot;: [{

> [!danger]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Using all three of the parameters, we create a page by sending a request to the endpoint.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> const { Client } = require(&#39;@notionhq/client&#39;);
&gt;
&gt;const notion = new Client({ auth: process.env.NOTION_API_KEY });
&gt;
&gt;(async () =&gt; {
&gt;  const response = await notion.pages.create({
&gt;    parent: {
&gt;      page_id: &#39;494c87d072c44cf6960f55f8427f7692&#39;,
&gt;    },
&gt;    properties: {
&gt;      title: {
&gt;        type: &#39;title&#39;,
&gt;        title: [
&gt;          {
&gt;            type: &#39;text&#39;,
&gt;            text: {
&gt;              content: &#39;A note from your pals at Notion&#39;,
&gt;            },
&gt;          },
&gt;        ],
&gt;      },
&gt;    },
&gt;    children: [
&gt;      {
&gt;        object: &#39;block&#39;,
&gt;        type: &#39;paragraph&#39;,
&gt;        paragraph: {
&gt;          text: [
&gt;            {
&gt;              type: &#39;text&#39;,
&gt;              text: {
&gt;                content: &#39;You made this page using the Notion API. Pretty cool, huh? We hope you enjoy building with us.&#39;,
&gt;              },
&gt;            },
&gt;          ],
&gt;        },
&gt;      },
&gt;    ],
&gt;  });
&gt;  console.log(response);
&gt;})();

> [!danger]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> Appending blocks to a page

> [!danger]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> the append block children endpoint

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> This endpoint requires two parameters: block_id and children.

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> The block_id parameter is the ID of any existing block

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> The children parameter is a list of block objects which describe the content we want to append

> [!quote]+ Updated on Wed Mar 20 2024 17:12:43 GMT-0600
>
> -H &#39;Authorization: Bearer &#39;&quot;$NOTION_API_KEY&quot;&#39;&#39; &#92;
&gt;  -H &quot;Content-Type: application/json&quot; &#92;
&gt;  -H &quot;Notion-Version: 2022-06-28&quot; &#92;
&gt;  --data &#39;{
&gt;	&quot;children&quot;: [
&gt;    {
&gt;      &quot;object&quot;: &quot;block&quot;,
&gt;      &quot;type&quot;: &quot;paragraph&quot;,
&gt;      &quot;paragraph&quot;: {
&gt;        &quot;text&quot;: [{ &quot;type&quot;: &quot;text&quot;, &quot;text&quot;: { &quot;content&quot;: &quot;– Notion API Team&quot;, &quot;link&quot;: { &quot;type&quot;: &quot;url&quot;, &quot;url&quot;: &quot;https://twitter.com/NotionAPI&quot; } } }]
&gt;      }
&gt;    }
&gt;  ]
&gt;}&#39;
