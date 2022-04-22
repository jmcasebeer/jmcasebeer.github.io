---
layout: distill
title: Multi-Vew Models
description: Models that can scale in interesting ways
date: 2021-08-10
img: assets/img/camse/camse.png
bibliography: mvn.bib
categories: research
importance : 3
---
Multi-View Models were my introduction to university research. I did most of this work when I was a sophomore and junior at UIUC working with Paris Smaragdis and other students in his lab.

Multi-View models were motivated by the difficulties of deploying audio models on devices with different form factors, numbers of microphones, and available compute. We were looking to construct a model that could be trained on data from one kind of device but generalize to a whole host of other devices.

The first problem we tackled was dealing with different numbers of microphones. In our first two papers we constructed Multi-View models that were trained on a fixed number of microphones <d-cite key="casebeer2018multi"></d-cite>-<d-cite key="casebeer2019multi"></d-cite>. Then, at test time, we ran them on a different number of microphones. We ended up discovering that Multi-View models could get better performance at test time when provided with more microphones. This was a neat result since we never explicitly trained the models to leverage additional microphones. We checked that this worked on both simple speech enhancement and voice activity detection tasks. A small writeup for that voice-activity detection task is [here](http://zhepeiw.com/2019/05/24/blog2.html).

Having discovered some initial solutions for microphone scalability, we moved on to compute scalability. The goal here was to make models that could adapt their test-time computational or communication requirements. We did this by training models which modulated the number of inputs consumed before producing an output. We were able to get this working for multi-channel speech enhancement where our Multi-View model streamed audio from a time-varying number of microphones <d-cite key="casebeer2020communication"></d-cite>. Later on, we generalized this idea to single channel classification where the Multi-View model adaptively processed a time-varying number of frequency bins <d-cite key="wang2021sound">. A writeup for the speech enhancement task is [here](projects/camse).
