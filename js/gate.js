// ============================================
// CHABELS DYNASTY — Rarity Gate
// Name the most obscure NBA player you can think of
// ============================================

function normalizeGateName(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function checkGate() {
  // v3 gate key - clear old keys on upgrade
  if (!localStorage.getItem('chabels_gate_v3')) {
    localStorage.removeItem('chabels_gate_passed');
    localStorage.removeItem('chabels_rarity_gate');
    localStorage.setItem('chabels_gate_v3', 'reset');
  }
  return localStorage.getItem('chabels_rarity_gate') === 'true';
}

function showGate() {
  const overlay = document.createElement('div');
  overlay.id = 'gate-overlay';
  overlay.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#000;padding:2rem;">
      <div style="max-width:500px;width:100%;text-align:center;">
        <div style="font-size:3rem;margin-bottom:1rem;">🏀</div>
        <h1 style="font-size:2rem;font-weight:700;color:#d4af37;letter-spacing:2px;margin-bottom:0.5rem;">CHABELS DYNASTY</h1>
        <p style="color:#999;font-size:0.85rem;letter-spacing:3px;text-transform:uppercase;margin-bottom:2rem;">Rebound &bull; Execute &bull; Defend</p>
        <div style="background:#1a1a1a;border:1px solid rgba(212,175,55,0.3);border-radius:12px;padding:2rem;margin-bottom:1.5rem;">
          <p style="color:#fff;font-size:1.1rem;font-weight:600;margin-bottom:0.5rem;">Name an NBA Player</p>
          <p style="color:#999;font-size:0.9rem;margin-bottom:1.5rem;">The more obscure, the better. All-time. Any era.</p>
          <input type="text" id="gate-input" placeholder="Type a player name..." style="width:100%;background:#0a0a0a;border:2px solid #333;color:#fff;padding:0.85rem 1rem;border-radius:8px;font-size:1.1rem;font-family:inherit;text-align:center;" autocomplete="off">
          <div id="gate-result" style="margin-top:1rem;display:none;"></div>
          <button id="gate-btn" onclick="tryRarity()" style="margin-top:1.25rem;width:100%;padding:0.85rem;background:#d4af37;color:#000;border:none;border-radius:8px;font-size:1rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;cursor:pointer;transition:all 0.3s;">Check Rarity</button>
        </div>
        <p style="color:#555;font-size:0.75rem;">5,000+ NBA players in the database. Can you find a 90+?</p>
      </div>
    </div>
  `;
  document.body.prepend(overlay);
  document.body.style.overflow = 'hidden';
  
  setTimeout(() => document.getElementById('gate-input').focus(), 100);
  
  document.getElementById('gate-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') tryRarity();
  });
}

function tryRarity() {
  const input = document.getElementById('gate-input');
  const result = document.getElementById('gate-result');
  const btn = document.getElementById('gate-btn');
  const name = input.value.trim();
  
  if (!name) {
    result.style.display = 'block';
    result.innerHTML = '<p style="color:#ff4444;font-size:0.9rem;">Type a name first.</p>';
    return;
  }
  
  const normalized = normalizeGateName(name);
  
  if (typeof NBA_ALL_TIME === 'undefined') {
    result.style.display = 'block';
    result.innerHTML = '<p style="color:#ff4444;font-size:0.9rem;">Player database still loading...</p>';
    return;
  }
  
  const player = NBA_ALL_TIME[normalized];
  
  if (!player) {
    result.style.display = 'block';
    result.innerHTML = `
      <p style="color:#ff4444;font-size:0.9rem;margin-bottom:0.5rem;">❌ "${name}" not found in the NBA database.</p>
      <p style="color:#666;font-size:0.8rem;">Try the full name (first and last).</p>
    `;
    input.style.borderColor = '#ff4444';
    return;
  }
  
  const pts = player[0];
  const score = player[1];
  
  // Determine reaction
  let reaction, emoji, color, barColor;
  if (score <= 5) {
    reaction = "Really? That's the best you got? Everyone knows that guy.";
    emoji = "😐"; color = "#ff4444"; barColor = "#ff4444";
  } else if (score <= 15) {
    reaction = "Casual. Your grandma could've named this player.";
    emoji = "😑"; color = "#ff6644"; barColor = "#ff6644";
  } else if (score <= 30) {
    reaction = "Decent pick. You watch some basketball.";
    emoji = "🤷"; color = "#ffaa44"; barColor = "#ffaa44";
  } else if (score <= 50) {
    reaction = "Not bad. You're getting into the weeds.";
    emoji = "👀"; color = "#ffdd44"; barColor = "#ffdd44";
  } else if (score <= 65) {
    reaction = "Okay, I see you. That's a deep pull.";
    emoji = "😏"; color = "#aadd44"; barColor = "#aadd44";
  } else if (score <= 80) {
    reaction = "Deep cut. You might actually know ball.";
    emoji = "🔥"; color = "#44cc44"; barColor = "#44cc44";
  } else if (score <= 90) {
    reaction = "Certified hooper historian. Respect.";
    emoji = "💀"; color = "#44ddaa"; barColor = "#44ddaa";
  } else if (score <= 95) {
    reaction = "WHO?! You're a basketball sicko.";
    emoji = "🤯"; color = "#44aaff"; barColor = "#44aaff";
  } else {
    reaction = "Absolutely unhinged. You win. Legend status.";
    emoji = "👑"; color = "#d4af37"; barColor = "#d4af37";
  }
  
  const ptsFormatted = pts.toLocaleString();
  
  input.style.borderColor = color;
  result.style.display = 'block';
  result.innerHTML = `
    <div style="margin:1rem 0;">
      <div style="font-size:2.5rem;margin-bottom:0.5rem;">${emoji}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-bottom:0.5rem;">
        <span style="color:${color};font-size:2.5rem;font-weight:700;">${score}</span>
        <span style="color:#666;font-size:1rem;">/100</span>
      </div>
      <div style="background:#333;border-radius:50px;height:12px;width:100%;margin:0.75rem 0;overflow:hidden;">
        <div style="background:${barColor};height:100%;width:${score}%;border-radius:50px;transition:width 1s ease;"></div>
      </div>
      <p style="color:${color};font-size:0.95rem;font-weight:600;margin-bottom:0.25rem;">${reaction}</p>
      <p style="color:#666;font-size:0.8rem;">${name} — ${ptsFormatted} career points</p>
    </div>
  `;
  
  // Change button to "Enter" or "Try Again"
  btn.innerHTML = score >= 50 ? "Enter the League 🏆" : "Try Again (or Enter Anyway)";
  btn.onclick = function() {
    // Always let them in
    localStorage.setItem('chabels_rarity_gate', 'true');
    localStorage.setItem('chabels_rarity_score', score);
    localStorage.setItem('chabels_rarity_player', name);
    const overlay = document.getElementById('gate-overlay');
    overlay.style.transition = 'opacity 0.5s';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 500);
  };
}

// On page load
if (!checkGate()) {
  document.addEventListener('DOMContentLoaded', showGate);
}
