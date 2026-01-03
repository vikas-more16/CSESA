// Navigation functionality
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

// Scroll effect on navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");

function activateNavLink() {
  const scrollY = window.pageYOffset + 150; // Offset for navbar height
  let currentSection = "";
  let maxIntersection = 0;

  // Create a map of nav link hrefs to ensure we only check sections with nav links
  const navSectionIds = new Set();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      navSectionIds.add(href.substring(1));
    }
  });

  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    // Only process sections that have corresponding nav links
    if (!navSectionIds.has(sectionId)) return;

    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + sectionHeight;

    // Calculate intersection with viewport (more accurate method)
    const viewportTop = scrollY;
    const intersectionTop = Math.max(sectionTop, viewportTop);
    const intersectionBottom = Math.min(
      sectionBottom,
      viewportTop + window.innerHeight
    );
    const intersection = Math.max(0, intersectionBottom - intersectionTop);

    // Select the section with the maximum intersection
    if (intersection > maxIntersection) {
      maxIntersection = intersection;
      currentSection = sectionId;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const linkHref = link.getAttribute("href");
    if (linkHref && linkHref.substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNavLink);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (target) {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add active class to clicked link
      this.classList.add("active");

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update active state after scroll completes
      setTimeout(() => {
        activateNavLink();
      }, 1000);
    }
  });
});

// Current Year Activities Data (25-26)
const currentYearActivities = [
  {
    title: "EQUATION TO INNOVATION",
    category: "current-year",
    type: "Current Year Activity",
    description:
      "Transforming mathematical concepts into innovative solutions.",
    image: "Assets/25-26Posters/Eqation to innovation.webp",
  },
];

// Last Year Activities Data (24-25)
const lastYearActivities = [
  {
    title: "HEAD START TO WEB DEVELOPMENT",
    category: "last-year",
    type: "Last Year Activity",
    description:
      "Beginner-friendly workshop introducing HTML, CSS, JavaScript and modern web development.",
    image: "Assets/24-25Posters/Webdevlopment.jpg",
  },
  {
    title: "JUNIOR'S JAM",
    category: "last-year",
    type: "Last Year Activity",
    description:
      "An event exclusively for junior students to showcase their skills and creativity.",
    image: "Assets/24-25Posters/Juniorjamp.jpg",
  },
  {
    title: "NIRMITI LITE",
    category: "last-year",
    type: "Last Year Activity",
    description:
      "An innovative event showcasing creativity and technical skills.",
    image: "Assets/24-25Posters/NirmitiLite.jpg",
  },
];

