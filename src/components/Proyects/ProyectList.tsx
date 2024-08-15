import { Proyect } from "./Proyect";

export default function ProyectList() {
    return (
        <>
            <h2>Proyectos realizados</h2>
            <hr />
            <Proyect imagen="public/BuenSabor/buenSabor.jpg" alt="Buen Sabor E-Commerce" imagen2="public/BuenSabor/BSGraficos.jpg" alt2="Buen Sabor Panel Administrativo" imagen3="public/BuenSabor/BSEmpresa.jpg" alt3="Buen Sabor panel de empresas" nombre="Buen Sabor - Proyecto Final" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!" repo="https://github.com/gonzaaherre/BuenSaborBack2"/>
            <hr />
            <Proyect imagen="public/Muni/MuniOferta.png" alt="Sector de Ofertas " imagen2="public/Muni/muniLogin.png" alt2="Login del proyecto" imagen3="public/Muni/MuniStats.png" alt3="Estadisticas de Usuarios" nombre="Bolsa de Trabajo - SEMILLERO LATAM" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!" repo=""/>
            <hr />
            <Proyect imagen="public/Ecos/ecosHome.png" alt="Pagina Home proyecto ECOsistema" imagen2="public/Ecos/ecosLogin.png" alt2="Login del proyecto ECOsistema" imagen3="public/Ecos/ecos2.png" alt3="Vista Movil" nombre="ECOsistema Red de Impacto - SEMILLERO" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas exercitationem doloribus reiciendis vitae autem perspiciatis hic quidem, non eligendi numquam modi quisquam enim nemo doloremque eum? Aspernatur, minus laboriosam quaerat fugiat non omnis quidem aliquid sed assumenda saepe amet distinctio commodi sit adipisci dolores beatae fuga mollitia ipsum obcaecati laudantium!" repo="" />
            <hr />
        </>
    )
}
