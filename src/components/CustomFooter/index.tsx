import React, {JSX} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function CustomFooter(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <footer className="custom-footer">
      {/* Top section with CTA and social icons */}
      <div className="footer-cta-section">
        <div className="container">
          <div className="footer-cta-content">
            <h3 className="footer-cta-text">
              Got questions?
            </h3>
            <h3>
              <Link to="/get-in-touch" className="footer-cta-link">
                Feel free to reach out.
              </Link>
            </h3>
            
            <ul className="footer-social-links">
              <li className="footer-social-link">
                <a href="https://instagram.com/artificial.poets" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"/>
                  </svg>
                </a>
              </li>
              <li className="footer-social-link">
                <a href="https://www.facebook.com/artificialpoets" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"/>
                  </svg>
                </a>
              </li>
              <li className="footer-social-link">
                <a href="https://www.youtube.com/@artificialpoets" target="_blank" rel="noreferrer noopener" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"/>
                  </svg>
                </a>
              </li>
              <li className="footer-social-link">
                <a href="https://www.tiktok.com/@artificialpoets" target="_blank" rel="noreferrer noopener" aria-label="TikTok">
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z"/>
                  </svg>
                </a>
              </li>
              <li className="footer-social-link">
                <a href="https://www.x.com/@artificialpoets" target="_blank" rel="noreferrer noopener" aria-label="X">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c0.793,0.47,1.671,0.812,2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main footer with three columns */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-columns">
            {/* Column 1: Company Info */}
            <div className="footer-column">
              <div className="footer-logo">
                <Link to="/" className="footer-logo-link">
                  <img 
                    src="https://artificialpoets.com/wp-content/uploads/2024/09/artificial-poets-logo.svg" 
                    alt="Artificial Poets Logo" 
                    className="footer-logo-img"
                  />
                </Link>
              </div>
              <p className="footer-company-info">
                <strong>Artificial Poets, Inc.</strong><br />
                131 Continental Dr #Suite 305<br />
                Newark, DE 19713<br />
                United States
              </p>
            </div>

            {/* Column 2: Pages */}
            <div className="footer-column">
              <nav className="footer-nav">
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <Link to="/" className="footer-nav-link">Home</Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/docs/getting-started" className="footer-nav-link">Getting Started</Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/docs/ai-providers/" className="footer-nav-link">AI Providers</Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/docs/guides/before-you-start" className="footer-nav-link">Guides</Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/docs/changelog" className="footer-nav-link">Changelog</Link>
                  </li>
                  <li className="footer-nav-item">
                    <Link to="/docs/contributing" className="footer-nav-link">Contributing</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Column 3: Social Media */}
            <div className="footer-column">
              <div className="footer-social-text">
                <p><a href="https://instagram.com/artificial.poets" target="_blank" rel="noreferrer noopener">Instagram</a></p>
                <p><a href="https://www.facebook.com/artificialpoets" target="_blank" rel="noreferrer noopener">Facebook</a></p>
                <p><a href="https://www.youtube.com/@artificialpoets" target="_blank" rel="noreferrer noopener">YouTube</a></p>
                <p><a href="https://www.tiktok.com/@artificialpoets" target="_blank" rel="noreferrer noopener">TikTok</a></p>
                <p><a href="https://www.x.com/@artificialpoets" target="_blank" rel="noreferrer noopener">X</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 