document.addEventListener("DOMContentLoaded", () => {
    const data = window.resumeData;
    const app = document.getElementById("resume-app");

    if (!data || !app) {
        console.error("Resume data could not be loaded.");
        return;
    }

    document.title = data.site.title;
    document.documentElement.lang = data.site.language;
    app.innerHTML = renderResume(data);
    initializeInteractions();
});

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function renderResume(data) {
    const enabledSections = data.site.navOrder
        .map((id) => [id, data.sections[id]])
        .filter(([, section]) => section && section.enabled !== false);

    return `
        <div class="container">
            ${renderNavigation(enabledSections)}
            ${renderHeader(data.profile)}
            <main class="main-content">
                ${enabledSections.map(([id, section]) => renderSection(id, section)).join("")}
            </main>
            ${renderFooter(data.footer)}
        </div>
    `;
}

function renderNavigation(sections) {
    return `
        <nav class="navbar" aria-label="简历导航">
            <div class="nav-container">
                ${sections.map(([id, section]) => `
                    <a href="#${escapeHtml(id)}" class="nav-item">${escapeHtml(section.navLabel)}</a>
                `).join("")}
            </div>
        </nav>
    `;
}

function renderHeader(profile) {
    return `
        <header class="header">
            <div class="profile-header">
                <div class="avatar-section">
                    <img src="${escapeHtml(profile.photo)}" alt="${escapeHtml(profile.name)}" class="avatar">
                </div>
                <div class="header-content">
                    <h1 class="name">${escapeHtml(profile.name)} ${escapeHtml(profile.englishName)}</h1>
                    <p class="title">${escapeHtml(profile.headline)}</p>
                    <div class="contact-info">
                        ${profile.contacts.map(renderContact).join("")}
                    </div>
                </div>
            </div>
        </header>
    `;
}

function renderContact(contact) {
    const content = contact.href
        ? `<a href="${escapeHtml(contact.href)}"${isExternalUrl(contact.href) ? ' target="_blank" rel="noopener noreferrer"' : ""}>${escapeHtml(contact.label)}</a>`
        : `<span>${escapeHtml(contact.label)}</span>`;

    return `
        <div class="contact-item">
            ${renderContactIcon(contact.type)}
            ${content}
        </div>
    `;
}

function renderContactIcon(type) {
    const icons = {
        phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        email: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
        location: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
        website: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>'
    };

    return icons[type] || icons.website;
}

function renderSection(id, section) {
    const renderers = {
        overview: renderOverview,
        education: renderEducation,
        papers: renderPapers,
        projects: renderProjects,
        skills: renderSkills,
        honors: renderHonors,
        service: renderService
    };

    return renderers[id] ? renderers[id](id, section) : "";
}

function renderSectionFrame(id, title, content) {
    return `
        <section id="${escapeHtml(id)}" class="section">
            <h2 class="section-title">${escapeHtml(title)}</h2>
            <div class="content-box">${content}</div>
        </section>
    `;
}

function renderOverview(id, section) {
    const content = `
        <div class="overview-intro">
            ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
        </div>
    `;
    return renderSectionFrame(id, section.title, content);
}

function renderEducation(id, section) {
    const content = section.items.map((item) => `
        <div class="timeline-item">
            <div class="timeline-header">
                <h3>${escapeHtml(item.degree)}${item.degreeEnglish ? `<span class="education-english">${escapeHtml(item.degreeEnglish)}</span>` : ""}</h3>
                <span class="date">${escapeHtml(item.date)}</span>
            </div>
            <p class="institution">
                ${renderInstitutionLink(item)}
                <span class="education-separator">|</span>
                <span>${escapeHtml(item.major)}</span>
                ${item.majorEnglish ? `<span class="education-english">${escapeHtml(item.majorEnglish)}</span>` : ""}
            </p>
            ${item.advisor ? `<p class="advisor">${escapeHtml(item.advisor)}</p>` : ""}
        </div>
    `).join("");
    return renderSectionFrame(id, section.title, content);
}

