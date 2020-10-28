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
               <div className="card mt-5">
                  <img
                     src={species.image_url}
                     className="card-img-top img"
                     alt="..."
                  />
                  <div className="card-body center">
                     <h5 className="card-title">{species.common_name}</h5>
                     <p className="card-text">
                        Also know as "{species.scientific_name}" is a species of
                        the {species.family.name} family of genus{" "}
                        {species.genus}
                     </p>
                  </div>
                  <ul className="list-group">
                     <li className="list-group-item">
                        Author{" "}
                        <span className="right-align">{species.author}</span>
                     </li>
                     <li className="list-group-item">
                        Bibliography{" "}
                        <span className="right-align">
                           {species.bibliography}
                        </span>
                     </li>
                     <li className="list-group-item">
                        Family{" "}
                        <span className="right-align">{species.family}</span>
                     </li>
                     <li className="list-group-item">
                        Genus{" "}
                        <span className="right-align">{species.genus}</span>
                     </li>
                     <li className="list-group-item">
                        Scientific Name
                        <span className="right-align">
                           {species.scientific_name}
                        </span>
                     </li>
                  </ul>
               </div>

               <Carousel className="pt-4">
                  {flower === null || flower.length <= 0
                     ? ""
                     : flower.map((img, i) => (
                          <Carousel.Item key={i}>
                             <img
                                src={img.image_url}
                                className="img"
                                alt="species"
                             />
                             <Carousel.Caption>
                                <div className="carousel-text">
                                   <h5>Flower images</h5>
                                   <p>{img.copyright}</p>
                                </div>
                             </Carousel.Caption>
                          </Carousel.Item>
                       ))}
               </Carousel>

               <Carousel className="pt-4">
                  {fruit === null || fruit.length <= 0
                     ? ""
                     : fruit.map((img, i) => (
                          <Carousel.Item key={i}>
                             <img
                                src={img.image_url}
                                className="img"
                                alt="species"
                             />
                             <Carousel.Caption>
                                <div className="carousel-text">
                                   <h5>Fruit images</h5>
                                   <p>{img.copyright}</p>
                                </div>
                             </Carousel.Caption>
                          </Carousel.Item>
                       ))}
               </Carousel>

               <Carousel className="pt-4">
                  {leaf === null || leaf.length <= 0
                     ? ""
                     : leaf.map((img, i) => (
                          <Carousel.Item key={i}>
                             <img
                                src={img.image_url}
                                className="img"
                                alt="species"
                             />
                             <Carousel.Caption>
                                <div className="carousel-text">
                                   <h5>Leaf images</h5>
                                   <p>{img.copyright}</p>
                                </div>
                             </Carousel.Caption>
                          </Carousel.Item>
                       ))}
               </Carousel>

               <Carousel className="pt-4">
                  {bark === null || bark.length <= 0
                     ? ""
                     : bark.map((img, i) => (
                          <Carousel.Item key={i}>
                             <img
                                src={img.image_url}
                                className="img"
                                alt="species"
                             />
                             <Carousel.Caption>
                                <div className="carousel-text">
                                   <h5>Bark images</h5>
                                   <p>{img.copyright}</p>
                                </div>
                             </Carousel.Caption>
                          </Carousel.Item>
                       ))}
               </Carousel>

               <Carousel className="pt-4">
                  {habit === null || habit.length <= 0
                     ? ""
                     : habit.map((img, i) => (
                          <Carousel.Item key={i}>
                             <img
                                src={img.image_url}
                                className="img"
                                alt="species"
                             />
                             <Carousel.Caption>
                                <div className="carousel-text">
                                   <h5>Habit images</h5>
                                   <p>{img.copyright}</p>
                                </div>
                             </Carousel.Caption>
                          </Carousel.Item>
                       ))}
               </Carousel>

               <Carousel className="pt-4">
                  {other === null || other.length <= 0
                     ? ""
                     : other.map((img, i) => (
                          <Carousel.Item key={i}>
                             <img
                                src={img.image_url}
                                className="img"
                                alt="species"
                             />
                             <Carousel.Caption>
                                <div className="carousel-text">
                                   <h5>Other images</h5>
                                   <p>{img.copyright}</p>
                                </div>
                             </Carousel.Caption>
                          </Carousel.Item>
                       ))}
               </Carousel>
               <div className="card mt-4 p-4">
                  <div className="center">
                     <h5>Other sources</h5>
                  </div>
                  {species.sources.map((item, i) => (
                     <p key={i}>
                        <a
                           href={item.url}
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           {item.url}
                        </a>
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
