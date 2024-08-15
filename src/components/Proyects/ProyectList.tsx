import { Proyect } from "./Proyect";

export default function ProyectList() {
    return (
        <div className="proyectos">
            <h2 style={{textAlign:"center", marginTop:"3%"}}>Proyectos realizados</h2>
            <hr />
            <Proyect 
                imagen="/static/BuenSabor/buenSabor.jpg" 
                alt="Buen Sabor E-Commerce" 
                imagen2="/static/BuenSabor/BSGraficos.jpg"
                alt2="Buen Sabor Panel Administrativo"
                imagen3="/static/BuenSabor/BSEmpresa.jpg"
                alt3="Buen Sabor panel de empresas"
                nombre="Buen Sabor - Proyecto Final"
                desc={`✅Roles\n
                ✅Envío de mail\n
                       ✅Gestion de imagenes con Cloudinary\n
                       ✅Seguridad con Auth0\n
                       ✅Mapeo mediante Mapstruct\n
                       ✅Patron Facade\n
                       ✅Estadísticas\n
                       ✅Excepciones personalizadas\n
                       ✅Generar Excel\n
                       ✅Facturas en formato pdf`}
                repo="https://github.com/gonzaaherre/BuenSaborBack2"/>
            <hr />
            <Proyect 
                imagen="/static/Muni/muniOferta.png" 
                alt="Sector de Ofertas " 
                imagen2="/static/Muni/muniLogin.png" 
                alt2="Login del proyecto" 
                imagen3="/static/Muni/muniStats.png" 
                alt3="Estadisticas de Usuarios" 
                nombre="Bolsa de Trabajo - SEMILLERO LATAM" 
                desc={`✅Roles\n
                        ✅Estadísticas\n
                        ✅Login tradicional\n
                        ✅JWT`}
                repo=""/>
            <hr />
            <Proyect 
                imagen="/static/Ecos/ecosHome.png" 
                alt="Pagina Home proyecto ECOsistema" 
                imagen2="/static/Ecos/ecosLogin.png" 
                alt2="Login del proyecto ECOsistema" 
                imagen3="/static/Ecos/ecos2.png" 
                alt3="Vista Movil" 
                nombre="ECOsistema Red de Impacto - SEMILLERO LATAM" 
                desc={`✅Roles\n
                ✅Estadísticas\n
                ✅OAuth2\n
                ✅JWT\n
                ✅Envío de mails\n
                ✅Gestion de imagenes con Firebase`}
                repo="" />
            <hr />
        </div>
    )
}
