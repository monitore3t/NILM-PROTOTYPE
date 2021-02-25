export interface Elemento {
    
    banderaCon: boolean;
    banderaDes: boolean,
    consumo: number;
    copPotencia: number;
    desconexion: {
        seconds: string,
        nanoseconds: string,
    };
    duracion: string;
    id: string;
    name: string;
    potencia: number;
    tiempo: {
        seconds: string,
        nanoseconds: string,
    }
}