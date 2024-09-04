---
date_created: 2024-02-06
date_modified: 2024-02-06
document_type: meetings
project: Grad Application
description: List of project meetings.
tags: grad-application meetings
---
[[Projects/Grad Application/Home|Home]] | **[[Projects/Grad Application/Meetings/All Meetings|Meetings]]** | [[../Notes/References|Notes]] | [[Projects/Grad Application/References|References]]
# Meetings
**Create meeting**
```button
name + Add meeting
type note(Projects/Grad Application/Meetings/untitled meeting) template
action project/Project meeting
templater true
class tailwind-button-white
```
```dataviewjs
for (let group of dv.pages('"Projects/Grad Application/Meetings" and !#meetings').groupBy(p => p.meeting)) {
	dv.table(["Name", "Description", "Date created"], 
		group.rows 
			.sort(k => k.file.ctime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			k.file.ctime.year+"-"+k.file.ctime.month+"-"+k.file.ctime.day
			]))}
```

---
[[Projects/Grad Application/Home|Home]] | **[[Projects/Grad Application/Meetings/All Meetings|Meetings]]** | [[../Notes/References|Notes]] | [[Projects/Grad Application/References|References]]