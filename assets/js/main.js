const questions = [
  // Técnica/Funcional
  { text: "Me siento realizado/a cuando soy reconocido/a por mis conocimientos técnicos.", ancla: "tecnica" },
  { text: "Disfruto perfeccionando mis habilidades en un área específica, incluso si nadie lo nota.", ancla: "tecnica" },
  { text: "Prefiero profundizar en lo que ya sé hacer bien antes que asumir responsabilidades fuera de mi especialidad.", ancla: "tecnica" },
  { text: "La excelencia técnica es más importante para mí que liderar o delegar.", ancla: "tecnica" },

  // Directiva/Gerencial
  { text: "Me interesa asumir roles donde pueda coordinar a otras personas y tomar decisiones importantes.", ancla: "directiva" },
  { text: "Me entusiasma la idea de construir y dirigir una organización propia.", ancla: "directiva" },
  { text: "Disfruto viendo cómo mi visión se implementa a través del trabajo de un equipo.", ancla: "directiva" },
  { text: "Prefiero liderar un proyecto completo que concentrarme en una sola tarea.", ancla: "directiva" },

  // Autonomía
  { text: "Me siento incómodo/a cuando tengo que seguir órdenes sin poder opinar.", ancla: "autonomia" },
  { text: "La independencia personal es más importante que la estabilidad o el prestigio.", ancla: "autonomia" },
  { text: "Aspiro a tener un estilo de vida donde yo decida cómo, cuándo y con quién trabajar.", ancla: "autonomia" },
  { text: "Prefiero un trabajo solitario o independiente, antes que uno jerárquico o con supervisión constante.", ancla: "autonomia" },

  // Seguridad
  { text: "Antes de tomar decisiones importantes, necesito estar seguro/a de que no afectarán mi estabilidad.", ancla: "seguridad" },
  { text: "Emprender me parece viable solo si tengo garantías de que funcionará.", ancla: "seguridad" },
  { text: "Prefiero un ingreso fijo a uno variable, incluso si este último puede ser mayor.", ancla: "seguridad" },
  { text: "Me gustaría emprender un negocio, pero solo si puedo mantener al mismo tiempo mi seguridad financiera.", ancla: "seguridad" },

  // Servicio
  { text: "Mi principal motivación para emprender sería mejorar la vida de otros.", ancla: "servicio" },
  { text: "Me inspira trabajar por un propósito más grande que el beneficio económico.", ancla: "servicio" },
  { text: "No me sentiría completo/a con un negocio que no tenga un impacto social o comunitario.", ancla: "servicio" },
  { text: "Creo que los emprendimientos deben comprometerse activamente con el bienestar común.", ancla: "servicio" },

  // Puro reto
  { text: "Me atraen los proyectos que otros consideran difíciles o imposibles.", ancla: "reto" },
  { text: "Me siento motivado/a cuando tengo que resolver problemas complejos.", ancla: "reto" },
  { text: "Pierdo el interés si no hay obstáculos que superar.", ancla: "reto" },
  { text: "Me encanta competir, incluso conmigo mismo/a, por lograr cosas que no creí posibles.", ancla: "reto" },

  // Estilo de vida
  { text: "Aspiro a un tipo de emprendimiento que me permita vivir en equilibrio.", ancla: "vida" },
  { text: "No sacrificaría mi salud, familia o tiempo libre por el éxito profesional.", ancla: "vida" },
  { text: "Quiero que mi negocio se adapte a mi vida, y no al revés.", ancla: "vida" },
  { text: "Me interesa tener un trabajo que me permita disfrutar de mis pasatiempos y relaciones.", ancla: "vida" },

  // Creatividad
  { text: "Lo que más me entusiasma es tener ideas y convertirlas en realidad.", ancla: "creatividad" },
  { text: "Siento una fuerte necesidad de crear algo único que me represente.", ancla: "creatividad" },
  { text: "Emprender es, para mí, una forma de expresar quién soy.", ancla: "creatividad" },
  { text: "Más que seguir caminos conocidos, prefiero inventar el mío desde cero.", ancla: "creatividad" },
];

