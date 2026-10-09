import { getCliClient } from 'sanity/cli'
import { createReadStream } from 'fs'
import { resolve, basename } from 'path'

const client = getCliClient()

const slides = [
  {
    order: 1,
    video: '../src/assets/videos/cachari.mp4',
    title: "PRÓXIMO REMATE",
    subtitle: "Acompañanos en nuestro próximo remate en Cacharí. Conocé las condiciones y la oferta genética.",
    link: "/remates",
    buttonText: "Ver Remate",
    mediaType: 'video'
  },
  {
    order: 2,
    image: '../src/assets/images/animales.webp',
    title: "CALIDAD GENÉTICA",
    subtitle: "25 años de progreso genético continuo, maximizando el rendimiento productivo, sobre información precisa y confiable.",
    link: "/genetica",
    buttonText: "Programa Genético",
    mediaType: 'image'
  },
  {
    order: 3,
    image: '../src/assets/images/cabana.webp',
    title: "ESTANCIAS Y CABAÑA LA CASSINA",
    subtitle: "Más de ocho mil hectáreas de producción agrícola, basada en las mejores prácticas para cuidar el suelo, y ganadera de altísima calidad, cuya piedra angular es nuestro programa genético.",
    link: "/establecimiento",
    buttonText: "El Establecimiento",
    mediaType: 'image'
  },
  {
    order: 4,
    image: '../src/assets/images/TORO-HEREFORD.webp',
    title: "CUATRO RAZAS",
    subtitle: "Producimos Angus, Hereford, Brangus y Braford, en las categorías Puro de Pedigree, Puro Controlados, Registrados y Categoría C.",
    link: "/genetica",
    buttonText: "Ver Razas",
    mediaType: 'image'
  },
  {
    order: 5,
    video: '../src/assets/videos/entrevista.mp4',
    title: "Cacharí",
    subtitle: "Entrevista exclusiva",
    link: "/entrevista",
    buttonText: "Ver Entrevista",
    mediaType: 'video'
  }
];

