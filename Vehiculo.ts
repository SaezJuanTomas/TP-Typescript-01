class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private HojaRuta: HojaRuta[] = [];

    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }   

    public getPatente(): string {
        return this.patente;
    }

    public setPatente(patente: string): void {
        this.patente = patente;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getHojaRuta(): HojaRuta[] {
        return this.HojaRuta;
    }

    public setHojaRuta(hojaRuta: HojaRuta[]): void {
        this.HojaRuta = hojaRuta;
    }

    public agregarHojaRuta(hojaRuta: HojaRuta): void {
        this.HojaRuta.push(hojaRuta);
        if (!this.HojaRuta) {
            this.HojaRuta = [];
        }
    }

    public calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date): number {
        let totalKm = 0;
        for (const hoja of this.HojaRuta) {
            if (hoja.getFecha() >= fechaDesde && hoja.getFecha() <= fechaHasta) {
                totalKm += hoja.calcularTotalKilometros();
            }
        }
        return totalKm;
    }

    public toString(): string {
        return `Vehiculo [Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}]`;
    }
      
}