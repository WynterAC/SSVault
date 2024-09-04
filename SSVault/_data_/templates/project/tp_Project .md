---
document_type: dashboard
type:
  - Project
  - Dashboard
cssclasses: 
tags:
  - projects
  - dashboard
title: <% tp.file.title %>
dueDate: 
date_created: 
date_modified: 
aliases: 
linter-yaml-title-alias: 
is_active: 
ptype: 
status:
---

# {{tp_title}}

## Overview

## Goals

What goal(s) does this project work towards (if any?

## Tasks

```dataview
table dueDate, completed
from "tasks"
where project = "{{tp_title}}"
sort dueDate asc
```