import { Proyect } from "./Proyect";

export default function ProyectList() {
    return (
        <div className="proyectos">
            <h2 style={{ textAlign: "center", marginTop: "3%" }}>Proyectos realizados</h2>
            <hr />
            <Proyect
                imagen="/static/msArquitectura.png"
                alt="Arquitectura Microservicios"
                nombre="Sistema de Cursos - Proyecto Personal"
                description="Sistema de gestión de cursos basado en microservicios. Incluye una arquitectura modular que facilita la escalabilidad y mantenimiento del sistema."
                technologies={[
                    "Microservicios",
                    "API Gateway",
                    "Eureka",
                    "Config Server",
                    "OPENFEIGN",
                    "Java",
                    "Spring",
                    "MySql",
                    "PostgreSQL",
                    "Docker"
                ]}
                repo="https://github.com/Giuliano-Espejo/Microservicios" />
            <hr />
            <Proyect
                imagen="/static/trackPosition.gif"
                alt="Gif de demostración"
                nombre="Track Position - Proyecto Personal"
                description="Aplicación en tiempo real para el seguimiento de la ubicación de vehiculos, usando WebSocket para la comunicación instantánea."
                technologies={[
                    "WebSocket",
                    "Leaflet",
                    "Command Line Runner",
                    "Rest Template",
                    "Java",
                    "Spring",
                    "React"
                ]}
                repo="https://github.com/Giuliano-Espejo/trackPosition" />
            <hr />
            <Proyect
                imagen="/static/BuenSabor/buenSabor.jpg"
                alt="Buen Sabor E-Commerce"
                imagen2="/static/BuenSabor/BSGraficos.jpg"
                alt2="Buen Sabor Panel Administrativo"
                imagen3="/static/BuenSabor/BSEmpresa.jpg"
                alt3="Buen Sabor panel de empresas"
                nombre="Buen Sabor - Proyecto Final"
                description="Proyecto Final de Carrera, plataforma de e-commerce para un servicio de comida. Incluye gestión de pedidos, facturación, roles de usuario y estadísticas administrativas."
                technologies={[
                    "Roles",
                    "Envío de correos electrónicos",
                    "Mercado Pago API",
                    "Cloudinary",
                    "Seguridad con Auth0",
                    "Mapstruct",
                    "Estadísticas",
                    "Excepciones personalizadas",
                    "Generar Excel",
                    "Facturas en formato PDF",
                    "Swagger UI",
                    "Java",
                    "Spring",
                    "MySql",
                    "React",
                    "Docker"
                ]}
                repo="https://github.com/gonzaaherre/BuenSaborBack2" />
            <hr />
            <Proyect
                imagen="/static/Ecos/ecosHome.png"
                alt="Pagina Home proyecto ECOsistema"
                imagen2="/static/Ecos/ecosLogin.png"
                alt2="Login del proyecto ECOsistema"
                imagen3="/static/Ecos/ecos2.png"
                alt3="Vista Movil"
                nombre="ECOsistema Red de Impacto - SEMILLERO LATAM"
                description="Plataforma de red de impacto para conectar emprendedores con oportunidades de negocio. Provee estadísticas y herramientas colaborativas."
                technologies={[
                    "Roles",
                    "Estadísticas",
                    "OAuth2",
                    "JWT",
                    "Envío de correos electrónicos",
                    "Firebase",
                    "Swagger UI",
                    "Java",
                    "Spring",
                    "MySql",
                ]}
                repo="" />
            <hr />
            <Proyect
                imagen="/static/Muni/muniOferta.png"
                alt="Sector de Ofertas "
                imagen2="/static/Muni/muniLogin.png"
                alt2="Login del proyecto"
                imagen3="/static/Muni/muniStats.png"
                alt3="Estadisticas de Usuarios"
                nombre="Bolsa de Trabajo - SEMILLERO LATAM"
                description="Plataforma para la gestión de ofertas de trabajo en línea. Incluye gestión de usuarios, roles y autenticación segura."
                technologies={[
                    "Roles",
                    "Estadísticas",
                    "Seguridad",
                    "JWT",
                    "Swagger UI",
                    "Java",
                    "Spring",
                    "MySql"
                ]}
                repo="" />
            <hr />
        </div>
    )
}
