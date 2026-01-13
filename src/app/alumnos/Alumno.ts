export class Alumno{
    constructor(
        public id: number,
        public nombre: string,
        public email: string,
        public foto: string,
        public cursoId: number,
        public fnac: string,
        public sexo: string,
        public nom_padre?: string
    ){}
}