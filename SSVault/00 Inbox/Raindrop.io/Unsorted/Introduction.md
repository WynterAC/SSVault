---
raindrop_id: 757886617
raindrop_highlights:
  65fcc1daacec476092ea4edd: f772758c3399c7b8e68a86f85956a2fa
  65fcc1e2658dd18332b012ca: fb6201c98cc2eeb1ddb23d3cc056531d
  65fcc1e953a49cf117107673: 0134e5e76bb11d328e1237ee3e5560d5
  65fcc1eeacec476092ea5144: c2dc8de1b6f7bbe929e24dc30ae06ef8
  65fcc20753a49cf117107a7c: b149f4fbb2513922d6e37a6f9e136ecc
  65fcc20ce04abf3bdb32d4f4: dd69e6550ca3a8e76831bb5dc3e54495
  65fcc2112cb9d0c41e11bce7: 02e3be09a29c2b837f5746a4a3c45cc2
  65fcc217acec476092ea5684: db25479158fa173deb0a196b48407aae
  65fcc222e04abf3bdb32d775: 1d8037167c6914c6221612ab0d45d94b
  65fcc22b2cb9d0c41e11c004: 42f51a57444481dfd1509cd7aa8e16b6
  65fcc234975c9f1fd2e0d2c2: 2e594da320159d31025201091f87d745
  65fcc23eacec476092ea5b46: 45fa20d54f2a7505bb5158d816b832f7
  65fcc24d53a49cf1171082fe: e0ecf605655843ab8feaf3f81aef24a8
  65fcc25e975c9f1fd2e0d71d: 1952bbc0f73b19fc94e8eb009b94900f
  65fcc26fe04abf3bdb32e134: 33d2b6d831981b75d2c138cacb927a41
  65fcc2913a392543a802da0c: 91667a05419fa05db661a81ef5370fcc
  65fcc2a91529b450aaca3a0c: 847ca9b2c153fd8d22efdf9309aba476
  65fcc2ad2cb9d0c41e11d118: 4bfe47506371699da2b69bdd0db8df2c
  65fcc2b03a392543a802deab: 43137b5b8ae06aa84bc29d0044c76baf
  65fcc2b3f1c8966413172365: d43fcc74b4488935f57ebf6efe724565
  65fcc2b63a392543a802dfa9: a9ca2314aecd44fa082e80f13a20d620
  65fcc2b9e04abf3bdb32eb8a: 3e78e1fa8c88bbe061a0b4d7beb82d8a
  65fcc2bcf1c89664131724f3: d5b683f96bb1de39a24bb4ae085808ce
  65fcc2c1658dd18332b02eff: 08e3da4770b5739064445ac57f4aaf57
  65fcc2ca53a49cf1171093eb: dc58ebacd6cff708e4f2188dd551657e
  65fcc2d0f1c8966413172727: 0449323e8e105243aac8ad7cf146e717
  65fcc2d4f1c89664131727c7: 44b291d70ca609d410e8d6773d18c873
  65fcc2dd658dd18332b032e1: 3936bea278cbd7a4987832bf97fc89fe
  65fcc2e52cb9d0c41e11d8cf: 5c480ae882d54a8cba0270f936269141
  65fcc2eec0fe4f7b16232739: 961ba59a3b9890613dad08ba666936b9
  65fcc2f8acec476092ea7309: 976f4d2380dee41d045e0597fe0aeef5
  65fcc30ac0fe4f7b16232adc: bd696f33c9ce3828410572535e5d22ff
  65fcc30f975c9f1fd2e0ef0a: 8a504481a403bea187b2859fc2894d4a
  65fcc31cf1c8966413173110: 5b1f20b3b834fa0da72a586c6d338662
  65fcc32b1529b450aaca4bfe: 95138e060d96d8a998db7d91f2174db8
  65fcc331658dd18332b03e05: 3517c104ca980f54e16e7affad7347f9

---

# Metadata
Source URL:: https://developers.notion.com/reference/intro#json-conventions


---
# Introduction

The reference is your key to a comprehensive understanding of the Notion API.Integrations use the API to access Notion&#39;s pages, databases, and users. Integrations can connect services to Notion and build interactive experiences for users within Notion. Using the navigation on the left, you&#39;ll find d...

## Highlights

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Top-level resources have an &quot;object&quot; property. This property can be used to determine the type of the resource (e.g.&quot;database&quot;, &quot;user&quot;, etc

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Top-level resources are addressable by a UUIDv4 &quot;id&quot; property. You may omit dashes from the ID when making requests to the API, e.g. when copying the ID from a Notion URL

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Property names are in snake_case (not camelCase or kebab-case).

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Temporal values (dates and datetimes) are encoded in ISO 8601 strings

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Datetimes will include the time value (2020-08-12T02:12:33.231Z)

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> while dates will include only the date (2020-08-12)

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> The Notion API does not support empty strings

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> To unset a string value for properties like a url Property value object, for example, use an explicit null instead of &quot;&quot;.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Samples requests and responses are shown for each endpoint. Requests are shown using the Notion JavaScript SDK, and cURL. These samples make it easy to copy, paste, and modify as you build your integration.

> [!danger]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Pagination

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Endpoints that return lists of objects support cursor-based pagination requests

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> By default, Notion returns ten items per API call. If

> [!info]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Supported endpoints

> [!info]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Responses

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> If an endpoint supports pagination, then the response object contains the below fields.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> type&quot;block&quot;&quot;comment&quot;&quot;database&quot;&quot;page&quot;&quot;page_or_database&quot;&quot;property_item&quot;&quot;user&quot;A constant string that represents the type of the objects in results.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> HTTP methodEndpoint

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> GETList all users

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> GETRetrieve block children

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> GETRetrieve a comment

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> GETRetrieve a page property item

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> POSTQuery a database

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> POSTSearch

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> FieldTypeDescription

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> has_morebooleanWhether the response includes the end of the list. false if there are no more results. Otherwise, true.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> next_cursorstringA string that can be used to retrieve the next page of results by passing the value as the start_cursor parameter to the same endpoint.
&gt;Only available when has_more is true

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> object&quot;list&quot;The constant string &quot;list&quot;.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> resultsarray of objectsThe list, or partial list, of endpoint-specific results. Refer to a supported endpoint&#39;s individual documentation for details.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> type}paginated list objectAn object containing type-specific pagination information. For property_items, the value corresponds to the paginated page property type. For all other types, the value is an empty object.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> 🚧Parameter location varies by endpointGET requests accept parameters in the query string. POST requests receive parameters in the request body.

> [!danger]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Parameters for paginated requests

> [!info]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> ParameterTypeDescription

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> page_sizenumberThe number of items from the full list to include in the response.Default: 100Maximum: 100
&gt;The response may contain fewer than the default number of results.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> start_cursorstringA next_cursor value returned in a previous response. Treat this as an opaque value.
&gt;Defaults to undefined, which returns results from the beginning of the list.

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> Example: request the next set of query results from a database

> [!quote]+ Updated on Thu Mar 21 2024 17:30:57 GMT-0600
>
> curl --location --request POST &#39;https://api.notion.com/v1/databases/&lt;database_id&gt;/query&#39; &#92;
&gt;--header &#39;Authorization: Bearer &lt;secret_bot&gt;&#39; &#92;
&gt;--header &#39;Content-Type: application/json&#39; &#92;
&gt;--data &#39;{
&gt;    &quot;start_cursor&quot;: &quot;33e19cb9-751f-4993-b74d-234d67d0d534&quot;
&gt;}&#39;
