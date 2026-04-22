export type FAQType = {
    question: string;
    answer: string
    duration?:number
}

export type MemberType = {
    name: string;
    role: string;
    image: string;
    aosDuration?: number;
}

export type BlogType = {
    image: string;
    author?:string;
    authorRole?:string;
    authorImg?:string;
    title: string;
    description?: string;
    date: string;
    aosDuration?: number;
}

export type ServiceType = {
    id:number;
    image?: string;
    aos?: string;
    title: string;
    icon?: string;
    description: string;
    duration?: number;
}

export type CaseStudyType = {
    image: string;
    subtitle?: string;
    title: string;
    duration?: number;
    icon?:string;
    description?:string;
}

export type TestimonialType = {
    image?: string;
    name: string;
    role: string;
    description?: string;
    message?:string;
    authorImg?:string;
    rating?:number
}

export type CursoType = {
    id_programa: number;
    id_us_reg: number;
    nombre_programa: string;
    slug: string | null;
    descripcion: string | null;
    objetivo: string | null;
    dirigido: string | null;
    requisitos: string | null;
    inversion: string | null;
    creditaje: string | null;
    nota: string | null;
    url_video: string | null;
    foto: string | null;
    imagen_banner_url: string | null;
    imagen_alt: string | null;
    url_whatsapp: string | null;
    titulo_documento1: string | null;
    documento1: string | null;
    inicio_actividades: string | null;
    finalizacion_actividades: string | null;
    inicio_inscripciones: string | null;
    id_tipoprograma: number | null;
    tipo_nombre: string | null;
    categoria_web_id: number | null;
    categoria_nombre: string | null;
    estado: number;
    estado_web: string | null;
    destacado: boolean;
    orden: number;
    meta_titulo: string | null;
    meta_descripcion: string | null;
    fecha_publicacion: string | null;
    fecha_reg: string | null;
}

export type PricingPlanType = {
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    billingNote: string;
    title: string;
    features: string[];
    active: boolean;
    aos: string;
    duration: number
}