export interface Elemento {

    id: string;
    name: string;
    potencia: number;
    tiempo: {
        seconds: string,
        nanoseconds: string,
    }

}