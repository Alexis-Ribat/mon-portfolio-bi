---
title: "Orbit of the Mind"
date: 2024-01-01
draft: false
image: "images/nanobanana.png" 
description: "A hyper-realistic exploration of personal gravity using generative AI."
category: "AI Art"
weight: 2
---

## The Concept

This project explores the idea of "Personal Gravity". The subject stands calm and centered, while the chaotic elements of his daily life—coffee, work, memories—orbit around him in perfect balance.

**The Result:**

<a href="/images/Gravitational-Focus.png" data-fancybox="gallery" data-caption="Gravitational-Focus">
    <img src="/images/Gravitational-Focus.png" alt="Gravitational-Focus" width="40%" style="display: block; margin: 10px auto;">
</a>

---

### 🤖 The Prompt Engineering

Below is the structured JSON prompt used to generate this image.

<details>
<summary style="cursor: pointer; padding: 10px; background-color: #f1f1f1; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
    🔻 Click to view & copy the Prompt
</summary>

<div style="position: relative; background: #272822; border-radius: 5px; padding: 10px;">
    <button id="copyBtn" onclick="copyPrompt()" style="
        position: absolute; 
        top: 10px; 
        right: 10px; 
        background-color: #4CAF50; 
        color: white; 
        border: none; 
        padding: 5px 12px; 
        border-radius: 4px; 
        cursor: pointer; 
        font-family: sans-serif;
        font-size: 12px;
        z-index: 10;">
        📋 Copier
    </button>

    <pre style="margin: 0; padding-top: 35px; overflow-x: auto; max-height: 500px;">
<code id="jsonPrompt" style="color: #f8f8f2; font-family: monospace;">{
  "type": "image_generation_prompt",
  "style": "hyper-realistic, cinematic, magical surrealism, studio editorial",
  "composition": {
    "aspect_ratio": "4:5",
    "framing": "full-body to three-quarter portrait, centered",
    "camera_position": "eye-level, straight-on",
    "resolution": "ultra-HD"
  },
  "identity_preservation": {
    "use_reference_image": true,
    "alter_face": false,
    "notes": "Preserve the man's facial features..."
  },
  "subject": {
    "gender": "man",
    "age_range": "mid-twenties",
    "pose": {
      "stance": "standing perfectly still at the center of the frame",
      "arms": "crossed confidently",
      "expression": "calm, confident, slightly amused"
    },
    "appearance": {
      "facial_features": "sharp, well-defined facial structure",
      "hair": {
        "color": "dark brown",
        "details": "subtle golden highlights",
        "style": "tousled, natural movement"
      },
      "eyes": "intense hazel eyes",
      "skin_texture": "natural, ultra-detailed realism"
    }
  },
  "surreal_elements": {
    "concept": "objects floating in perfect orbital patterns",
    "objects": [
      "vintage cameras",
      "leather-bound books",
      "steaming coffee cups",
      "floating black ink droplets"
    ]
  },
  "lighting": {
    "key_light": "high and left, deep sculptural shadows",
    "shadow_effects": "intricate overlapping shadows"
  },
  "quality": {
    "realism": "ultra-realistic",
    "rendering": "cinematic realism"
  },
  "output_goal": "Create a hyper-realistic cinematic studio portrait."
}</code></pre>
</div>

<script>
function copyPrompt() {
    const text = document.getElementById("jsonPrompt").innerText;
    navigator.clipboard.writeText(text).then(function() {
        const btn = document.getElementById("copyBtn");
        const originalText = btn.innerText;
        btn.innerText = "✅ Copié !";
        btn.style.backgroundColor = "#2e7d32";
        setTimeout(function() {
            btn.innerText = originalText;
            btn.style.backgroundColor = "#4CAF50";
        }, 2000);
    }, function(err)