function revealContact() {
  if (window.location.hash !== '#driver-contact') return;
  const contact = document.getElementById('driver-contact');
  if (!contact) return;
  contact.open = true;
  contact.scrollIntoView({ block: 'center' });
  contact.querySelector('summary').focus({ preventScroll: true });
}
window.addEventListener('hashchange', revealContact);
window.addEventListener('DOMContentLoaded', revealContact);
document.querySelector('.contact-bar__button')?.addEventListener('click', () => {
  if (window.location.hash === '#driver-contact') revealContact();
});
