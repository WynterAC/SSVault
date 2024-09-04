---
raindrop_id: 757279105
raindrop_highlights:
  65fb6d97592feb0ab8830f31: 0dd127031e47002c32c196bb52b38eb5
  65fb6da47f262b64d4814295: 452c3e43fd062d6a3251840d001707b2
  65fb6dabeb97ba82a108b78b: ce3c0b985a211673ce4214b213a26303
  65fb6db47f4eeb40b2d0223c: faf3c6d700841610cfdf834534815963
  65fb6dbe7f4eeb40b2d023c0: 2cffaa33e37e8f8d3d6f6d39e416dc56
  65fb6dd310a5a0d6caab12c7: cfc0bc4ec0bb69acf39bbee75abec683
  65fb6de0406e05bd7731c1d9: 896005087e4d7931ffed512a0b7d6468
  65fb6dfe406e05bd7731c5d5: d0fbe273253f46baf8d7203a6fe292c0
  65fb6e2e592feb0ab8832320: b10fc62fd5ee3ff21b53953edb6cbc2f
  65fb6e5d10a5a0d6caab23cc: 456d6bd724d82d7fecb612863f74213d
  65fb6e657f262b64d4815c01: d0699be2a6f8a9fc24b400c1c47f3a3c
  65fb6e697f262b64d4815c9e: 2124bf886f67ce7157748b89d3290631

---

# Metadata
Source URL:: https://developers.notion.com/docs/working-with-databases#properties


---
# Working with databases



## Highlights

> [!info]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> Adding pages to a database

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> Pages are added to a database using the Create a page API endpoint

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> The Create a page endpoint has two required parameters: parent and properties.

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> {
&gt;  &quot;type&quot;: &quot;database_id&quot;,
&gt;  &quot;database_id&quot;: &quot;2f26ee68-df30-4251-aad4-8ddc420cba3d&quot;
&gt;}

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> {database_id} in the URL you pasted. It is a 36 character long string

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> properties parameter is an object which uses property names or IDs as keys, and property value objects  as values

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> In order to create this parameter correctly, you refer to the property objects in

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> {
&gt;  &quot;object&quot;: &quot;database&quot;,
&gt;  
&gt;  &quot;id&quot;: &quot;2f26ee68-df30-4251-aad4-8ddc420cba3d&quot;,
&gt;  &quot;created_time&quot;: &quot;2020-03-17T19:10:04.968Z&quot;,
&gt;  &quot;last_edited_time&quot;: &quot;2020-03-17T21:49:37.913Z&quot;,
&gt;  &quot;title&quot;: [/* details omitted */],
&gt;  &quot;description&quot;: [/* details omitted */],
&gt;  
&gt;  &quot;properties&quot;: {/* a collection of property objects */},
&gt;  &quot;archived&quot;: false,
&gt;  &quot;is_inline&quot;: false,
&gt;  &quot;public_url&quot;: null
&gt;}

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> The value of type corresponds to another key in the property object.

> [!quote]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> &quot;type&quot;: &quot;title&quot;,

> [!info]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> Price

> [!info]+ Updated on Wed Mar 20 2024 17:16:57 GMT-0600
>
> Last ordered
