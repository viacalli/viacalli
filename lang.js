// Viacalli — Language System
// Usage: include this script in every HTML page, add data-i18n="key" to elements

const TRANSLATIONS = {

  // ── SHARED NAV & FOOTER ──
  'nav.home':    { en: 'Home',    es: 'Inicio' },
  'nav.tours':   { en: 'Tours',   es: 'Tours' },
  'nav.about':   { en: 'About',   es: 'Nosotros' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'footer.copy': { en: '© 2025 Viacalli — Mexico City', es: '© 2025 Viacalli — Ciudad de México' },

  // ── INDEX ──
  'index.hero.tag':      { en: 'Mexico City', es: 'Ciudad de México' },
  'index.hero.h1a':      { en: 'The city', es: 'La ciudad' },
  'index.hero.h1b':      { en: 'beyond postcards', es: 'más allá de las postales' },
  'index.hero.sub':      { en: 'Intimate cultural experiences for curious minds seeking a deeper connection with Mexico City.', es: 'Experiencias culturales íntimas para mentes curiosas que buscan una conexión más profunda con la Ciudad de México.' },
  'index.hero.cta1':     { en: 'Explore our tours →', es: 'Ver nuestros tours →' },
  'index.hero.cta2':     { en: 'Begin Your Journey', es: 'Comienza tu experiencia' },
  'index.strip.exp':     { en: 'curated experiences', es: 'experiencias curadas' },
  'index.strip.guests':  { en: 'max guests per tour', es: 'personas máx. por tour' },
  'index.strip.lang':    { en: 'bilingual guide', es: 'guía bilingüe' },
  'index.about.eyebrow': { en: 'Our approach', es: 'Nuestro enfoque' },
  'index.about.h2a':     { en: 'Not sightseeing.', es: 'No es turismo.' },
  'index.about.h2b':     { en: 'Close reading.', es: 'Es interpretación.' },
  'index.about.p':       { en: 'Viacalli is built for cultural travelers who want genuine depth. Each tour is a guided interpretation — of an artwork, a building, a neighborhood, a moment in Mexican history.', es: 'Viacalli está hecho para viajeros culturales que buscan profundidad real. Cada tour es una interpretación guiada — de una obra, un edificio, un barrio, un momento de la historia mexicana.' },
  'index.about.btn':     { en: 'Meet your guide', es: 'Conoce a tu guía' },
  'index.quote':         { en: '"Every artistic expression in this city is part of a larger conversation about Mexico"', es: '"Toda expresión artística en esta ciudad forma parte de una conversación más grande sobre México"' },
  'index.quote.meta':    { en: '— The premise behind every Viacalli tour', es: '— La premisa detrás de cada tour de Viacalli' },
  'index.tours.h2':      { en: 'Our experiences', es: 'Nuestras experiencias' },
  'index.tours.btn':     { en: 'See all tours', es: 'Ver todos los tours' },

  // Tour preview cards
  'tour.frida.p':        { en: 'The human stories behind the paintings — a conversation-driven encounter with Frida\'s life and home.', es: 'Las historias detrás de las pinturas — un encuentro íntimo con la vida y el hogar de Frida.' },
  'tour.bellas.p':       { en: 'Rivera, Siqueiros, Orozco, Tamayo — revolution and identity painted across Mexico\'s finest walls.', es: 'Rivera, Siqueiros, Orozco, Tamayo — revolución e identidad pintadas en los mejores muros de México.' },
  'tour.munal.p':        { en: 'Mexico\'s visual history inside one of the city\'s most elegant buildings — beyond dates and attributions.', es: 'La historia visual de México dentro de uno de los edificios más elegantes de la ciudad — más allá de fechas y atribuciones.' },
  'tour.antro.p':        { en: 'From the Mexica and Maya to modern identity — the human stories behind the objects that shaped a nation.', es: 'De los mexicas y mayas a la identidad moderna — las historias detrás de los objetos que forjaron una nación.' },
  'tour.barragan.p':     { en: 'Light, color, silence, and texture — architecture as contemplation in a lesser-known Barragán masterpiece.', es: 'Luz, color, silencio y textura — la arquitectura como contemplación en una obra maestra poco conocida de Barragán.' },
  'tour.food.p':         { en: 'Hidden gems, local classics, and the stories behind the flavors that define Mexico City\'s identity.', es: 'Joyas escondidas, clásicos locales y las historias detrás de los sabores que definen la identidad de la ciudad.' },
  'tour.photo.p':        { en: 'A relaxed, guided session across carefully chosen locations — authentic images, no posing required.', es: 'Una sesión relajada por locaciones cuidadosamente elegidas — imágenes auténticas, sin poses forzadas.' },
  'card.learnmore':      { en: 'Learn more →', es: 'Ver más →' },

  // ── TOURS PAGE ──
  'tours.eyebrow':       { en: 'Experiences', es: 'Experiencias' },
  'tours.h1':            { en: 'Our tours', es: 'Nuestros tours' },
  'tours.sub':           { en: 'Eight curated experiences, each designed around a different way of seeing — and understanding — Mexico City.', es: 'Ocho experiencias curadas, cada una diseñada alrededor de una forma distinta de ver — y entender — la Ciudad de México.' },

  // Tour cards
  'tour.frida.badge':    { en: 'Museum', es: 'Museo' },
  'tour.frida.desc':     { en: 'Far more than a conventional museum visit. This experience approaches Frida through the human stories behind the paintings and the atmosphere of the home she carefully preserved — a conversation-driven encounter with the life, contradictions, and enduring power of one of Mexico\'s most iconic figures.', es: 'Mucho más que una visita convencional al museo. Esta experiencia se acerca a Frida a través de las historias humanas detrás de sus pinturas y la atmósfera del hogar que preservó con tanto cuidado — un encuentro íntimo con la vida, las contradicciones y el poder perdurable de una de las figuras más icónicas de México.' },
  'tour.frida.footer':   { en: 'Perfect for art historians, cultural travelers, and anyone moved by Frida\'s story.', es: 'Ideal para historiadores del arte, viajeros culturales y quienes se conmueven con la historia de Frida.' },

  'tour.bellas.badge':   { en: 'Art History', es: 'Historia del Arte' },
  'tour.bellas.desc':    { en: 'Home to some of the most powerful murals ever painted — Rivera, Siqueiros, Orozco, Tamayo. This experience goes beyond the surface to explore what these works meant in their time, and what they still say today about revolution, identity, and the idea of Mexico.', es: 'Hogar de algunos de los murales más poderosos jamás pintados — Rivera, Siqueiros, Orozco, Tamayo. Esta experiencia va más allá de la superficie para explorar lo que estas obras significaron en su tiempo y lo que aún dicen hoy sobre la revolución, la identidad y la idea de México.' },
  'tour.bellas.footer':  { en: 'Perfect for art historians, cultural travelers, and anyone moved by political muralism.', es: 'Ideal para historiadores del arte, viajeros culturales y quienes se conmueven con el muralismo político.' },

  'tour.munal.badge':    { en: 'Art History', es: 'Historia del Arte' },
  'tour.munal.desc':     { en: 'Inside one of the most elegant historic buildings in the city, this experience focuses not on dates and attributions, but on the stories and symbolism embedded in the collection. Watch Mexican art evolve alongside the country itself — from colonial influence to modernization and national identity.', es: 'Dentro de uno de los edificios históricos más elegantes de la ciudad, esta experiencia se enfoca no en fechas ni atribuciones, sino en las historias y el simbolismo de la colección. La evolución del arte mexicano junto con el país mismo — de la influencia colonial a la modernización y la identidad nacional.' },
  'tour.munal.footer':   { en: 'Ideal for curious travelers wanting to understand Mexico\'s visual and cultural history.', es: 'Ideal para viajeros curiosos que quieren entender la historia visual y cultural de México.' },

  'tour.antro.badge':    { en: 'History', es: 'Historia' },
  'tour.antro.desc':     { en: 'An intimate, passion-driven visit through the civilizations that shaped Mexico — from the Mexica and Maya to the complex arc of conquest, independence, and modern identity. We focus on the human stories behind the objects, the ideas that transformed a nation, and the living connections between ancient and contemporary Mexico.', es: 'Una visita íntima y apasionada por las civilizaciones que forjaron México — de los mexicas y mayas al complejo arco de la conquista, la independencia y la identidad moderna. Nos enfocamos en las historias humanas detrás de los objetos, las ideas que transformaron una nación y las conexiones vivas entre el México antiguo y el contemporáneo.' },
  'tour.antro.footer':   { en: 'For anyone who wants to understand where Mexico comes from — and where it\'s going.', es: 'Para quienes quieren entender de dónde viene México — y hacia dónde va.' },

  'tour.barragan.badge': { en: 'Architecture', es: 'Arquitectura' },
  'tour.barragan.desc':  { en: 'Discover the quiet beauty and emotional depth of Casa Ortega — one of the lesser-known residential masterpieces connected to Barragán\'s vision. Through light, color, silence, and texture, this intimate experience explores architecture as contemplation, not spectacle. We\'ll discuss his influence on modern design and the cultural context of mid-century Mexico.', es: 'Descubre la belleza silenciosa y la profundidad emocional de Casa Ortega — una de las obras residenciales menos conocidas de la visión de Barragán. A través de la luz, el color, el silencio y la textura, esta experiencia íntima explora la arquitectura como contemplación, no como espectáculo. Hablaremos de su influencia en el diseño moderno y el contexto cultural del México de mediados del siglo XX.' },
  'tour.barragan.footer':{ en: 'Designed for travelers genuinely interested in architecture, design, and cultural history.', es: 'Diseñado para viajeros genuinamente interesados en arquitectura, diseño e historia cultural.' },

  'tour.food.badge':     { en: 'Food & Culture', es: 'Gastronomía y Cultura' },
  'tour.food.desc':      { en: 'Experience Mexico City through its flavors — from beloved local classics to hidden neighborhood gems. This isn\'t a list of stops; it\'s a guided conversation about how food reflects the city\'s history, identity, and creativity. Small groups, thoughtful tastings, and places most visitors would never find on their own.', es: 'Experimenta la Ciudad de México a través de sus sabores — desde los clásicos locales hasta joyas escondidas. No es una lista de paradas; es una conversación guiada sobre cómo la comida refleja la historia, identidad y creatividad de la ciudad. Grupos pequeños, degustaciones reflexivas y lugares que la mayoría de los visitantes nunca encontrarían solos.' },
  'tour.food.footer':    { en: 'For curious eaters who want to understand a city through what it eats.', es: 'Para curiosos gastronómicos que quieren entender una ciudad a través de lo que come.' },

  'tour.photo.badge':    { en: 'Photography', es: 'Fotografía' },
  'tour.photo.desc':     { en: 'A relaxed, professionally guided session designed to feel natural, personal, and effortless. Together we\'ll explore carefully selected locations that capture the atmosphere and character of Mexico City — creating images that feel authentic rather than posed. Comfortable even for those with little experience in front of a camera. Includes edited high-resolution images.', es: 'Una sesión relajada y guiada profesionalmente, diseñada para sentirse natural, personal y sin esfuerzo. Juntos exploraremos locaciones cuidadosamente seleccionadas que capturan la atmósfera y el carácter de la Ciudad de México — creando imágenes auténticas, no posadas. Cómodo incluso para quienes tienen poca experiencia frente a la cámara. Incluye imágenes editadas en alta resolución.' },
  'tour.photo.footer':   { en: 'Perfect for solo travelers, couples, friends, and anyone wanting meaningful memories of the city.', es: 'Perfecto para viajeros solos, parejas, amigos y cualquiera que quiera recuerdos significativos de la ciudad.' },

  // Shared tour card labels
  'label.duration':      { en: 'Duration', es: 'Duración' },
  'label.groupsize':     { en: 'Group size', es: 'Tamaño del grupo' },
  'label.language':      { en: 'Language', es: 'Idioma' },
  'label.maxguests':     { en: 'Max 6 guests', es: 'Máx. 6 personas' },
  'label.largegroup':    { en: 'Larger single groups welcome', es: 'Grupos más grandes bienvenidos' },
  'label.lang.val':      { en: 'EN or ES', es: 'EN o ES' },
  'label.lang.note':     { en: 'One language per tour', es: 'Un idioma por tour' },
  'label.from':          { en: 'From', es: 'Desde' },
  'label.perperson':     { en: 'USD / person', es: 'USD / persona' },
  'label.book':          { en: 'Book this tour →', es: 'Reservar este tour →' },
  'label.inquire':       { en: 'Inquire', es: 'Consultar' },
  'label.2h':            { en: '2 hours', es: '2 horas' },
  'label.1.5h':          { en: '1.5 hours', es: '1.5 horas' },

  // ── ABOUT PAGE ──
  'about.eyebrow':       { en: 'About Viacalli', es: 'Sobre Viacalli' },
  'about.h1a':           { en: 'A guide who listens', es: 'Un guía que escucha' },
  'about.h1b':           { en: 'to the city', es: 'a la ciudad' },
  'about.sub':           { en: 'Viacalli is not a tourism company. It\'s a practice of reading urban space — and sharing that reading with people who are ready to look closely.', es: 'Viacalli no es una empresa de turismo. Es una práctica de lectura del espacio urbano — y compartir esa lectura con personas dispuestas a mirar de cerca.' },
  'about.bio.title':     { en: '— Local Companion — Mexico City', es: '— Acompañante Local — Ciudad de México' },
  'about.bio.h2':        { en: 'Not a tour guide in the conventional sense.', es: 'No un guía de turistas en el sentido convencional.' },
  'about.bio.p1':        { en: 'We are readers of cities — trained to notice what most people walk past: the structural logic of a facade, the political subtext of a mural, the quiet stories embedded in a neighborhood.', es: 'Somos lectores de ciudades — entrenados para notar lo que la mayoría pasa de largo: la lógica estructural de una fachada, el subtexto político de un mural, las historias silenciosas de un barrio.' },
  'about.bio.p2':        { en: 'Viacalli was born from years of guiding curious travelers through Mexico City\'s most extraordinary spaces — and from the belief that meaningful experiences should be accessible to anyone willing to look deeper.', es: 'Viacalli nació de años guiando a viajeros curiosos por los espacios más extraordinarios de la Ciudad de México — y de la convicción de que las experiencias significativas deben ser accesibles para quien esté dispuesto a mirar más profundo.' },
  'about.bio.p3':        { en: 'These tours are not itineraries with a fixed set of facts. They are conversations, shaped by who is in the group. Everyone brings a different perspective to the city — and that difference is part of what makes every tour unique.', es: 'Estos tours no son itinerarios con datos fijos. Son conversaciones, moldeadas por quiénes forman el grupo. Cada persona trae una perspectiva distinta a la ciudad — y esa diferencia es parte de lo que hace único a cada tour.' },
  'about.bio.p4':        { en: 'Over the years, we have guided visitors from across the world — including architects, artists, students, journalists, and first-time travelers to Mexico City. Every tour becomes a different way of understanding the city, shaped by the people exploring it together.', es: 'A lo largo de los años, hemos guiado a visitantes de todo el mundo — arquitectos, artistas, estudiantes, periodistas y viajeros que visitan la Ciudad de México por primera vez. Cada tour se convierte en una forma distinta de entender la ciudad, moldeada por las personas que la exploran juntas.' },
  'about.bio.p5a':       { en: 'Mexico City is one of the world\'s most layered and emotionally complex urban environments.', es: 'La Ciudad de México es uno de los entornos urbanos más complejos y emocionalmente ricos del mundo.' },
  'about.bio.p5b':       { en: 'We\'ve spent years learning to read it. We\'d like to share that reading with you.', es: 'Hemos pasado años aprendiendo a leerla. Nos gustaría compartir esa lectura contigo.' },
  'about.bio.cta':       { en: 'See our tours →', es: 'Ver nuestros tours →' },
  'about.values.h2':     { en: 'How we work', es: 'Cómo trabajamos' },
  'about.v1.h3':         { en: 'Close reading', es: 'Lectura profunda' },
  'about.v1.p':          { en: 'We don\'t cover everything. We go deep on what matters — one building, one mural, one block at a time.', es: 'No cubrimos todo. Vamos profundo en lo que importa — un edificio, una obra, una cuadra a la vez.' },
  'about.v2.h3':         { en: 'Small groups only', es: 'Solo grupos pequeños' },
  'about.v2.p':          { en: 'Maximum 6 guests per tour. Conversations happen. Questions are welcome. No megaphones.', es: 'Máximo 6 personas por tour. Las conversaciones fluyen. Las preguntas son bienvenidas. Sin megáfonos.' },
  'about.v3.h3':         { en: 'Tailored to you', es: 'A tu medida' },
  'about.v3.p':          { en: 'Your background shapes the tour. We speak your language — (EN/ES) — literally.', es: 'Tu perfil moldea el tour. Hablamos tu idioma — (EN/ES) — literalmente.' },
  'about.cta.h2':        { en: 'Ready to read the city?', es: '¿Listo para leer la ciudad?' },
  'about.cta.p':         { en: 'Tell us about your group and we\'ll put together the right experience for you.', es: 'Cuéntanos sobre tu grupo y armaremos la experiencia perfecta para ti.' },
  'about.cta.btn':       { en: 'Get in touch →', es: 'Contáctanos →' },

  // ── CONTACT PAGE ──
  'contact.eyebrow':     { en: 'Get in touch', es: 'Contáctanos' },
  'contact.h1a':         { en: 'Let\'s plan your', es: 'Planea tu' },
  'contact.h1b':         { en: 'experience', es: 'experiencia' },
  'contact.sub':         { en: 'Tell us about your group and what you\'re curious about. We\'ll reach out to find the right tour for you.', es: 'Cuéntanos sobre tu grupo y qué te interesa. Nos pondremos en contacto para encontrar el tour ideal para ti.' },
  'contact.info.lang':   { en: 'Tours available in English & Spanish', es: 'Tours disponibles en inglés y español' },
  'contact.info.reply':  { en: 'We reply within 1 hour', es: 'Respondemos en menos de 1 hora' },
  'contact.info.based':  { en: 'Based in Mexico City, CDMX', es: 'Con sede en Ciudad de México, CDMX' },
  'contact.form.fname':  { en: 'First name', es: 'Nombre' },
  'contact.form.lname':  { en: 'Last name', es: 'Apellido' },
  'contact.form.email':  { en: 'Email address', es: 'Correo electrónico' },
  'contact.form.tour':   { en: 'Experience of interest', es: 'Experiencia de interés' },
  'contact.form.select': { en: '— Select a tour (optional) —', es: '— Selecciona un tour (opcional) —' },
  'contact.form.size':   { en: 'Group size', es: 'Tamaño del grupo' },
  'contact.form.dates':  { en: 'Preferred dates', es: 'Fechas preferidas' },
  'contact.form.msg':    { en: 'Tell us about your group', es: 'Cuéntanos sobre tu grupo' },
  'contact.form.ph.fname':  { en: 'Jane', es: 'María' },
  'contact.form.ph.lname':  { en: 'Smith', es: 'García' },
  'contact.form.ph.email':  { en: 'jane@example.com', es: 'maria@ejemplo.com' },
  'contact.form.ph.size':   { en: 'e.g. 4 people', es: 'ej. 4 personas' },
  'contact.form.ph.dates':  { en: 'e.g. mid-June', es: 'ej. mediados de junio' },
  'contact.form.ph.msg':    { en: 'Your background, what you\'re curious about, any special interests…', es: 'Tu perfil, qué te interesa, intereses especiales…' },
  'contact.form.submit': { en: 'Send message →', es: 'Enviar mensaje →' },
  'contact.form.note':   { en: 'No spam, ever. Just a reply from a human who loves this city.', es: 'Sin spam, jamás. Solo una respuesta de alguien que ama esta ciudad.' },
  'contact.success.h3':  { en: 'Message received!', es: '¡Mensaje recibido!' },
  'contact.success.p':   { en: 'Thank you for reaching out. We\'ll be in touch within 48 hours to discuss your tour.', es: 'Gracias por escribirnos. Te contactaremos en menos de 48 horas para hablar sobre tu tour.' },
  'contact.banner.clear':{ en: 'Clear selection', es: 'Borrar selección' },
  'contact.banner.pre':  { en: 'Inquiring about:', es: 'Consultando sobre:' },

};

// ── LANGUAGE ENGINE ──
const I18N = {

  get lang() {
    return localStorage.getItem('viacalli_lang') || 'en';
  },

  set lang(val) {
    localStorage.setItem('viacalli_lang', val);
  },

  t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.lang] || entry['en'] || key;
  },

  apply() {
    const lang = this.lang;
    document.documentElement.lang = lang;

    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-ph'));
    });

    // HTML content (for elements needing <br> etc)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = this.t(el.getAttribute('data-i18n-html'));
    });

    // Update toggle button
    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    }
  },

  toggle() {
    this.lang = this.lang === 'en' ? 'es' : 'en';
    this.apply();
  },

  init() {
    this.apply();
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', () => this.toggle());
  }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
