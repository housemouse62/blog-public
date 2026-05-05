function NavBar({ sections, active, onChange }) {
  return (
    <nav>
      <div className="nav-bar">
        {sections?.map((section) => (
          <a
            key={section}
            href="#"
            className={active === section ? "active" : ""}
            aria-current={active === section ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              onChange(section);
            }}
          >
            {section}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
