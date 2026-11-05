// Perfiles oficiales de MT Tours & Transfers. Son los mismos que declara `sameAs`
// en el JSON-LD de index.html: si cambias uno, cámbialo también allí.
export const socialProfiles = [
  { name: "Facebook", href: "https://www.facebook.com/MTTransfer" },
  { name: "Instagram", href: "https://www.instagram.com/mt_transfers/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/mttransfers/" },
]

const icons = {
  Facebook: (
    <path
      fill="currentColor"
      d="M14 8h2V5h-2.5C11.3 5 10 6.4 10 8.6V11H8v3h2v6h3v-6h2.2l.4-3H13V9c0-.6.3-1 1-1z"
    />
  ),
  Instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </>
  ),
  LinkedIn: (
    <>
      <circle cx="6.6" cy="6.8" r="1.7" fill="currentColor" />
      <rect x="5.1" y="9.6" width="3" height="9" fill="currentColor" />
      <path
        fill="currentColor"
        d="M10.5 9.6h2.8v1.3c.5-.9 1.6-1.5 3-1.5 2.6 0 3.2 1.7 3.2 4v4.2h-3v-3.8c0-1-.2-1.9-1.4-1.9-1.2 0-1.6.9-1.6 1.9v3.8h-3z"
      />
    </>
  ),
}

function SocialLinks({ variant = "header" }) {
  return (
    <div className={`social-links social-links-${variant}`}>
      {socialProfiles.map(({ name, href }) => (
        <a
          key={name}
          className={`social-${name.toLowerCase()}`}
          href={href}
          target="_blank"
          rel="me noopener noreferrer"
          aria-label={`${name} de MT Tours & Transfers`}
          title={name}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
            {icons[name]}
          </svg>
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
