---
date_created: 2023-12-01
date_modified: 2023-12-01
document_type: course
tags: sub-dashboard course
---
[[Learning/PHIL 209/Home|Home]] / **[[EASIA 240 Home|EASIA 240]]**
# EASIA 240
**Overview**
Title:: EASIA 240
Subject:: EASIA
Description:: Japanese Culture
Completed:: false
Link:: <% tp.file.cursor(1) %>

***
```button
name + Add syllabus
type note(Learning/EASIA 240/course syllabus) template
action learning/Course syllabus
templater true
class tailwind-button-white
```
## Actions
```button
name + Add lecture
type note(Learning/EASIA 240/Lectures/unnamed lecture) template
action learning/Course lecture
templater true
class tailwind-button-white
```

```button
name + Add assignment
type note(Learning/EASIA 240/Assignments/unnamed assignment) template
action learning/Course assignment
templater true
class tailwind-button-white
```

```button
name + Add note
type note(Learning/EASIA 240/Notes/unnamed note) template
action learning/Course note
templater true
class tailwind-button-white
```


## Lectures
```dataviewjs
for (let group of dv.pages('"Learning/EASIA 240" and #lecture').groupBy(p => p.lecture)) {
	dv.table(["Lecture", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))
}
```


## Assignments

```dataviewjs
for (let group of dv.pages('"Learning/EASIA 240" and #assignment').groupBy(p => p.lecture)) {
	dv.table(["Lecture", "Completed", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['completed'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))
}
```


## Notes
```dataviewjs
for (let group of dv.pages('"Learning/EASIA 240" and #course-note').groupBy(p => p.lecture)) {
	dv.table(["Note", "Description"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description']
			]))
}
```


---
[[Learning/PHIL 209/Home|Home]] / **[[EASIA 240 Home|EASIA 240]]**