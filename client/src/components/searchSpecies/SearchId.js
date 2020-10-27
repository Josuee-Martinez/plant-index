import React, { useEffect } from "react";
import { connect } from "react-redux";
import { searchSpeciesById } from "../../actions/searchPlant";
import Carousel from "react-bootstrap/Carousel";

const SearchId = ({
  match,
  searchSpeciesById,
  data: { species, flower, fruit, leaf, bark, habit, other },
}) => {
  useEffect(() => {
    searchSpeciesById(match.params.id);
  }, [searchSpeciesById, match.params.id]);

  return (
    <div>
      {species === null ? (
        ""
      ) : (
        <div className="container">
          {/* <div className="row">
            <div className="col-12"> */}
          <div className="card text-center mt-5">
            <img
              src={species.image_url}
              className="card-img-top deck"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{species.common_name}</h5>
              <p className="card-text">
                Also know as "{species.scientific_name}" is a species of the{" "}
                {species.family.name} family of genus {species.genus}
              </p>
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              Author <span className="right-align">{species.author}</span>
            </li>
            <li className="list-group-item">
              Bibliography{" "}
              <span className="right-align">{species.bibliography}</span>
            </li>
            <li className="list-group-item">
              Family <span className="right-align">{species.family}</span>
            </li>
            <li className="list-group-item">
              Genus <span className="right-align">{species.genus}</span>
            </li>
            <li className="list-group-item">
              Scientific Name
              <span className="right-align">{species.scientific_name}</span>
            </li>
          </ul>
          <div className="card mt-5">
            <div className="center p-4">
              <h5>Flower images</h5>
            </div>
            <Carousel>
              {flower === null
                ? ""
                : flower.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.image_url} className="deck" />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <p>{img.copyright}</p>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
          </div>

          <div className="card mt-5">
            <div className="center p-4">
              <h5>Fruit images</h5>
            </div>
            <Carousel>
              {fruit === null
                ? ""
                : fruit.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.image_url} className="deck" />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <p>{img.copyright}</p>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
          </div>

          <div className="card mt-5">
            <div className="center p-4">
              <h5>Leaf images</h5>
            </div>
            <Carousel>
              {leaf === null
                ? ""
                : leaf.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.image_url} className="deck" />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <p>{img.copyright}</p>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
          </div>

          <div className="card mt-5">
            <div className="center p-4">
              <h5>Bark images</h5>
            </div>
            <Carousel>
              {bark === null
                ? ""
                : bark.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.image_url} className="deck" />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <p>{img.copyright}</p>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
          </div>

          <div className="card mt-5">
            <div className="center p-4">
              <h5>Habit images</h5>
            </div>
            <Carousel>
              {habit === null
                ? ""
                : habit.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.image_url} className="deck" />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <p>{img.copyright}</p>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
          </div>

          <div className="card mt-5">
            <div className="center p-4">
              <h5>Other images</h5>
            </div>
            <Carousel>
              {other === null
                ? ""
                : other.map((img, i) => (
                    <Carousel.Item key={i}>
                      <img src={img.image_url} className="deck" />
                      <Carousel.Caption>
                        <div className="carousel-text">
                          <p>{img.copyright}</p>
                        </div>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
            </Carousel>
          </div>
          <div className="card mt-4 p-4">
            <div className="center">
              <h5>Other sources</h5>
            </div>
            {species.sources.map((item, i) => (
              <p key={i}>
                <a href={item.url}>{item.url}</a>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.searchSpecies,
});

export default connect(mapStateToProps, { searchSpeciesById })(SearchId);
