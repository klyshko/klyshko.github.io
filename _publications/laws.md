---
title: "LAWS: Local Alignment for Water Sites — tracking ordered water in simulations"
collection: publications
permalink: /publication/laws
excerpt: 'Computational method to track ordered water in simulations'
date: 2022-09-16
venue: 'Biophysical Journal'
paperurl: '/files/laws.pdf'
citation: 'E Klyshko, JSH Kim, S Rauscher (2022). &quot;LAWS: Local Alignment for Water Sites — tracking ordered water in simulations.&quot; <i>Biophysical Journal</i>. 122 (14), 2871-2883'
---

DOI: [https://doi.org/10.1016/J.BPJ.2022.09.012](https://doi.org/10.1016/J.BPJ.2022.09.012)

Download PDF: [Download paper here](/files/laws.pdf)

**Abstract**: Accurate modeling of protein-water interactions in molecular dynamics (MD) simulations is important for understanding the molecular basis of protein function. Data from x-ray crystallography can be useful in assessing the accuracy of MD simulations, in particular, the locations of crystallographic water sites (CWS) coordinated by the protein. Such a comparison requires special methodological considerations that take into account the dynamic nature of proteins. However, existing methods for analyzing CWS in MD simulations rely on global alignment of the protein onto the crystal structure, which introduces substantial errors in the case of significant structural deviations. Here, we propose a method called local alignment for water sites (LAWS), which is based on multilateration—an algorithm widely used in GPS tracking. LAWS considers the contacts formed by CWS and protein atoms in the crystal structure and uses these interaction distances to track CWS in a simulation. We apply our method to simulations of a protein crystal and to simulations of the same protein in solution. Compared with existing methods, LAWS defines CWS characterized by more prominent water density peaks and a less-perturbed protein environment. In the crystal, we find that all high-confidence crystallographic waters are preserved. Using LAWS, we demonstrate the importance of crystal packing for the stability of CWS in the unit cell. Simulations of the protein in solution and in the crystal share a common set of preserved CWS that are located in pockets and coordinated by residues of the same domain, which suggests that the LAWS algorithm will also be useful in studying ordered waters and water networks in general.
