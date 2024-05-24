barra = document.querySelector(".barra");
barra.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}


const servicios = {
  peluqueria: [
    {"servicio": "Cortes", "precio": "$2500"},
    {"servicio": "Coloraciones", "precio": "$4500"},
    {"servicio": "Tratamientos capilares", "precio": "$5000"},
    {"servicio": "Peinados", "precio": "$3000"}
  ],
  maquillaje_y_peinado: [
    {"servicio": "Artístico", "precio": "$8000"},
    {"servicio": "Social", "precio": "$7000"},
  ],
  pestañas_y_cejas: [
    {"servicio": "Lifting", "precio": "$3200"},
    {"servicio": "Permanente de pestañas", "precio": "$3500"},
    {"servicio": "TIntura de cejas y pestañas", "precio": "$2800"},
    {"servicio": "Laminado de cejas", "precio": "$3000"},
  ],
  gabinete_de_manos: [
    {"servicio": "Semipermanentes", "precio": "$3800"},
    {"servicio": "Diseños", "precio": "$3000"},
    {"servicio": "Kapping", "precio": "$3500"},
    {"servicio": "Manicura tradicional", "precio": "$3000"}
  ],
  barberia: [
    {"servicio": "Mechas", "precio": "$8000"},
    {"servicio": "Permanente de Rulos", "precio": "9000"},
    {"servicio": "Recorte de barbas", "precio": "$4000"},
    {"servicio": "Cortes", "precio": "$2000"}
  ],

};

const generarFilas = (servicios, tableId) => {
  const table = document.getElementById(tableId);
  const tbody = table.querySelector('tbody');
  servicios.forEach(item => {
    const filas = document.createElement('tr');
    filas.innerHTML = `<td>${item.servicio}</td><td>${item.precio}</td>`;
    tbody.appendChild(filas);
  });
}

generarFilas(servicios.peluqueria, 'peluqueriaTable');
generarFilas(servicios.maquillaje_y_peinado, 'maquillaje_y_peinadoTable');
generarFilas(servicios.pestañas_y_cejas, 'pestañas_y_cejasTable');
generarFilas(servicios.gabinete_de_manos, 'gabinete_de_manosTable');
generarFilas(servicios.barberia, 'barberiaTable');