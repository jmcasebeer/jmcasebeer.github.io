---
layout: page
title: Higher-Order Meta-AF
permalink: /metaaf/higher-order
description: Meta-Learning for Adaptive Filters with Higher-Order Frequency Dependencies
date: 2022-06-10
---

This demo pages accompanies "Meta-Learning for Adaptive Filters with Higher-Order Frequency Dependencies", which was published at IWAENC. We release model inputs and outputs for both the linear acoustic echo canceller (AEC) as well as the deep neural network noise suppressor (DNN-NS) post-processor. These results are for all models shown in figure 4 of the paper. When applicable, the top audio file is the output of the linear AEC and the bottom is the output of the DNN-NS post filter. All files contain double-talk and may contain nonlinearities and near/far -end noise.

**Demo Files**
<table border="1" style="margin:1px auto; width:100%">
  <tr>
    <td>Near-end</td>
    <td>Far-end</td>
    <td>Near-end Speech</td>
    <td>NLMS</td>
    <td>RLS</td>
    <td>Kalman Filter</td>
    <td>Only DNN-NS</td>
    <td>Diag. Meta-AF</td>
    <td><b>Banded-9 Meta-AF</b></td>
    <td><b>Banded-3 Meta-AF</b></td>

  </tr>
    <!-- SAMPLE 0 -->
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/nearend_mix.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/farend_speech.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/nearend_speech.wav" /></audio></td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/nlms/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/nlms/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/rls/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/rls/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/kf/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/kf/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/dnn_res/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/diag/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/diag/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/banded3/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/banded3/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/banded9/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/0/banded9/res_out.wav" /></audio>
      </td>
  </tr>
    <!-- SAMPLE 1 -->
    <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/nearend_mix.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/farend_speech.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/nearend_speech.wav" /></audio></td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/nlms/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/nlms/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/rls/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/rls/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/kf/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/kf/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/dnn_res/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/diag/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/diag/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/banded3/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/banded3/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/banded9/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/1/banded9/res_out.wav" /></audio>
      </td>
  </tr>
    <!-- SAMPLE 2 -->
      <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/nearend_mix.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/farend_speech.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/nearend_speech.wav" /></audio></td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/nlms/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/nlms/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/rls/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/rls/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/kf/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/kf/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/dnn_res/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/diag/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/diag/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/banded3/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/banded3/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/banded9/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/2/banded9/res_out.wav" /></audio>
      </td>
  </tr>
    <!-- SAMPLE 3 -->
      <tr>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/nearend_mix.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/farend_speech.wav" /></audio></td>
      <td><audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/nearend_speech.wav" /></audio></td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/nlms/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/nlms/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/rls/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/rls/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/kf/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/kf/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/dnn_res/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/diag/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/diag/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/banded3/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/banded3/res_out.wav" /></audio>
      </td>
      <td>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/banded9/aec_out.wav" /></audio>
        <audio controls style="width: 100px;"><source src="/assets/audio/ho-meta-aec/3/banded9/res_out.wav" /></audio>
      </td>
  </tr>
</table>



These samples are all generated using the Meta-AF codebase in this [GitHub repo](https://github.com/adobe-research/MetaAF). The code and checkpoints have been released as an add-on to the [Meta-AF repository](https://github.com/adobe-research/MetaAF). You may also be interested in checking out the initial Meta-AF [video](https://www.youtube.com/watch?v=incb1QNSvW8), [pre-print](https://arxiv.org/abs/2204.11942), [code](https://github.com/adobe-research/MetaAF), [demos](/metaaf/demos), and [website](/projects/metaaf).
