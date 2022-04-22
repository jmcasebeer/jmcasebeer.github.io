---
layout: page
title: Meta-AF Demos
permalink: /meta-af/demos
description: Meta-Learning for Adaptive Filters
date: 2022-04-21
---

We release the inputs, targets, and results for five samples in the test set of each adaptive filter task for all models. These samples are all generated using the Meta-AF codebase in this [GitHub repo](). Please consult our [arXiv paper]() for any experimental configuration details as well as descriptions of our baselines.

### Acoustic Echo Cancellation
<details><summary>Double-Talk</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/aec_double_talk.jpg" alt="drawing" width="100%"/>
  </center>


  <table border="1" style="margin:1px auto; width:100%">
    <tr>
      <td>Near-end</td>
      <td>Far-end</td>
      <td>Near-end Speech</td>
      <td>Speex</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td>Kalman Filter</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/aec_dt_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/aec_dt_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/aec_dt_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/aec_dt_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/aec_dt_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/0/auto_rls_16_dt_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/aec_dt_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/aec_dt_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/aec_dt_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/aec_dt_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/aec_dt_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/1/auto_rls_16_dt_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/aec_dt_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/aec_dt_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/aec_dt_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/aec_dt_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/aec_dt_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/2/auto_rls_16_dt_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/aec_dt_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/aec_dt_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/aec_dt_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/aec_dt_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/aec_dt_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/3/auto_rls_16_dt_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/aec_dt_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/aec_dt_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/aec_dt_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/aec_dt_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/aec_dt_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk/4/auto_rls_16_dt_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

<details><summary>Double-Talk with Path Change</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/aec_double_talk_path.jpg" alt="drawing" width="100%"/>
  </center>

  <table border="1" style="margin:1px auto; width:100%">
    <tr>
      <td>Near-end</td>
      <td>Far-end</td>
      <td>Near-end Speech</td>
      <td>Speex</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td>Kalman Filter</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_dt_sc_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_dt_sc_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_dt_sc_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_dt_sc_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_dt_sc_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/auto_rls_16_dt_sc_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_dt_sc_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_dt_sc_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_dt_sc_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_dt_sc_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_dt_sc_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/auto_rls_16_dt_sc_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_dt_sc_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_dt_sc_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_dt_sc_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_dt_sc_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_dt_sc_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/auto_rls_16_dt_sc_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_dt_sc_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_dt_sc_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_dt_sc_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_dt_sc_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_dt_sc_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/auto_rls_16_dt_sc_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_dt_sc_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_dt_sc_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_dt_sc_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_dt_sc_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_dt_sc_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/auto_rls_16_dt_sc_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

<details><summary>Double-Talk with Nonlinearities</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/aec_double_talk_nonlinear.jpg" alt="drawing" width="100%"/>
  </center>


  <table border="1" style="margin:1px auto; width:100%">
    <tr>
      <td>Near-end</td>
      <td>Far-end</td>
      <td>Near-end Speech</td>
      <td>Speex</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td>Kalman Filter</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_dt_nl_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_dt_nl_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_dt_nl_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_dt_nl_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_dt_nl_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/auto_rls_16_dt_nl_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_dt_nl_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_dt_nl_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_dt_nl_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_dt_nl_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_dt_nl_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/auto_rls_16_dt_nl_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_dt_nl_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_dt_nl_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_dt_nl_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_dt_nl_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_dt_nl_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/auto_rls_16_dt_nl_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_dt_nl_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_dt_nl_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_dt_nl_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_dt_nl_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_dt_nl_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/auto_rls_16_dt_nl_c.mp3" /></audio></td>
    </tr>
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/speex.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_dt_nl_lms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_dt_nl_rms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_dt_nl_nlms.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_dt_nl_rls.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_dt_nl_kf.mp3" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/auto_rls_16_dt_nl_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

### Equalization
<details><summary>Unconstrained</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/eq_unconstrained.jpg" alt="drawing" width="100%"/>
  </center>

  <table border="1" style="margin:1px auto; width:100%">
    <tr>
      <td>Target</td>
      <td>Input</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/eq_none_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/eq_none_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/eq_none_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/eq_none_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/0/eq_none_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/eq_none_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/eq_none_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/eq_none_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/eq_none_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/1/eq_none_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/eq_none_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/eq_none_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/eq_none_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/eq_none_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/2/eq_none_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/eq_none_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/eq_none_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/eq_none_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/eq_none_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/3/eq_none_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/eq_none_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/eq_none_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/eq_none_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/eq_none_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_unconstrained/4/eq_none_16_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

