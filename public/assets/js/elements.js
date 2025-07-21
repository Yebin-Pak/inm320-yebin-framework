
// HEADER

let headerContent = `
            <!-- side nav bar -->
            <aside id="side-bar" class="d-flex flex-column">
                <a href="/" id="logo" class="d-flex justify-content-center align-items-center mb-3 mb-md-0 text-decoration-none">
                    <svg class="bi me-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="16" fill="#3751FF"/>
                        <path d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z" fill="url(#paint0_linear_584_285)"/>
                        <defs>
                            <linearGradient id="paint0_linear_584_285" x1="11" y1="9" x2="23" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.7"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>Dashboard Kit</span>
                </a>
                <ul class="nav flex-column mb-auto">
                    <li class="nav-item">
                        <a href="./index.html" class="nav-link active d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-chart-pie me-4"></i>
                            <span class="m-0">Overview</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="./tickets.html" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-ticket me-4"></i>
                            <span class="m-0">Tickets</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-lightbulb me-4"></i>
                            <span class="m-0">Ideas</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-user-group me-4"></i>
                            <span class="m-0">Contacts</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-user-tie me-4"></i>
                            <span class="m-0">Agents</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-book me-4"></i>
                            <span class="m-0">Articles</span>
                        </a>
                    </li>

                    <hr>

                    <li class="nav-item">
                        <a href="" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-gear me-4"></i>
                            <span class="m-0">Settings</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link d-flex flex-row justify-content-center align-items-center" aria-current="page">
                            <i class="fa-solid fa-award me-4"></i>
                            <span class="m-0">Subscription</span>
                        </a>
                    </li>
                </ul>
            </aside>

            <!-- nav bar -->
            <nav class="navbar d-flex justify-content-between">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Overivew</a>
                </div>
            
                <ul class="nav navbar-nav d-flex flex-row align-items-center" style="height: 44px;">
                    <li>
                        <a href="#">
                            <i class="fa-solid fa-magnifying-glass me-4" style="font-size: 16px;"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="notification">
                            <i class="fa-solid fa-bell" style="font-size: 16px;"></i>
                            <i class="fa-solid fa-circle" style="color: #3751FF; font-size: 5px; border-radius: 2.5px; outline: 1.5px solid #F7F8FC;"></i>
                        </a>
                    </li>

                    <div class="vl"></div>

                    <li id="account">
                        <a href="#" class="d-flex flex-row align-items-center text-decoration-none" style="height: 44px;">
                            <span id="user-name" class="me-3" style="color: #252733;">Jones Ferdinand</span>
                            <picture class="d-flex justify-content-center align-items-center" style="width: 44px; height: 44px; border-radius: 22px; outline: 1.5px solid #DFE0EB; ">
                                <img style="width: 40px; border-radius: 20px;" src="./assets/images/account-image.png" alt="user profile image">
                            </picture>
                        </a>
                    </li>
                </ul>
            </nav>
`;

let siteHeader = document.getElementById("site-header");

siteHeader.innerHTML = headerContent;


// nav-link active
window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';

            // Get all sidebar nav links
            const navLinks = document.querySelectorAll('#side-bar .nav-link');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');

                // Normalize: handle "./tickets.html" vs "tickets.html"
                const normalizedHref = href.replace('./', '');

                if (normalizedHref === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }, 0);
    });