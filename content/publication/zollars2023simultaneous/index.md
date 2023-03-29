---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Optimal Trajectories for Multiple-UAS Simultaneous Target Acquisition with Obstacle Avoidance"
authors:
- Michael D. Zollars
- David J. Grymin
- Isaac E. Weintraub
date: 2023-03-29T16:30:29-04:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2023-03-29T16:30:29-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["0"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "This work develops feasible path trajectories for a coordinated strike with multiple aircraft in a constrained environment.  Using direct orthogonal collocation methods, the two-point boundary value optimal control problem is transcribed into a nonlinear programming problem.  A coordinate transformation is performed on the state variables to leverage the benefits of a simplex discretization of the search domain.  Applying these techniques allows each path constraint to be removed from the feasible search space, eliminating computationally expensive, nonlinear constraint equations and problem specific parameters from the optimal control formulation.  Heuristic search techniques are used to determine a Dubins path solution through the space to seed the optimal control solver.  In the scenario, three aircraft are initiated in separate directions and are required to avoid all constrained regions while simultaneously arriving at the target location, each with a different viewing angle.  A focus of this work is to reduce computation times for optimal control solvers such that real-time solutions can be implemented onboard small unmanned aircraft systems.  Analysis of the problem examines optimal flight paths through simplex corridors, velocity and heading vectors, control vectors of acceleration and heading rate, and objective times for minimum time flight.
"

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
