import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mx-56 text-xs">
      <div>
        <i className="fab fa-facebook mx-2"></i>
        <i className="fab fa-instagram mx-2"></i>
      </div>
      <div className="flex justify-between my-4">
        <ul>
          <li className="my-2">
            <Link to="/">Audio & Subtitles</Link>
          </li>
          <li className="my-2">
            <Link to="/">Media Center</Link>
          </li>
          <li className="my-2">
            <Link to="/">Privacy</Link>
          </li>
          <li className="my-2">
            <Link to="/">Contact Us</Link>
          </li>
        </ul>
        <ul>
          <li className="my-2">
            <Link to="/">Audio Description</Link>
          </li>
          <li className="my-2">
            <Link to="/">Investor Relations</Link>
          </li>
          <li className="my-2">
            <Link to="/">Legal Notice</Link>
          </li>
        </ul>
        <ul>
          <li className="my-2">
            <Link to="/">Help Center</Link>
          </li>
          <li className="my-2">
            <Link to="/">Jobs</Link>
          </li>
          <li className="my-2">
            <Link to="/">Cookie Preferences</Link>
          </li>
        </ul>
      </div>
      <div>
        <span>© 1997-2022 Netflix, Inc</span>
        <span>7fae175d-5472-417f-a8b0-6f76ed263ff8</span>
      </div>
    </footer>
  );
};
