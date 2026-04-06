"use client"

import { MapPin, Users, Bed, Bath, Star } from "lucide-react"

export function DestinationsSection() {
  const destinations = [
    {
      name: "AFLORA Tulum",
      location: "Tulum, Quintana Roo",
      image: "/luxury-tulum-resort-pool-oceanview.jpg",
      specs: { area: "65m²", beds: 1, baths: 1, guests: 2 },
      rating: 4.9,
    },
    {
      name: "POLO 54 PH 501",
      location: "Playa del Carmen, Quintana Roo",
      image: "/playa-del-carmen-penthouse-luxury.jpg",
      specs: { area: "98m²", beds: 2, baths: 2, guests: 4 },
      rating: 4.8,
    },
    {
      name: "Los Cabos Premium",
      location: "Baja California Sur",
      image: "/los-cabos-luxury-resort-sunset-ocean.jpg",
      specs: { area: "120m²", beds: 2, baths: 2, guests: 5 },
      rating: 4.9,
    },
    {
      name: "Puerto Vallarta Luxury",
      location: "Jalisco, México",
      image: "/puerto-vallarta-luxury-oceanfront-villa.jpg",
      specs: { area: "85m²", beds: 2, baths: 1, guests: 4 },
      rating: 4.7,
    },
  ]

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Destination <span className="gradient-text">Network</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mexico, Europe and beyond. Examples of participating properties in the WEEK-CHAIN system. Access subject to availability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-background/80 backdrop-blur rounded-md text-xs font-medium">
                  Referencia
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur rounded-md">
                  <Star size={12} className="text-chart-4 fill-chart-4" />
                  <span className="text-xs font-medium">{destination.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-1">{destination.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin size={12} />
                  <span>{destination.location}</span>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{destination.specs.area}</span>
                  <span className="flex items-center gap-1">
                    <Bed size={12} />
                    {destination.specs.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={12} />
                    {destination.specs.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} />
                    {destination.specs.guests}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
          * Los alojamientos mostrados son ejemplos de referencia. No constituyen asignación ni garantía de destinos
          específicos. Acceso mediante Smart Vacational Certificate sujeto a disponibilidad y aprobación.
        </p>
      </div>
    </section>
  )
}
