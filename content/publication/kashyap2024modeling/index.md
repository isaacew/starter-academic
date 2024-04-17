---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Modeling and Detection of Cyber-Attacks in UAV Swarms using a 2D-LWR Model and Gaussian Processes"
authors:
- Abhishek Kashyap
- Animesh Chakravarthy
- Kamesh Subbarao
- David Casbeer
- Isaac E. Weintraub
- Brandon Hencey
- author_notes:
- "Department of Mechanical and Aerospace Engineering, The University of Texas at Arlington"
- "Department of Mechanical and Aerospace Engineering, The University of Texas at Arlington"
- "Department of Mechanical and Aerospace Engineering, The University of Texas at Arlington"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
- "Aerospace Systems Directorate, Air Force Research Laboratory"
date: 2024-03-22T09:56:01-04:00
doi: "10.2514/6.2024-0529"

# Schedule page publish date (NOT publication's date).
publishDate: 2024-03-22T09:56:01-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "This paper considers a class of cyber-attacks attacking a swarm of Unmanned Aerial Vehicles (UAVs). Our focus is on scenarios wherein an attacker may hack into a subset of vehicles in the swarm and create subtle changes in their parameters. These hacked vehicles (referred to as malicious vehicles) are subsequently able to modify the behavior of the overall swarm. The swarm comprising the mix of malicious and normal vehicles is modeled using a system of coupled Partial Differential Equations (PDEs) in a two-dimensional LWR model. We develop a methodology that combines Gaussian Processes (GP) with this two-species 2D PDE model, and use this method for detecting the presence of such malicious vehicles in the swarm. A Bayesian Optimization scheme is employed to determine the optimal choice of basis and kernel functions that constitute the GP. Simulation results demonstrate that this detection architecture performs successful detection of the malicious vehicles, and also their mode of attack on the traffic."

# Summary. An optional shortened abstract.
summary: ""

tags:
- Cyber Attacks
- Swarms
- Stochastics
categories:
- Cooperative Control
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