// Team Members Data - Updated for Session 2025-26
const teamData = {
  leadership: [
    {
      name: "Yash Mali",
      role: "President",
      image: "Assets/Images/yashmali.jpeg",
      linkedin: "https://linkedin.com/in/yashpatilmali",
      github: "https://github.com/yashpatilmali",
    },
    {
      name: "Sakshi Deshmukh",
      role: "Vice President",
      image: "Assets/Images/SakshiDeshmukh.jpg",
      linkedin: "https://www.linkdine.com/in/sakshi-deshmukh-99850128b/",
      github: "https://github.com/Sakshideshmukh123",
    },
    {
      name: "Shrushti Raninga",
      role: "Secretary",
      image: "Assets/Images/ShrushtiRaninga.jpg",
      linkedin:
        "https://www.linkedin.com/in/shrushti-raninga-9a6150351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/raningashrushti",
    },
    {
      name: "Vikas More",
      role: "Technical Advisor (Head)",
      image: "Assets/Images/VikasMore.jpeg",
      linkedin: "https://www.linkedin.com/in/vikasmore16/",
      github: "https://github.com/vikas-more16/",
    },
    {
      name: "Sairaj Umbarkar",
      role: "Event Manager (Head)",
      image: "Assets/Images/SairajUmbarkar.jpg",
      linkedin:
        "https://www.linkedin.com/in/sairaj-umbarkar-572b00294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Sairaj575",
    },
    {
      name: "Shruti Mankar",
      role: "Advertising Committee (Head)",
      image: "Assets/Images/ShrutiMankar.jpg",
      linkedin: "https://www.linkedin.com/in/shruti-mankar",
      github: "https://github.com/shrutimankar",
    },
    {
      name: "Vasundhara Thakare",
      role: "Advertising Committee (Head)",
      image: "/Assets/Images/Vasundhara Thakare.jpg",
      linkedin:
        "https://www.linkedin.com/in/vasundhara-thakare-019551294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/@vasu08thakare/",
    },
    {
      name: "Aryan Dewade",
      role: "Graphics Team Member (Head)",
      image: "Assets/Images/AryanDewade.png",
      linkedin: "https://www.linkedin.com/in/aryan-dewade-925b04294",
      github: "https://github.com/aryandewade",
    },
    {
      name: "Swami Deshpande",
      role: "Registration Committee Member (Head)",
      image: "Assets/Images/SwamiDeshpande.jpg",
      linkedin: "https://www.linkedin.com/in/swami-deshpande-719229245",
      github: "https://github.com/swamiD18",
    },
    {
      name: "Vaishnavi Mankhair",
      role: "Registration Committee Member (Head)",
      image: "Assets/Images/VaishnaviMankhair.jpg",
      linkedin: "https://www.linkedin.com/in/vaishnavi-mankhair-860649299",
      github: "#https://github.com/Vaishnavim-04",
    },

    {
      name: "Shubham Dhakre",
      role: "Team Member (Head)",
      image: "Assets/Images/ShubhamDhakre.png",
      linkedin: "https://www.linkedin.com/in/shubham-dhakre-553006329/",
      github: "#https://github.com/ShubhamDhakre",
    },
    {
      name: "Prasad Shinde",
      role: "Treasurer",
      image: "Assets/Images/Prasad Shinde.jpg",
      linkedin: "https://www.linkedin.com/in/prasad-shinde-966847297",
      github: "https://github.com/meprasadshinde",
    },
  ],
  technical: [
    {
      name: "Ayush Agrawal",
      role: "Technical Advisor",
      image: "Assets/Images/AyushAgrawal.JPG",
      linkedin: "https://www.linkedin.com/in/aayush-agrawal-4534762b3/",
      github: "https://github.com/Aayush-7781/Aayush-7781",
    },
    {
      name: "Rahul Paghrut",
      role: "Technical Advisor",
      image: "Assets/Images/RahulPaghrut.png",
      linkedin:
        "https://www.linkedin.com/in/rahul-paghrut-183a6a329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Rahulx90/",
    },
    {
      name: "Vaishnavi Tale",
      role: "Technical Advisor",
      image: "Assets/Images/VaiishnaviTale.png",
      linkedin: "https://www.linkedin.com/in/vaishnavi-tale-49588a356",
      github: "https://github.com/vaiishnavitale19",
    },
    {
      name: "Shivam Aghao",
      role: "Technical Advisor",
      image: "Assets/Images/ShivamAghao.jpg",
      linkedin: "https://www.linkedin.com/in/shivam-aghao-0426j0426j/",
      github: "https://github.com/shivam0426",
    },
  ],
  eventManagement: [
    {
      name: "Dnyaneshwar Bajad",
      role: "Event Manager",
      image: "Assets/Images/DnyaneshwarBajad.jpg",
      linkedin:
        "https://www.linkedin.com/in/dnyanu-bajad-2562b23a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/dnyanubajad7/",
    },
    {
      name: "Ganesh Bari",
      role: "Event Manager",
      image: "Assets/Images/GaneshBari.jpg",
      linkedin: "https://www.linkedin.com/in/ganesh-bari-916906353#",
      github: "https://github.com/Ganeshbari199",
    },
    {
      name: "Pallavi Tade",
      role: "Event Manager",
      image: "Assets/Images/PallaviTade.png",
      linkedin: "https://www.linkedin.com/in/pallavi-tade-0b0a0a347",
      github: "https://github.com/pallavi200623-sourse",
    },
    {
      name: "Shruti Bute",
      role: "Event Manager",
      image: "Assets/Images/ShrutiBute.jpg",
      linkedin: "https://www.linkedin.com/in/shruti-bhute-7b4678353",
      github: "https://github.com/shrutiiibhute06",
    },
    {
      name: "Vedant Tayde",
      role: "Event Manager",
      image: "Assets/Images/Vedant.jpg",
      linkedin:
        "https://www.linkedin.com/in/vedant-deshmukh-bb365a3a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/J-Prachinu51",
    },
  ],
  advertising: [
    {
      name: "Nandan Kulat",
      role: "Advertising Committee Member",
      image: "/Assets/Images/nandan kulat.jpg",
      linkedin:
        "https://www.linkedin.com/in/nandan-kulat-629a27344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/NANDANKULAT129",
    },
    {
      name: "Dhanashri Jain",
      role: "Advertising Committee Member",
      image: "Assets/Images/DhanashriJain.jpg",
      linkedin:
        "https://www.linkedin.com/in/dhanashri-jain-57740b396?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Dhanashrijain303/",
    },
  ],
  graphics: [
    {
      name: "Ritika Chaudhari",
      role: "Graphics Team Member",
      image: "Assets/Images/RitikaChaudhari.jpg",
      linkedin:
        "https://www.linkedin.com/in/ritika-chaudhari-8582a53a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Ritika-06",
    },
    {
      name: "Pavan Gaikwad",
      role: "Graphics Team Member",
      image: "Assets/Images/PawanGayakwad.jpg",
      linkedin:
        "https://www.linkedin.com/in/pavan-gaikwad-660496333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/gaikwad8265",
    },
  ],
  registration: [
    {
      name: "Tushar Patole",
      role: "Registration Committee Member",
      image: "Assets/Images/TusharPatole.jpeg",
      linkedin: "https://www.linkedin.com/in/tushar-patole-a762ab394",
      github: "https://github.com/tusharr2709",
    },
    {
      name: "Shehal",
      role: "Registration Committee Member",
      image: "Assets/Images/Shehal.jpg",
      linkedin: "https://www.linkedin.com/in/snehalrangankar",
      github: "https://github.com/snehalrangankar",
    },
  ],
  members: [
    {
      name: "Pranav Dhurde",
      role: "Member",
      image: "Assets/Images/PranavDhurde.jpg",
      linkedin:
        "https://www.linkedin.com/in/pranav-dhurde-299493335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/pranavDhurde",
    },
    {
      name: "Saurav Dhage",
      role: "Member",
      image: "Assets/Images/SauravDhage.jpg",
      linkedin:
        "https://www.linkedin.com/in/saurav-dhage-5946913a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/saurav0909dhage",
    },
    {
      name: "Krushna Falke",
      role: "Member",
      image: "Assets/Images/KrushnaFalke.jpg",
      linkedin: "https://www.linkedin.com/in/krushna-falke-97b8b232a",
      github: "https://github.com/krushnafalke",
    },
  ],
};

