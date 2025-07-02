// ===== Add button counter =====
document.querySelectorAll('.category .card .price button').forEach((btn) => {
    btn.addEventListener('click', () => {
      let card = btn.closest('.card');
      if (!card) return;

      // Find or create a counter span inside the card price
      let counter = card.querySelector('.item-count');
      if (!counter) {
        counter = document.createElement('span');
        counter.className = 'item-count';
        counter.style.marginLeft = '8px';
        counter.style.fontWeight = '600';
        counter.style.color = '#ff511c';
        btn.parentNode.appendChild(counter);
        counter.textContent = '1';
      } else {
        // Increase count
        let count = parseInt(counter.textContent);
        counter.textContent = count + 1;
      }
    });
  });

  // ===== Navbar active link toggle =====
  const navLinks = document.querySelectorAll('.nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      navLinks.forEach(l => l.classList.remove('active'));
      e.target.classList.add('active');
    });
  });

  // ===== Sign In / Sign Up alert =====
  document.querySelector('.signin').addEventListener('click', () => {
    alert('Sign In clicked! Implement your sign-in logic here.');
  });

  document.querySelector('.signup').addEventListener('click', () => {
    alert('Sign Up clicked! Implement your sign-up logic here.');
  });


  