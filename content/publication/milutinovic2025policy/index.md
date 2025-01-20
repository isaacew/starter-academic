---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Policy for Optimal Avoidance of Multiple Engagement Zones"
authors:
- Dejan Milutinović
- Alexander L. Von Moll
- Isaac E. Weintraub
- David Casbeer
author_notes:
- "Department of Electrical and Computer Engineering, University of California Santa Cruz"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
date: 2025-01-20T13:37:59-05:00
doi: "10.2514/6.2025-1544"

# Schedule page publish date (NOT publication's date).
publishDate: 2025-01-20T13:37:59-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "This work formulates the feedback control strategies for vehicles to reach a goal point amongst a field of dynamic risk regions. Whereas previous work has considered deterministic versions of this problem, we consider the scenario in the context of uncertainty. This uncertainty could be due to unknown wind or other external disturbances. The risk regions’ dynamics are tightly coupled to the state of the vehicle and as a result the task of navigating through a field dynamically changes as the vehicle traverses through it. Rather than using a nonlinear program solver, the approach taken here is one of formulating the problem as a stochastic optimal control problem wherein a feedback control law is derived. This feedback control law allows a single or multiple vehicles to reach the desired goal location efficiently and with minimal risk incursion. When inside a risk region, there is a probability rate of the vehicle being neutralized. The stochastic dynamical system is modeled as a hybrid system, i.e., regime switching diffusion. The hybrid system is comprised of continuous spatial dynamics and discrete operational states corresponding to “normal” and “neutralized”. The optimal control problem is discretized into a field of vehicle states and control. Using Value Iteration, the control signal at each discrete location is optimized, providing a feedback control strategy over the field. Following a discussion of the methods and approaches, this problem is formulated, simulations are performed, and conclusions and remarks are made."

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

url_pdf: https://arc.aiaa.org/doi/10.2514/6.2025-1544
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