// Render Events
function renderEvents(filter = "last-year") {
  const eventsGrid = document.getElementById("eventsGrid");
  if (!eventsGrid) {
    console.error("Events grid not found");
    return;
  }

  eventsGrid.innerHTML = "";

  let filteredEvents = [];
  if (filter === "current-year") {
    filteredEvents = currentYearActivities || [];
  } else if (filter === "last-year") {
    filteredEvents = lastYearActivities || [];
  } else {
    filteredEvents = [];
  }

  if (filteredEvents.length === 0) {
    eventsGrid.innerHTML = `
            <div class="no-events" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-light);">
                <i class="fas fa-calendar-times" style="font-size: 4rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <h3 style="font-size: 1.5rem; margin-bottom: 10px;">No events found</h3>
                <p>Check back soon for upcoming events!</p>
            </div>
        `;
    return;
  }

  filteredEvents.forEach((event, index) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.style.animationDelay = `${index * 0.1}s`;
    eventCard.style.cursor = "pointer";
    eventCard.setAttribute(
      "data-event",
      JSON.stringify(event).replace(/"/g, "&quot;")
    );
    eventCard.innerHTML = `
            <div class="event-image">
                ${
                  event.image
                    ? `<img src="${event.image}" alt="${event.title}">`
                    : ""
                }
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <span class="event-category">${event.type}</span>
                <p class="event-description">${event.description}</p>
                <div class="event-read-more">
                    <i class="fas fa-arrow-right"></i> Read More
                </div>
            </div>
        `;

    // Add click handler to make event clickable
    (function (eventData) {
      eventCard.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Event clicked:", eventData.title);
        openEventModal(eventData);
      });
    })(event);

    eventsGrid.appendChild(eventCard);
  });
}

