 // active nav link
 document.addEventListener('DOMContentLoaded', function() {
     const currentPage = window.location.pathname.split('/').pop() || 'homepage.html';
     const navLinks = document.querySelectorAll('.nav-links a');

     // check if we're on the coming-soon page
     const isComingSoonPage = currentPage === 'coming-soon.html';

     // if we're on the coming-soon page, get the original page from URL parameter
     let targetPage = '';
     if (isComingSoonPage) {
         const urlParams = new URLSearchParams(window.location.search);
         targetPage = urlParams.get('page') || '';
     }

     navLinks.forEach(link => {
         const linkPage = link.getAttribute('href');

         // set active class
         if ((isComingSoonPage && linkPage === targetPage) || (!isComingSoonPage && linkPage === currentPage)) {
             link.classList.add('active');
         }
     });

     // toggle mobile navigation
     document.getElementById('navToggle').addEventListener('click', function() {
         document.getElementById('navLinks').classList.toggle('active');
     });

     // handle "coming soon" pages (remove once pages are completed)
     const unfinishedPages = ['style.html', 'impact.html', 'culture.html'];
     // update this array to exclude completed pages

     navLinks.forEach(link => {
         const linkPage = link.getAttribute('href');
         if (unfinishedPages.includes(linkPage)) {
             link.addEventListener('click', function(event) {
                 event.preventDefault();

                 // if we're alr on the coming-soon page, update the url parameter
                 // this prevents navigation issues
                 if (isComingSoonPage) {
                     // update url without reloading the page
                     window.history.pushState({}, '', 'coming-soon.html?page=' + linkPage);

                     // update active class on nav links
                     navLinks.forEach(navLink => {
                         navLink.classList.remove('active');
                         if (navLink.getAttribute('href') === linkPage) {
                             navLink.classList.add('active');
                         }
                     });

                     // optionally update page title or other elements to reflect the "new" page
                     document.title = linkPage.split('.')[0].charAt(0).toUpperCase() + linkPage.split('.')[0].slice(1) + " - Coming Soon - Afro-House";
                 } else {
                     // standard redirect if we're not alr on the coming soon page
                     window.location.href = 'coming-soon.html?page=' + linkPage;
                 }
             });
         }
     });
 });