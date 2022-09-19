---
layout: page
title: Meta-AF Demos
permalink: /metaaf/demos
description: Meta-Learning for Adaptive Filters
date: 2022-04-21
---

We release the inputs, targets, and results for five samples in the test set of each adaptive filter task for all models. These samples are all generated using the Meta-AF codebase in this [GitHub repo](https://github.com/adobe-research/MetaAF). Please consult our [paper](https://arxiv.org/abs/2204.11942) for any experimental configuration details as well as descriptions of our baselines.

### Acoustic Echo Cancellation
<details><summary>Single-Talk</summary>

  <center>
  Magnitude STFT of the First Sample*
  <img src="/assets/img/meta-af/aec_single_talk_raw.jpg" alt="drawing" width="100%"/>
  </center>
  *STOI is zero since the near-end speech is silent.


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
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/0/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/1/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/2/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/3/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_single_talk_raw/4/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
  </table>
</details>

<details><summary>Double-Talk</summary>

  <center>
  Magnitude STFT of the First Sample
  <img src="/assets/img/meta-af/aec_double_talk_raw.jpg" alt="drawing" width="100%"/>
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
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/0/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/1/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/2/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/3/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_raw/4/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
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
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/0/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/1/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/2/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/3/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/speex.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_combo_lms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_combo_rms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_combo_nlms_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_combo_rls_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/aec_combo_kf_mdf.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_path/4/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
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
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/d.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/u.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/speex.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_combo_lms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_combo_rms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_combo_nlms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_combo_rls_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/aec_combo_kf_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/0/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/d.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/u.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/speex.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_combo_lms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_combo_rms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_combo_nlms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_combo_rls_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/aec_combo_kf_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/1/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/d.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/u.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/speex.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_combo_lms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_combo_rms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_combo_nlms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_combo_rls_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/aec_combo_kf_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/2/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/d.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/u.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/speex.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_combo_lms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_combo_rms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_combo_nlms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_combo_rls_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/aec_combo_kf_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/3/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/d.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/u.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/speex.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_combo_lms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_combo_rms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_combo_nlms_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_combo_rls_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/aec_combo_kf_mdf.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/aec_double_talk_nonlinear/4/meta_aec_16_combo_rl_4_1024_512.mp3" /></audio></td>
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
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/nara_1.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/meta_wpe_5_1_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/nara_4.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/meta_wpe_5_4_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/nara_8.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/0/meta_wpe_5_8_aa.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/nara_1.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/meta_wpe_5_1_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/nara_4.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/meta_wpe_5_4_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/nara_8.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/1/meta_wpe_5_8_aa.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/nara_1.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/meta_wpe_5_1_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/nara_4.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/meta_wpe_5_4_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/nara_8.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/2/meta_wpe_5_8_aa.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/nara_1.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/meta_wpe_5_1_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/nara_4.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/meta_wpe_5_4_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/nara_8.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/3/meta_wpe_5_8_aa.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/d.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/u.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/nara_1.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/meta_wpe_5_1_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/nara_4.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/meta_wpe_5_4_aa.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/nara_8.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/wpe_all/4/meta_wpe_5_8_aa.mp3" /></audio></td>
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
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/m.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/0/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/m.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/1/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/m.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/2/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/m.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/3/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
    </tr>
    <tr>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/s.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/m.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
    <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_diffuse/4/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
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
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/m.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/0/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/m.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/1/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/m.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/2/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/m.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/3/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
      </tr>
      <tr>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/s.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/m.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_lms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_rms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_nlms_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/gsc_rls_combo_default_aa_75.mp3" /></audio></td>
      <td><audio controls style="width: 20px;"><source src="/assets/audio/meta-af/gsc_directional/4/meta_gsc_combo_aa_default_75.mp3" /></audio></td>
      </tr>
  </table>
</details>


---
Note that all samples have been scaled to [-1,1] and saved as .mp3 files for playback. If you would like the raw files, please either follow the directions in the GitHub repository or contact me.