<details><summary>Constrained</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/eq_constrained.jpg" alt="drawing" width="100%"/>
  </center>

  <table border="1" style="margin:1px auto; width:100%">
    <tr>
      <td>Target</td>
      <td>Input</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/eq_antialias_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/eq_antialias_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/eq_antialias_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/eq_antialias_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/0/eq_antialias_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/eq_antialias_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/eq_antialias_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/eq_antialias_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/eq_antialias_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/1/eq_antialias_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/eq_antialias_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/eq_antialias_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/eq_antialias_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/eq_antialias_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/2/eq_antialias_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/eq_antialias_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/eq_antialias_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/eq_antialias_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/eq_antialias_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/3/eq_antialias_16_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/eq_antialias_lms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/eq_antialias_rms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/eq_antialias_nlms.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/eq_antialias_rls.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/eq_constrained/4/eq_antialias_16_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

### Dereverberation
<details><summary> One, Four, Eight Mic.</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/wpe_all.jpg" alt="drawing" width="100%"/>
  </center>

  <table border="1" style="margin:1px auto; width:95%">
    <tr>
      <td>Reverberant</td>
      <td>Anechoic</td>
      <td>NARA 1 Mic.</td>
      <td><b>Meta-AF 1 Mic.</b></td>
      <td>NARA 4 Mic.</td>
      <td><b>Meta-AF 4 Mic.</b></td>
      <td>NARA 8 Mic.</td>
      <td><b>Meta-AF 8 Mic.</b></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/nara_1.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/wpe_5_1_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/nara_4.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/wpe_5_4_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/nara_8.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/0/wpe_5_8_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/nara_1.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/wpe_5_1_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/nara_4.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/wpe_5_4_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/nara_8.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/1/wpe_5_8_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/nara_1.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/wpe_5_1_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/nara_4.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/wpe_5_4_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/nara_8.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/2/wpe_5_8_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/nara_1.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/wpe_5_1_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/nara_4.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/wpe_5_4_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/nara_8.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/3/wpe_5_8_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/d.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/u.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/nara_1.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/wpe_5_1_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/nara_4.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/wpe_5_4_c.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/nara_8.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/wpe_all/4/wpe_5_8_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

### Beamforming
<details><summary>Diffuse Interferer</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/gsc_diffuse.jpg" alt="drawing" width="100%"/>
  </center>

  <table border="1" style="margin:1px auto; width:95%">
    <tr>
      <td>Clean Speech</td>
      <td>Mixture</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_on_oracle_lms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_on_oracle_rms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_on_oracle_nlms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_on_oracle_rls_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_on_oracle_noise_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_on_oracle_lms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_on_oracle_rms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_on_oracle_nlms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_on_oracle_rls_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_on_oracle_noise_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_on_oracle_lms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_on_oracle_rms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_on_oracle_nlms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_on_oracle_rls_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_on_oracle_noise_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_on_oracle_lms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_on_oracle_rms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_on_oracle_nlms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_on_oracle_rls_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_on_oracle_noise_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_on_oracle_lms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_on_oracle_rms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_on_oracle_nlms_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_on_oracle_rls_plain.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_on_oracle_noise_c.mp3" /></audio></td>
    </tr>
  </table>
</details>

<details><summary>Directional Interferer</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/gsc_directional.jpg" alt="drawing" width="100%"/>
  </center>

  <table border="1" style="margin:1px auto; width:95%">
    <tr>
      <td>Clean Speech</td>
      <td>Mixture</td>
      <td>LMS</td>
      <td>RMSProp</td>
      <td>NLMS</td>
      <td>RLS</td>
      <td><b>Meta-AF</b></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_on_oracle_lms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_on_oracle_rms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_on_oracle_nlms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_on_oracle_rls_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_on_oracle_speech_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_on_oracle_lms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_on_oracle_rms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_on_oracle_nlms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_on_oracle_rls_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_on_oracle_speech_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_on_oracle_lms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_on_oracle_rms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_on_oracle_nlms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_on_oracle_rls_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_on_oracle_speech_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_on_oracle_lms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_on_oracle_rms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_on_oracle_nlms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_on_oracle_rls_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_on_oracle_speech_c.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/s.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/m.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_on_oracle_lms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_on_oracle_rms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_on_oracle_nlms_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_on_oracle_rls_speech.mp3" /></audio></td>
    <td><audio controls style="width: 100px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_on_oracle_speech_c.mp3" /></audio></td>
    </tr>
  </table>
</details>
