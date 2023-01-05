---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "On Improving the Potential Field Method for Ring Formation"
authors:
- Dzung Tran
- David Casbeer
- Isaac Weintraub
- Dejan Milutinovic

date: 2022-06-08T08:00:00-05:00
doi: "10.23919/ACC53348.2022.9867582"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-01-31T08:00:00-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "American Control Conference"
publication_short: ""

abstract: "In the ring formation control problem, the follower is designated to approach a ring defined relative to the leader. This type of formation gives the follower more flexibility as it trails the leader. To achieve such formation, the follower’s reference velocity is derived using the potential field method, and then a sliding surface is constructed to enforce the follower to track the reference. Motivated by the Levenberg-Marquardt algorithm, this paper proposes modifications on the potential field method to further enhance the follower’s performance in the ring formation. Specifically, adding the approximated Hessian into the formulation of the potential field has a damping effect on the controller and improves the follower’s performance by reducing oscillations about the sliding surface. The use of the approximated Hessian, which is introduced in this paper in the context of ring formation, extends and is useful for control design of potential field methods in general. The proposed algorithm is discussed and interpreted from the feedback control viewpoint, where stability is guaranteed. A numerical example is also presented to illustrate the efficacy of the proposed algorithm."

# Summary. An optional shortened abstract.
summary: ""

tags: 
- vehicle control
- nonlinear control
- 3-D
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
