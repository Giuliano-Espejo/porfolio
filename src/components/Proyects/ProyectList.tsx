import { Proyect } from "./Proyect";

export default function ProyectList() {
    return (
        <>
            <h2>Proyectos realizados</h2>
            <hr />
            <Proyect imagen="src/assets/BuenSabor/buenSabor.jpg" alt="Buen Sabor E-Commerce" imagen2="src/assets/BuenSabor/BSGraficos.jpg" alt2="Buen Sabor Panel Administrativo" imagen3="src/assets/BuenSabor/BSEmpresa.jpg" alt3="Buen Sabor panel de empresas" nombre="Buen Sabor - Proyecto Final" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!" />
            <hr />
            <Proyect imagen="src/assets/Muni/MuniOferta.png" alt="Sector de Ofertas " imagen2="src/assets/Muni/muniLogin.png" alt2="Login del proyecto" imagen3="src/assets/Muni/MuniStats.png" alt3="Estadisticas de Usuarios" nombre="Bolsa de Trabajo - SEMILLERO LATAM" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!" />
            <hr />
            <Proyect imagen="src/assets/Ecos/ecosHome.png" alt="Pagina Home proyecto ECOsistema" imagen2="src/assets/Ecos/ecosLogin.png" alt2="Login del proyecto ECOsistema" imagen3="src/assets/Ecos/ecos2.png" alt3="Vista Movil" nombre="ECOsistema Red de Impacto - SEMILLERO" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!" />
            <hr />
        </>
    )
}
