import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        - website created by{" "}
        <a
          href="https://github.com/mgrinstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          mgrinstein
        </a>{" "}
        and {" "}
        <a
          href="https://github.com/emmavellard"
          target="_blank"
          rel="noopener noreferrer"
        >
          emmavellard
        </a>{" "}
        using <i>create-react-app</i> -
      </p>
    </footer>
  );
}
