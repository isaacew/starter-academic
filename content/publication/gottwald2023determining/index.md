---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Determining Follower Aircraft's Optimal Trajectory in Relation to a Dynamic Formation Ring"
authors:
- Carl A. Gotwald
- Michael D. Zollars
- Isaac E. Weintraub
- author_notes:
- "Department of Aeronautics and Astronautics, Air Force Institute of Technology"
- "Department of Aeronautics and Astronautics, Air Force Institute of Technology"
- "Control Science Center, Air Force Research Laboratory"
date: 2022-10-05T07:51:47-04:00
doi: "10.48550/arXiv.2210.01665"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-10-05T07:51:47-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "ArXiv"
publication_short: ""

abstract: "The specific objective of this paper is to develop a tool that calculates the optimal trajectory of the follower aircraft as it completes a formation rejoin, and then maintains the formation position, defined as a ring of points, until a fixed final time. The tool is designed to produce optimal trajectories for a variety of initial conditions and leader trajectories. Triple integrator dynamics are used to model the follower aircraft in three dimensions. Control is applied directly to the rate of acceleration. Both the follower's and leader's velocities and accelerations are bounded, as dictated by the aircraft's performance envelope. Lastly, a path constraint is used to ensure the follower avoids the leader's jet wash region. This optimal control problem is solved through numerical analysis using the direct orthogonal collocation solver GPOPS-II. Two leader trajectories are investigated, including a descending spiral and continuous vertical loops. Additionally, a study of the effect of various initial guesses is performed. All trajectories displayed a direct capture of the formation position, however changes in solver initial conditions demonstrate various behaviors in how the follower maintains the formation position. The developed tool has proven adequate to support future research in crafting real-time controllers capable of determining near-optimal trajectories."

# Summary. An optional shortened abstract.
summary: ""

tags:
- cooperative control
- vehicle control
- aircraft control
- ring formation
categories:
- cooperative control
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/pdf/2210.01665.pdf
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:
url_preprint: https://arxiv.org/abs/2210.01665

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
