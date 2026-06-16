import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <Link className="nav-brand" href="/">
          Gage Fulwood
        </Link>
        <div className="nav-links">
          <Link href="/#focus">Focus</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
