---
layout: distill
title: End-to-End Models
description: Training models end-to-end
date: 2021-11-09
img: assets/img/adfe.png
bibliography: end_to_end.bib
categories: research
importance : 2
---
In this line of research, we were interested in constructing audio models which operated on raw waveforms. The working hypothesis was that we could overcome difficulties of doing audio processing in the Fourier domain by learning a custom domain.

In initial work, lead by Shrikant Venkataramani <d-cite key="venkataramani2017adaptive"></d-cite>-<d-cite key="venkataramani2018end"></d-cite>, we tackled this problem for source separation. We reinterpreted the short-time Fourier transform as a convolutional layer where the convolutional weights represented the DFT basis. Our perspective was that we could make this convolutional layer trainable and learn a custom "DFT" for speech on speech source separation. We realized that we could leverage this learned transform to do things like directly optimize SDR. You can find that work and some audio demos [here](blog/2017/adfe/).

This approach lead to variety of exciting results and was significantly improved thanks to the development of better network architectures (Conv TASNet, U-Net, etc), use of better training schemes (Permutation Invariant Training), and more. This work also revealed some interesting connections to more classic work on NMF. This line of NMF based research culminated in Shrikant's [thesis](https://www.ideals.illinois.edu/handle/2142/108451) where he explored a variety of interesting processing concepts.

Later on, with Umut Isik, Shrikant and I explored some more efficient end-to-end formulations by reinterpreting the convolutional weights as a sparse factorization of the DFT. The intuition was that the FFT could be interpreted as a sparse factorization of the DFT. When implemented correctly, multiplying by this sparse factorization yields the well known $$O(n \log(n))$$ runtime. We realized that this stack of matrices could be made learnable -- allowing us to learn fast transforms! We demonstrated this approach on speech enhancement and focused on very small models <d-cite key="casebeer2020efficient"></d-cite>.

I revisited end-to-end learning with Umut later on. Here, we were again interested in speech enhancement but we wanted to do so with discrete latent space models. Our idea was that you could both enhance speech and compress it at the same time! This work was inspired by VQ-VAE and lead to an interesting kind of model which we called a compressor-enhancer <d-cite key="casebeer2021enhancing"></d-cite>. A neat aspect of this work was that the compression was free in that it was simply a byproduct of our network architecture.
