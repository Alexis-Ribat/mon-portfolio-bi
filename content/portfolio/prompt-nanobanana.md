---
title: "Prompts Nano Banana"
date: 2024-01-01
draft: false
# image: "images/System-Architecture.png"
description: "Prompts Nano Banana"
category: "Hobbies"
weight: 1
---


## I - Gravitational Focus

### The Concept


**The Result:**

---
This project explores the idea of "Personal Gravity". The subject stands calm and centered, while the chaotic elements of his daily life—coffee, work, memories—orbit around him in perfect balance.

**Gravitational Focus:**
<a href="/images/Gravitational-Focus.png" data-fancybox="gallery" data-caption="Gravitational-Focus">
    <img src="/images/Gravitational-Focus.png" alt="Gravitational-Focus" width="20%" style="display: block; margin: 10px auto;">
</a>

Below is the structured JSON prompt used to generate this image. It uses strict parameters for lighting, camera composition, and surreal elements.

<details>
<summary style="cursor: pointer; padding: 10px; background-color: #f1f1f1; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
    🔻 Click to view & copy the full JSON Prompt
</summary>

<div style="position: relative; background: #272822; border-radius: 5px; padding: 10px;">
    <button id="copyBtn" onclick="copyPrompt1()" style="
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
<code id="jsonPrompt1" style="color: #f8f8f2; font-family: monospace;">{
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
  }
}</code></pre>
</div>

<script>
function copyPrompt1() {
    const text = document.getElementById("jsonPrompt1").innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            const btn = document.getElementById("copyBtn");
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }).catch(function(err) {
            console.error('Erreur lors de la copie : ', err);
            fallbackCopyTextToClipboard(text, btn);
        });
    } else {
        fallbackCopyTextToClipboard(text, document.getElementById("copyBtn"));
    }
}
function fallbackCopyTextToClipboard(text, btn) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }
    } catch (err) {
        console.error('Erreur lors de la copie : ', err);
    }
    document.body.removeChild(textArea);
}
</script>

</details>
---


## II - Mordor

### The Concept


**The Result:**

---

**Gravitational Focus:**
<a href="/images/Mordor.png" data-fancybox="gallery" data-caption="Mordor">
    <img src="/images/Mordor.png" alt="Mordor" width="20%" style="display: block; margin: 10px auto;">
</a>

Below is the structured JSON prompt used to generate this image. It uses strict parameters for lighting, camera composition, and surreal elements.

<details>
<summary style="cursor: pointer; padding: 10px; background-color: #f1f1f1; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
    🔻 Click to view & copy the full JSON Prompt
</summary>

<div style="position: relative; background: #272822; border-radius: 5px; padding: 10px;">
    <button id="copyBtn2" onclick="copyPrompt2()" style="
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
<code id="jsonPrompt2" style="color: #f8f8f2; font-family: monospace;">{Create image of Magazine feature article [travel] guide page, cute, information dense photo book style magazine feature article page. Add all necessary sections, tips, recommendations, information. add photos for any sections and recommendations if you like. Place the attached person at the precise location of [Plateau of Gorgoroth in Mordor]. Seamlessly blend the attached person as if they are sightseeing. Approach this task with the understanding that this is a critical, information rich page that will significantly influence visitor numbers, text accuracy is important. Fully use the entire [9:16] page. NEGATIVE PROMPT: coordinate texts
}</code></pre>
</div>

<script>
function copyPrompt2() {
    const text = document.getElementById("jsonPrompt2").innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            const btn = document.getElementById("copyBtn2");
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }).catch(function(err) {
            console.error('Erreur lors de la copie : ', err);
            fallbackCopyTextToClipboard(text, document.getElementById("copyBtn2"));
        });
    } else {
        fallbackCopyTextToClipboard(text, document.getElementById("copyBtn2"));
    }
}
function fallbackCopyTextToClipboard(text, btn) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }
    } catch (err) {
        console.error('Erreur lors de la copie : ', err);
    }
    document.body.removeChild(textArea);
}
</script>

</details>
---


