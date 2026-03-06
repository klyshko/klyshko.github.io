---
title: "petiteFinder: An automated computer vision tool to compute Petite colony frequencies in bakers yeast"
collection: publications
permalink: /publication/petitefinder
excerpt: 'A computer vision tool to detect baker yeast colonies'
date: 2023-02-02
venue: 'BMC Bioinformatics'
paperurl: '/files/pf.pdf'
citation: 'Christopher J Nunn, Eugene Klyshko, Sid Goyal (2023). &quot;petiteFinder: An automated computer vision tool to compute Petite colony frequencies in bakers yeast.&quot; <i>BMC Bioinformatics 24, 50</i>.'
---

DOI: [https://doi.org/10.1186/s12859-023-05168-5](https://doi.org/10.1186/s12859-023-05168-5)

Download PDF: [Download paper here](/files/pf.pdf)

**Background**
Mitochondrial respiration is central to cellular and organismal health in eukaryotes. In baker’s yeast, however, respiration is dispensable under fermentation conditions. Because yeast are tolerant of this mitochondrial dysfunction, yeast are widely used by biologists as a model organism to ask a variety of questions about the integrity of mitochondrial respiration. Fortunately, baker’s yeast also display a visually identifiable Petite colony phenotype that indicates when cells are incapable of respiration. Petite colonies are smaller than their Grande (wild-type) counterparts, and their frequency can be used to infer the integrity of mitochondrial respiration in populations of cells. Unfortunately, the computation of Petite colony frequencies currently relies on laborious manual colony counting methods which limit both experimental throughput and reproducibility.

**Results**
To address these problems, we introduce a deep learning enabled tool, petiteFinder, that increases the throughput of the Petite frequency assay. This automated computer vision tool detects Grande and Petite colonies and computes Petite colony frequencies from scanned images of Petri dishes. It achieves accuracy comparable to human annotation but at up to 100 times the speed and outperforms semi-supervised Grande/Petite colony classification approaches. Combined with the detailed experimental protocols we provide, we believe this study can serve as a foundation to standardize this assay. Finally, we comment on how Petite colony detection as a computer vision problem highlights ongoing difficulties with small object detection in existing object detection architectures.

**Conclusion**
Colony detection with petiteFinder results in high accuracy Petite and Grande detection in images in a completely automated fashion. It addresses issues in scalability and reproducibility of the Petite colony assay which currently relies on manual colony counting. By constructing this tool and providing details of experimental conditions, we hope this study will enable larger-scale experiments that rely on Petite colony frequencies to infer mitochondrial function in yeast.
