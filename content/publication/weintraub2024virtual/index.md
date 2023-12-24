---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Virtual Target Selection for a Multiple-Pursuer Multiple-Evader Scenario"
authors: 
- Isaac E. Weintraub
- Alexander Von Moll
- David W. Casbeer
- Satyanarayana G. Manyam
author_notes:
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "Infoscitex Corporation, Dayton, OH"
date: 2024-01-08T12:05:48-05:00
doi: "10.48550/arXiv.2305.19399"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-12-20T12:05:48-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "This paper considers an M-pursuer N-evader scenario involving virtual targets. The virtual targets serve as an intermediary target for the pursuers, allowing the pursuers to delay their final assignment to the evaders. However, upon reaching the virtual target, the pursuers must decide which evader to capture. It is assumed that there are more pursuers than evaders and that the pursuers are faster than the evaders. The objective is two-part: first, assign each pursuer to virtual target and evader such that the the pursuer team's energy is minimized, and second, choose the the virtual targets' locations for this minimization problem. The approach taken is to consider the Apollonius geometry between each pursuer's virtual target location and each evader. Using the constructed Apollonius circles, the pursuer's travel distance and maneuver at a virtual target are obtained. These metrics serve as a gauge for the total energy required to capture a particular evader and are used to solve the joint virtual target selection and pursuer-evader assignment problem. This paper provides a mathematical definition of this problem, the solution approach taken, and an example."

# Summary. An optional shortened abstract.
summary: ""

tags: [weapon target assignment, optimization, MILP, apollonius, pursuit-evasion]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://arxiv.org/pdf/2305.19399.pdf#:~:text=The%20virtual%20targets%20serve%20as,decide%20which%20evader%20to%20capture.
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