## III - Pop Culture Planetary Projects

### The Concept


**The Result:**

---

**Pop Culture Planetary Projects:**
<a href="/images/Pop-Culture.png" data-fancybox="gallery" data-caption="Pop-Culture">
    <img src="/images/Pop-Culture.png" alt="Pop-Culture" width="20%" style="display: block; margin: 10px auto;">
</a>

Below is the structured JSON prompt used to generate this image. It uses strict parameters for lighting, camera composition, and surreal elements.

<details>
<summary style="cursor: pointer; padding: 10px; background-color: #f1f1f1; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
    🔻 Click to view & copy the full JSON Prompt
</summary>

<div style="position: relative; background: #272822; border-radius: 5px; padding: 10px;">
    <button id="copyBtn3" onclick="copyPrompt3()" style="
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
<code id="jsonPrompt3" style="color: #f8f8f2; font-family: monospace;">{
{
  "batch_generation_requests": [
    {
      "brand_theme": "Starbucks",
      "concept": "Frappuccino Terraforming Tower",
      "subject": {
        "main_element": "Giant Starbucks Frappuccino cup standing vertically",
        "modifications": "Green straw converting into a space elevator/antenna; whipped cream resembling snowy mountain peaks",
        "props": "Floating holographic Starbucks siren logo in green neon",
        "details": "Condensation on the cup, rich texture of caramel drizzle"
      },
      "figures": {
        "type": "Miniature scientists",
        "attire": "Green and white hazmat suits",
        "action": "Taking samples from the whipped cream 'mountains' and checking pipes connected to the straw"
      },
      "environment": {
        "floor": "Coffee bean rocky terrain",
        "background": "Green nebula and Milky Way",
        "atmosphere": "Misty and aromatic"
      },
      "aesthetics": {
        "color_grading": "Emerald green, white, and coffee brown",
        "lens_effect": "Macro lens with soft bokeh",
        "lighting": " glowing green ambient light"
      },
      "meta": {
        "aspect_ratio": "9:16",
        "reference_directive": "Make it like the same picture as the reference uploaded."
      }
    },
    {
      "brand_theme": "Nike",
      "concept": "Air Jordan Hover-Ship Maintenance",
      "subject": {
        "main_element": "Iconic Air Jordan 1 sneaker floating",
        "modifications": "Sole converted into glowing anti-gravity thrusters; laces acting as heavy cables",
        "props": "Neon Nike Swoosh sign suspended by cranes",
        "details": "Leather texture detailed with space dust, metallic eyelets"
      },
      "figures": {
        "type": "Miniature mechanics",
        "attire": "Orange flight suits",
        "action": "Welding the rubber sole and fueling the 'Air' unit"
      },
      "environment": {
        "terrain": "Futuristic metallic landing pad",
        "background": "Deep space with a view of Earth",
        "atmosphere": "High-tech hangar vibe"
      },
      "aesthetics": {
        "style": "Cyberpunk meets sportswear",
        "lighting": "Neon blue and red highlights",
        "depth": "High depth of field"
      },
      "meta": {
        "aspect_ratio": "9:16",
        "reference_directive": "Make it like the same picture as the reference uploaded"
      }
    },
    {
      "brand_theme": "Red Bull",
      "concept": "Energy Reactor Core Installation",
      "subject": {
        "main_element": "Silver and Blue Red Bull Can",
        "modifications": "Can act as a massive fusion reactor; mechanical wings are attached to the sides",
        "props": "Sparks flying, 'Gives You Wings' slogan projected in hologram",
        "details": "Metallic condensation, polished aluminum texture"
      },
      "figures": {
        "type": "Miniature engineers",
        "attire": "Silver protective gear",
        "action": "Connecting thick yellow power cables to the can tab."
      },
      "environment": {
        "terrain": "Dark jagged asteroid surface",
        "background": "Electric blue lightning storm in space"
      },
      "aesthetics": {
        "lighting": "Dramatic, high contrast electric blue and silver",
        "style": "Industrial sci-fi macro"
      },
      "meta": {
        "aspect_ratio": "9:16",
        "reference_directive": "Picture should be the same as the reference uploaded."
      }
    },
    {
      "brand_theme": "Pringles",
      "concept": "Solar Array Deployment",
      "subject": {
        "main_element": "Pringles Can as a Habitat Silo",
        "modifications": "Pringles chips (crisps) arranged as curved solar panels orbiting the can",
        "props": "Pringles mascot (Julius Pringles) painted on the silo hull",
        "details": "Texture of the potato chips contrasting with the metallic can"
      },
      "figures": {
        "type": "Tiny astronauts",
        "attire": "Red space suits",
        "action": "Polishing the surface of a giant Pringles chip"
      },
      "environment": {
        "terrain": "Red sandy surface (Mars-like)",
        "background": "Starry cosmos with a distant sun flare"
      },
      "aesthetics": {
        "lighting": "Warm sunlight hitting the chips (golden hour in space)",
        "style": "Cinematic macro"
      },
      "meta": {
        "aspect_ratio": "9:16",
        "reference_directive": "Picture should be the same as the reference uploaded."
      }
    }
  ]
}

}</code></pre>
</div>

