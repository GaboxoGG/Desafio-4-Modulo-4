const propiedadesVentas = [
    {
        id: 0,
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '2 Habitaciones',
        baños: '2 baños',
        costo: 4000,
        smoke: false,
        pets: true,
    },
        {
        id: 1,
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '1 Habitaciones',
        baños: '1 baños',
        costo: 1200,
        smoke: true,
        pets: true,
    },
        {
        id: 2,
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '5 Habitaciones',
        baños: '3 baños',
        costo: 22500,
        smoke: false,
        pets: false,
    },
        {
        id: 3,
        nombre: 'Casa Rustica',
        src: 'https://www.aarquiteta.com.br/blog/wp-content/uploads/2024/02/casa-rustica02.jpg',
        descripcion: 'Hogar con un estilo clasico',
        ubicacion: '1565 Colinas, Finlandia, CA 91234',
        habitaciones: '2 Habitaciones',
        baños: '1 baños',
        costo: 3200,
        smoke: true,
        pets: true,
    },
        {
        id: 4,
        nombre: 'Isla Privada',
        src: 'https://forbes.es/wp-content/uploads/2023/03/Isla_Venta_04.jpg',
        descripcion: 'Isla de lujo adaptada para la privacidad',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '3 Habitaciones',
        baños: '2 baños',
        costo: 7700,
        smoke: true,
        pets: false,
    }
]


const divVent = document.getElementById("cartav")

const renderVent = ()=> {
    let template = ""
    for (let v of propiedadesVentas){
        template += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${v.src}" class="card-img-top" alt="Imagen del departamento"/>
                    <div class="card-body">
                        <h5 class="card-title">${v.nombre}</h5>
                        <p class="card-text">${v.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i>  ${v.ubicacion}</p>
                        <p>
                            <i class="fas fa-bed"></i>  ${v.habitaciones} |
                            <i class="fas fa-bath"></i> ${v.baños}
                        </p>
                        <p><i class="fas fa-dollar-sign"></i> ${v.costo}</p>
                        <p>${v.smoke == true ? "<span class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</span>" 
                        : "<span class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</span>"}</p>

                        <p>${v.pets == true ? "<span class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</span>" 
                        : "<span class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</span>"}</p>
                    </div>
                </div>
            </div>
        `
    }
    divVent.innerHTML= template
}
renderVent()