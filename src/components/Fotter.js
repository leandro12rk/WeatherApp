import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-header">
        <p className="title-page-name footer-title">TEMPESTIA</p>
        <a
          href="#"
          rel="noopener noreferrer"
          target="_blank"
          className="footer-link"
          title="GitHub Repository">
          Documentation in <GitHubIcon />
        </a>
      </span>
      <p className="footer-text">
        © 2025 All rights reserved by{" "}
        <a href="https://leandrork12.dev">leandrork12.dev</a>.
      </p>
    </footer>
  );
}
