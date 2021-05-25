/* eslint-disable no-mixed-operators */
import './style.css';

const TextArea = ({
  title, body, year, netlifyLink, githubLink,
}) => (
  <div className={`text-area ${year && 'about-text-area'}`}>
    <div className="title-and-body">
      {title
      && (
      <h3 className="text-area-title">
        {title}
      </h3>
      )}
      {githubLink
          && (
          <div className="site-links">

            {netlifyLink
          && (
            <a href={netlifyLink}> Netlify </a>
          )}
            {githubLink && (
            <a href={githubLink}> Github Repo </a>
            )}

          </div>
          )}
      {body
      && (
      <p className="text-area-body">
        {body}
      </p>
      )}
    </div>
    {year
    && (
    <p className="text-area-year">
      {year}
    </p>
    )}
  </div>
);

export default TextArea;
