---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Ring Formation Maneuvering with Double Integrator Dynamics"
authors: 
- Dzung Tran
- David Casbeer
- Eloy Garcia
- Isaac E Weintraub
- Dejan Milutinović
  
date: 2021-06-15T21:01:28-05:00
doi: "10.1109/ICUAS51884.2021.9476770"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-06-15T21:01:28-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "International Conference on Unmanned Aircraft Systems (ICUAS)"
publication_short: ""

abstract: "Conventional leader-follower formations restrict the follower to
a single desired position relative to the leader. To give the follower more
flexibility in motion and to replicate typical human pilot operations, in
this paper we propose a control architecture allowing the follower to
converge to a ring, which is a set of desired points, relative to the
leader. The follower is considered subject to a point-mass aircraft model,
which can be transformed into the double integrator kinematics. For that
reason, the nonlinear backstepping method is first utilized to design the
controller for the double integrator kinematics with input saturation
constraints being taken into account. The controller is then converted into
control variables for the point-mass model. The stability of the proposed
architecture is analyzed. Finally, a numerical example is presented to
illustrate the efficacy of the proposed controller."

# Summary. An optional shortened abstract.
summary: ""

tags: 
- feedback control
- nonlinear control
- vehicle control
- ring formation
categories:
- vehicle control
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
