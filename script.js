const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 2
        },
        1060: {
            slidesPerView: 3
        }
    }
  });

  const swiper2 = new Swiper('.project-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        620: {
            slidesPerView: 1
        },
        1060: {
            slidesPerView: 1
        }
    }
  });

  // Get elements
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeButton = document.querySelector(".close-button");

// For all video thumbnails
document.querySelectorAll(".video-comp").forEach(video => {
  video.addEventListener("click", function() {
    modal.style.display = "block";
    modalVideo.src = this.src; // Set the clicked video's src to modal video
    modalVideo.play();
    modalVideo.muted = true;
  });
});

// Close the modal
closeButton.addEventListener("click", function() {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0; // Reset video
});

// Close if click outside the video
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }
});


// Get modal elements
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageModalClose = document.getElementById('imageModalClose');

// Function to open modal with clicked image
function openImageModal(src) {
  modalImage.src = src;
  imageModal.style.display = "block";
}

// Close modal when X button clicked
imageModalClose.addEventListener('click', function() {
  imageModal.style.display = "none";
});

// Optional: Close modal if clicked outside image
imageModal.addEventListener('click', function(e) {
  if (e.target === imageModal) {
    imageModal.style.display = "none";
  }
});

  function adjustMainMargin() {
    const header1 = document.getElementsByClassName('header');
    const header = header1[0];
    const mainContent1 = document.getElementsByClassName('home-container');
    const mainContent = mainContent1[0];
    const headerHeight = header.offsetHeight;
    mainContent.style.marginTop = headerHeight + 'px';
  }

  window.addEventListener('load', adjustMainMargin);
  window.addEventListener('resize', adjustMainMargin);
