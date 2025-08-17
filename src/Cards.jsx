import Card from "./Card.jsx"
import { Link } from "react-router-dom"
import project_overviews from "./data/projects_overview.json"
import "./card.css"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from "react"
import Autoplay from 'embla-carousel-autoplay'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function Cards() {
    
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true}, [Autoplay({ stopOnInteraction: false })])

    const scrollPrevious = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollPrev()
        }
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            emblaApi.scrollNext()
        }
    }, [emblaApi])

    return (
        <>
        <div className="embla">
            <h1 className="header"> My Projects </h1>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                {
                    project_overviews.map((card) => (
                        <div className="embla__slide"> 
                            <Link key={card.id} to={`/card/${card.id}`}>
                                <Card title={card.title} cardId={card.id} description={card.description}/>
                            </Link>
                        </div>
                    ))
                }
                </div>
            </div>
            
            <button className="embla__button" onClick={scrollPrevious}> <FaArrowLeft size={30}/> </button>
            <button className="embla__button" onClick={scrollNext}> <FaArrowRight size={30}/> </button>
        </div>
        </>
    );
}

export default Cards;