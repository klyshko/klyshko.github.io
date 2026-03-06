---
title: "XENet: Using a new graph convolution to accelerate the timeline for protein design on quantum computers"
collection: publications
permalink: /publication/xenet
excerpt: 'Graph convolutional network to spead up de novo protein design'
date: 2021-09-27
venue: 'PLoS computational biology'
paperurl: '/files/xenet.pdf'
citation: 'Jack B Maguire, Daniele Grattarola, Vikram Khipple Mulligan, Eugene Klyshko, Hans Melo (2021). &quot;XENet: Using a new graph convolution to accelerate the timeline for protein design on quantum computers.&quot; <i>PLoS computational biology</i>. 9 (17).'
---

DOI: [https://doi.org/10.1371/journal.pcbi.1009037](https://doi.org/10.1371/journal.pcbi.1009037)

Download PDF: [Download paper here](/files/xenet.pdf)

**Abstract:**
Graph representations are traditionally used to represent protein structures in sequence design protocols in which the protein backbone conformation is known. This infrequently extends to machine learning projects: existing graph convolution algorithms have shortcomings when representing protein environments. One reason for this is the lack of emphasis on edge attributes during massage-passing operations. Another reason is the traditionally shallow nature of graph neural network architectures. Here we introduce an improved message-passing operation that is better equipped to model local kinematics problems such as protein design. Our approach, XENet, pays special attention to both incoming and outgoing edge attributes. We compare XENet against existing graph convolutions in an attempt to decrease rotamer sample counts in Rosetta’s rotamer substitution protocol, used for protein side-chain optimization and sequence design. This use case is motivating because it both reduces the size of the search space for classical side-chain optimization algorithms, and allows larger protein design problems to be solved with quantum algorithms on near-term quantum computers with limited qubit counts. XENet outperformed competing models while also displaying a greater tolerance for deeper architectures. We found that XENet was able to decrease rotamer counts by 40% without loss in quality. This decreased the memory consumption for classical pre-computation of rotamer energies in our use case by more than a factor of 3, the qubit consumption for an existing sequence design quantum algorithm by 40%, and the size of the solution space by a factor of 165. Additionally, XENet displayed an ability to handle deeper architectures than competing convolutions.
