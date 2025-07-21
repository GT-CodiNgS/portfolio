// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-theme", currentTheme);
  updateDarkModeIcon(currentTheme);

  // Dark mode toggle functionality
  darkModeToggle.addEventListener("click", function () {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateDarkModeIcon(newTheme);
    updateNavbarOnThemeChange();
  });

  function updateDarkModeIcon(theme) {
    const icon = darkModeToggle.querySelector("i");
    if (theme === "dark") {
      icon.className = "fas fa-sun";
    } else {
      icon.className = "fas fa-moon";
    }
  }

  // Navbar scroll effect
  const navbar = document.getElementById("navbar");

  function updateNavbarBackground() {
    const currentTheme = body.getAttribute("data-theme");
    if (window.scrollY > 100) {
      if (currentTheme === "dark") {
        navbar.style.background = "rgba(10, 10, 10, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.98)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)";
      }
    } else {
      if (currentTheme === "dark") {
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
      } else {
        navbar.style.background = "rgba(255, 255, 255, 0.95)";
        navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
      }
    }
  }

  window.addEventListener("scroll", updateNavbarBackground);

  // Update navbar background when theme changes
  function updateNavbarOnThemeChange() {
    updateNavbarBackground();
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Scroll indicator functionality
  document
    .querySelector(".scroll-indicator")
    .addEventListener("click", function () {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

  // Active navigation highlighting
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".skill-card, .project-card, .experience-card, .about-content, .contact-info"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // Contact form handling
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Basic validation
      if (!name || !email || !subject || !message) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }

      if (!isValidEmail(email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      // Show success message (in a real app, you'd send this to a server)
      showNotification(
        "Thank you! Your message has been sent successfully. I'll get back to you soon!",
        "success"
      );

      // Reset form
      this.reset();
    });

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Notification system
  function showNotification(message, type = "info") {
    // Remove existing notifications
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${
              type === "success"
                ? "fa-check-circle"
                : type === "error"
                ? "fa-exclamation-circle"
                : "fa-info-circle"
            }"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${
          type === "success"
            ? "#4CAF50"
            : type === "error"
            ? "#f44336"
            : "#2196F3"
        };
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Close button functionality
    notification
      .querySelector(".notification-close")
      .addEventListener("click", () => {
        notification.remove();
      });

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = "slideOutRight 0.3s ease-out";
        setTimeout(() => notification.remove(), 300);
      }
    }, 5000);
  }

  // Add notification animations to CSS
  const notificationStyle = document.createElement("style");
  notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;
  document.head.appendChild(notificationStyle);

  // Typing effect for hero title with yellow highlight
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = "";

    function type() {
      if (i < text.length) {
        const char = text.charAt(i);

        // Check if we're about to type "Gayas Thasmika"
        if (char === "G" && text.substring(i, i + 13) === "Gayas Thasmika") {
          element.innerHTML += '<span class="highlight">Gayas Thasmika</span>';
          i += 13;
        } else {
          element.innerHTML += char;
          i++;
        }

        setTimeout(type, speed);
      }
    }
    type();
  }

  // Initialize typing effect
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
      typeWriter(heroTitle, originalText, 80);
    }, 1000);
  }

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Skill cards hover effect
  const skillCards = document.querySelectorAll(".skill-card");
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Project cards hover effect
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Experience cards hover effect
  const experienceCards = document.querySelectorAll(".experience-card");
  experienceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Loading animation
  window.addEventListener("load", function () {
    const loadingElements = document.querySelectorAll(".loading");
    loadingElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("loaded");
      }, index * 200);
    });
  });

  // Counter animation for stats
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-item h4");
    counters.forEach((counter) => {
      const target = parseInt(counter.textContent);
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent =
            Math.ceil(current) +
            (counter.textContent.includes("+") ? "+" : "") +
            (counter.textContent.includes("%") ? "%" : "");
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent =
            target +
            (counter.textContent.includes("+") ? "+" : "") +
            (counter.textContent.includes("%") ? "%" : "");
        }
      };
      updateCounter();
    });
  }

  // Trigger counter animation when about section is visible
  const aboutSection = document.querySelector("#about");
  if (aboutSection) {
    const aboutObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    aboutObserver.observe(aboutSection);
  }

  // Mobile menu toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll(".navbar-nav .nav-link");
    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navbarCollapse.classList.remove("show");
      });
    });
  }

  // Add CSS for animations
  const style = document.createElement("style");
  style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: 1rem;
        }
        
        .navbar-nav .nav-link.active {
            color: var(--primary-color) !important;
        }
        
        .navbar-nav .nav-link.active::after {
            width: 100%;
        }
    `;
  document.head.appendChild(style);

  console.log("Portfolio website loaded successfully! 🚀");
});
