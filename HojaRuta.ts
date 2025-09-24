import { Detalle } from './Detalle';
import { Vehiculo } from './Vehiculo';

export class HojaRuta {
    private fecha: Date;
    private numero: number;
    private Vehiculo: Vehiculo;
    private Detalle: Detalle[] = [];

    constructor(fecha: Date, numero: number, Vehiculo: Vehiculo) {
        this.fecha = fecha;
        this.numero = numero;
        this.Vehiculo = Vehiculo;
    }

    public getFecha(): Date {
        return this.fecha;
    }

    public setFecha(fecha: Date): void {
        this.fecha = fecha;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getVehiculo(): Vehiculo {
        return this.Vehiculo;
    }

    public setVehiculo(Vehiculo: Vehiculo): void {
        this.Vehiculo = Vehiculo;
    }

    public getDetalle(): Detalle[] {
        return this.Detalle;
    }

    public setDetalle(Detalle: Detalle[]): void {
        this.Detalle = Detalle;
    }

    public agregarDetalle(detalle: Detalle): void {
        if (!this.Detalle) {
            this.Detalle = [];
        }
        this.Detalle.push(detalle);
    }

    public calcularTotalKilometros(): number {
        return (this.Detalle.reduce((total, detalle) => total + (detalle.getKmRegreso() - detalle.getKmSalida()), 0));
    }

    public toString(): string {
        return `HojaRuta [Fecha: ${this.fecha.toDateString()}, Numero: ${this.numero}, Vehiculo: ${this.Vehiculo.getPatente()}]`;
    }
}