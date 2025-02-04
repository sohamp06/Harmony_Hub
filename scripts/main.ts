/*
Name: Soham Patel
Date: March 28, 2024
*/

// Using TypeScript for the home page
let slideIndex: number = 0;

// function showSlides for mySlides and dot
function showSlides(): void {
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    const dots: HTMLCollectionOf<Element> = document.getElementsByClassName("dot");

    // using for loop to display length of slides
    for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        (dots[i] as HTMLElement).className = (dots[i] as HTMLElement).className.replace(" active", "");
    }


    (slides[slideIndex - 1] as HTMLElement).style.display = "block";
    (dots[slideIndex - 1] as HTMLElement).className += " active";

    setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    const projectsData: { title: string; description: string; imageUrl: string; }[] = [
        { title: 'ICE 1', description: 'Description for Project 1', imageUrl: 'Assignment2/images/ice1.jpg' },
        { title: 'Project 2', description: 'Description for Project 2', imageUrl: 'project2.jpg' },
    ];

    let projectsPerPage: number = 2;
    let currentIndex: number = 0;

    // Function to create HTML elements for project cards
    function createProjectCard(project: { title: string; description: string; imageUrl: string; }): HTMLElement {
        const projectCard: HTMLElement = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imageUrl}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        return projectCard;
    }

    // Function to display projects on the page
    function displayProjects(): void {
        const portfolioSection: HTMLElement | null = document.getElementById('portfolio');
        if (portfolioSection) {
            for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projectsData.length; i++) {
                const projectCard: HTMLElement = createProjectCard(projectsData[i]);
                portfolioSection.appendChild(projectCard);
            }
        }
    }

    const loadMoreBtn: HTMLElement | null = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        // Event listener for the "Load More" button
        loadMoreBtn.addEventListener('click', () => {
            currentIndex += projectsPerPage;
            displayProjects();
        });
    }

    displayProjects();

    // Function to open modal and display team member information
    function openModal(name: string, role: string, description: string): void {
        const modalName: HTMLElement | null = document.getElementById('modal-name');
        const modalRole: HTMLElement | null = document.getElementById('modal-role');
        const modalDescription: HTMLElement | null = document.getElementById('modal-description');
        const modal: HTMLElement | null = document.getElementById('modal');

        if (modalName && modalRole && modalDescription && modal) {
            modalName.innerText = name;
            modalRole.innerText = role;
            modalDescription.innerText = description;
            modal.style.display = 'flex';
        }
    }

    // Function to close modal
    function closeModal(): void {
        const modal: HTMLElement | null = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const teamMembers: NodeListOf<Element> = document.querySelectorAll('.team-member');

        // Event listener for team member clicks
        teamMembers.forEach(member => {
            member.addEventListener('click', function () {
                const name: string = member.querySelector('h3')?.innerText ?? '';
                const role: string = member.querySelector('p')?.innerText ?? '';
                const description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                openModal(name, role, description);
            });
        });
    });

    // Function to handle login button click
    function handleLogin(): void {
        alert("Login clicked!");
        // Add your login logic here
    }

    // Function to handle register button click
    function handleRegister(): void {
        alert("Register clicked!");
        // Add register logic here
    }

    // Function to check if the user is already logged in
    function checkLoginStatus(): boolean {
        return false;
    }

    // Function to show/hide login and register buttons based on login status
    function toggleAuthButtons(): void {
        console.log('Toggle Auth Buttons called');
        const authButtons: HTMLElement | null = document.getElementById("authButtons");
        const loginBtn: HTMLElement | null = document.getElementById("loginBtn");
        const registerBtn: HTMLElement | null = document.getElementById("registerBtn");

        if (authButtons && loginBtn && registerBtn) {
            if (!checkLoginStatus()) {
                // If User is not logged in, show login and register buttons
                authButtons.style.display = "block";
                loginBtn.style.display = "inline-block";
                registerBtn.style.display = "inline-block";
            } else {
                // If User is logged in, hide login and register buttons
                authButtons.style.display = "none";
            }
        }
    }

    // Calling the function to toggle buttons on page load
    toggleAuthButtons();

    let registeredUsers: any[] = [];

    // Function to check if a username is already taken
    function isUsernameTaken(username: string): boolean {
        return registeredUsers.some(user => user.username === username);
    }

    // Function to clear input placeholder when focused
    function clearPlaceholder(element: HTMLInputElement): void {
        element.placeholder = '';
    }

    // Function to restore input placeholder when blurred
    function restorePlaceholder(element: HTMLInputElement): void {
        element.placeholder = 'Enter ' + element.id.replace(/([A-Z])/g, ' $1').toLowerCase();
    }

    // Function to show success message and hide form
    function showSuccessMessage(message: string, targetId: string): void {
        let successMessage: HTMLElement | null = document.getElementById(targetId);
        let form: HTMLElement | null = document.getElementById(targetId.replace('Message', 'Form'));

        // Hide the form
        if (form) {
            form.style.display = 'none';
        }

        // Show the success message
        if (successMessage) {
            successMessage.textContent = message;
            successMessage.style.display = 'block';
        }
    }
});
