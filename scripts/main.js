/*
Name: Soham Patel
Date: March 28, 2024
*/

"use strict";
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}
document.addEventListener("DOMContentLoaded", function () {
    showSlides();
    const projectsData = [
        { title: 'ICE 1', description: 'Description for Project 1', imageUrl: 'Assignment2/images/ice1.jpg' },
        { title: 'Project 2', description: 'Description for Project 2', imageUrl: 'project2.jpg' },
    ];
    let projectsPerPage = 2;
    let currentIndex = 0;
    function createProjectCard(project) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imageUrl}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        return projectCard;
    }
    function displayProjects() {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
            for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projectsData.length; i++) {
                const projectCard = createProjectCard(projectsData[i]);
                portfolioSection.appendChild(projectCard);
            }
        }
    }
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentIndex += projectsPerPage;
            displayProjects();
        });
    }
    displayProjects();
    function openModal(name, role, description) {
        const modalName = document.getElementById('modal-name');
        const modalRole = document.getElementById('modal-role');
        const modalDescription = document.getElementById('modal-description');
        const modal = document.getElementById('modal');
        if (modalName && modalRole && modalDescription && modal) {
            modalName.innerText = name;
            modalRole.innerText = role;
            modalDescription.innerText = description;
            modal.style.display = 'flex';
        }
    }
    function closeModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    document.addEventListener('DOMContentLoaded', function () {
        const teamMembers = document.querySelectorAll('.team-member');
        teamMembers.forEach(member => {
            member.addEventListener('click', function () {
                const name = member.querySelector('h3')?.innerText ?? '';
                const role = member.querySelector('p')?.innerText ?? '';
                const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                openModal(name, role, description);
            });
        });
    });
    function handleLogin() {
        alert("Login clicked!");
    }
    function handleRegister() {
        alert("Register clicked!");
    }
    function checkLoginStatus() {
        return false;
    }
    function toggleAuthButtons() {
        console.log('Toggle Auth Buttons called');
        const authButtons = document.getElementById("authButtons");
        const loginBtn = document.getElementById("loginBtn");
        const registerBtn = document.getElementById("registerBtn");
        if (authButtons && loginBtn && registerBtn) {
            if (!checkLoginStatus()) {
                authButtons.style.display = "block";
                loginBtn.style.display = "inline-block";
                registerBtn.style.display = "inline-block";
            }
            else {
                authButtons.style.display = "none";
            }
        }
    }
    toggleAuthButtons();
    let registeredUsers = [];
    function isUsernameTaken(username) {
        return registeredUsers.some(user => user.username === username);
    }
    function clearPlaceholder(element) {
        element.placeholder = '';
    }
    function restorePlaceholder(element) {
        element.placeholder = 'Enter ' + element.id.replace(/([A-Z])/g, ' $1').toLowerCase();
    }
    function showSuccessMessage(message, targetId) {
        let successMessage = document.getElementById(targetId);
        let form = document.getElementById(targetId.replace('Message', 'Form'));
        if (form) {
            form.style.display = 'none';
        }
        if (successMessage) {
            successMessage.textContent = message;
            successMessage.style.display = 'block';
        }
    }
});
//# sourceMappingURL=main.js.map