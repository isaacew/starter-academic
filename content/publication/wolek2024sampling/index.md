---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Sampling-Based Risk-Aware Path Planning Around Dynamic Engagement Zones"
authors:
- Artur Wolek
- Isaac E. Weintraub
- Alexander Von Moll
- David Casbeer
- Satyanarayana G. Manyam
author_notes:
- "Department of Mechanical Engineering and Engineering Science, University of North Carolina, Charlotte"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "DCS Corporation"
date: 2024-03-22T09:59:08-04:00
doi: "10.48550/arXiv.2403.05480"

# Schedule page publish date (NOT publication's date).
publishDate: 2024-03-22T09:59:08-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "ArXiv"
publication_short: ""

abstract: "Existing methods for avoiding dynamic engagement zones (EZs) and minimizing risk leverage the calculus of variations to obtain optimal paths. While such methods are deterministic, they scale poorly as the number of engagement zones increases. Furthermore, optimal-control based strategies are sensitive to initial guesses and often converge to local, rather than global, minima. This paper presents a novel sampling-based approach to obtain a feasible flight plan for a Dubins vehicle to reach a desired location in a bounded operating region in the presence of a large number of engagement zones. The dynamic EZs are coupled to the vehicle dynamics through its heading angle. Thus, the dynamic two-dimensional obstacles in the (x,y) plane can be transformed into three-dimensional static obstacles in a lifted (x,y,ψ) space. This insight is leveraged in the formulation of a Rapidly-exploring Random Tree (RRT*) algorithm. The algorithm is evaluated with a Monte Carlo experiment that randomizes EZ locations to characterize the success rate and average path length as a function of the number of EZs and as the computation time made available to the planner is increased."

# Summary. An optional shortened abstract.
summary: ""

tags: 
- path planning
- sampling method
- RRT
- Dubins vehicle
categories:
- beyond visual range tactics
- cooperative control
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/pdf/2403.05480.pdf
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
