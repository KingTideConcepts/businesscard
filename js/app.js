/**
 * King Tide Concepts — QR Digital Business Card & Splash Portal
 * Pure Vanilla JS (Zero dependencies, 100% static-host ready for GitHub Pages / AWS S3)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. TEAM PROFILES DIRECTORY (Edit emails/phones/links anytime)
  // =========================================================================
  const TEAM_PROFILES = {
    ktc: {
      id: 'ktc',
      name: 'King Tide Concepts',
      firstName: 'King Tide',
      lastName: 'Concepts',
      initials: 'KT',
      role: 'AI & IT Consulting',
      location: '⌖ Atlantic Coast · NC',
      bio: 'Helping small and midsize businesses solve bottlenecks, choose practical AI & software, and build lasting momentum.',
      email: 'info@kingtideconcepts.com',
      phone: '',
      phoneDisplay: 'Contact Form',
      contactUrl: 'https://www.kingtideconcepts.com/contact',
      website: 'https://www.kingtideconcepts.com',
      linkedin: 'https://www.linkedin.com/company/kingtideconcepts',
      instagram: 'https://www.instagram.com/kingtideconcepts'
    },
    harry: {
      id: 'harry',
      name: 'Harry Atwall',
      firstName: 'Harry',
      lastName: 'Atwall',
      initials: 'HA',
      role: 'Co-Founder · AI & ML',
      location: '⌖ Wilmington, NC',
      bio: 'Background in artificial intelligence, machine learning, and entrepreneurship—turning practical ideas into working business systems.',
      email: 'info@kingtideconcepts.com',
      phone: '',
      phoneDisplay: 'Schedule a Call',
      contactUrl: 'https://www.kingtideconcepts.com/contact',
      website: 'https://www.kingtideconcepts.com',
      linkedin: 'https://www.linkedin.com/company/kingtideconcepts',
      instagram: 'https://www.instagram.com/kingtideconcepts'
    },
    mike: {
      id: 'mike',
      name: 'Mike Ramer',
      firstName: 'Mike',
      lastName: 'Ramer',
      initials: 'MR',
      role: 'Co-Founder · Operations',
      location: '⌖ Wilmington, NC',
      bio: 'Background as a marine professional and in small business services—helping coastal and regional businesses streamline operations.',
      email: 'info@kingtideconcepts.com',
      phone: '',
      phoneDisplay: 'Schedule a Call',
      contactUrl: 'https://www.kingtideconcepts.com/contact',
      website: 'https://www.kingtideconcepts.com',
      linkedin: 'https://www.linkedin.com/company/kingtideconcepts',
      instagram: 'https://www.instagram.com/kingtideconcepts'
    },
    jordan: {
      id: 'jordan',
      name: 'Jordan Webb',
      firstName: 'Jordan',
      lastName: 'Webb',
      initials: 'JW',
      role: 'Co-Founder · Software & IT',
      location: '⌖ Wilmington, NC',
      bio: 'Background in software development and information technology consulting—building reliable systems that fit how your team works.',
      email: 'info@kingtideconcepts.com',
      phone: '',
      phoneDisplay: 'Schedule a Call',
      contactUrl: 'https://www.kingtideconcepts.com/contact',
      website: 'https://www.kingtideconcepts.com',
      linkedin: 'https://www.linkedin.com/company/kingtideconcepts',
      instagram: 'https://www.instagram.com/kingtideconcepts'
    },
    joe: {
      id: 'joe',
      name: 'Joe Soria',
      firstName: 'Joe',
      lastName: 'Soria',
      initials: 'JS',
      role: 'Co-Founder · IT & Logistics',
      location: '⌖ Wilmington, NC',
      bio: 'Background in information technology, logistics, and technical support—connecting tools and processes for real-world reliability.',
      email: 'info@kingtideconcepts.com',
      phone: '',
      phoneDisplay: 'Schedule a Call',
      contactUrl: 'https://www.kingtideconcepts.com/contact',
      website: 'https://www.kingtideconcepts.com',
      linkedin: 'https://www.linkedin.com/company/kingtideconcepts',
      instagram: 'https://www.instagram.com/kingtideconcepts'
    },
    don: {
      id: 'don',
      name: 'Don Vasser',
      firstName: 'Don',
      lastName: 'Vasser',
      initials: 'DV',
      role: 'Co-Founder · Strategy & Growth',
      location: '⌖ Wilmington, NC',
      bio: 'Background in venture capital, startups, and government—aligning technology strategy with measurable business momentum.',
      email: 'info@kingtideconcepts.com',
      phone: '',
      phoneDisplay: 'Schedule a Call',
      contactUrl: 'https://www.kingtideconcepts.com/contact',
      website: 'https://www.kingtideconcepts.com',
      linkedin: 'https://www.linkedin.com/company/kingtideconcepts',
      instagram: 'https://www.instagram.com/kingtideconcepts'
    }
  };

  // =========================================================================
  // 2. DOM ELEMENTS & STATE
  // =========================================================================
  const body = document.body;
  const introOverlay = document.getElementById('introOverlay');
  const skipIntroBtn = document.getElementById('skipIntroBtn');
  const replayIntroBtn = document.getElementById('replayIntroBtn');

  const cardStage = document.getElementById('cardStage');
  const cardFlipper = document.getElementById('cardFlipper');
  const cardGlare = document.getElementById('cardGlare');
  const flipCardBtn = document.getElementById('flipCardBtn');
  const flipCardBtnText = document.getElementById('flipCardBtnText');
  const cardFlipHintFront = document.getElementById('cardFlipHintFront');
  const cardFlipHintBack = document.getElementById('cardFlipHintBack');

  const profileInitials = document.getElementById('profileInitials');
  const profileRole = document.getElementById('profileRole');
  const profileLocation = document.getElementById('profileLocation');
  const profileName = document.getElementById('profileName');
  const profileBio = document.getElementById('profileBio');

  const actionEmail = document.getElementById('actionEmail');
  const actionEmailMeta = document.getElementById('actionEmailMeta');
  const actionCall = document.getElementById('actionCall');
  const actionCallLabel = document.getElementById('actionCallLabel');
  const actionCallMeta = document.getElementById('actionCallMeta');
  const actionLinkedin = document.getElementById('actionLinkedin');
  const actionInstagram = document.getElementById('actionInstagram');

  const saveVcfBtn = document.getElementById('saveVcfBtn');
  const openQrModalBtn = document.getElementById('openQrModalBtn');
  const closeQrModalBtn = document.getElementById('closeQrModalBtn');
  const qrModal = document.getElementById('qrModal');
  const qrModalTitle = document.getElementById('qrModalTitle');
  const shareUrlInput = document.getElementById('shareUrlInput');
  const copyUrlBtn = document.getElementById('copyUrlBtn');
  const nativeShareBtn = document.getElementById('nativeShareBtn');

  const activeParamBadge = document.getElementById('activeParamBadge');
  const teamSwitcherPills = document.getElementById('teamSwitcherPills');
  const teamSwitcherBar = document.querySelector('.team-switcher-bar');

  const redirectBanner = document.getElementById('redirectBanner');
  const redirectCountdownEl = document.getElementById('redirectCountdown');
  const cancelRedirectBtn = document.getElementById('cancelRedirectBtn');

  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  let activeProfile = TEAM_PROFILES.ktc;
  let introTimer = null;
  let redirectInterval = null;
  let toastTimer = null;

  // =========================================================================
  // 3. PARSE URL PARAMETERS (?card=harry, ?redirect=auto, ?lock=1, etc.)
  // =========================================================================
  function initFromUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const cardKey = (params.get('card') || params.get('member') || params.get('u') || 'ktc').toLowerCase();

    if (TEAM_PROFILES[cardKey]) {
      activeProfile = { ...TEAM_PROFILES[cardKey] };
    } else {
      activeProfile = { ...TEAM_PROFILES.ktc };
    }

    // Support ad-hoc query overrides (?name=...&role=...&email=...&phone=...)
    if (params.get('name')) {
      activeProfile.name = params.get('name');
      const parts = activeProfile.name.trim().split(/\s+/);
      activeProfile.firstName = parts[0] || '';
      activeProfile.lastName = parts.slice(1).join(' ') || '';
      activeProfile.initials = parts.map((p) => p[0]).join('').slice(0, 2).toUpperCase();
    }
    if (params.get('role')) activeProfile.role = params.get('role');
    if (params.get('email')) activeProfile.email = params.get('email');
    if (params.get('phone')) {
      activeProfile.phone = params.get('phone');
      activeProfile.phoneDisplay = params.get('phone');
    }

    // Hide switcher bar if ?lock=1 or ?lock=true is used on a printed QR code
    if (params.get('lock') === '1' || params.get('lock') === 'true') {
      if (teamSwitcherBar) teamSwitcherBar.style.display = 'none';
    }

    renderProfile(activeProfile, false);
  }

  // =========================================================================
  // 4. RENDER PROFILE DATA INTO THE CARD
  // =========================================================================
  function renderProfile(profile, updateHistory = true) {
    activeProfile = profile;

    profileInitials.textContent = profile.initials;
    profileRole.textContent = profile.role;
    profileLocation.textContent = profile.location;
    profileName.textContent = profile.name;
    profileBio.textContent = profile.bio;

    // Email Tile
    actionEmail.href = `mailto:${profile.email}?subject=${encodeURIComponent('Connecting with ' + profile.name + ' | King Tide Concepts')}`;
    actionEmailMeta.textContent = profile.email;

    // Phone / Connect Tile
    if (profile.phone) {
      actionCall.href = `tel:${profile.phone}`;
      actionCall.removeAttribute('target');
      actionCallLabel.textContent = 'Call Direct';
      actionCallMeta.textContent = profile.phoneDisplay || profile.phone;
    } else {
      actionCall.href = profile.contactUrl || 'https://www.kingtideconcepts.com/contact';
      actionCall.setAttribute('target', '_blank');
      actionCall.setAttribute('rel', 'noopener');
      actionCallLabel.textContent = 'Connect';
      actionCallMeta.textContent = profile.phoneDisplay || 'Start a Conversation';
    }

    // Socials
    actionLinkedin.href = profile.linkedin || 'https://www.linkedin.com/company/kingtideconcepts';
    actionInstagram.href = profile.instagram || 'https://www.instagram.com/kingtideconcepts';

    // Update Switcher Pills UI
    const pills = teamSwitcherPills.querySelectorAll('.switcher-pill');
    pills.forEach((pill) => {
      const isMatch = pill.getAttribute('data-card') === profile.id;
      pill.classList.toggle('active', isMatch);
      pill.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });

    const querySuffix = profile.id === 'ktc' ? '?card=ktc' : `?card=${profile.id}`;
    activeParamBadge.textContent = querySuffix;

    // Update URL without reloading
    if (updateHistory && window.history && window.history.replaceState) {
      const url = new URL(window.location.href);
      if (profile.id === 'ktc') {
        url.searchParams.delete('card');
      } else {
        url.searchParams.set('card', profile.id);
      }
      window.history.replaceState({}, '', url.toString());
    }

    // Update Share Modal info
    qrModalTitle.textContent = profile.name;
    const shareUrl = getShareableUrl(profile.id);
    shareUrlInput.value = shareUrl;
  }

  function getShareableUrl(cardId) {
    try {
      const url = new URL(window.location.href);
      if (cardId && cardId !== 'ktc') {
        url.searchParams.set('card', cardId);
      } else {
        url.searchParams.delete('card');
      }
      // If opened via file:// locally, display canonical production format
      if (url.protocol === 'file:') {
        return cardId && cardId !== 'ktc'
          ? `https://www.kingtideconcepts.com/card?card=${cardId}`
          : 'https://www.kingtideconcepts.com';
      }
      return url.toString();
    } catch (e) {
      return 'https://www.kingtideconcepts.com';
    }
  }

  // =========================================================================
  // 5. INTRO ANIMATION CONTROLLER (~2.2s "KING TIDE" WAVE REVEAL)
  // =========================================================================
  function startIntroSequence() {
    clearTimeout(introTimer);
    body.classList.add('is-intro-playing');
    introOverlay.classList.remove('is-complete');

    // Clone & restart SVG / CSS keyframe animations cleanly on replay
    const animatedNodes = introOverlay.querySelectorAll(
      '.halo-draw, .halo-pulse, .intro-logo-mask, .intro-word, .intro-tagline, .intro-progress, .intro-progress-bar, .intro-waves'
    );
    animatedNodes.forEach((el) => {
      el.style.animation = 'none';
      // Trigger reflow
      void el.offsetWidth;
      el.style.animation = '';
    });

    introTimer = setTimeout(() => {
      finishIntroSequence();
    }, 2200);
  }

  function finishIntroSequence() {
    clearTimeout(introTimer);
    introOverlay.classList.add('is-complete');
    body.classList.remove('is-intro-playing');
    checkAutoRedirect();
  }

  // Optional auto-redirect if QR URL includes ?redirect=auto or ?redirect=true
  function checkAutoRedirect() {
    const params = new URLSearchParams(window.location.search);
    const redirectParam = (params.get('redirect') || '').toLowerCase();
    if (redirectParam === 'auto' || redirectParam === 'true' || redirectParam === '1') {
      let secondsLeft = parseInt(params.get('delay') || '4', 10);
      if (isNaN(secondsLeft) || secondsLeft < 1) secondsLeft = 4;

      redirectBanner.hidden = false;
      redirectCountdownEl.textContent = String(secondsLeft);

      clearInterval(redirectInterval);
      redirectInterval = setInterval(() => {
        secondsLeft -= 1;
        if (secondsLeft <= 0) {
          clearInterval(redirectInterval);
          window.location.href = activeProfile.website || 'https://www.kingtideconcepts.com';
        } else {
          redirectCountdownEl.textContent = String(secondsLeft);
        }
      }, 1000);
    }
  }

  if (cancelRedirectBtn) {
    cancelRedirectBtn.addEventListener('click', () => {
      clearInterval(redirectInterval);
      redirectBanner.hidden = true;
      showToast('Auto-redirect paused — take your time!');
    });
  }

  skipIntroBtn.addEventListener('click', finishIntroSequence);
  replayIntroBtn.addEventListener('click', () => {
    cardFlipper.classList.remove('is-flipped');
    flipCardBtnText.textContent = 'Flip Card';
    startIntroSequence();
  });

  // =========================================================================
  // 6. ONE-TAP VCARD (.VCF) GENERATOR & DOWNLOAD
  // =========================================================================
  function downloadVCard(profile) {
    const nowIso = new Date().toISOString();
    const lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `N:${profile.lastName || 'Concepts'};${profile.firstName || 'King Tide'};;;`,
      `FN:${profile.name}`,
      'ORG:King Tide Concepts',
      `TITLE:${profile.role}`,
      `EMAIL;TYPE=INTERNET,WORK:${profile.email}`,
      `URL:${profile.website}`,
      'ADR;TYPE=WORK:;;Atlantic Coast;Wilmington;NC;;USA',
      `NOTE:${profile.bio} | Built for momentum — https://www.kingtideconcepts.com`,
      `REV:${nowIso}`
    ];

    if (profile.phone) {
      lines.splice(7, 0, `TEL;TYPE=CELL,VOICE:${profile.phone}`);
    }

    lines.push('END:VCARD');
    const vcfContent = lines.join('\r\n');

    const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const safeName = profile.name.replace(/[^a-z0-9]/gi, '_');
    link.href = url;
    link.setAttribute('download', `KingTideConcepts_${safeName}.vcf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1500);

    showToast(`Saved ${profile.name} (.vcf) to Contacts!`);
  }

  saveVcfBtn.addEventListener('click', () => {
    downloadVCard(activeProfile);
  });

  // =========================================================================
  // 7. 3D CARD FLIP & INTERACTIVE TILT / SPECULAR GLARE
  // =========================================================================
  function toggleCardFlip() {
    const isFlipped = cardFlipper.classList.toggle('is-flipped');
    flipCardBtnText.textContent = isFlipped ? 'Front of Card' : 'Flip Card';
    cardStage.style.transform = '';
  }

  flipCardBtn.addEventListener('click', toggleCardFlip);
  cardFlipHintFront.addEventListener('click', toggleCardFlip);
  cardFlipHintBack.addEventListener('click', toggleCardFlip);

  // Subtle 3D tilt on pointer move (desktop / fine pointer)
  if (window.matchMedia('(pointer: fine)').matches) {
    cardStage.addEventListener('mousemove', (e) => {
      if (cardFlipper.classList.contains('is-flipped')) return;
      const rect = cardStage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      cardFlipper.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      cardGlare.style.setProperty('--glare-x', `${glareX.toFixed(1)}%`);
      cardGlare.style.setProperty('--glare-y', `${glareY.toFixed(1)}%`);
    });

    cardStage.addEventListener('mouseleave', () => {
      if (!cardFlipper.classList.contains('is-flipped')) {
        cardFlipper.style.transform = '';
      }
    });
  }

  // =========================================================================
  // 8. TEAM SWITCHER PILLS & QR / SHARE MODAL
  // =========================================================================
  teamSwitcherPills.addEventListener('click', (e) => {
    const btn = e.target.closest('.switcher-pill');
    if (!btn) return;
    const cardKey = btn.getAttribute('data-card');
    if (TEAM_PROFILES[cardKey]) {
      renderProfile(TEAM_PROFILES[cardKey], true);
      showToast(`Switched to ${TEAM_PROFILES[cardKey].name}`);
    }
  });

  openQrModalBtn.addEventListener('click', () => {
    qrModalTitle.textContent = activeProfile.name;
    shareUrlInput.value = getShareableUrl(activeProfile.id);
    qrModal.hidden = false;
  });

  closeQrModalBtn.addEventListener('click', () => {
    qrModal.hidden = true;
  });

  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      qrModal.hidden = true;
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !qrModal.hidden) {
      qrModal.hidden = true;
    }
  });

  copyUrlBtn.addEventListener('click', async () => {
    const urlToCopy = shareUrlInput.value;
    try {
      await navigator.clipboard.writeText(urlToCopy);
      showToast('Card link copied to clipboard!');
    } catch (err) {
      shareUrlInput.select();
      document.execCommand('copy');
      showToast('Card link copied!');
    }
  });

  nativeShareBtn.addEventListener('click', async () => {
    const shareData = {
      title: `${activeProfile.name} | King Tide Concepts`,
      text: `${activeProfile.name} (${activeProfile.role}) — Build momentum for what comes next.`,
      url: getShareableUrl(activeProfile.id)
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share sheet
      }
    } else {
      copyUrlBtn.click();
    }
  });

  // =========================================================================
  // 9. TOAST NOTIFICATION HELPER
  // =========================================================================
  function showToast(message) {
    clearTimeout(toastTimer);
    toastMessage.textContent = message;
    toastNotification.hidden = false;
    toastTimer = setTimeout(() => {
      toastNotification.hidden = true;
    }, 2800);
  }

  // =========================================================================
  // 10. AMBIENT BIOLUMINESCENT TIDE CANVAS (60FPS PARTICLES + WAVES)
  // =========================================================================
  function initTideCanvas() {
    const canvas = document.getElementById('tideCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particleCount = Math.min(42, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.1 + 0.6,
      vx: (Math.random() - 0.5) * 0.28,
      vy: -Math.random() * 0.35 - 0.1,
      alpha: Math.random() * 0.55 + 0.15,
      isGold: Math.random() > 0.68
    }));

    let tick = 0;

    function renderFrame() {
      ctx.clearRect(0, 0, width, height);
      tick += 0.012;

      // Draw 2 subtle ambient deep-ocean sine waves near bottom
      for (let w = 0; w < 2; w++) {
        ctx.beginPath();
        const baseHeight = height * (0.82 + w * 0.06);
        ctx.moveTo(0, height);
        for (let x = 0; x <= width; x += 24) {
          const y =
            baseHeight +
            Math.sin(x * 0.0045 + tick + w * 1.6) * 18 +
            Math.cos(x * 0.002 - tick * 0.7) * 10;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle =
          w === 0
            ? 'rgba(0, 124, 131, 0.09)'
            : 'rgba(215, 181, 109, 0.05)';
        ctx.fill();
      }

      // Draw floating bioluminescent cyan & golden sand particles
      for (const p of particles) {
        p.x += p.vx + Math.sin(tick + p.y * 0.01) * 0.12;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? `rgba(215, 181, 109, ${p.alpha})`
          : `rgba(56, 238, 248, ${p.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }

  // Initialize Everything
  initFromUrlParams();
  initTideCanvas();
  startIntroSequence();
})();