function renderInstitutionLink(item) {
    const institutionText = `${escapeHtml(item.institution)}${item.institutionEnglish ? ` <span class="education-english">${escapeHtml(item.institutionEnglish)}</span>` : ""}`;
    if (!item.institutionUrl) {
        return `<span>${institutionText}</span>`;
    }

    return `<a class="institution-link" href="${escapeHtml(item.institutionUrl)}" target="_blank" rel="noopener noreferrer">${institutionText}</a>`;
}

function renderPapers(id, section) {
    const papers = section.items.map((paper) => `
        <div class="paper-item${paper.highlight ? " highlight" : ""}">
            <p class="paper-title">${escapeHtml(paper.title)}</p>
            <p class="paper-authors">${renderPaperAuthors(paper.authors, section.highlightAuthors)}</p>
            <p class="paper-journal"><strong>${escapeHtml(paper.venue)}</strong>${paper.details ? ` ${escapeHtml(paper.details)}` : ""}</p>
        </div>
    `).join("");
    const content = `
        ${section.note ? `<p class="section-note">${escapeHtml(section.note)}</p>` : ""}
        <div class="paper-list">${papers}</div>
    `;
    return renderSectionFrame(id, section.title, content);
}

function renderPaperAuthors(authors, highlightAuthors = []) {
    return highlightAuthors.reduce((result, author) => {
        const escapedAuthor = escapeHtml(author);
        return result.replaceAll(escapedAuthor, `<strong class="paper-author-self">${escapedAuthor}</strong>`);
    }, escapeHtml(authors));
}

function renderProjects(id, section) {
    const content = section.items.map((project) => `
        <div class="project-item">
            <div class="project-summary">
                <p class="project-source">${escapeHtml(project.source)}</p>
                <h3 class="project-name">${escapeHtml(project.name)}</h3>
                <span class="project-participation">${escapeHtml(project.role)}</span>
            </div>
            <div class="project-content">
                <div class="project-content-header">
                    ${project.roleLabel ? `<p class="project-role">${escapeHtml(project.roleLabel)}</p>` : ""}
                    ${renderProjectImageLink(project.image, project.name)}
                </div>
                <ul>
                    ${project.bullets.map((bullet) => `
                        <li><strong>${escapeHtml(bullet.label)}：</strong>${escapeHtml(bullet.text)}</li>
                    `).join("")}
                </ul>
            </div>
        </div>
    `).join("");
    return renderSectionFrame(id, section.title, content);
}

function renderProjectImageLink(image, projectName) {
    if (!image) {
        return "";
    }

    return `<a class="project-image-link" href="${escapeHtml(image.src)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${image.label}：${projectName}`)}">${escapeHtml(image.label)}</a>`;
}

function renderSkills(id, section) {
    const content = `
        <div class="skills-grid">
            ${section.items.map((item) => `
                <div class="skill-item"><strong>${escapeHtml(item.label)}：</strong>${escapeHtml(item.value)}</div>
            `).join("")}
        </div>
    `;
    return renderSectionFrame(id, section.title, content);
}

function renderHonors(id, section) {
    const content = `
        <ul class="honor-list honor-list-standalone">
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
    `;
    return renderSectionFrame(id, section.title, content);
}

function renderService(id, section) {
    const content = `
        <div class="service-list">
            ${section.items.map((item) => `
                <div class="service-item"><strong>${escapeHtml(item.label)}：</strong>${escapeHtml(item.value)}</div>
            `).join("")}
        </div>
    `;
    return renderSectionFrame(id, section.title, content);
}

function renderFooter(footer) {
    return `
        <footer class="footer">
            <p>© ${new Date().getFullYear()} ${escapeHtml(footer.owner)} | ${escapeHtml(footer.affiliation)} | <a href="${escapeHtml(footer.homepageUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(footer.homepageLabel)}</a></p>
        </footer>
    `;
}

function isExternalUrl(url) {
    return /^https?:\/\//i.test(url);
}

function initializeInteractions() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                block: "start"
            });
        });
    });

    document.querySelectorAll(".contact-item").forEach((item) => {
        item.addEventListener("click", (event) => {
            const ripple = document.createElement("span");
            const rect = item.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = `${size}px`;
            ripple.style.height = `${size}px`;
            ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
            ripple.classList.add("ripple");
            item.appendChild(ripple);
            window.setTimeout(() => ripple.remove(), 600);
        });
    });
}