<script>
function copyPrompt3() {
    const text = document.getElementById("jsonPrompt3").innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            const btn = document.getElementById("copyBtn3");
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }).catch(function(err) {
            console.error('Erreur lors de la copie : ', err);
            fallbackCopyTextToClipboard(text, document.getElementById("copyBtn3"));
        });
    } else {
        fallbackCopyTextToClipboard(text, document.getElementById("copyBtn3"));
    }
}
function fallbackCopyTextToClipboard(text, btn) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }
    } catch (err) {
        console.error('Erreur lors de la copie : ', err);
    }
    document.body.removeChild(textArea);
}
</script>

</details>
---


## IV - Found Shape

### The Concept


**The Result:**

---

**Pop Culture Planetary Projects:**
<a href="/images/Found-Shape.png" data-fancybox="gallery" data-caption="Found-Shape">
    <img src="/images/Found-Shape.png" alt="Found-Shape" width="20%" style="display: block; margin: 10px auto;">
</a>

Below is the structured JSON prompt used to generate this image. It uses strict parameters for lighting, camera composition, and surreal elements.

<details>
<summary style="cursor: pointer; padding: 10px; background-color: #f1f1f1; border-radius: 5px; font-weight: bold; margin-bottom: 10px;">
    🔻 Click to view & copy the full JSON Prompt
</summary>

<div style="position: relative; background: #272822; border-radius: 5px; padding: 10px;">
    <button id="copyBtn4" onclick="copyPrompt4()" style="
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
<code id="jsonPrompt4" style="color: #f8f8f2; font-family: monospace;">{A dramatic sky photo where swirling storm clouds naturally form the unmistakable shape of a [SUBJECT]. The illusion should be "found shape": at first it's just clouds; 
then the creature silhouette pops out. Realistic lighting: sun rays breaking through, volumetric beams, deep contrast. 
No fantasy glow, pure cloud structure forming the subject. High resolution, cinematic, awe-inspiring.}</code></pre>
</div>

<script>
function copyPrompt4() {
    const text = document.getElementById("jsonPrompt4").innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function() {
            const btn = document.getElementById("copyBtn4");
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }).catch(function(err) {
            console.error('Erreur lors de la copie : ', err);
            fallbackCopyTextToClipboard(text, document.getElementById("copyBtn4"));
        });
    } else {
        fallbackCopyTextToClipboard(text, document.getElementById("copyBtn4"));
    }
}
function fallbackCopyTextToClipboard(text, btn) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            const originalText = btn.innerText;
            btn.innerText = "✅ Copié !";
            btn.style.backgroundColor = "#2e7d32";
            setTimeout(function() {
                btn.innerText = originalText;
                btn.style.backgroundColor = "#4CAF50";
            }, 2000);
        }
    } catch (err) {
        console.error('Erreur lors de la copie : ', err);
    }
    document.body.removeChild(textArea);
}
</script>

</details>
---