---
layout: page
title: Auto-DSP for AEC Demo
permalink: /auto_dsp/aec
description: Demo page for Auto-DSP for acoustic echo cancellation.
date: 2021-10-08
---

### For the most recent version of this work, check out Meta-AF [here](/projects/metaaf).
---


We release the farend, nearend, and AEC outputs for the first 25 samples in our test set. These samples are produced using the experimental setup described in section 4.2 of our paper. Specifically, the learned optimizer has a 48 dimensional hidden state and the full block frequency domain adaptive filter has L=2048 taps and an overlap of R=7/8.

**Audio Example Outputs**

This first table contains outputs for the first 25 samples as well as whether the scene was linear/nonlinear, the input signal to echo ratio(SER), and the ERLE performance of each model. The first two columns contain the nearend and farend. Note that some scenes contain a nearend noise source. We denote the proposed model by Auto-DSP.

**Caution! Some of these samples are loud!**
<table border="1" style="margin:1px auto; width:95%">
  <tr>
    <td>Number</td>
    <td>Scene Type</td>
    <td>SER</td>
    <td>Farend</td>
    <td>Nearend</td>
    <td><b>Auto-DSP</b></td>
    <td>NLMS(b=.9)</td>
    <td>NLMS(b=.99)</td>
    <td>RMSprop</td>
    <td>Speex</td>
  </tr>
  <tr>
    <td>0</td>
    <td>Nonlinear</td>
    <td>-7</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/near.wav" /></audio></td>
    <td>11.10dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/LOPT-336.wav" /></audio></td>
    <td>12.24dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/FNLMS.9.wav" /></audio></td>
    <td>7.81dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/FNLMS.99.wav" /></audio></td>
    <td>2.40dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/RMS.wav" /></audio></td>
    <td>12.07dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/0/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>1</td>
    <td>Linear</td>
    <td>-6</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/near.wav" /></audio></td>
    <td>9.38dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/LOPT-336.wav" /></audio></td>
    <td>9.27dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/FNLMS.9.wav" /></audio></td>
    <td>4.97dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/FNLMS.99.wav" /></audio></td>
    <td>4.27dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/RMS.wav" /></audio></td>
    <td>5.80dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/1/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Nonlinear</td>
    <td>6</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/near.wav" /></audio></td>
    <td>11.76dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/LOPT-336.wav" /></audio></td>
    <td>4.10dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/FNLMS.9.wav" /></audio></td>
    <td>0.63dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/FNLMS.99.wav" /></audio></td>
    <td>8.83dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/RMS.wav" /></audio></td>
    <td>11.48dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/2/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>3</td>
    <td>Nonlinear</td>
    <td>2</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/near.wav" /></audio></td>
    <td>12.38dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/LOPT-336.wav" /></audio></td>
    <td>8.20dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/FNLMS.9.wav" /></audio></td>
    <td>3.84dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/FNLMS.99.wav" /></audio></td>
    <td>7.58dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/RMS.wav" /></audio></td>
    <td>5.42dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/3/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>4</td>
    <td>Nonlinear</td>
    <td>3</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/near.wav" /></audio></td>
    <td>10.66dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/LOPT-336.wav" /></audio></td>
    <td>-11.48dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/FNLMS.9.wav" /></audio></td>
    <td>-0.59dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/FNLMS.99.wav" /></audio></td>
    <td>7.11dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/RMS.wav" /></audio></td>
    <td>11.25dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/4/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>5</td>
    <td>Linear</td>
    <td>-4</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/near.wav" /></audio></td>
    <td>18.48dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/LOPT-336.wav" /></audio></td>
    <td>20.61dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/FNLMS.9.wav" /></audio></td>
    <td>9.45dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/FNLMS.99.wav" /></audio></td>
    <td>6.11dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/RMS.wav" /></audio></td>
    <td>5.30dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/5/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>6</td>
    <td>Nonlinear</td>
    <td>-3</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/near.wav" /></audio></td>
    <td>10.38dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/LOPT-336.wav" /></audio></td>
    <td>11.02dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/FNLMS.9.wav" /></audio></td>
    <td>6.04dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/FNLMS.99.wav" /></audio></td>
    <td>5.95dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/RMS.wav" /></audio></td>
    <td>13.15dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/6/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>7</td>
    <td>Nonlinear</td>
    <td>-8</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/near.wav" /></audio></td>
    <td>6.75dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/LOPT-336.wav" /></audio></td>
    <td>4.38dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/FNLMS.9.wav" /></audio></td>
    <td>4.49dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/FNLMS.99.wav" /></audio></td>
    <td>1.15dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/RMS.wav" /></audio></td>
    <td>10.25dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/7/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>8</td>
    <td>Nonlinear</td>
    <td>9</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/near.wav" /></audio></td>
    <td>4.97dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/LOPT-336.wav" /></audio></td>
    <td>1.18dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/FNLMS.9.wav" /></audio></td>
    <td>1.68dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/FNLMS.99.wav" /></audio></td>
    <td>2.16dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/RMS.wav" /></audio></td>
    <td>11.19dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/8/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>9</td>
    <td>Nonlinear</td>
    <td>-7</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/near.wav" /></audio></td>
    <td>11.18dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/LOPT-336.wav" /></audio></td>
    <td>8.10dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/FNLMS.9.wav" /></audio></td>
    <td>5.75dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/FNLMS.99.wav" /></audio></td>
    <td>5.76dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/RMS.wav" /></audio></td>
    <td>8.54dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/9/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>10</td>
    <td>Nonlinear</td>
    <td>-9</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/near.wav" /></audio></td>
    <td>10.20dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/LOPT-336.wav" /></audio></td>
    <td>11.78dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/FNLMS.9.wav" /></audio></td>
    <td>8.50dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/FNLMS.99.wav" /></audio></td>
    <td>2.08dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/RMS.wav" /></audio></td>
    <td>10.60dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/10/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>11</td>
    <td>Nonlinear</td>
    <td>-5</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/near.wav" /></audio></td>
    <td>9.94dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/LOPT-336.wav" /></audio></td>
    <td>14.20dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/FNLMS.9.wav" /></audio></td>
    <td>8.26dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/FNLMS.99.wav" /></audio></td>
    <td>2.69dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/RMS.wav" /></audio></td>
    <td>7.99dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/11/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>12</td>
    <td>Nonlinear</td>
    <td>-10</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/near.wav" /></audio></td>
    <td>5.41dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/LOPT-336.wav" /></audio></td>
    <td>-2.11dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/FNLMS.9.wav" /></audio></td>
    <td>1.81dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/FNLMS.99.wav" /></audio></td>
    <td>2.76dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/RMS.wav" /></audio></td>
    <td>15.72dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/12/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>13</td>
    <td>Nonlinear</td>
    <td>9</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/near.wav" /></audio></td>
    <td>8.45dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/LOPT-336.wav" /></audio></td>
    <td>5.41dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/FNLMS.9.wav" /></audio></td>
    <td>5.57dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/FNLMS.99.wav" /></audio></td>
    <td>5.59dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/RMS.wav" /></audio></td>
    <td>6.65dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/13/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>14</td>
    <td>Nonlinear</td>
    <td>0</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/near.wav" /></audio></td>
    <td>14.01dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/LOPT-336.wav" /></audio></td>
    <td>12.48dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/FNLMS.9.wav" /></audio></td>
    <td>5.54dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/FNLMS.99.wav" /></audio></td>
    <td>7.37dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/RMS.wav" /></audio></td>
    <td>15.23dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/14/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>15</td>
    <td>Nonlinear</td>
    <td>-4</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/near.wav" /></audio></td>
    <td>5.08dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/LOPT-336.wav" /></audio></td>
    <td>4.40dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/FNLMS.9.wav" /></audio></td>
    <td>1.72dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/FNLMS.99.wav" /></audio></td>
    <td>2.42dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/RMS.wav" /></audio></td>
    <td>10.00dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/15/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>16</td>
    <td>Nonlinear</td>
    <td>-9</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/near.wav" /></audio></td>
    <td>18.09dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/LOPT-336.wav" /></audio></td>
    <td>16.00dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/FNLMS.9.wav" /></audio></td>
    <td>9.87dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/FNLMS.99.wav" /></audio></td>
    <td>5.52dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/RMS.wav" /></audio></td>
    <td>15.64dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/16/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>17</td>
    <td>Nonlinear</td>
    <td>4</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/near.wav" /></audio></td>
    <td>15.62dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/LOPT-336.wav" /></audio></td>
    <td>10.23dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/FNLMS.9.wav" /></audio></td>
    <td>9.12dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/FNLMS.99.wav" /></audio></td>
    <td>9.59dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/RMS.wav" /></audio></td>
    <td>16.45dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/17/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>18</td>
    <td>Nonlinear</td>
    <td>-10</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/near.wav" /></audio></td>
    <td>15.74dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/LOPT-336.wav" /></audio></td>
    <td>9.11dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/FNLMS.9.wav" /></audio></td>
    <td>6.81dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/FNLMS.99.wav" /></audio></td>
    <td>3.81dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/RMS.wav" /></audio></td>
    <td>7.49dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/18/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>19</td>
    <td>Nonlinear</td>
    <td>3</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/near.wav" /></audio></td>
    <td>8.48dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/LOPT-336.wav" /></audio></td>
    <td>6.71dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/FNLMS.9.wav" /></audio></td>
    <td>4.05dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/FNLMS.99.wav" /></audio></td>
    <td>6.21dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/RMS.wav" /></audio></td>
    <td>9.86dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/19/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>20</td>
    <td>Nonlinear</td>
    <td>-4</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/near.wav" /></audio></td>
    <td>6.62dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/LOPT-336.wav" /></audio></td>
    <td>4.10dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/FNLMS.9.wav" /></audio></td>
    <td>2.92dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/FNLMS.99.wav" /></audio></td>
    <td>4.44dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/RMS.wav" /></audio></td>
    <td>10.15dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/20/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>21</td>
    <td>Nonlinear</td>
    <td>3</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/near.wav" /></audio></td>
    <td>9.04dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/LOPT-336.wav" /></audio></td>
    <td>-1.91dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/FNLMS.9.wav" /></audio></td>
    <td>2.96dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/FNLMS.99.wav" /></audio></td>
    <td>5.40dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/RMS.wav" /></audio></td>
    <td>10.24dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/21/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>22</td>
    <td>Nonlinear</td>
    <td>-8</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/near.wav" /></audio></td>
    <td>24.06dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/LOPT-336.wav" /></audio></td>
    <td>18.83dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/FNLMS.9.wav" /></audio></td>
    <td>14.31dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/FNLMS.99.wav" /></audio></td>
    <td>5.81dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/RMS.wav" /></audio></td>
    <td>8.92dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/22/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>23</td>
    <td>Linear</td>
    <td>5</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/near.wav" /></audio></td>
    <td>14.31dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/LOPT-336.wav" /></audio></td>
    <td>-12.77dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/FNLMS.9.wav" /></audio></td>
    <td>-2.99dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/FNLMS.99.wav" /></audio></td>
    <td>9.96dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/RMS.wav" /></audio></td>
    <td>5.95dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/23/speex.wav" /></audio></td>
  </tr>
  <tr>
    <td>24</td>
    <td>Nonlinear</td>
    <td>6</td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/far.wav" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/near.wav" /></audio></td>
    <td>4.61dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/LOPT-336.wav" /></audio></td>
    <td>-8.47dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/FNLMS.9.wav" /></audio></td>
    <td>-0.71dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/FNLMS.99.wav" /></audio></td>
    <td>2.24dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/RMS.wav" /></audio></td>
    <td>8.66dB<br /><audio controls style="width: 20px;"><source src="/assets/audio/auto-dsp_aec/24/speex.wav" /></audio></td>
  </tr>
</table>

**Average Performance on Example Outputs**

The second table below shows average ERLE performance in dB on the first 25 samples.

<table border="1" style="margin:1px auto; width:95%">
  <tr>
    <td></td>
    <td><b>Auto-DSP</b></td>
    <td>NLMS(b=.9)</td>
    <td>NLMS(b=.99)</td>
    <td>RMSprop</td>
    <td>Speex</td>
  </tr>
  <tr>
    <td>Mean ERLE</td>
    <td><b>11.04dB</b></td>
    <td>5.27dB</td>
    <td>4.26dB</td>
    <td>5.92dB</td>
    <td>9.58 dB</td>
  </tr>
</table>
