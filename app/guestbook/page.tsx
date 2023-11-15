export default function Guestbook() {

    return (
        <div className="divide-y divide-gray-500 dark:divide-gray-700">
      <div className="space-y-2 pt-5 pb-8 md:space-x-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13">
          Guestbook
        </h1> 
        <iframe
          width="600"
          height="450"
          style={{ border:0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAbXv2410OTLFdABW_VeZaMU4DdyWpxsDY
            &q=Boumaboulevard+573,9723+ZS+Groningen">
        </iframe>
      </div>
    </div>
    )
}