const resultados = {
  tecnica: {
    titulo: "🔧 El Emprendedor Artesano",
    descripcion: "Emprendes para perfeccionar tu especialidad. Tu fortaleza es la excelencia técnica.",
    icon: "🛠️",
    frase: "Perfecciona tu arte, tu talento es tu mejor herramienta.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> asesorías técnicas, oficios calificados, consultorías especializadas, manufactura detallista.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Desarrolla una marca personal basada en tu experiencia.</li>
        <li>Haz portafolios o casos de éxito de trabajos anteriores.</li>
        <li>Capacítate constantemente para mantenerte actualizado/a.</li>
      </ul>
      <p><strong>Evita:</strong> delegar demasiado temprano o asumir cargos administrativos sin pasión.</p>
      <p><strong>Te sentirás cómodo en:</strong> entornos técnicos, gremiales o especializados.</p>
    `
  },
  directiva: {
    titulo: "🧠 El Fundador Visionario",
    descripcion: "Te motiva liderar equipos y construir una organización propia.",
    icon: "👔",
    frase: "Lidera con visión, tu mente crea imperios.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> startups escalables, empresas con visión de crecimiento, negocios que impliquen gestión de equipos.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Diseña una misión clara y construye un equipo afín a ella.</li>
        <li>Aprende sobre liderazgo consciente y administración estratégica.</li>
        <li>Haz networking con otros líderes o fundadores.</li>
      </ul>
      <p><strong>Evita:</strong> quedarte en la idea sin definir procesos claros.</p>
      <p><strong>Te sentirás cómodo en:</strong> aceleradoras, incubadoras, pitch o concursos de emprendimiento.</p>
    `
  },
  autonomia: {
    titulo: "🛤 El Autónomo Radical",
    descripcion: "Tu libertad es lo primero. Emprendes para no tener jefes ni horarios.",
    icon: "🧭",
    frase: "Diseña tu propio camino, la ruta es solo tuya.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> freelance, trabajo remoto, microemprendimientos personales.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Define bien tu propuesta de valor y servicios individuales.</li>
        <li>Organiza tus horarios y espacios para mantener autonomía sin caos.</li>
        <li>Utiliza plataformas que te permitan trabajar con independencia (Fiverr, Upwork, etc.).</li>
      </ul>
      <p><strong>Evita:</strong> sobrecargarte por no saber decir “no”.</p>
      <p><strong>Te sentirás cómodo en:</strong> proyectos solistas o en colaboración sin jerarquías rígidas.</p>
    `
  },
  seguridad: {
    titulo: "🧱 El Emprendedor Precavido",
    descripcion: "Prefieres la estabilidad y el orden antes que asumir riesgos innecesarios.",
    icon: "🛡️",
    frase: "La base sólida que construyes hoy, es el éxito del mañana.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> franquicias, comercios establecidos, consultorías con ingresos previsibles.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Elabora un plan financiero detallado y conserva ahorros.</li>
        <li>Emprende en paralelo mientras mantienes tu empleo principal.</li>
        <li>Busca mentorías y modelos de negocio ya testeados.</li>
      </ul>
      <p><strong>Evita:</strong> lanzarte sin calcular o sin modelos probados.</p>
      <p><strong>Te sentirás cómodo en:</strong> programas de apoyo estatal o asociaciones de comercio.</p>
    `
  },
  servicio: {
    titulo: "💛 El Emprendedor con Propósito",
    descripcion: "Tu motor es generar impacto social. El beneficio es solo un medio.",
    icon: "🤝",
    frase: "Transforma vidas con tu causa, tu proyecto puede cambiar el mundo.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> ONG, emprendimientos sociales, fundaciones o iniciativas comunitarias.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Identifica una problemática real en tu comunidad.</li>
        <li>Conecta con redes sociales y aliadas (ONGs, centros vecinales, fundaciones).</li>
        <li>Aplica a fondos públicos para impacto social.</li>
      </ul>
      <p><strong>Evita:</strong> perder el foco en la misión por presión económica.</p>
      <p><strong>Te sentirás cómodo en:</strong> contextos colaborativos, comunitarios o solidarios.</p>
    `
  },
  reto: {
    titulo: "🧗 El Emprendedor Aventurero",
    descripcion: "Buscas adrenalina y superación constante. Te atraen los desafíos imposibles.",
    icon: "🚀",
    frase: "Cada obstáculo es un peldaño más hacia la cima. ¡Sigue subiendo!",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> negocios disruptivos, startups innovadoras, desafíos tecnológicos, concursos.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Inscríbete en retos de innovación y competencias emprendedoras.</li>
        <li>Busca proyectos difíciles que te saquen de la zona de confort.</li>
        <li>Aliéntate a experimentar, medir, ajustar y volver a intentar.</li>
      </ul>
      <p><strong>Evita:</strong> aburrirte o estancarte por falta de desafíos nuevos.</p>
      <p><strong>Te sentirás cómodo en:</strong> ambientes altamente competitivos, tecnológicos o experimentales.</p>
    `
  },
  vida: {
    titulo: "🧘 El Emprendedor de Vida Plena",
    descripcion: "Tu meta es el equilibrio personal. El negocio debe ajustarse a tu bienestar.",
    icon: "🌿",
    frase: "Tu éxito está en vivir bien, no en vivir corriendo.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> emprendimientos lifestyle, slow business, negocios flexibles o nómadas digitales.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Define qué estilo de vida quieres antes de emprender.</li>
        <li>Crea rutinas y hábitos que respeten tus tiempos personales.</li>
        <li>Explora modelos de negocio con tiempo libre integrado.</li>
      </ul>
      <p><strong>Evita:</strong> caer en el activismo sin límites o dejar de priorizar tu salud.</p>
      <p><strong>Te sentirás cómodo en:</strong> negocios remotos, colaborativos o rurales.</p>
    `
  },
  creatividad: {
    titulo: "🧪 El Creador Imparable",
    descripcion: "Emprendes por pasión creativa. Necesitas innovar y dejar tu sello único.",
    icon: "💡",
    frase: "Tu imaginación no tiene límites. Crea, transforma, inspira.",
    guia: `
      <h3 class="font-bold">¿Y ahora qué?</h3>
      <p><strong>Estilo de emprendimiento ideal:</strong> diseño, innovación, desarrollo de productos originales, artes visuales, contenido digital.</p>
      <p><strong>Primeros pasos sugeridos:</strong></p>
      <ul class="list-disc ml-5">
        <li>Haz un diario creativo con ideas recurrentes.</li>
        <li>Protótipa rápido: usa Canva, Figma, prototipos físicos o MVPs.</li>
        <li>Conecta con otras mentes creativas para hacer realidad tus ideas.</li>
      </ul>
      <p><strong>Evita:</strong> sobrecargarte con ideas sin ejecución.</p>
      <p><strong>Te sentirás cómodo en:</strong> entornos creativos, colectivos artísticos, coworks o comunidades de innovación.</p>
    `
  }
};




const container = document.getElementById("question-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const modal = document.getElementById("result-modal");
const title = document.getElementById("result-title");
const desc = document.getElementById("result-description");

let current = 0;
const values = new Array(questions.length).fill(5);

function renderQuestion(index) {
  const q = questions[index];

  // Aplica transición de salida
  container.classList.add("opacity-0", "-translate-x-4", "transition-all", "duration-300");

  setTimeout(() => {
    container.innerHTML = `
      <p class="text-lg font-semibold">Pregunta ${index + 1} de ${questions.length}</p>
      <p class="text-gray-700 mb-4">${q.text}</p>
      <input type="range" min="1" max="10" value="${values[index]}" class="w-full" oninput="document.getElementById('val').textContent = this.value; values[${index}] = parseInt(this.value)">
      <div class="text-center mt-2 text-blue-600 font-bold text-xl"><span id="val">${values[index]}</span>/10</div>
    `;

    // Aplica transición de entrada
    container.classList.remove("opacity-0", "-translate-x-4");
    container.classList.add("opacity-100", "translate-x-0");

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === questions.length - 1 ? "Finalizar" : "Siguiente";
  }, 150);
}

nextBtn.onclick = () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion(current);
  } else {
    const score = {};
    questions.forEach((q, i) => {
      score[q.ancla] = (score[q.ancla] || 0) + values[i];
    });

    // Calcula todos los perfiles ordenados por puntaje
    const scoreEntries = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const key = scoreEntries[0][0];
    const secondKey = scoreEntries[1][0];

    // Mostrar resultado principal
    title.textContent = resultados[key].titulo;
    desc.textContent = resultados[key].descripcion;
    document.getElementById("result-icon").textContent = resultados[key].icon;
    document.getElementById("result-phrase").textContent = resultados[key].frase;
    document.getElementById("result-guidance").innerHTML = resultados[key].guia;

    // Mostrar segundo perfil
    const altElem = document.getElementById("result-alternativo");
    if (altElem) {
      altElem.innerHTML = `
        También tienes una fuerte inclinación hacia:
        <button id="alt-link" class="text-blue-600 underline font-semibold hover:text-blue-800 transition">
          ${resultados[secondKey].icon} ${resultados[secondKey].titulo}
        </button>
      `;
    }

    // Mostrar modal con animación
    modal.classList.remove("hidden");
    setTimeout(() => {
      const modalContent = document.getElementById("modal-content");
      modalContent.classList.remove("opacity-0", "scale-95");
      modalContent.classList.add("opacity-100", "scale-100");

      // 🎉 Lanzar confeti desde ambos lados
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0, y: 0.6 },
        angle: 60
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 1, y: 0.6 },
        angle: 120
      });
    }, 50);
  }
};


document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "alt-link") {
    const altIcon = document.getElementById("alt-result-icon");
    const altTitle = document.getElementById("alt-result-title");
    const altDesc = document.getElementById("alt-result-description");
    const altPhrase = document.getElementById("alt-result-phrase");
    const altGuide = document.getElementById("alt-result-guidance");

    // Usamos el mismo segundoKey que ya calculaste
    const score = {};
    questions.forEach((q, i) => {
      score[q.ancla] = (score[q.ancla] || 0) + values[i];
    });
    const scoreEntries = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const secondKey = scoreEntries[1][0];

    // Asignar datos al segundo modal
    altIcon.textContent = resultados[secondKey].icon;
    altTitle.textContent = resultados[secondKey].titulo;
    altDesc.textContent = resultados[secondKey].descripcion;
    altPhrase.textContent = resultados[secondKey].frase;
    altGuide.innerHTML = resultados[secondKey].guia;

    modal.classList.add("hidden"); // Oculta el modal principal
    // Mostrar modal
    const altModal = document.getElementById("alt-modal");
    altModal.classList.remove("hidden");

    setTimeout(() => {
      document.getElementById("alt-modal-content").classList.remove("opacity-0", "scale-95");
      document.getElementById("alt-modal-content").classList.add("opacity-100", "scale-100");
    }, 50);
  }
});

document.getElementById("close-alt-modal").addEventListener("click", () => {
  const altModal = document.getElementById("alt-modal");
  altModal.classList.add("hidden");
  document.getElementById("alt-modal-content").classList.remove("opacity-100", "scale-100");
  document.getElementById("alt-modal-content").classList.add("opacity-0", "scale-95");

  modal.classList.remove("hidden"); // Vuelve a mostrar el modal principal

});


prevBtn.onclick = () => {
  if (current > 0) {
    current--;
    renderQuestion(current);
  }
};

window.values = values;
renderQuestion(current);

document.getElementById("ver-detalle").addEventListener("click", () => {
  const score = {};
  questions.forEach((q, i) => {
    score[q.ancla] = (score[q.ancla] || 0) + values[i];
  });

  const keys = Object.keys(score);
  const labels = keys.map(ancla => resultados[ancla].icon); // solo íconos
  const data = Object.values(score);
  const colors = ['#60a5fa', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#f97316', '#22d3ee', '#a3e635'];

  // Mostrar lista textual con nombre completo
  //const listContainer = document.getElementById("score-list");
  //listContainer.innerHTML = "";
  //keys.forEach(key => {
  //  listContainer.innerHTML += `<p class="mb-1"><strong>${resultados[key].titulo}:</strong> ${score[key]}/40</p>`;
  //});

  // Abrir modal y preparar gráfico
  const detalleModal = document.getElementById("detalle-modal");
  const detalleContent = document.getElementById("detalle-modal-content");
  detalleModal.classList.remove("hidden");

  setTimeout(() => {
    detalleContent.classList.remove("opacity-0", "scale-95");
    detalleContent.classList.add("opacity-100", "scale-100");

    const ctx = document.getElementById("score-chart").getContext("2d");
    if (window.scoreChart) window.scoreChart.destroy();

    window.scoreChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: 'Puntaje por ancla',
          data,
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: '#3b82f6',
          borderWidth: 2,
          pointBackgroundColor: '#3b82f6'
        }]
      },
      options: {
        responsive: true,
        animation: { duration: 1000 },
        scales: {
          r: {
            beginAtZero: true,
            max: 40,
            ticks: {
              stepSize: 10,
              color: '#4b5563'
            },
            grid: {
              color: '#d1d5db'
            },
            pointLabels: {
              color: '#111827',
              font: { size: 16, weight: '600' }
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (context) => {
                const index = context[0].dataIndex;
                const key = keys[index]; // clave del perfil
                return resultados[key].titulo; // muestra el nombre completo
              },
              label: (context) => `Puntaje: ${context.raw}/40`
            }
          }
        }
      }
    });
  }, 50);
});



// Botón para cerrar modal de detalle
document.getElementById("close-detalle-modal").addEventListener("click", () => {
  const detalleModal = document.getElementById("detalle-modal");
  const detalleContent = document.getElementById("detalle-modal-content");
  detalleModal.classList.add("hidden");
  detalleContent.classList.remove("opacity-100", "scale-100");
  detalleContent.classList.add("opacity-0", "scale-95");
});


document.getElementById("download-pdf").addEventListener("click", () => {
  const pdfElement = document.getElementById("pdf-content");

  const opt = {
    margin: 0.5,
    filename: 'resultado-emprendedor.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(pdfElement).save();
});


