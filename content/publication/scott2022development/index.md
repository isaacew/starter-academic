---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Development of Linear Battery Model for Path Planning with Mixed Integer Linear Programming: Simulated and Experimental Validation"
authors: 
- Drew Scott
- Satyanarayana G Manyam
- David W Casbeer
- Manish Kumar
- Isaac E Weintraub
- Michael J Rothenberger

date: 2022-11-17T07:37:05-05:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-11-17T07:37:05-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "ArXiv"
publication_short: ""

abstract: "Mixed Integer Linear Programs (MILPs) are often used in the path planning of both ground and aerial vehicles. Such a formulation of the path planning problem requires a linear objective function and constraints, limiting the fidelity of the the tracking of vehicle states. One such parameter is the state of charge of the battery used to power the vehicle. Accurate battery state estimation requires nonlinear differential equations to be solved. This state estimation is important in path planning to ensure flyable paths, however when using MILPs to formulate the path planning problem these nonlinear equations cannot be implemented. Poor accuracy in battery estimation during the path planning runs the risk of the planned path being feasible by the estimation model but in reality will deplete the battery to a critical level. To the end of higher accuracy battery estimation within a MILP, we present here a simple linear battery model which predicts the change in state-of-charge (SOC) of a battery given a power draw and duration. This model accounts for changes in battery voltage due to applied electrical load and changes in battery SOC. The battery model is presented and then tested against alternate battery models in numerical and in experimental tests. Further, the effect the proposed linear model has over a simpler SOC estimation on the time-to-solve a resource constrained shortest path problem is also evaluated, implemented in two different algorithms. It is seen that the linear model performs well in battery state estimation while remaining implementable in a Linear Program or MILP, with little affect on the time-to-solve."

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

url_pdf: https://arxiv.org/pdf/2211.09899.pdf
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:
url_preprint: https://arxiv.org/abs/2211.09899

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
