import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const DisplayCrew = ({ crewData, limit, increaseLimit, updateCrewLike }) => {
  return (
    <section className="crew-container">
      <div className="crew-subcontainer">
        {crewData
          ? crewData.slice(0, limit).map((item) => {
              return (
                <div key={item.id} className="crew-card">
                  <img
                    src={item.image}
                    onClick={() => updateCrewLike(item.id)}
                    alt={item.name}
                  />
                  <div className="crew-card-info">
                    <div className="text-box">
                      <div>{item.name}</div>
                      <div>{item.agency}</div>
                      <div>
                        <a
                          href={item.wikipedia}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Wikipedia
                        </a>
                      </div>
                    </div>
                    <div className="like-box">
                      {item.liked ? <FontAwesomeIcon icon={faFire} /> : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
      {crewData && limit <= crewData.length ? (
        <div className="center-div">
          <button onClick={increaseLimit}>show more</button>
        </div>
      ) : null}
    </section>
  );
};

export default DisplayCrew;
