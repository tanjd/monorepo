import { Timeline } from '@components/Timeline';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '@styles/Home.css';

export function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello! I am Jeddy.</h2>
        <div className="prompt">
          <p>I am passionate about creating value added solutions with like-minded people</p>
          <a href="https://github.com/tanjd">
            <GitHubIcon />
          </a>
          <a href="mailto: example@example.com">
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/tanjeddy/">
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Timeline />
    </div>
  );
}
