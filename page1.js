const filterButtons = document.querySelectorAll('.filter-btn');
      const items = document.querySelectorAll('.item');

      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              const category = button.getAttribute('data-category');

              // Update button styles
              filterButtons.forEach(btn => btn.classList.remove('btn-primary'));
              filterButtons.forEach(btn => btn.classList.add('btn-outline-primary'));
              button.classList.remove('btn-outline-primary');
              button.classList.add('btn-primary');

              // Filter items
              items.forEach(item => {
                  if (category === 'all' || item.getAttribute('data-category') === category) {
                      item.style.display = 'block';
                  } else {
                      item.style.display = 'none';
                  }
              });
          });
      });

      