const toros = [
  {
    raza: 'Angus Colorado',
    nombre: 'Apache',
    registro: 'RP: 363 | HBA: 787859',
    descripcion: '"Moderado, extremadamente ancho y profundo en combinación con un destacado tren posterior y alta precocidad sexual."',
    stats: [
      { _key: '1', label: 'PESO', valor: '980 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '41 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.38 m', iconType: 'ruler' }
    ],
    fortaleza: 'De pedigree muy atractivo, con líneas de sangre de alto impacto.',
    imagen: '../src/assets/images/Apache.png'
  },
  {
    raza: 'Angus',
    nombre: 'Alfonso',
    registro: 'RP: 17 | HBA: 842934',
    descripcion: '"Toro muy prolijo, de excelente estructura, buena musculatura y capacidad de engrasamiento. De tamaño moderado."',
    stats: [
      { _key: '1', label: 'PESO', valor: '940 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '40 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.36 m', iconType: 'ruler' }
    ],
    fortaleza: 'Sus crías promedian 32 kilos al nacer, ideal para vaquillonas de 18 meses.',
    imagen: '../src/assets/images/Alfonso.png'
  },
  {
    raza: 'Angus',
    nombre: 'Aparicio',
    registro: 'RP: 1552 | HBA: 854013',
    descripcion: '"De tamaño intermedio con un buen volumen y excelente proyección de DEPs en bajo peso al nacer."',
    stats: [
      { _key: '1', label: 'PESO', valor: '720 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '39 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.29 m', iconType: 'ruler' }
    ],
    fortaleza: 'Alternativa ideal para buscar precocidad y buen desarrollo posterior.',
    imagen: '../src/assets/images/Aparicio.png'
  },
  {
    raza: 'Polled Hereford',
    nombre: 'Bandolero',
    registro: 'RP: X472 | HBA: 431172',
    descripcion: '"Muy moderado, de buen color, profundo, buena pigmentación y excelente desplazamiento."',
    stats: [
      { _key: '1', label: 'PESO', valor: '960 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '41 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.36 m', iconType: 'ruler' }
    ],
    fortaleza: 'Alternativa probada para refrescar sangres. Sin problemas de parto.',
    imagen: '../src/assets/images/bandolero.png'
  },
  {
    raza: 'Angus',
    nombre: 'Baqueano',
    registro: 'RP: 833 | HBA: 867948',
    descripcion: '"Destacada producción caracterizada por bajo peso al nacer, mucha clase y desarrollo."',
    stats: [
      { _key: '1', label: 'PESO', valor: '930 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '42 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.36 m', iconType: 'ruler' }
    ],
    fortaleza: 'Extrema facilidad de parto, pedigree muy sólido (OCC Paxton y Conhelo).',
    imagen: '../src/assets/images/Baqueano.png'
  },
  {
    raza: 'Angus Colorado',
    nombre: 'Botija',
    registro: 'RP: 1025 | HBA: 877505',
    descripcion: '"De color rojo intenso, impactante tren posterior y excelente calidad seminal."',
    stats: [
      { _key: '1', label: 'PESO', valor: '910 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '43 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.35 m', iconType: 'ruler' }
    ],
    fortaleza: 'Mucha facilidad de parto y una llamativa curva de crecimiento final.',
    imagen: '../src/assets/images/Botija.png'
  },
  {
    raza: 'Angus Colorado',
    nombre: 'Cacique',
    registro: 'RP: 1461 | HBA: 823280',
    descripcion: '"Frame moderado a bajo con exuberantes masas musculares, profundidad sobresaliente y aplomos perfectos."',
    stats: [
      { _key: '1', label: 'P. NACER', valor: '36 kg', iconType: 'scale' },
      { _key: '2', label: 'CE DEP', valor: '+1.1', iconType: 'activity' },
      { _key: '3', label: 'AOB DEP', valor: '+1.0', iconType: 'ruler' }
    ],
    fortaleza: 'Moderado peso al nacer y facilidad de engorde, ideal para pastoril.',
    imagen: '../src/assets/images/Cacique.png'
  },
  {
    raza: 'Polled Hereford',
    nombre: 'Centinela',
    registro: 'RP: X902 | HBA: 439060',
    descripcion: '"Moderado, muy balanceado y correcto en todas sus líneas, de color rojo cereza y buena pigmentación."',
    stats: [
      { _key: '1', label: 'PESO', valor: '930 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '41 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.35 m', iconType: 'ruler' }
    ],
    fortaleza: 'Combina pureza racial, engrasamiento, musculatura y crecimiento.',
    imagen: '../src/assets/images/Centinela.png'
  },
  {
    raza: 'Angus',
    nombre: 'Decreto',
    registro: 'RP: SI 651D | HBA: 877159',
    descripcion: '"Considerado por Tim Ohlde como el mejor hijo de Jet Stream. Extremadamente profundo y balanceado."',
    stats: [
      { _key: '1', label: 'PESO', valor: '890 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '42 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.36 m', iconType: 'ruler' }
    ],
    fortaleza: 'Excelentes números en bajo peso al nacer y crecimiento.',
    imagen: '../src/assets/images/Decreto.png'
  },
  {
    raza: 'Angus',
    nombre: 'Double Wide',
    registro: 'RP: SI 715D | HBA: 888456',
    descripcion: '"Consistencia americana. Un toro moderado con un crecimiento explosivo después del destete."',
    stats: [
      { _key: '1', label: 'PESO', valor: '990 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '42 cm', iconType: 'activity' },
      { _key: '3', label: 'FRAME', valor: '4', iconType: 'ruler' }
    ],
    fortaleza: 'Destacado en facilidad de parto y estructura. P365: 416 kg.',
    imagen: '../src/assets/images/DoubleWide.png'
  },
  {
    raza: 'Angus Colorado',
    nombre: 'Kundo',
    registro: 'RP: 1281 | HBA: 883688',
    descripcion: '"Moderado, profundo, de engrosamiento y masas musculares destacadas con un fenotipo muy atractivo."',
    stats: [
      { _key: '1', label: 'PESO', valor: '830 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '42 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.33 m', iconType: 'ruler' }
    ],
    fortaleza: 'Bajo peso con muy buen potencial de desarrollo.',
    imagen: '../src/assets/images/Kundo.png'
  },
  {
    raza: 'Angus',
    nombre: 'Kyoto',
    registro: 'RP: 1385 | HBA: 885200',
    descripcion: '"Con líneas altamente consolidadas, es un toro de muy buena estructura y destacado tren posterior."',
    stats: [
      { _key: '1', label: 'PESO', valor: '810 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '42 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.30 m', iconType: 'ruler' }
    ],
    fortaleza: 'Facilidad de parto con buen potencial de desarrollo (apertura de sangre).',
    imagen: '../src/assets/images/Kyoto.png'
  },
  {
    raza: 'Angus',
    nombre: 'Mayaco 473',
    registro: 'RP: 473 | HBA: 822273',
    descripcion: '"Posee un balance perfecto entre musculatura y engrasamiento. Correcto en todas sus líneas y equilibrado."',
    stats: [
      { _key: '1', label: 'PESO', valor: '910 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '41 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.35 m', iconType: 'ruler' }
    ],
    fortaleza: 'Bajo peso al nacer y tamaño moderado, ideal para uniformar rodeos.',
    imagen: '../src/assets/images/Mayaco473.png'
  },
  {
    raza: 'Brangus Colorado',
    nombre: 'Parana',
    registro: 'RP: 9058 | HBA: 785150',
    descripcion: '"De pelo fino, gran capacidad de engorde, excelente cabeza en combinación con un buen biotipo pastoril."',
    stats: [
      { _key: '1', label: 'PESO', valor: '950 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '40 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.37 m', iconType: 'ruler' }
    ],
    fortaleza: 'Facilidad de parto probada en vaquillonas de 15 meses y excelente fertilidad.',
    imagen: '../src/assets/images/Parana.png'
  },
  {
    raza: 'Angus',
    nombre: 'Pimienta',
    registro: 'RP: 1680 | HBA: 862304',
    descripcion: '"De moderado peso al nacer, excelente circunferencia escrotal y calidad seminal con gran potencial de crecimiento."',
    stats: [
      { _key: '1', label: 'PESO', valor: '850 kg', iconType: 'scale' },
      { _key: '2', label: 'CE', valor: '43 cm', iconType: 'activity' },
      { _key: '3', label: 'ALTURA', valor: '1.34 m', iconType: 'ruler' }
    ],
    fortaleza: 'Muy sólido genéticamente. Buen tamaño y destacadas masas musculares.',
    imagen: '../src/assets/images/Pimienta.png'
  },
  {
    raza: 'Polled Hereford',
    nombre: 'Vasco',
    registro: 'RP: X31 | HBA: 439895',
    descripcion: '"Combina líneas genéticas probadas y consistentes con su biotipo pastoril y productivo."',
    stats: [
      { _key: '1', label: 'PESO COL.', valor: '745 kg', iconType: 'scale' },
      { _key: '2', label: 'P. DEST.', valor: '+13 DEP', iconType: 'activity' },
      { _key: '3', label: 'P. AÑO', valor: '+20 DEP', iconType: 'ruler' }
    ],
    fortaleza: 'Crías precoces que se desarrollan rápidamente. Productor de bajo PN.',
    imagen: '../src/assets/images/Vasco.png'
  }
];

async function uploadFile(filePath: string, type: 'image' | 'file') {
  const fullPath = resolve(process.cwd(), filePath);
  const stream = createReadStream(fullPath);
  return await client.assets.upload(type, stream, { filename: basename(fullPath) });
}

async function run() {
  console.log('Migrating Hero Slides...');
  for (const slide of slides) {
    let asset;
    if (slide.mediaType === 'image') {
      asset = await uploadFile(slide.image!, 'image');
    } else {
      asset = await uploadFile(slide.video!, 'file');
    }

    const doc = {
      _type: 'heroSlide',
      title: slide.title,
      subtitle: slide.subtitle,
      mediaType: slide.mediaType,
      link: slide.link,
      buttonText: slide.buttonText,
      order: slide.order,
      ...(slide.mediaType === 'image' ? { image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } } } : {}),
      ...(slide.mediaType === 'video' ? { video: { _type: 'file', asset: { _type: 'reference', _ref: asset._id } } } : {})
    };
    
    await client.create(doc);
    console.log(`Created slide: ${slide.title}`);
  }

  console.log('Migrating Toros Padres...');
  for (let i = 0; i < toros.length; i++) {
    const toro = toros[i];
    const asset = await uploadFile(toro.imagen, 'image');
    
    const doc = {
      _type: 'toroPadre',
      nombre: toro.nombre,
      raza: toro.raza,
      registro: toro.registro,
      descripcion: toro.descripcion,
      fortaleza: toro.fortaleza,
      stats: toro.stats,
      order: i + 1,
      imagen: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
    };

    await client.create(doc);
    console.log(`Created toro: ${toro.nombre}`);
  }
  
  console.log('Migration complete!');
}

run().catch(console.error);
