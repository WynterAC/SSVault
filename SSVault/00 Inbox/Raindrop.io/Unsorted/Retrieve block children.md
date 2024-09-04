---
raindrop_id: 757888365
raindrop_highlights:
  65fcc3cfc0fe4f7b1623435b: 57bf54df15549bc1f973b79fb70bd658
  65fcc3f9c0fe4f7b16234803: e8c2d871c3ff0ed42d59484bb78f5358
  65fcc3fe3a392543a8030965: 40f38dcd1e43643808d916739952e8bc
  65fcc4043a392543a80309fc: 5a45da53e904cd2faca612076059d0dc
  65fcc4123a392543a8030bec: 46ca07a70d5249eef4908a9bf855467a
  65fcc432acec476092ea99d7: 0189d069e8ccf8e9c53915806d6194f3

---

# Metadata
Source URL:: https://developers.notion.com/reference/get-block-children


---
# Retrieve block children



## Highlights

> [!info]+ Updated on Thu Mar 21 2024 17:35:14 GMT-0600
>
> Retrieve block children

> [!quote]+ Updated on Thu Mar 21 2024 17:35:14 GMT-0600
>
> Path Paramsblock_idstringrequiredIdentifier for a block

> [!quote]+ Updated on Thu Mar 21 2024 17:35:14 GMT-0600
>
> Query Paramsstart_cursorstringIf supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.page_sizeint32The number of items from the full list desired in the response. Maximum: 100

> [!quote]+ Updated on Thu Mar 21 2024 17:35:14 GMT-0600
>
> HeadersNotion-Versionstringrequired

> [!quote]+ Updated on Thu Mar 21 2024 17:35:14 GMT-0600
>
> curl &#39;https://api.notion.com/v1/blocks/b55c9c91-384d-452b-81db-d1ef79372b75/children?page_size=100&#39; &#92;2  -H &#39;Authorization: Bearer &#39;&quot;$NOTION_API_KEY&quot;&#39;&#39; &#92;3  -H &quot;Notion-Version: 2022-06-28&quot;

> [!quote]+ Updated on Thu Mar 21 2024 17:35:14 GMT-0600
>
> RESPONSE
