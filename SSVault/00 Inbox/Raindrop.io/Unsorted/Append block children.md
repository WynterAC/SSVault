---
raindrop_id: 757890246
raindrop_highlights:
  65fcc65d3a392543a8034cdd: 4bdec02648f7e765fa7e0cacd0215f16
  65fcc669658dd18332b09cfd: ec1818d7b0b43fb05fe1cc576ccbc51e
  65fcc679acec476092eadae7: 79c2226a29bd8653c728e196b3dd5e34
  65fcc6902cb9d0c41e1248c3: a811863a34c00cc82d49fbaa4fa40118
  65fcc695975c9f1fd2e15a48: decac30bdeea85f1d64a3b2729a913f4
  65fcc6982cb9d0c41e1249d9: 172c60c6d9b71a88597b497c52fbadcd
  65fcc69c658dd18332b0a3ae: ee3c26ce39e16fa72bd4bd6740e36a60
  65fcc6cdacec476092eae49e: 7f90543dc7024257acdadaaec494710e
  65fcc6d12cb9d0c41e12507f: a8e061586e03a9790bf8f69bfe6ba70d

---

# Metadata
Source URL:: https://developers.notion.com/reference/patch-block-children


---
# Append block children



## Highlights

> [!danger]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> Append block children

> [!quote]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> Creates and appends new children blocks to the parent block_id specified. Blocks can be parented by other blocks, pages, or databases.
&gt;Returns a paginated list of newly created first level children block objects.

> [!quote]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> To append a block in a specific place other than the bottom of the parent block, use the &quot;after&quot; parameter and set its value to the ID of the block that the new block should be appended after

> [!info]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> Path Params

> [!quote]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> block_idstringrequiredIdentifier for a block. Also accepts a page ID

> [!info]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> Body Params

> [!quote]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> childrenarrayrequiredChild content to append to a container block as an array of block objects

> [!quote]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> HeadersNotion-VersionstringrequiredResponses

> [!quote]+ Updated on Thu Mar 21 2024 17:46:25 GMT-0600
>
> afterstringThe ID of the existing block that the new block should be appended after.
