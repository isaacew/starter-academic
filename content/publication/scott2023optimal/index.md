---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Optimal Generator Policy for Hybrid Fuel UAV under Airspace Noise Restrictions"
authors: 
- Drew Scott
- Isaac E. Weintraub
- Satyanarayana G. Manyam
- David W. Casbeer
- Manish Kumar
date: 2023-10-02T12:09:04-05:00
doi: "10.1016/j.ifacol.2023.11.005"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-10-02T12:09:04-05:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "IFAC-PapersOnLine"
publication_short: "IFAC"

abstract: "Here we study an optimal control problem involving energy management of a hybrid-fuel Unmanned Aerial Vehicle (UAV). The planning problem for a hybrid-fuel platform involves determining the path while managing the energy resources, which includes a policy for power modality switching whenever applicable. The hybrid-fuel platform considered here involves a generator and battery pack combined in a series fashion as energy sources on-board a UAV. Also included in the problem are the noise restrictions, which place constraints on generator operation depending on the airspace location. These emulate possible restrictions on UAV noise that occur in military surveillance missions or in urban path planning, where the collective noise of many UAVs, some with combustion engines, may be restricted in certain areas or times of the day. We present a hybrid methodology which starts from an initial path and generator pattern obtained from a mixed integer linear program (MILP) solution. The generator pattern from the discrete solution is then refined in an optimal control framework with an objective to minimize fuel usage, while considering the nonlinear battery and generator dynamics and noise-restriction constraints. Optimal control problem is solved with a nonlinear program solver, IPOPT. Numerical results are presented and analyzed with varying path lengths and scenarios. This work aims to serve as an initial study of this hybrid-fuel UAV problem within an optimal control framework, which can be extended to refinement of both the generator pattern and the trajectory in tandem, while considering vehicle and power dynamics that are often ignored in discrete path planning solutions."

# Summary. An optional shortened abstract.
summary: ""

tags: [hybrid control, hybrid optimization, MILP, NLP, Optimal Control, UAV, path planning, optimization, hybrid methods]
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
