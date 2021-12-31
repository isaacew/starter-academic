---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "On the Synthesis of Optimal Control Laws"
authors:
- Meir Pachter
- Isaac E Weintraub
date: 2021-12-20T08:34:59-05:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-12-20T08:34:59-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "arXiv"
publication_short: ""

abstract: "In this paper we advocate for Isaacs' method for the solution of
differential games to be applied to the solution of optimal control
problems. To make the argument, the vehicle employed is Pontryagin's
canonical optimal control example, which entails a double integrator plant.
However, rather than controlling the state to the origin, we correctly
require the end state to reach a terminal set that contains the origin in
its interior. Indeed, in practice, it is required to control to a
prescribed tolerance rather than reach a desired end state; achieving tight
tolerances is expensive, and from a theoretical point of view, constraining
the end state to a terminal manifold of co-dimension n-1 renders the
optimal control problem well-posed. Thus, the `correct' solution of the
optimal control problem is obtained. In this respect, two target sets are
considered: a smooth circular target and a square target with corners;
obviously, the size of the target sets can be shrunk to become very small.
Closed-loop state-feedback control laws are developed which drive the
double integrator plant from an arbitrary initial state to the target set
in minimum time. This is accomplished using Isaacs' method for the solution
of differential games, which entails Dynamic Programming (DP), working
backward from the Usable Part (UP) of the target set, as opposed to
obtaining the optimal trajectories using the necessary conditions provided
by Pontryagin's Maximum Principle (PMP). Special attention is given to the
critical UP of the target set in the process of obtaining the global
solution of the optimal control problem at hand. In this paper, Isaacs'
method for the solution of differential games is applied to the solution of
optimal control problems and the juxtaposition of the PMP and DP is
undertaken."

# Summary. An optional shortened abstract.
summary: ""

tags:
- optimal control theory
- differential game theory
- dynamic programming
categories:
- control theory
  
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: "https://arxiv.org/pdf/2112.10849.pdf"
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
