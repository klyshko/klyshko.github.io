---
permalink: /research/
title: "Research"
excerpt: "Eugene Klyshko - About my research"
author_profile: true
redirect_from: 
  - "/research.html"
---
**Focus**

On my PhD journey to unravel the mysteries of how proteins function and regulate their activities, I’ve focused on a critical yet often overlooked component — **water**. Water is not just a passive bystander in the world of proteins; water molecules form hydration shells around proteins and even integrate into their interiors, influencing everything from protein stability to functional behaviour. In my research, I’ve developed advanced computational methods that demonstrate the critical role of water in protein allostery, when combined with experimental techniques like time-resolved X-ray crystallography and NMR spectroscopy. <img src="/images/water_allostery.png" alt="water allostery" width="400px" align="left" style="padding:10px;">

1. A major highlight of my work is a novel computational approach that accurately tracks how proteins interact with water. By integrating data from X-ray crystallography, I’ve been able to demonstrate the significance of specific water sites that persist in simulations, whether the protein is in a crystal or in solution. This insight generalizes a method for studying how water networks help maintain protein structure and function in native cellular environments.

2. Further, I’ve explored how the environment — whether a crystal or a solution — affects a protein’s conformational landscape. My findings indicate that the structural changes observed in a crystal mirror those that occur when a protein interacts with a ligand in solution. This has profound implications for how we interpret time-resolved crystallographic data and understand protein function in its native environment. 

3. Finally, I extended my computational methods to investigate how water influences protein allostery, a process where distant sites within a protein communicate and regulate each other’s activity. My research on the fluoroacetate dehalogenase enzyme revealed that water networks within the protein can stabilize and enhance allosteric signalling when water ($H_2O$) is replaced with its heavy counterpart ($D_2O$). This discovery opens up exciting possibilities for protein engineering by manipulating water-mediated communication pathways.

In essence, my research combines molecular simulations with experimental data to draw a complete picture of the vital role water plays in the life of proteins, contributing to a deeper understanding of biological processes at the molecular level.

---

**Molecular dynamics (MD) simulations**. 
<img src="/images/ezgif-3-e1da36ca2200.gif" alt="md" width="180px" align="left" style="padding:10px;"> 
This approach is sometimes called a “computational microscope”; equations of motion are numerically integrated for every atom based on an empirical potential energy function. Simulations produce long time-resolved trajectories of atomic coordinates and provide a representation of a given molecule’s structural ensemble. <img src="/images/idps.png" alt="idp" width="150px" align="right" style="padding:10px;"> MD simulations offer a unique advantage over other biophysical techniques by providing an explicit description of the solvent molecules surrounding the protein. This explicit representation of protein-solvent interactions is crucial for understanding solvent-mediated mechanisms of allosteric regulation and functional dynamics. In MD simulations, it is possible to precisely control the protein environment (pressure, temperature, ion concentration, and presence of co-solutes) to mimic experimental or physiological conditions. Comparison of simulations performed under different conditions makes it possible to identify the effects of a wide variety of molecular perturbations. By accurately simulating protein motions and interactions with the surrounding environment, MD simulations can fill in the gaps in our understanding of proteins due to limited experimental data, by providing insights into the free energy landscapes of proteins. 

In my work, I study a full spectrum of the dynamic disorder observed in proteins: from folded crystalline proteins to intrinsically disordered proteins (IDPs) in solution. Compared to folded proteins, IDPs lack a stable three-dimensional structure, and instead, they dynamically interchange between a large ensemble of conformational states corresponding to shallow minima of the free energy landscape. 

---

**Markov State Models to describe the conformational space and dynamics of proteins**.
I develop robust, accurate and easy-to-interpret [Markov state models](https://pubs.acs.org/doi/10.1021/jacs.7b12191) for protein dynamics.  <img src="/images/MSM.png" alt="MSMs" width="250px" align="left" style="padding:10px;"> The steps often include proper featurization of conformational states, extraction of the most significant features through dimensionality reduction, clustering  of the  conformations  into  distinct  kinetically  relevant  states,  building  an  MSM  transition  matrix,  and estimating the accuracy of the MSM based on objective quality metrics.

---

**Dimensionality reduction and clustering**.
<img src="/images/clusters.png" alt="clusters" width="200px" align="left" style="padding:10px;"> 
I am using dimensionality reduction and clustering of molecular conformations sourced from protein simulations.  <img src="/images/MDS.png" alt="mds" width="200px" align="right" style="padding:10px;">  Clustering methods used to analyze MD trajectories require specification of various parameters, including the number of clusters. The number of clusters is an approximation to the number of conformational states since geometrically and energetically similar structures share the same conformational states. This parameter is often unknown in advance and is the quantity of interest itself, making this problem challenging. 


