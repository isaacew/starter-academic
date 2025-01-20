---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "A Leader-Follower Control Strategy Built and Refined using Relational Maneuver Primitives for Approximating Optimal Trajectories in Real-Time"
authors:
- Carl Gotwald
- Michael D. Zollars
- Jonah A. Reeger
- Isaac E. Weintraub
author_notes:
- "Department of Aerospace Engineering, Air Force Institute of Technology"
- "Department of Aerospace Engineering, Air Force Institute of Technology"
- "Department of Mathematics & Statistics, Air Force Institute of Technology"
- "Control Science Center, Air Force Research Laboratory"
date: 2024-03-22T09:56:44-04:00
doi: "10.2514/6.2024-2760"

# Schedule page publish date (NOT publication's date).
publishDate: 2024-03-22T09:56:44-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "AIAA SciTech"
publication_short: ""

abstract: "The work herein presents a new approach to aircraft control within a leader-follower formation, and the refinement process used in its development. During autonomous flight, a follower aircraft is tasked to rejoin and maintain a designated formation position, which is defined dynamically in reference to a maneuvering leader aircraft. Simple control algorithms, named Relational Maneuver Primitives, are intelligently combined into a control strategy such that the autonomous follower aircraft’s response approximates the optimal trajectory. This research specifically addresses the control strategy refinement process where a genetic algorithm is implemented to determine the appropriate selection of Relational Maneuver Primitives based on the Time-To-Go between the follower aircraft and the desired goal position. The control strategy takes the form of a lookup table database based on the current state of the follower aircraft which provides the autopilot with the appropriate Relational Maneuver Primitive to use over the next time step. Two test cases are presented which demonstrate a 36% and 48% reduction in error between the follower response trajectory and the follower optimal trajectory when compared to using a single Relational Maneuver Primitive."

# Summary. An optional shortened abstract.
summary: ""

tags: 
- dynamic flight maneuvers
- dynamic flight control
- aircraft control
- genetic algorithms
- formation flight
- relational maneuvering
- relational maneuvering primatives
- approximate optimal control
categories: 
- cooperarive control
- dynamic flight control
- dynamic flight maneuvers
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
