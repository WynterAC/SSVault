---
Annotation-target: 
date_created: 2023-12-15
date_modified: 2023-12-15
document_type: references
include_in_navbar: 
tags:
  - sub-dashboard
  - resources
  - references
  - raindrop
Course: 
aliases:
  - Raindrop.io Index
type: 
navbar_name: Raindrop.io
is_active: true
description: Synced Raindrop.io Highlights
---
<%*
	let tableType = await tp.system.suggester(["Include current file in query", "Exclude current file in query"], ["Include current file in query", "Exclude current file in query"])

	let queryString = '';

	if(tableType == 'Include current file in query'){
		queryString = '`"${dv.current().file.folder}"`'
	} else {
		queryString = '`"${dv.current().file.folder}" and !"${dv.current().file.path}"`'
	}
_%>

```dataviewjs
for(let group of dv.pages(<% `${queryString}` %>).groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length
  dv.header(headerLevel, `${group.key}`);
  dv.table(["Name", "Description", "Date Modified"],
  group.rows.map(k => [k.file.link, k.file.frontmatter['description'], k.file.mtime]))
}
```

<% tp.file.cursor(1) %>