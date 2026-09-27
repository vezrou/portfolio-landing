export default function Button({ children, href, variant = 'primary', size = 'md', className = '' }) {
  const classes = `button button--${variant} button--${size} ${className}`.trim();

  if (href) {
    return <a className={classes} href={href}>{children}</a>;
  }

  return <button className={classes} type="button">{children}</button>;
}
