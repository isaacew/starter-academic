---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Energy-Efficient Ring Formation Control with Constrained Inputs"
authors: 
- Praveen Kumar Ranjan
- Abhinav Sinha
- Yongcan Cao
- Dzung Tran
- David Casbeer
- Isaac Weintraub
author_notes:
- "Department of Electrical and Computer Engineering, University of Texas at San Antonio"
- "Department of Electrical and Computer Engineering, University of Texas at San Antonio"
- "Department of Electrical and Computer Engineering, University of Texas at San Antonio"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
date: 2023-07-01T12:09:36-05:00
doi: "10.2514/1.G007057"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-12-23T12:09:36-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Journal of Guidance Control and Dynamics"
publication_short: "JGCD"

abstract: "This paper focuses on developing an energy-efficient control algorithm for a type of leader-follower formation, namely, ring formation, where the follower seeks to track a virtual circle, also called a ring, whose center is behind the leader along the leader's heading direction. Enabling this type of ring formation allows the follower to maintain a certain geometric configuration with respect to the leader, but not a rigid structure that is often hard for the follower to maintain in, e.g., turning maneuvers. Meanwhile, the flexibility in a ring formation lies in the fact that the follower can stay on any point on the ring, thus helping save thrust-related energy consumption and addressing inherent physical constraints. Towards this objective, we develop a new controller using the backstepping technique and use nonlinear dynamic programming to address the control input constraints. First, we show that the minimum speed point on the ring can yield the lowest energy consumption. We then provide a specific control design based on backstepping for the follower to track the minimum speed point on the ring. To address the physical input constraints, we propose to use nonlinear dynamic programming to optimize the control inputs subject to control saturation. Finally, we present simulation results to demonstrate the effectiveness of the proposed approach in saving energy and addressing control input constraints."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
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
