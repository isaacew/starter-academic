---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Power Management for Noise Aware Path Planning of Hybrid UAVs"
authors:
- Drew Scott
- Satyanarayana Gupta Manyam
- David W. Casbeer
- Manish Kumar
- Michael Rothenberger
- Isaac Weintraub
author_notes:
- "Department of Mechanical and Materials Engineering, University of Cincinnati"
- "Research Scientist, Infoscitex Corp., a DCS Company, Dayton, OH"
- "Technical Area Lead, Cooperative & Intelligent Control, Control Science Center, Air Force Research Laboratory, WPAFB, OH"
- "Professor in Department of Mechanical and Materials Engineering, University of Cincinnati"
- "Mechanical Engineer, Flight Systems Integration Branch, Air Force Research Laboratory, WPAFB, OH"
- "Electronics Engineer, Control Science Center, Air Force Research Laboratory, WPAFB, OH"
date: 2022-06-08T08:00:00-05:00
doi: "10.23919/ACC53348.2022.9867385"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-01-31T08:08:00-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "American Control Conference"
publication_short: "ACC"

abstract: "Here we consider the problem of path planning for a hybrid fuel Unmanned Aerial Vehicle (UAV), equipped with both a battery and gasoline generator as two sources of energy. Routing the vehicle while considering this setup adds fuel constraints in addition to requiring the power source state to be specified along each edge along the path. We further add noise restrictions to the problem where certain edges (corresponding to certain portions of the path) have the restriction that the gasoline generator cannot be run. A solution to this path planning problem entails both a sequence of nodes, being the plain path the vehicle travels, and a sequence of values specifying the power source along each edge in the path. There is no work in the current literature regarding such a problem, with little at all concerning general planning or routing for hybrid fuel UAVs. Here, hybrid fuel UAV routing problem with noise restrictions is presented. The problem is first formulated as an Mixed Integer Linear Program. Then a dynamic programming algorithm is presented to solve the problem exactly. This algorithm is then compared to a branch-and-cut based method in terms of computational times for a variety of problem sizes. A case study is presented, using a graph which location data from an area surrounding an airport to produce goal nodes and noise restrictions to display the problem itself as well as the performance of the dynamic programming algorithm in a realistic scenario for this problem."

# Summary. An optional shortened abstract.
summary: ""

tags:
- resource management
- hybrid aircraft
- cooperative control
- 2-D
categories:
- hybrid aircraft
- cooperative control
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
