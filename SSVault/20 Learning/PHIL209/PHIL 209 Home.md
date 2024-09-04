---
date_created: 2023-12-13
date_modified: 2023-12-13
document_type: course
tags:
  - sub-dashboard
  - course
fields:
  - id: oxHFGR
    name: Completed
    options: []
    type: Input
    path: ""
version: "2.0"
---
[[Learning/PHIL 209/Home|Home]] / **[[PHIL 209 Home|PHIL209]]**
# PHIL209
**Overview**
Title:: PHIL209
Subject:: PHILOSOPHY
Description:: THE HUMAN PERSON
Completed:: false
Link:: 

***
```button
name + Add syllabus
type note(Learning/PHIL209/course syllabus) template
action learning/Course syllabus
templater true
class tailwind-button-white
```
## Actions
```button
name + Add lecture
type note(Learning/PHIL209/Lectures/unnamed lecture) template
action learning/Course lecture
templater true
class tailwind-button-white
```

```button
name + Add assignment
type note(Learning/PHIL209/Assignments/unnamed assignment) template
action learning/Course assignment
templater true
class tailwind-button-white
```

```button
name + Add note
type note(Learning/PHIL209/Notes/unnamed note) template
action learning/Course note
templater true
class tailwind-button-white
```


## Lectures
```dataviewjs
for (let group of dv.pages('"Learning/PHIL209" and #lecture').groupBy(p => p.lecture)) {
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
for (let group of dv.pages('"Learning/PHIL209" and #assignment').groupBy(p => p.lecture)) {
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
for (let group of dv.pages('"Learning/PHIL209" and #course-note').groupBy(p => p.lecture)) {
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
[[Learning/PHIL 209/Home|Home]] / **[[PHIL 209 Home|PHIL209]]**