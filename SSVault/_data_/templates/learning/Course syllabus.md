<%*
	let title = await tp.system.prompt("Course Name");
	title = title.trim();
	await tp.file.rename(title);
	
	let filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
	let pathArray = fileObject.path.replaceAll(`/${fileObject.name}`, "").split('/');
	home = `${pathArray[0]}/${pathArray[1]}`;
_%>
<% "---" %>
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: course-syllabus
tags: course course-syllabus
<% "---" %>
[[Learning/PHIL 209/Home|Home]] / <% `[[${home}/Home|${pathArray[1]}]]` %> / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
# <% `${title}` %> Syllabus
**Overview**
Description:: 
Professor::
Time::
Office hours:: 
misc::

## Course Outcome
<% tp.file.cursor(1) %>

## Grading Components

### Grading Scale

### Important Due Dates

## Course Schedule 


---
[[Learning/PHIL 209/Home|Home]] / <% `[[${home}/Home|${pathArray[1]}]]` %> / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**