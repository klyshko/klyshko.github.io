---
permalink: /research/
title: "Research"
excerpt: "Eugene Klyshko - About my research"
author_profile: true
redirect_from: 
  - "/research.html"
---
## Thesis focus

On my PhD journey to unravel the mysteries of how proteins function and regulate their activities, I've focused on a critical yet often overlooked component — **water**. Water is not just a passive bystander in the world of proteins; water molecules form hydration shells around proteins and even integrate into their interiors, influencing everything from protein stability to functional behaviour. In my research, I've developed advanced computational methods that demonstrate the critical role of water in protein allostery, which is supported by experimental techniques like time-resolved X-ray crystallography and NMR spectroscopy.

<img src="/images/water_allostery.png" alt="water allostery" width="400px" style="display:block; margin:1.5rem auto; border-radius:10px;">

<div class="iso-sections">

<div class="iso-section">
<div class="iso-section__label">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  Part 1
</div>
<h2>Tracking water–protein interactions</h2>
<p>A novel computational approach that accurately tracks how proteins interact with water. By integrating data from X-ray crystallography, I demonstrated the significance of specific water sites that persist in simulations, whether the protein is in a crystal or in solution. This insight generalizes a method for studying how water networks help maintain protein structure and function in native cellular environments.</p>
<div class="iso-section__links">
<a href="/files/laws.pdf">Details</a>
</div>
</div>

<div class="iso-section">
<div class="iso-section__label">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
  Part 2
</div>
<h2>Crystal vs. solution environments</h2>
<p>I explored how the environment — whether a crystal or a solution — affects a protein's conformational landscape. The structural changes observed in a crystal mirror those that occur when a protein interacts with a ligand in solution. This has profound implications for how we interpret time-resolved crystallographic data and understand protein function in its native environment.</p>
<div class="iso-section__links">
<a href="/files/efx.pdf">Details</a>
</div>
</div>

<div class="iso-section">
<div class="iso-section__label">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 14.69c1.34 0 2.44-1.12 2.44-2.48 0-.71-.35-1.38-1.05-1.95S12.58 9.03 12.44 8.14c-.18.89-.7 1.74-1.4 2.3-.7.56-1.04 1.18-1.04 1.77 0 1.36 1.1 2.48 2.44 2.48z"/></svg>
  Part 3
</div>
<h2>Water-mediated allostery</h2>
<p>I extended my computational methods to investigate how water influences protein allostery, a process where distant sites within a protein communicate to regulate its activity. My research on a model enzyme revealed that water networks within the protein can stabilize and enhance allosteric signalling when water (H₂O) is replaced with its heavy counterpart (D₂O). This opens up exciting possibilities for protein engineering by manipulating water-mediated communication pathways.</p>
<div class="iso-section__links">
<a href="/research/">Unpublished</a>
</div>
</div>

</div>

In essence, my research combines molecular simulations with experimental data to draw a complete picture of the vital role water plays in the life of proteins, contributing to a deeper understanding of biological processes at the molecular level.

---

## Methods

<div class="iso-sections">

<div class="iso-section">
<div class="iso-section__label">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  Method
</div>
<h2>Molecular dynamics (MD) simulations</h2>
<p><img src="/images/ezgif-3-e1da36ca2200.gif" alt="md" width="180px" align="left" style="padding:10px;">
This approach is sometimes called a "computational microscope"; equations of motion are numerically integrated for every atom based on an empirical potential energy function. Simulations produce long time-resolved trajectories of atomic coordinates and provide a representation of a given molecule's structural ensemble. MD simulations offer a unique advantage over other biophysical techniques by providing an explicit description of the solvent molecules surrounding the protein. This explicit representation of protein-solvent interactions is crucial for understanding solvent-mediated mechanisms of allosteric regulation and functional dynamics. In MD simulations, it is possible to precisely control the protein environment (pressure, temperature, ion concentration, and presence of co-solutes) to mimic experimental or physiological conditions. Comparison of simulations performed under different conditions makes it possible to identify the effects of a wide variety of molecular perturbations. By accurately simulating protein motions and interactions with the surrounding environment, MD simulations can fill in the gaps in our understanding of proteins due to limited experimental data, by providing insights into the free energy landscapes of proteins.</p>
</div>

<div class="iso-section">
<div class="iso-section__label">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
  Method
</div>
<h2>Markov State Models (MSMs)</h2>
<p><img src="/images/MSM.png" alt="MSMs" width="250px" align="left" style="padding:10px;">
I develop robust, accurate and easy-to-interpret <a href="https://pubs.acs.org/doi/10.1021/jacs.7b12191">Markov state models</a> for protein dynamics. The steps often include proper featurization of conformational states, extraction of the most significant features through dimensionality reduction, clustering of the conformations into distinct kinetically relevant states, building an MSM transition matrix, and estimating the accuracy of the MSM based on objective quality metrics.</p>
</div>

<div class="iso-section">
<div class="iso-section__label">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="19" r="2"/><line x1="12" y1="9" x2="12" y2="2"/><line x1="9.5" y1="13.5" x2="5" y2="17"/><line x1="14.5" y1="13.5" x2="19" y2="17"/></svg>
  Method
</div>
<h2>Dimensionality reduction &amp; clustering</h2>
<p><img src="/images/clusters.png" alt="clusters" width="200px" align="left" style="padding:10px;">
<img src="/images/MDS.png" alt="mds" width="200px" align="right" style="padding:10px;">
I use dimensionality reduction and clustering of molecular conformations sourced from protein simulations. Clustering methods used to analyze MD trajectories require specification of various parameters, including the number of clusters. The number of clusters is an approximation to the number of conformational states since geometrically and energetically similar structures share the same conformational states. This parameter is often unknown in advance and is the quantity of interest itself, making this problem challenging.</p>
</div>

</div>
