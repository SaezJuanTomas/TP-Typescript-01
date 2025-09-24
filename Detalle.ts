class Detalle {
    private kmSalida: number;
    private kmRegreso: number;
    private horaSalida: number;
    private horaRegreso: number;
    private minutoSalida: number;
    private minutoRegreso: number;
    private HojaRuta: HojaRuta;

    constructor(kmSalida: number, kmRegreso: number, horaSalida: number, horaRegreso: number, minutoSalida: number, minutoRegreso: number, HojaRuta: HojaRuta) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.HojaRuta = HojaRuta;
    }

    public getKmSalida(): number {
        return this.kmSalida;
    }

    public setKmSalida(kmSalida: number): void {
        this.kmSalida = kmSalida;
    }

    public getKmRegreso(): number {
        return this.kmRegreso;
    }

    public setKmRegreso(kmRegreso: number): void {
        this.kmRegreso = kmRegreso;
    }

    public getHoraSalida(): number {
        return this.horaSalida;
    }

    public setHoraSalida(horaSalida: number): void {
        this.horaSalida = horaSalida;
    }

    public getHoraRegreso(): number {
        return this.horaRegreso;
    }

    public setHoraRegreso(horaRegreso: number): void {
        this.horaRegreso = horaRegreso;
    }

    public getMinutoSalida(): number {
        return this.minutoSalida;
    }

    public setMinutoSalida(minutoSalida: number): void {
        this.minutoSalida = minutoSalida;
    }

    public getMinutoRegreso(): number {
        return this.minutoRegreso;
    }

    public setMinutoRegreso(minutoRegreso: number): void {
        this.minutoRegreso = minutoRegreso;
    }

    public getHojaRuta(): HojaRuta {
        return this.HojaRuta;
    }

    public setHojaRuta(HojaRuta: HojaRuta): void {
        this.HojaRuta = HojaRuta;
    }

    public toString(): string {
        return `Detalle [Km Salida: ${this.kmSalida}, Km Regreso: ${this.kmRegreso}, Hora Salida: ${this.horaSalida}:${this.minutoSalida}, Hora Regreso: ${this.horaRegreso}:${this.minutoRegreso}]`;
    }
    
}