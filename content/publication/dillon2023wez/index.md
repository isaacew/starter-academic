---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Optimal Trajectories for Aircraft Avoidance of Multiple Weapon Engagement Zones"
authors:
- Patrick M. Dillon
- Michael D. Zollars
- Isaac E. Weintraub
- Alexander Von Moll
author_notes:
- "Department of Aeronautical Engineering, Air Force Institute of Technology"
- "Department of Aeronautical Engineering, Air Force Institute of Technology"
- "Control Science Center, Air Force Research Laboratory"
- "Control Science Center, Air Force Research Laboratory"
date: 2023-03-29T16:32:43-04:00
doi: "10.2514/1.I011224"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-03-29T16:32:43-04:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Journal of Aerospace Information Systems"
publication_short: "JAIS"

abstract: "The work herein expresses an optimal control problem for an air vehicle to reach a desired location through two dynamic keep out zones. In today’s contested world, there are many instances where air vehicles are denied a portion of the airspace when trying to reach a desired target. Under these conditions the objective is to find the optimal route to the desired location while obeying path constraints. In this work, the path constraint is defined as the enemy's ground weapon engagement zone, and is established in a way that simulates an anti-aircraft defense system. The vehicle's objective is to reach the desired location in minimum time while completely avoiding the engagement zone. This optimal control problem is considered in the Cartesian plane, has a fixed final state, and free final time. The dynamics of the aircraft are a function of the aircraft's velocity and heading. The velocity of the aircraft is assumed to be constant and the vehicle's control is its heading rate. The engagement zone, which acts as a path constraint, is dynamic in that its effective range is a function of the engagement zone's instantaneous line of sight angle and the aircraft's instantaneous bearing angle. The desired final location is defined to be a point opposite the engagement zone from the aircraft's initial location. Several scenarios are conducted to show path trajectories through multiple dynamic engagement zones. Results illustrate how aircraft dynamic maneuvers can minimize total flight time to a target while maintaining a safe distance from enemy threats. Further, while investigating multiple engagement zones, it is shown that an aircraft can maintain safe separation from multiple overlapping threats by manipulating relative bearing angles and the aircraft's heading."

# Summary. An optional shortened abstract.
summary: ""

tags:
- path planning
- nonlinear program solver
- pseudospectral methods
- operations research
- obstacle avoidance
- vehicle routing
- UAVs
categories:
- path planning
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
