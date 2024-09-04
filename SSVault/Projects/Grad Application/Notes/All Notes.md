---
date_created: 2024-02-06
date_modified: 2024-02-18
description: List of project notes.
document_type: notes
project: Grad Application
tags: grad-application notes
---
[[Projects/Grad Application/Home|Home]] | [[Projects/Grad Application/Meetings/All Meetings|Meetings]] | **[[Projects/Grad Application/Notes/All Notes|Notes]]** | [[Projects/Grad Application/References|References]]
# Notes
**Create new note**
```button
name + Add note
type note(Projects/Grad Application/Notes/untitled note) template
action project/Project note
templater true
class tailwind-button-white
```
**Flat view**
```dataviewjs
for (let group of dv.pages('"Projects/Grad Application/Notes" and !#dashboard and !#notes').groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```


**Hierarchical view**
```dataviewjs
for (let group of dv.pages('"Projects/Grad Application/Notes" and !#dashboard and !#notes').groupBy(p => p.file.folder)) {
  let headerLevel = group.key.split("/").length;
  dv.header(headerLevel, `${group.key.replace(group.key.split("/")[0], "").slice(1).replaceAll("/", " / ")}`);  
  dv.table(["Name", "Description", "Date created"],
  group.rows.map(k => [k.file.link, k['description'], k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day]))
}
```

---
[[Projects/Grad Application/Home|Home]] | [[Projects/Grad Application/Meetings/All Meetings|Meetings]] | **[[Projects/Grad Application/Notes/All Notes|Notes]]** | [[Projects/Grad Application/References|References]]