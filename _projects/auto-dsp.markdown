---
layout: distill
title: Auto-DSP
description: Early work in meta-learning for adaptive filters
date: 2021-09-01
categories: research
img: assets/img/auto_dsp/autodsp.png
importance : 1
bibliography: auto_dsp.bib
---

### For the most recent version of this work, check out Meta-AF [here](/projects/meta-af).
---

In this on going line of work, we formulate the development of adaptive filtering algorithms as a meta-learning problem and learn to optimize adaptive filters. To do so, we frame adaptive filtering itself as a differentiable operator and train a learned optimizer from data, without external labels, using truncated backpropagation through time. By doing so, we replace hand-derived online update rules and create an automatic digital signal processing (Auto-DSP) approach that can be used for a variety of signal processing applications. To demonstrate our approach, we learn to optimize an Acoustic Echo Cancellation (AEC) task as shown in the figure below. We use the Microsoft AEC Challenge dataset to learn optimization update rules for a variety of common linear and nonlinear multidelayed block frequency domain filters. We compare our results to hand-engineered, grid-search-tuned block Normalized LMS (NLMS) and RMSprop optimizers, as well as the open-source Speex AEC. We published these results in <d-cite key="casebeer2021auto">.

[arXiv](https://arxiv.org/abs/2110.04284)

[arXiv pdf](https://arxiv.org/pdf/2110.04284.pdf)

[Short video](https://www.youtube.com/watch?v=y51hUaw2sTg)

[Full video](https://www.youtube.com/watch?v=oe0owGeCsqI)

[GitHub repo](https://github.com/jmcasebeer/autodsp)

<center>
<img src="/assets/img/auto_dsp/auto_dsp_aec.png" alt="drawing" width="50%"/>
</center>

The learned optimizer *g* operates on the gradients of the adaptive filter *f*. To make the optimizer agnostic of the filter configuration, we run it elementwise and maintain a unique hidden state for each gradient element. The optimizer is a simpler two layer complex-valued GRU as shown below.

<center>
<img src="/assets/img/auto_dsp/l2l_net.png" alt="drawing" width="50%" class="center"/>
</center>

We have released outputs for our model and the baselines models on this [demo page](/auto_dsp/aec).
