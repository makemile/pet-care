import { Carousel } from "../../components/Carousel/Carrousel";


export const ReviewServiceSection = () => {
    return (
        <>
         <section className="reviewservice-section">
          <h1 className="font-comfortaa text-48 font-bold text-coral_red flex max-w-4xl text-center">
            Here's what pet owners have to say about Fetch! Pet Care...
          </h1>
          <Carousel />
        </section>
        </>
    )
}