// Event Modal Function
function openEventModal(event) {
  // Create modal element if it doesn't exist
  let eventModal = document.getElementById("eventModal");
  if (!eventModal) {
    eventModal = document.createElement("div");
    eventModal.id = "eventModal";
    eventModal.className = "event-modal";
    eventModal.innerHTML = `
            <div class="event-modal-overlay"></div>
            <div class="event-modal-content">
                <button class="event-modal-close" id="eventModalClose">
                    <i class="fas fa-times"></i>
                </button>
                <div class="event-modal-body">
                    <div class="event-modal-image">
                        <img id="eventModalImage" src="" alt="" style="display: none;">
                        <div class="event-modal-badge"></div>
                    </div>
                    <div class="event-modal-info">
                        <h2 class="event-modal-title"></h2>
                        <span class="event-modal-category"></span>
                        <p class="event-modal-description"></p>
                    </div>
                </div>
            </div>
        `;
    document.body.appendChild(eventModal);

    // Add close handlers
    const closeBtn = eventModal.querySelector("#eventModalClose");
    const overlay = eventModal.querySelector(".event-modal-overlay");

    closeBtn.addEventListener("click", closeEventModal);
    overlay.addEventListener("click", closeEventModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && eventModal.classList.contains("active")) {
        closeEventModal();
      }
    });
  }

  // Populate modal with event data
  eventModal.querySelector(".event-modal-badge").textContent = event.type;
  eventModal.querySelector(".event-modal-title").textContent = event.title;
  eventModal.querySelector(".event-modal-category").textContent = event.type;
  eventModal.querySelector(".event-modal-description").textContent =
    event.description;
  const modalImage = eventModal.querySelector("#eventModalImage");
  if (event.image) {
    modalImage.src = event.image;
    modalImage.alt = event.title;
    modalImage.style.display = "block";
  } else {
    modalImage.style.display = "none";
  }

  // Show modal
  eventModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeEventModal() {
  const eventModal = document.getElementById("eventModal");
  if (eventModal) {
    eventModal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Event Filter Functionality - Initialize after DOM loads
function initializeEventFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length === 0) {
    console.warn("Filter buttons not found");
    return;
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderEvents(filter);
    });
  });
}

// Render Leadership Heads (including Technical Heads and Event Managers)
function renderHeads() {
  const headsGrid = document.getElementById("headsGrid");
  if (!headsGrid) return;

  headsGrid.innerHTML = "";

  // Combine leadership, technical heads, and event managers
  const allHeads = [
    ...teamData.leadership,
    ...teamData.technical.filter((member) => member.role.includes("Head")),
    ...teamData.eventManagement.filter((member) =>
      member.role.includes("Head")
    ),
  ];

  allHeads.forEach((member, index) => {
    const headCard = document.createElement("div");
    headCard.className = "head-card";
    headCard.style.animationDelay = `${index * 0.15}s`;
    headCard.innerHTML = `
            <div class="head-image-wrapper">
                <div class="head-image">
                    <img src="${member.image}" alt="${
      member.name
    }" onerror="this.src='https://via.placeholder.com/200x200?text=${member.name
      .split(" ")
      .map((n) => n[0])
      .join("")}'">
                </div>
                <div class="head-glow"></div>
            </div>
            <div class="head-info">
                <h3 class="head-name">${member.name}</h3>
                <p class="head-role">${member.role}</p>
                <div class="head-social">
                    <a href="${
                      member.linkedin
                    }" target="_blank" class="social-link" title="LinkedIn" onclick="event.stopPropagation();">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="${
                      member.github
                    }" target="_blank" class="social-link" title="GitHub" onclick="event.stopPropagation();">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        `;
    headsGrid.appendChild(headCard);

    // Add click handler for photo modal
    const headImage = headCard.querySelector(".head-image");
    headImage.addEventListener("click", (e) => {
      e.stopPropagation();
      openPhotoModal(member);
    });
  });
}

