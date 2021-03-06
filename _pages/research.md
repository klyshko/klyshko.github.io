---
permalink: /research/
title: "Research"
excerpt: "Eugene Klyshko - About my research"
author_profile: true
redirect_from: 
  - "/research.html"
---

**Studying intrinsically disordered proteins using molecular dynamics sumulations.** 
<img src="/images/idps.png" alt="idp" width="150px" align="right" style="padding:10px;"> 
Intrinsically disordered proteins (IDPs) make up a significant fraction of the proteins encoded in genomes. IDPs lack a single stable three-dimensional structure, and instead they dynamically interchange between a large ensemble of conformational states corresponding to shallow minima of the free energy landscape. <img src="/images/ezgif-3-e1da36ca2200.gif" alt="md" width="250px" align="left" style="padding:10px;">  Computational methods such as molecular dynamics (MD) simulations can be applied to IDP systems and provide the necessary data needed for the structural characterization of IDPs. This approach  is sometimes referred to as a “computational microscope”; equations of motion are numerically integrated for every atom based  on an empirical potential energy function. As a result, MD simulations produce long time-resolved trajectories of atomic coordinates and provide a representation of the sampling of a given molecule’s structural ensemble. [Video](https://drive.google.com/open?id=1iJGSUAr8IGJ_qNxyP_ipK1Keyc2gJZEW)

---
**Defining conformational states of proteins using dimensionality reduction and clustering algorithms.**
<img src="/images/clusters.png" alt="clusters" width="200px" align="left" style="padding:10px;"> 
In my ongoing work, I am trying to build an intuition about the clustering of molecular conformations in order to apply it to intrinsically disordered proteins.  <img src="/images/MDS.png" alt="mds" width="200px" align="right" style="padding:10px;"> Conventional clustering methods used to analyze MD trajectories offolded proteins require specification of the number of clusters. The number of clusters is an approximation to number of conformational states since geometrically and energetically similar structures share the same conformational states. This parameter is often unknown in advance and is the quantity of interest itself. 

---
**Developing Markov State Models to describe the conformational space and dynamics of IDPs.**
I am seeking for a methodological approach to build robust, accurate and easy to interpret [Markov state models](https://pubs.acs.org/doi/10.1021/jacs.7b12191) for the dynamics of intrinsically disordered proteins.  <img src="/images/MSM.png" alt="MSMs" width="250px" align="left" style="padding:10px;"> The steps will include proper featurization of conformational states, extraction of the most significant features through dimensionality reduction, clustering  of  the  conformations  into  distinct  kinetically  relevant  states,  building  an  MSM  transition  matrix,  and estimating the accuracy of the MSM based on objective quality metrics.
