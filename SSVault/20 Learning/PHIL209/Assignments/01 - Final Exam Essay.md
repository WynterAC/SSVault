---
date_created: 2023-12-13
date_modified: 2023-12-13
document_type: assignment
tags:
  - course
  - assignment
  - task
  - sub-dashboard
category: Philosophy
aliases:
  - Exam Essay
include_in_navbar: true
fields:
  - id: e6Tffm
    name: Completed
    options: []
    type: Input
    path: ""
version: "2.0"
---
[[Learning/PHIL 209/Home|Home]] / [[../PHIL 209 Home|PHIL209]] / **[[01 - Final Exam Essay|01 - Final Exam Essay]]**
# 01 - Final Exam Essay
**Overview**
Completed:: false
Description:: 

## Assignment
```dataviewjs
for(let group of dv.pages(`"${dv.current().file.folder}"`).groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
```


[[Final Exam Essay/Final Exam Essay Prompt]]

```dataviewjs
for (let group of dv.pages('"01 - Final Exam Essay" and #final and !#cours-notes').groupBy(p => p.projects)) {
    let filteredRows = group.rows.filter(k => k['is_active'] === true);
    if (filteredRows.length > 0) {
        dv.table(["Project", "Description"], 
            filteredRows
                .sort(k => k.file.ctime, 'desc')
                .map(k => [
                "[[" + k.file.path + "|"+ k.file.folder.split('/')[k.file.folder.split('/').length-1] +"]]", 
                k['description']
                ]));
    } else {
        dv.paragraph("*No active projects*");
    }
}
```
---
[[Learning/PHIL 209/Home|Home]] / [[../PHIL 209 Home|PHIL209]] / **[[01 - Final Exam Essay|01 - Final Exam Essay]]**

