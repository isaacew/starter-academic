---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Trajectory Optimization For Rendezvous Planning Using Quadratic Bézier Curves"
authors:
- Satyanarayana G. Manyam
- David  W. Casbeer
- Isaac E. Weintraub
- Colin Taylor
author_notes:
- "Infoscitex Corporation, a DCS Company, Dayton, OH, USA"
- "Controls Center of Excellence, Air Force Research Laboratory, WPAFB, OH, USA"
- "Controls Center of Excellence, Air Force Research Laboratory, WPAFB, OH, USA"
- "Parallax Advanced Research, Dayton, OH, USA"
date: 2021-09-27T21:04:28-05:00
doi: "10.1109/IROS51168.2021.9636535"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-09-27T21:04:28-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"
publication_short: "IROS"

abstract: "In this paper, we consider a trajectory planning problem where an autonomous vehicle aims to rendezvous with another cooperating vehicle in minimum time. The first vehicle has kinematic constraints, consequently feasible trajectories must have a maximum curvature less than a specified limit. Rendezvous is said to occur at the instant that the two vehicles are collocated with the same heading. We propose a technique to construct a trajectory, composed of piecewise quadratic Bézier curves, that satisfies the vehicle motion constraints and achieves rendezvous in minimum time. The methodology begins by finding safe flight corridors, which are constructed from sequences of triangles using constrained Delaunay triangulation of the feasible space; the triangles define the bounds of Bézier curves. We formulate the necessary constraints for continuity and feasibility as functions of the control points that define the Bézier curves, and the resulting optimization problem is solved using a nonlinear programming solver. The techniques developed were tested using simulated scenarios, and we present the results which highlight the efficacy of the proposed solution approach. Furthermore, the algorithm was implemented and tested in a field test and those results are presented."

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
