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
  tecnica: ["🔧 El Emprendedor Artesano", "Emprendes para perfeccionar tu especialidad. Tu fortaleza es la excelencia técnica."],
  directiva: ["🧠 El Fundador Visionario", "Te motiva liderar equipos y construir una organización propia."],
  autonomia: ["🛤 El Autónomo Radical", "Tu libertad es lo primero. Emprendes para no tener jefes ni horarios."],
  seguridad: ["🧱 El Emprendedor Precavido", "Prefieres la estabilidad y el orden antes que asumir riesgos innecesarios."],
  servicio: ["💛 El Emprendedor con Propósito", "Tu motor es generar impacto social. El beneficio es solo un medio."],
  reto: ["🧗 El Emprendedor Aventurero", "Buscas adrenalina y superación constante. Te atraen los desafíos imposibles."],
  vida: ["🧘 El Emprendedor de Vida Plena", "Tu meta es el equilibrio personal. El negocio debe ajustarse a tu bienestar."],
  creatividad: ["🧪 El Creador Imparable", "Emprendes por pasión creativa. Necesitas innovar y dejar tu sello único."]
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
  container.innerHTML = `
    <p class="text-lg font-semibold">Pregunta ${index + 1} de ${questions.length}</p>
    <p class="text-gray-700 mb-4">${q.text}</p>
    <input type="range" min="1" max="10" value="${values[index]}" class="w-full" oninput="document.getElementById('val').textContent = this.value; values[${index}] = parseInt(this.value)">
    <div class="text-center mt-2 text-blue-600 font-bold text-xl"><span id="val">${values[index]}</span>/10</div>
  `;
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === questions.length - 1 ? "Finalizar" : "Siguiente";
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
    const max = Object.entries(score).reduce((a, b) => b[1] > a[1] ? b : a);
    const [key] = max;
    title.textContent = resultados[key][0];
    desc.textContent = resultados[key][1];
    modal.classList.remove("hidden");
  }
};

prevBtn.onclick = () => {
  if (current > 0) {
    current--;
    renderQuestion(current);
  }
};

window.values = values;
renderQuestion(current);
