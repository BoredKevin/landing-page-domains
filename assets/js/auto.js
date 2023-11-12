document.getElementById('domain').innerHTML = location.hostname;

const currentYear = new Date().getFullYear();
const email = `info@${location.hostname}`;
document.getElementById('copyright').innerHTML = `© ${currentYear} ${location.hostname} | <a href="mailto:${email}">Contact us</a>`;