import { Linkedin, Twitter, Mail, Globe, Award, Briefcase } from "lucide-react"

const teamMembers = [
  {
    name: "Mario Gargano",
    role: "Founder & CEO",
    description:
      "Visionario detrás de WEEK-CHAIN, Mario está redefiniendo cómo el mundo accede a experiencias vacacionales premium mediante tecnología blockchain y certificados inteligentes.",
    image: "/professional-italian-man-ceo-portrait-suit-confide.jpg",
    color: "from-rose-500 to-orange-500",
    linkedin: "#",
    twitter: "#",
    email: "mario@week-chain.com",
  },
  {
    name: "Guido Stefano",
    role: "Co-Founder & COO",
    description:
      "Experto en operaciones y estrategia, Guido lidera la expansión global de WEEK-CHAIN asegurando excelencia operativa en cada destino.",
    image: "/professional-italian-man-coo-portrait-business-sui.jpg",
    color: "from-blue-500 to-cyan-500",
    linkedin: "#",
    twitter: "#",
    email: "guido@week-chain.com",
  },
  {
    name: "Simonetta Brun",
    role: "Co-Founder & Directora WEEK-Management",
    description:
      "Especialista en gestión hotelera de lujo, Simonetta asegura experiencias excepcionales y estándares de calidad en todas las propiedades.",
    image: "/professional-italian-woman-director-hotel-manageme.jpg",
    color: "from-emerald-500 to-teal-500",
    linkedin: "#",
    twitter: "#",
    email: "simonetta@week-chain.com",
  },
  {
    name: "Stefano Cionini",
    role: "Abogado Internacional",
    description:
      "Abogado y Consultor Legal Internacional con más de 30 años de experiencia en derecho comercial, contratos y cumplimiento normativo.",
    image: "/professional-italian-lawyer-man-suit-glasses-disti.jpg",
    color: "from-slate-500 to-zinc-600",
    linkedin: "#",
    twitter: "#",
    email: "legal@week-chain.com",
  },
  {
    name: "Corrado Lantieri",
    role: "CIO - Chief Information Officer",
    description:
      "Gestión e implementación de tecnología informática: Blockchain, software, infraestructura cloud y seguridad de datos.",
    image: "/professional-italian-man-cio-technology-officer-su.jpg",
    color: "from-violet-500 to-purple-600",
    linkedin: "#",
    twitter: "#",
    email: "tech@week-chain.com",
  },
  {
    name: "Alessandro Anzani",
    role: "CFO - Chief Financial Officer",
    description:
      "Responsable de la estrategia financiera, planificación y gestión de inversiones de la compañía a nivel global.",
    image: "/professional-italian-man-cfo-finance-officer-suit-.jpg",
    color: "from-amber-500 to-yellow-500",
    linkedin: "#",
    twitter: "#",
    email: "finance@week-chain.com",
  },
  {
    name: "Andrea Salvadego",
    role: "Director de Marca y Comunicación",
    description:
      "Experto en creatividad, diseño gráfico, comunicación y marketing digital. Construye la identidad visual de WEEK-CHAIN.",
    image: "/professional-creative-director-man-marketing-casua.jpg",
    color: "from-pink-500 to-rose-500",
    linkedin: "#",
    twitter: "#",
    email: "marketing@week-chain.com",
  },
]

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Liderazgo <span className="gradient-text">Visionario</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un equipo multidisciplinario con más de 100 años de experiencia combinada en tecnología, hospitalidad,
            finanzas y sistemas de gestión operativa a nivel global.
          </p>
        </div>

        {/* Leadership Row - Founders */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center text-muted-foreground mb-8">Fundadores</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-3xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-border">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-foreground mb-1">{member.name}</h4>
                  <p
                    className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Team Row */}
        <div>
          <h3 className="text-xl font-semibold text-center text-muted-foreground mb-8">Equipo Ejecutivo</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(3).map((member, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Image */}
                <div className="relative mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-xl blur-lg opacity-15 group-hover:opacity-30 transition-opacity`}
                  />
                  <div className="relative overflow-hidden rounded-xl border border-border">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-foreground mb-1">{member.name}</h4>
                  <p
                    className={`text-xs font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-2`}
                  >
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin size={14} />
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Twitter size={14} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">100+</p>
            <p className="text-sm text-muted-foreground">Años de Experiencia Combinada</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">5</p>
            <p className="text-sm text-muted-foreground">Países de Origen</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-chart-4/10 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-chart-4" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">7</p>
            <p className="text-sm text-muted-foreground">Especialidades Distintas</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-chart-3/10 flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6 text-chart-3" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-1">9</p>
            <p className="text-sm text-muted-foreground">Empresas del Ecosistema</p>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-card/50 border border-border rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Transparencia</h4>
            <p className="text-sm text-muted-foreground">
              Información completa sobre disponibilidad, reglas y gestión sin promesas falsas.
            </p>
          </div>
          <div className="bg-card/50 border border-border rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Comunidad</h4>
            <p className="text-sm text-muted-foreground">
              Un sistema donde todos comprenden sus derechos: usuarios, intermediarios y operadores.
            </p>
          </div>
          <div className="bg-card/50 border border-border rounded-2xl p-6 text-center backdrop-blur-sm">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-chart-4/20 to-chart-4/5 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚖️</span>
            </div>
            <h4 className="font-bold text-foreground mb-2">Conformidad</h4>
            <p className="text-sm text-muted-foreground">
              Tecnología de vanguardia cumpliendo NOM-151 y regulación mexicana vigente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
