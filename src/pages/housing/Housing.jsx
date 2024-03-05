import React from "react";
import { useParams } from "react-router-dom";
import './housing.scss';
import housingData from '../../data/housing.json';
import Slider from "../../components/slider/Slider";
import Tag from "../../components/tag/Tag";
import Star from "../../components/star/Star";
import Collapse from "../../components/collapse/Collapse";
import NotFound from "../notFound/NotFound";

export default function Housing() {

    const { id } = useParams();

    const selectedHousing = housingData.find((housing) => housing.id === id);

    if (!selectedHousing) {
        return <NotFound />
    }

    return (
        <main className="housing">
            <Slider images={selectedHousing.pictures}/>
            <div className="housing__infos">
                <div className="housing__presentation">
                    <div className="housing__infos--title">
                        <h2 className="housing__title">{selectedHousing.title}</h2>
                        <p className="housing__location">{selectedHousing.location}</p>
                    </div>
                    <div className="housing__tags">
                        {selectedHousing.tags.map((tag, id) => (
                            <Tag key={id} content={tag}/>
                        ))}
                    </div>
                </div>
                <div className="housing__infos--owner">
                    <div className="owner">
                        <div className="owner__name">
                            {selectedHousing.host.name.split(' ').map((nameSplit, id) => (
                                <p className="name" key={id}>{nameSplit}</p>
                            ))}
                        </div>
                        <div className="owner__image">
                            <img src={selectedHousing.host.picture} alt="Propriétaire du logement" />
                        </div>        
                    </div>
                    <div className="housing__stars">
                        {[...Array(5)].map((star, id) => (
                            <Star key={id} active={id < selectedHousing.rating}/>
                        ))}
                    </div>
                </div>                
            </div>
            <div className="collapses collapses__housing">  
                <Collapse styles="collapse__housing" title="Description">
                    <p>{selectedHousing.description}</p>
                </Collapse>
                <Collapse styles="collapse__housing" title="Equipements">
                    <ul className="collapse__list">
                        {selectedHousing.equipments.map((equipement, id) => (
                            <li className="collapse__item" key={id}>{equipement}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </main>
    );
};