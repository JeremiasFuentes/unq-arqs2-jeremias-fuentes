export class Usuario {
    constructor(
      public readonly id: string,
      public nombre: string,
      public apellido: string,
      public email: string
    ) {}
  }