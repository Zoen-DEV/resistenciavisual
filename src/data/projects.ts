import { cldUrl, cldBlur } from "@/lib/cloudinary";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  description: string;
  coverImage: string;
  photos: Photo[];
  wip?: boolean;
}

export const projects: Project[] = [
  {
    slug: "cuerpo-territorio",
    title: "Cuerpo-Territorio: Cartografías de la memoria y el tiempo.",
    year: "2023 — En proceso",
    wip: true,
    description:
      "Cuerpo-Territorio: cartografías de la memoria y el tiempo es un proyecto fotográfico y audiovisual en desarrollo que documenta la transformación física y emocional tras el diagnóstico de cáncer de seno y la mastectomía radical de mi madre. A través de una narrativa construida entre ambas, la obra utiliza el registro documental y la experimentación visual para reflexionar sobre el cuerpo como territorio de memoria y las cicatrices que deja la enfermedad. Situándose en la intersección entre el tránsito íntimo y la realidad social de miles de mujeres en América Latina, el proyecto utiliza la imagen como una herramienta de acompañamiento y resistencia, transformando la experiencia personal en un espacio de diálogo colectivo sobre los cuidados, la memoria y la resiliencia.",
    coverImage: cldUrl("cuerpo-territorio/4_ivphqq", "thumb"),
    photos: [
      { id: "ct1", src: cldUrl("cuerpo-territorio/1_hj74dt"), alt: "Cuerpo-Territorio 1", width: 4391, height: 5400, blurDataURL: cldBlur("cuerpo-territorio/1_hj74dt") },
      { id: "ct2", src: cldUrl("cuerpo-territorio/2_xfttau"), alt: "Cuerpo-Territorio 2", width: 1080, height: 1080, blurDataURL: cldBlur("cuerpo-territorio/2_xfttau") },
      { id: "ct3", src: cldUrl("cuerpo-territorio/3_jmq0ss"), alt: "Cuerpo-Territorio 3", width: 7800, height: 5200, blurDataURL: cldBlur("cuerpo-territorio/3_jmq0ss") },
      { id: "ct4", src: cldUrl("cuerpo-territorio/4_ivphqq"), alt: "Cuerpo-Territorio 4", width: 7368, height: 5400, blurDataURL: cldBlur("cuerpo-territorio/4_ivphqq") },
      { id: "ct5", src: cldUrl("cuerpo-territorio/5_wcuetr"), alt: "Cuerpo-Territorio 5", width: 5200, height: 3467, blurDataURL: cldBlur("cuerpo-territorio/5_wcuetr") },
    ],
  },
  {
    slug: "cotidiana",
    title: "Cotidiana",
    year: "",
    description:
      "Lo extraordinario en lo ordinario. Una serie sobre los momentos que pasan desapercibidos en la vida diaria.",
    coverImage: cldUrl("cotidiana/5_inyio5", "thumb"),
    photos: [
      { id: "c1", src: cldUrl("cotidiana/1_rbf5tj"), alt: "Cotidiana 1", width: 943,  height: 720,  blurDataURL: cldBlur("cotidiana/1_rbf5tj") },
      { id: "c2", src: cldUrl("cotidiana/2_q0lqee"), alt: "Cotidiana 2", width: 683,  height: 499,  blurDataURL: cldBlur("cotidiana/2_q0lqee") },
      { id: "c3", src: cldUrl("cotidiana/3_v0hmpb"), alt: "Cotidiana 3", width: 2700, height: 1478, blurDataURL: cldBlur("cotidiana/3_v0hmpb") },
      { id: "c4", src: cldUrl("cotidiana/4_d4kx2r"), alt: "Cotidiana 4", width: 1920, height: 1080, blurDataURL: cldBlur("cotidiana/4_d4kx2r") },
      { id: "c5", src: cldUrl("cotidiana/5_inyio5"), alt: "Cotidiana 5", width: 2700, height: 1800, blurDataURL: cldBlur("cotidiana/5_inyio5") },
      { id: "c6", src: cldUrl("cotidiana/6_dy7smk"), alt: "Cotidiana 6", width: 2700, height: 1800, blurDataURL: cldBlur("cotidiana/6_dy7smk") },
      { id: "c7", src: cldUrl("cotidiana/7_utukza"), alt: "Cotidiana 7", width: 3000, height: 2000, blurDataURL: cldBlur("cotidiana/7_utukza") },
      { id: "c8", src: cldUrl("cotidiana/8_ymhwp8"), alt: "Cotidiana 8", width: 4500, height: 3000, blurDataURL: cldBlur("cotidiana/8_ymhwp8") },
      { id: "c9", src: cldUrl("cotidiana/9_eev2jt"), alt: "Cotidiana 9", width: 3000, height: 2079, blurDataURL: cldBlur("cotidiana/9_eev2jt") },
    ],
  },
  {
    slug: "lo-que-comemos",
    title: "Lo que comemos",
    year: "",
    description:
      "Un estudio sobre la relación entre la cultura y la alimentación. La mesa como espacio de encuentro y memoria.",
    coverImage: cldUrl("lo-que-comemos/9_z7jvf9", "thumb"),
    photos: [
      { id: "lc1",  src: cldUrl("lo-que-comemos/1_e8bvsf"),  alt: "Lo que comemos 1",  width: 2048, height: 1416, blurDataURL: cldBlur("lo-que-comemos/1_e8bvsf") },
      { id: "lc2",  src: cldUrl("lo-que-comemos/2_zzhtdo"),  alt: "Lo que comemos 2",  width: 2048, height: 1365, blurDataURL: cldBlur("lo-que-comemos/2_zzhtdo") },
      { id: "lc3",  src: cldUrl("lo-que-comemos/3_fjobgp"),  alt: "Lo que comemos 3",  width: 2048, height: 1365, blurDataURL: cldBlur("lo-que-comemos/3_fjobgp") },
      { id: "lc4",  src: cldUrl("lo-que-comemos/4_ai5tiw"),  alt: "Lo que comemos 4",  width: 911,  height: 683,  blurDataURL: cldBlur("lo-que-comemos/4_ai5tiw") },
      { id: "lc5",  src: cldUrl("lo-que-comemos/5_dgzcbv"),  alt: "Lo que comemos 5",  width: 1772, height: 1181, blurDataURL: cldBlur("lo-que-comemos/5_dgzcbv") },
      { id: "lc6",  src: cldUrl("lo-que-comemos/6_tbjcg2"),  alt: "Lo que comemos 6",  width: 1772, height: 1181, blurDataURL: cldBlur("lo-que-comemos/6_tbjcg2") },
      { id: "lc7",  src: cldUrl("lo-que-comemos/7_czyoxf"),  alt: "Lo que comemos 7",  width: 5760, height: 3840, blurDataURL: cldBlur("lo-que-comemos/7_czyoxf") },
      { id: "lc8",  src: cldUrl("lo-que-comemos/8_ly8c2o"),  alt: "Lo que comemos 8",  width: 5760, height: 3840, blurDataURL: cldBlur("lo-que-comemos/8_ly8c2o") },
      { id: "lc9",  src: cldUrl("lo-que-comemos/9_z7jvf9"),  alt: "Lo que comemos 9",  width: 3000, height: 2000, blurDataURL: cldBlur("lo-que-comemos/9_z7jvf9") },
      { id: "lc10", src: cldUrl("lo-que-comemos/10_pncptj"), alt: "Lo que comemos 10", width: 2742, height: 1828, blurDataURL: cldBlur("lo-que-comemos/10_pncptj") },
      { id: "lc11", src: cldUrl("lo-que-comemos/11_amfadc"), alt: "Lo que comemos 11", width: 2742, height: 1828, blurDataURL: cldBlur("lo-que-comemos/11_amfadc") },
    ],
  },
  {
    slug: "hecha-un-vistazo",
    title: "Hecha un vistazo",
    year: "",
    description: "",
    coverImage: cldUrl("take-a-look/1_auzvch", "thumb"),
    photos: [
      { id: "hv1", src: cldUrl("take-a-look/1_auzvch"), alt: "Take a Look 1", width: 3088, height: 2048, blurDataURL: cldBlur("take-a-look/1_auzvch") },
      { id: "hv2", src: cldUrl("take-a-look/2_i4d8yh"), alt: "Take a Look 2", width: 1502, height: 1080, blurDataURL: cldBlur("take-a-look/2_i4d8yh") },
      { id: "hv3", src: cldUrl("take-a-look/3_xifeol"), alt: "Take a Look 3", width: 5760, height: 3840, blurDataURL: cldBlur("take-a-look/3_xifeol") },
      { id: "hv4", src: cldUrl("take-a-look/4_trtfdl"), alt: "Take a Look 4", width: 2048, height: 3088, blurDataURL: cldBlur("take-a-look/4_trtfdl") },
      { id: "hv5", src: cldUrl("take-a-look/5_fiuku6"), alt: "Take a Look 5", width: 5760, height: 3840, blurDataURL: cldBlur("take-a-look/5_fiuku6") },
      { id: "hv6", src: cldUrl("take-a-look/6_dsilwm"), alt: "Take a Look 6", width: 3088, height: 2048, blurDataURL: cldBlur("take-a-look/6_dsilwm") },
      { id: "hv7", src: cldUrl("take-a-look/7_tsfo6h"), alt: "Take a Look 7", width: 939,  height: 683,  blurDataURL: cldBlur("take-a-look/7_tsfo6h") },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