// Render Team Members
function renderTeamMembers() {
  const categories = [
    "technical",
    "eventManagement",
    "advertising",
    "graphics",
    "registration",
    "members",
  ];

  categories.forEach((category) => {
    const categoryElement = document.getElementById(category);
    if (categoryElement) {
      const teamGrid = categoryElement.querySelector(".team-grid");
      teamGrid.innerHTML = "";

      teamData[category].forEach((member) => {
        const memberCard = document.createElement("div");
        memberCard.className = "team-member";
        memberCard.innerHTML = `
                    <div class="member-image" data-member='${JSON.stringify(
                      member
                    ).replace(/'/g, "&#39;")}'>
                        <img src="${member.image}" alt="${
          member.name
        }" onerror="this.src='https://via.placeholder.com/150x150?text=${member.name
          .split(" ")
          .map((n) => n[0])
          .join("")}'">
                    </div>
                    <h4 class="member-name">${member.name}</h4>
                    <p class="member-role">${member.role}</p>
                    <div class="member-social">
                        <a href="${
                          member.linkedin
                        }" target="_blank" class="social-link" title="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="${
                          member.github
                        }" target="_blank" class="social-link" title="GitHub">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                `;
        teamGrid.appendChild(memberCard);

        // Add click handler for photo modal
        const memberImage = memberCard.querySelector(".member-image");
        memberImage.addEventListener("click", (e) => {
          e.stopPropagation();
          openPhotoModal(member);
        });
      });

      // Center grid if it has 2 or 3 members
      const memberCount = teamGrid.children.length;
      if (memberCount === 2 || memberCount === 3) {
        teamGrid.classList.add("center-small-grid");
      }
    }
  });
}

// Photo Modal Functions
function openPhotoModal(member) {
  const modal = document.getElementById("photoModal");
  const modalImage = document.getElementById("modalImage");
  const modalName = document.getElementById("modalName");
  const modalRole = document.getElementById("modalRole");
  const modalSocial = document.getElementById("modalSocial");

  modalImage.src = member.image;
  modalImage.alt = member.name;
  modalName.textContent = member.name;
  modalRole.textContent = member.role;

  modalSocial.innerHTML = `
        <a href="${member.linkedin}" target="_blank" class="social-link" title="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="${member.github}" target="_blank" class="social-link" title="GitHub">
            <i class="fab fa-github"></i>
        </a>
    `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closePhotoModal() {
  const modal = document.getElementById("photoModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".event-card, .team-member, .faculty-card, .vm-card"
  );
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize event filters
  initializeEventFilters();

  // Render heads section
  renderHeads();

  // Render events
  renderEvents("last-year");

  // Render team members
  renderTeamMembers();

  // Add fade-in animation to sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.animation = `fadeInUp 0.8s ease forwards`;
    section.style.animationDelay = `${index * 0.1}s`;
  });

  // Modal Event Listeners
  const modal = document.getElementById("photoModal");
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = modal?.querySelector(".modal-overlay");

  if (modalClose) {
    modalClose.addEventListener("click", closePhotoModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closePhotoModal);
  }

  // Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closePhotoModal();
    }
  });
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-background");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Form validation (if contact form is added later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Console message
console.log(
  "%cCSESA Website",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cDeveloped by Web Development Team, CSESA",
  "color: #6b7280; font-size: 12px;"
);
