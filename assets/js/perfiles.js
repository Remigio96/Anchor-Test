// perfiles.js
const perfilesData = {
  tecnica: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">🔧 El Emprendedor Artesano</h2>
      <p class="text-gray-700 mb-4">
        Este tipo de emprendedor encuentra su propósito en la maestría técnica y el desarrollo constante de habilidades específicas. 
        Se define por su profundo compromiso con la calidad, la precisión y el perfeccionamiento constante de su área de expertise.
        Para el Emprendedor Artesano, emprender es una vía para convertir su conocimiento en un oficio respetado y diferenciado, donde
        cada proyecto es una extensión de su capacidad técnica y atención al detalle.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características centrales</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Alta valoración de la excelencia técnica por sobre la gestión o el liderazgo.</li>
        <li>Deseo de trabajar en profundidad más que en amplitud.</li>
        <li>Fuerte identidad profesional basada en su especialidad.</li>
        <li>Preferencia por trabajar en proyectos donde pueda controlar la calidad de cada detalle.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Objetivos y aspiraciones</h3>
      <p class="text-gray-700 mb-4">
        El Emprendedor Artesano aspira a ser reconocido por su pericia, a construir una reputación sólida en su rubro y a mantener 
        el control sobre el proceso productivo o el servicio que entrega. Busca autonomía sin sacrificar el estándar de su trabajo. 
        No siempre prioriza el crecimiento rápido, sino la mejora continua.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Entornos ideales de trabajo</h3>
      <p class="text-gray-700 mb-4">
        Se siente más cómodo en espacios donde puede operar con independencia y sin presiones comerciales excesivas.
        Ambientes como talleres propios, estudios técnicos, consultorías especializadas o coworks de nicho son propicios
        para su desarrollo.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Recomendaciones</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Invertir tiempo en desarrollar una marca personal sólida y coherente.</li>
        <li>Construir un portafolio claro y visualmente atractivo con casos de éxito.</li>
        <li>Capacitarse constantemente en nuevas herramientas técnicas o metodologías específicas.</li>
        <li>Evitar asumir responsabilidades administrativas si no representan un interés real.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Riesgos a considerar</h3>
      <p class="text-gray-700">
        Uno de los principales riesgos es volverse demasiado perfeccionista o encerrarse en su propio estándar de calidad,
        dificultando la delegación o colaboración. Puede postergar lanzamientos o decisiones por querer que todo esté 
        “perfecto”.
      </p>
    </section>
  `,

  directiva: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">🧠 El Fundador Visionario</h2>
      <p class="text-gray-700 mb-4">
        El Fundador Visionario es el arquitecto de futuros posibles. Su motivación no está en ejecutar tareas técnicas,
        sino en imaginar organizaciones completas. Se siente naturalmente impulsado a liderar, estructurar y dirigir
        equipos humanos, creando sistemas sostenibles que funcionen más allá de él mismo.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo mueve?</h3>
      <p class="text-gray-700 mb-4">
        Este tipo de emprendedor se inspira en crear cultura, formar talento, expandir su visión y posicionar su
        organización en el mercado. Piensa a lo grande y actúa en consecuencia. Le atraen los desafíos complejos que
        exigen planeación, liderazgo y gestión efectiva de recursos.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características principales</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Alta capacidad de liderazgo y planificación estratégica.</li>
        <li>Visión a largo plazo y pensamiento estructurado.</li>
        <li>Habilidad para delegar, contratar y coordinar talento humano.</li>
        <li>Enfoque en métricas, proyecciones y escalabilidad.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Ámbitos ideales</h3>
      <p class="text-gray-700 mb-4">
        Su mejor desempeño ocurre en ambientes de alto dinamismo, como startups, aceleradoras, ecosistemas de
        innovación, fundaciones u organizaciones emergentes. Le estimula la posibilidad de escalar, generar impacto
        amplio y construir legado organizacional.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Claves para su desarrollo</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Formarse en habilidades blandas, negociación y liderazgo consciente.</li>
        <li>Definir una misión clara y transmitirla al equipo de forma constante.</li>
        <li>Buscar redes de apoyo entre otros líderes y fundadores.</li>
        <li>Conocer los ciclos de vida de una empresa y prever cada etapa.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Puntos de cuidado</h3>
      <p class="text-gray-700">
        Puede caer en la trampa de “ver demasiado lejos” y olvidar la ejecución concreta. También puede sobrecargar a
        su equipo si no estructura tiempos y prioridades. Necesita rodearse de perfiles ejecutores que lo complementen,
        o corre el riesgo de quedar atrapado en la planificación sin resultados tangibles.
      </p>
    </section>
  `,

  autonomia: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">🛤 El Autónomo Radical</h2>
      <p class="text-gray-700 mb-4">
        El Autónomo Radical emprende por necesidad vital de independencia. No busca liderar grandes organizaciones ni convertirse en experto técnico: su principal motivación es el control sobre su tiempo, decisiones y estilo de vida. Para este perfil, la libertad personal vale más que el estatus o la estabilidad económica tradicional.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo define?</h3>
      <p class="text-gray-700 mb-4">
        Su ancla es la autonomía. Rechaza los entornos jerárquicos, los horarios rígidos y las estructuras que limiten su flexibilidad. Tiende a construir microemprendimientos o actividades freelance que le permitan vivir de lo que hace a su manera. Puede ser escritor independiente, creador de contenido, desarrollador freelance, consultor itinerante o microcomerciante digital.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características clave</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Alta tolerancia a la incertidumbre si hay libertad de por medio.</li>
        <li>Capacidad de autogestión y autodisciplina.</li>
        <li>Necesidad profunda de decidir cómo, cuándo y con quién trabajar.</li>
        <li>Motivación por estilo de vida más que por resultados económicos tradicionales.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dónde se siente cómodo</h3>
      <p class="text-gray-700 mb-4">
        Prefiere entornos solitarios o colaborativos sin jerarquía, como coworks, plataformas digitales de servicios independientes (Freelancer, Upwork, Fiverr), proyectos personales sin estructura vertical o cooperativas horizontales. Huye de estructuras burocráticas y se frustra con la supervisión constante.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Sugerencias para crecer</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Establece límites claros entre trabajo y vida personal, ya que la libertad puede confundirse con dispersión.</li>
        <li>Define nichos de mercado donde puedas destacarte sin depender de jefaturas.</li>
        <li>Aprende habilidades de marketing personal: tu nombre es tu marca.</li>
        <li>Crea rutinas flexibles pero estables para evitar agotamiento.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dificultades comunes</h3>
      <p class="text-gray-700">
        La principal amenaza para este perfil es el aislamiento. Al evitar vínculos estructurados, puede perder oportunidades de colaboración o apoyo profesional. También corre el riesgo de sobrecargarse al intentar hacerlo todo por su cuenta. Necesita redes de pares, aunque no jerárquicas, para sostener su bienestar emocional y profesional.
      </p>
    </section>
  `,

  seguridad: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">🧱 El Emprendedor Precavido</h2>
      <p class="text-gray-700 mb-4">
        Este perfil se caracteriza por su profunda necesidad de estabilidad y previsibilidad. El Emprendedor Precavido no emprende por impulso, aventura o rebeldía, sino como una estrategia racional para asegurar su futuro. Planea cuidadosamente cada paso y valora las garantías por sobre la improvisación.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo define?</h3>
      <p class="text-gray-700 mb-4">
        Su ancla es la seguridad. Necesita sentir que sus ingresos, estilo de vida y proyectos no están constantemente en riesgo. A menudo inicia emprendimientos mientras mantiene un empleo estable, o invierte solo cuando hay alta probabilidad de retorno. Busca certezas, respaldo institucional, y modelos probados de negocio.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características clave</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Planeación financiera rigurosa y aversión al riesgo alto.</li>
        <li>Tendencia a buscar estructuras legales, seguros, contratos y regulaciones que respalden su actividad.</li>
        <li>Interés por emprendimientos formales, con base jurídica, previsional y contable sólida.</li>
        <li>Preferencia por soluciones predecibles antes que innovaciones radicales.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dónde se siente cómodo</h3>
      <p class="text-gray-700 mb-4">
        Encuentra confianza en franquicias, asociaciones de comercio, fondos de fomento productivo, asesorías legales y contables, o plataformas de respaldo como CORFO y SERCOTEC. Prefiere modelos de negocio con trayectorias comprobadas, baja rotación de personal y estructuras organizadas.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Sugerencias para crecer</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Complementa tu búsqueda de seguridad con flexibilidad para adaptarte a cambios del entorno.</li>
        <li>Fortalece habilidades digitales que te permitan automatizar procesos y mantener el control.</li>
        <li>Evalúa modelos híbridos (empleo más emprendimiento) como punto de partida.</li>
        <li>Consulta y aprende de experiencias ajenas antes de tomar decisiones clave.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dificultades comunes</h3>
      <p class="text-gray-700">
        Su necesidad de certezas puede paralizarlo frente a decisiones arriesgadas pero necesarias. A menudo posterga la acción esperando el "momento perfecto", lo que puede significar perder oportunidades. También tiende a subestimar el poder de la innovación por temor a desviarse del plan.
      </p>
    </section>
  `,

  servicio: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">💛 El Emprendedor con Propósito</h2>
      <p class="text-gray-700 mb-4">
        Este perfil se mueve por una motivación mayor: dejar una huella positiva en el mundo. No emprende para acumular riqueza o fama, sino para responder a una causa significativa. El Emprendedor con Propósito siente una responsabilidad ética y social que se refleja en cada decisión que toma dentro de su proyecto.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo define?</h3>
      <p class="text-gray-700 mb-4">
        Su ancla central es el servicio. Tiende a orientar sus emprendimientos hacia el bienestar colectivo, la justicia social, la inclusión, la sostenibilidad o la educación. Considera que el éxito no puede medirse solo en ingresos, sino en el impacto que genera en su comunidad o entorno.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características clave</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Alta sensibilidad social y capacidad de empatía con problemáticas reales.</li>
        <li>Tendencia a vincularse con colectivos, redes sociales, comunidades u ONGs.</li>
        <li>Motivación basada en valores: equidad, solidaridad, derechos humanos o medioambiente.</li>
        <li>Preocupación por el impacto ético y ecológico de sus acciones.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dónde se siente cómodo</h3>
      <p class="text-gray-700 mb-4">
        Encuentra un terreno fértil en iniciativas de economía social, fundaciones, cooperativas, emprendimientos sociales, programas de desarrollo comunitario o proyectos educativos. Participa activamente en redes de colaboración y espacios de participación ciudadana.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Sugerencias para crecer</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Equilibra la pasión con sostenibilidad financiera: un propósito necesita respaldo económico.</li>
        <li>Apóyate en datos y métricas de impacto social para visibilizar resultados.</li>
        <li>Fortalece tu narrativa: cuenta historias reales del cambio que generas.</li>
        <li>Postula a fondos públicos o privados que valoren el propósito por sobre el lucro.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dificultades comunes</h3>
      <p class="text-gray-700">
        El exceso de vocación puede hacer que descuide la sostenibilidad del negocio. También puede sobrecargarse emocionalmente al involucrarse demasiado con los beneficiarios o frustrarse cuando los resultados no son inmediatos. Tiende a poner el proyecto por sobre sí mismo, lo que puede afectar su bienestar personal.
      </p>
    </section>
  `,

  reto: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">🚀 El Emprendedor Aventurero</h2>
      <p class="text-gray-700 mb-4">
        Este perfil está impulsado por el deseo constante de superación, de ir más allá de los límites establecidos y demostrar que sí se puede. Para el Emprendedor Aventurero, cada desafío es una oportunidad para crecer, cada obstáculo es una invitación al ingenio, y cada meta cumplida es solo el inicio de una nueva más ambiciosa. Vive para conquistar lo que otros consideran difícil o inalcanzable.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo mueve?</h3>
      <p class="text-gray-700 mb-4">
        El ancla principal es el reto. Se siente más vivo en entornos inciertos, donde hay presión, competencia o dificultad. No busca seguridad, busca adrenalina. Suele estar en la constante búsqueda de su próximo gran proyecto, y le entusiasma la idea de desafiar lo convencional o crear algo disruptivo.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características distintivas</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Alta tolerancia al riesgo y la incertidumbre.</li>
        <li>Orientación a resultados, logros y métricas de rendimiento.</li>
        <li>Capacidad para liderar bajo presión y adaptarse rápidamente a los cambios.</li>
        <li>Valora los escenarios competitivos como campos de entrenamiento personal.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dónde brilla</h3>
      <p class="text-gray-700 mb-4">
        Este tipo de emprendedor se siente cómodo en startups tecnológicas, competencias de innovación, hackathons, procesos de aceleración, entornos de alto crecimiento, empresas disruptivas o sectores emergentes. Disfruta desenvolverse donde pocos se atreven, y se nutre del caos creativo.
      </p>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Recomendaciones para avanzar</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Establece objetivos de mediano plazo, no solo logros inmediatos.</li>
        <li>Evita iniciar múltiples proyectos sin terminar ninguno.</li>
        <li>Busca mentores que te reten intelectualmente y te ayuden a sostener el enfoque.</li>
        <li>Evalúa el impacto de tus decisiones más allá del éxito personal.</li>
      </ul>
      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Riesgos típicos</h3>
      <p class="text-gray-700">
        Puede caer en la trampa de asumir demasiados desafíos sin medir recursos o consecuencias. La necesidad constante de estímulo puede hacerlo abandonar proyectos estables por aburrimiento, o tomar riesgos excesivos sin evaluar la viabilidad. Si no se regula, puede quedar atrapado en un ciclo de inicio-persecución-abandono constante.
      </p>
    </section>
  `,

  vida: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">🌿 El Emprendedor de Vida Plena</h2>
      <p class="text-gray-700 mb-4">
        El Emprendedor de Vida Plena no ve al trabajo como el centro de su existencia, sino como una parte que debe integrarse armónicamente con el resto de su vida. No está dispuesto a sacrificar su bienestar físico, emocional o social por obtener reconocimiento, éxito económico o estatus. Cree firmemente en que un buen emprendimiento es aquel que permite vivir bien, no aquel que consume todo su tiempo y energía.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo motiva?</h3>
      <p class="text-gray-700 mb-4">
        Su principal motivación es el equilibrio. El ancla que define su perfil es el deseo de integrar su trabajo con su estilo de vida ideal. Este emprendedor no quiere estar atado a horarios rígidos, ambientes tóxicos o metas que lo obliguen a vivir con estrés crónico. Busca libertad de agenda, flexibilidad geográfica, y una rutina donde pueda priorizar el tiempo con su familia, la salud mental, y actividades que le llenen el alma.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características del perfil</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Altamente consciente de la importancia del descanso, los límites y la salud personal.</li>
        <li>No mide el éxito únicamente en ingresos, sino en calidad de vida.</li>
        <li>Evita ambientes laborales rígidos, demandantes o altamente competitivos.</li>
        <li>Tiende a rechazar modelos de negocio que impliquen jornadas extenuantes.</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Entornos ideales para emprender</h3>
      <p class="text-gray-700 mb-4">
        Los espacios más adecuados para este perfil son aquellos que permiten autonomía organizacional: emprendimientos remotos, slow business, oficios creativos, servicios personalizados, turismo consciente, educación holística, terapias alternativas, o cualquier rubro que le permita decidir el ritmo y volumen de trabajo. También puede desarrollarse en modelos nómadas digitales o negocios familiares flexibles.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Recomendaciones para potenciar su camino</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Diseña tu negocio desde tus valores, no desde el mercado tradicional.</li>
        <li>Establece rutinas que respeten tus límites personales sin desconectarte del compromiso.</li>
        <li>Conecta con otros emprendedores que compartan una visión sustentable del trabajo.</li>
        <li>Busca herramientas digitales que te ayuden a automatizar procesos y ahorrar tiempo.</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Riesgos frecuentes</h3>
      <p class="text-gray-700">
        A veces, por cuidar tanto su paz, puede postergar decisiones estratégicas o evitar situaciones que exigen tensión o exposición. También corre el riesgo de subvalorar su trabajo por querer mantener precios bajos o no expandirse. Es fundamental que aprenda a equilibrar su bienestar con la sostenibilidad económica del negocio.
      </p>
    </section>
  `,

  creatividad: `
    <section class="perfil">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">💡 El Creador Imparable</h2>
      <p class="text-gray-700 mb-4">
        El Emprendedor Creativo es un alma inquieta, impulsada por una necesidad profunda de innovar, imaginar y dejar una huella única en el mundo. No se conforma con seguir fórmulas probadas ni repetir modelos existentes: su motor principal es crear algo que nunca antes ha sido visto. Este perfil se caracteriza por un pensamiento divergente, una curiosidad permanente y una fuerte conexión emocional con sus ideas.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">¿Qué lo mueve?</h3>
      <p class="text-gray-700 mb-4">
        Su ancla es la creatividad. Este tipo de emprendedor siente una urgencia por dar forma a conceptos originales, productos innovadores o experiencias únicas. Emprender no es solo una fuente de ingresos, sino una vía para expresar su identidad, canalizar su sensibilidad y provocar cambios significativos desde una perspectiva distinta. Donde otros ven obstáculos, este perfil ve posibilidades. Donde otros temen arriesgar, el Creador Imparable encuentra un nuevo lienzo.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Características del perfil</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Posee una visión singular que muchas veces escapa a lo convencional.</li>
        <li>Es persistente en sus ideas, incluso si el entorno no las valida de inmediato.</li>
        <li>Fluctúa entre el entusiasmo desbordante y la autocrítica intensa.</li>
        <li>Se siente motivado por los procesos creativos más que por los resultados económicos.</li>
        <li>Explora múltiples disciplinas, tecnologías y referentes para nutrir sus ideas.</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Entornos ideales para emprender</h3>
      <p class="text-gray-700 mb-4">
        El Creador Imparable florece en espacios donde hay libertad para experimentar: estudios de diseño, proyectos artísticos, desarrollo de productos originales, producción de contenido digital, marcas personales disruptivas, emprendimientos culturales o tecnológicos. Le favorece participar en laboratorios de innovación, coworks creativos, hackatones o residencias artísticas. El contacto con otras mentes creativas lo potencia exponencialmente.
      </p>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Recomendaciones para desarrollar su potencial</h3>
      <ul class="list-disc ml-6 text-gray-700 space-y-2">
        <li>Haz un registro diario de ideas, conceptos, esbozos o inspiraciones.</li>
        <li>Define una estructura mínima que te ayude a concretar tus proyectos sin perder fluidez.</li>
        <li>Rodéate de colaboradores que respeten tu visión pero que también aporten foco y gestión.</li>
        <li>Prototipa lo antes posible, aunque sea en baja fidelidad: ver tu idea tangible te impulsará a avanzar.</li>
        <li>Busca comunidades donde tu creatividad sea valorada como una fuerza productiva.</li>
      </ul>

      <h3 class="text-xl font-semibold text-gray-800 mt-4 mb-2">Dificultades frecuentes</h3>
      <p class="text-gray-700 mb-4">
        Uno de los grandes desafíos de este perfil es pasar de la idea a la ejecución. Muchas veces, el Creador Imparable queda atrapado en la fase de exploración o perfeccionamiento y posterga la validación o el lanzamiento. También puede dispersarse entre múltiples proyectos sin cerrar ciclos. Para evitarlo, es clave trabajar en metodologías ágiles y hábitos de concreción, así como buscar mentores que impulsen sus proyectos sin limitar su esencia.
      </p>

      <p class="text-gray-700">
        Su creatividad es su mayor fortaleza, pero también puede ser su mayor trampa si no aprende a canalizarla con foco. Sin embargo, cuando logra equilibrar visión y acción, el Creador Imparable se convierte en una fuente inagotable de innovación, capaz de transformar industrias y abrir nuevos caminos donde nadie más había mirado.
      </p>
    </section>
  `
};

// Script para renderizar los perfiles activos
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-key]");
  const container = document.getElementById("perfil-container");

  const activeProfiles = new Set();

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const perfil = button.getAttribute("data-key");

      // Toggle estado activo
      if (activeProfiles.has(perfil)) {
        activeProfiles.delete(perfil);
        button.classList.remove("bg-blue-600", "text-white");
        button.classList.add("bg-white", "text-blue-600", "border", "border-blue-600");
      } else {
        activeProfiles.add(perfil);
        button.classList.add("bg-blue-600", "text-white");
        button.classList.remove("bg-white", "text-blue-600", "border", "border-blue-600");
      }

      // Limpiar contenedor
      container.innerHTML = "";

      // Renderizar perfiles seleccionados con animación, justificado y separador
      activeProfiles.forEach(p => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = perfilesData[p];

        const section = tempDiv.querySelector("section");

        // Aplicar justificado y animación
        section.classList.add("text-justify", "transition-all", "duration-700", "ease-out", "opacity-0", "translate-y-4");

        container.appendChild(section);

        // Forzar render y luego mostrar transición
        requestAnimationFrame(() => {
          section.classList.remove("opacity-0", "translate-y-4");
          section.classList.add("opacity-100", "translate-y-0");
        });

        // Separador decorativo
        const hr = document.createElement("hr");
        hr.className = "border-t-2 border-gray-300 my-10 w-2/3 mx-auto opacity-50";
        container.appendChild(hr);
      });

      // Si no hay ninguno, muestra un mensaje
      if (activeProfiles.size === 0) {
        container.innerHTML = `
          <p class="text-center text-gray-500 mt-6">Selecciona uno o más perfiles para visualizar su descripción completa.</p>
        `;
      }
    });
  });
});

