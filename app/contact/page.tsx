export default function contact() {

    return (
        <div className="divide-y divide-gray-500 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Contact
        </h1> 
        
        <iframe
        //bekijk voorbeeld voor een api met de tempratuur van die locatie
          width="600"
          height="450"
          style={{ border:0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbXv2410OTLFdABW_VeZaMU4DdyWpxsDY
            &q=Boumaboulevard+573,Groningen">
        </iframe>
      </div>
    </div>
    )
}