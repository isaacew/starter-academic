---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: pages

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 100

title: Recent Posts
subtitle:

content:
  # Page type to display. E.g. post, talk, publication...
  page_type: post
  # Choose how many pages you would like to display (0 = all pages)
  count: 5
  # Filter on criteria
  filters:
    author: ""
    category: ""
    tag: ""
    exclude_featured: false
    exclude_future: false
    exclude_past: false
    publication_type: ""
  # Choose how many pages you would like to offset by
  offset: 0
  # Page order: descending (desc) or ascending (asc) date.
  order: desc

design:
  # Choose a view for the listings:
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   4 = Citation (publication only)
  view: 2
---
# Conference Schedule

```mermaid
gantt
dateFormat  YYYY-MM-DD
axisFormat  %b %Y
title       Conferences
%% American Control Conference 2022
section ACC
Paper Submission :a1, 2021-10-12, 0d
Decision         :a2, 2022-01-31, 0d
Final Submission :a3, 2022-03-14, 0d
ACC              :a4, 2022-06-08, 3d

section IEEE CCTA
Paper Submission    :b1, 2022-02-08, 0d
Decision            :b2, 2022-04-22, 0d
Registration Opens  :b3, 2022-05-15, 0d
Final Submission    :b4, 2022-06-10, 0d
IEEE CCTA           :b5, 2022-08-23, 3d

section IEEE CDC
Paper Submission    :c1, 2022-03-21, 0d
Decision            :c2, 2022-07-15, 0d
Registration Opens  :c3, 2022-08-01, 0d
Final Submission    :c4, 2022-09-21, 0d 
IEEE CDC            :c5, 2022-12-06, 3d
```