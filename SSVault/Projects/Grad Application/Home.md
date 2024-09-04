---
date_created: 2024-02-06
date_modified: 2024-02-18
document_type: project-dashboard
is_active: true
project: Grad Application
tags: dashboard project grad-application
---
**[[Projects/Grad Application/Home|Home]]** | [[Projects/Grad Application/Meetings/All Meetings|Meetings]] | [[Projects/Grad Application/Notes/All Notes|Notes]] | [[Projects/Grad Application/References|References]]
# Grad Application
**Description**:: Application to Grad Program
**Link**: *add link (if relevant)*


## Tasks
*[[Projects/Grad Application/Tasks|+ Add a task]]*
```dataviewjs 
dv.taskList(dv.pages('"Projects/Grad Application"').file.tasks .where(t => !t.completed))
```

## Meetings
```button
name + Add meeting
type note(Projects/Grad Application/Meetings/untitled meeting) template
action project/Project meeting
templater true
class tailwind-button-white
```
```dataviewjs
for(let group of dv.pages('"Projects/Grad Application/Meetings" and !#meetings').limit(10).groupBy(p => p.meeting)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```
*Only showing the last 10 meetings*
*[[Projects/Grad Application/Meetings/All Meetings|View all meetings →]]*

## Notes
```button
name + Add note
type note(Projects/Grad Application/Notes/untitled note) template
action project/Project note
templater true
class tailwind-button-white
```
```dataviewjs
for(let group of dv.pages('"Projects/Grad Application/Notes" and !#dashboard and !#notes').limit(10).groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```
*Only showing the last 10 notes*
*[[Projects/Grad Application/Notes/All Notes|View all notes →]]*

---
**[[Projects/Grad Application/Home|Home]]** | [[Projects/Grad Application/Meetings/All Meetings|Meetings]] | [[Projects/Grad Application/Notes/All Notes|Notes]] | [[Projects/Grad Application/References|References]]