import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlickr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const DisplayCompany = ({ companyData, getAge }) => {
  return companyData ? (
    <section className="company-info-container">
      <div className="company-info-subcontainer">
        <div className="company-name">
          <h1>{companyData.name}</h1>
        </div>
        <summary className="company-info-summary">
          <h3>About</h3>
          <i>{companyData.summary}</i>
        </summary>
        <article className="company-info-address">
          <h3>Address</h3>
          <div>{companyData.headquarters.address}</div>
          <div>
            {companyData.headquarters.city}, {companyData.headquarters.state}
          </div>
          <h3>Company Age</h3>
          <div>{getAge(companyData.founded)}</div>
        </article>
        <aside className="company-info-social">
          <div className="social-box">
            <a
              href={companyData.links.website}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faRocket} className={"site"} />
              Site
            </a>
          </div>
          <div className="social-box">
            <a href={companyData.links.flickr} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFlickr} className={"flickr"} />
              Flickr
            </a>
          </div>
          <div className="social-box">
            <a
              href={companyData.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className={"twitter"} />
              SpaceX
            </a>
          </div>
          <div className="social-box">
            <a
              href={companyData.links.elon_twitter}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className={"twitter"} />
              Elon
            </a>
          </div>
        </aside>
      </div>
    </section>
  ) : null;
};

export default DisplayCompany;
