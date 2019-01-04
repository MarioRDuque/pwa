import { RhCategoriaPK } from "./RhCategoriaPK";

export class RhCategoria {
    rhCategoriaPK: RhCategoriaPK = new RhCategoriaPK();
    ctaAnticipos: string = "";
    ctaPrestamos: string = "";
    ctaPorPagarBonos: string = "";
    ctaPorPagarSueldo: string = "";
    ctaPorPagarImpuestoRenta: string = "";
    ctaPorPagarUtilidades: string = "";
    ctaGastoBonos: string = "";
    ctaGastoHorasExtras: string = "";
    ctaGastoHorasExtras100: string = "";
    ctaGastoBonosNd: string = "";
    ctaGastoBonoFijo: string = "";
    ctaGastoBonoFijoNd: string = "";
    ctaGastoOtrosIngresos: string = "";
    ctaGastoOtrosIngresosNd: string = "";
    ctaPermisoMedico: string = "";
    ctaGastoSueldos: string = "";
    ctaAportepersonal: string = "";
    ctaAporteExtension: string = "";
    ctaPrestamoQuirografario: string = "";
    ctaPrestamoHipotecario: string = "";
    ctaAportepatronal: string = "";
    ctaIece: string = "";
    ctaSecap: string = "";
    ctaXiii: string = "";
    ctaXiv: string = "";
    ctaFondoreserva: string = "";
    ctaVacaciones: string = "";
    ctaDesahucio: string = "";
    ctaGastoAporteindividual: string = "";
    ctaGastoAportepatronal: string = "";
    ctaGastoIece: string = "";
    ctaGastoSecap: string = "";
    ctaGastoXiii: string = "";
    ctaGastoXiv: string = "";
    ctaGastoFondoreserva: string = "";
    ctaGastoVacaciones: string = "";
    ctaGastoSalarioDigno: string = "";
    ctaGastoDesahucio: string = "";
    ctaGastoDesahucioIntempestivo: string = "";
    ctaGastoLiquidacionBono: string = "";
    tipEmpresa: string = "";
    tipCodigo: string = "";
    usrEmpresa: string = "";
    usrCodigo: string = "";
    usrFechaInserta: Date = new Date();

    constructor(data?) {
        data ? this.hydrate(data) : null;
    }

    hydrate(data) {
        this.rhCategoriaPK = data.rhCategoriaPK ? data.rhCategoriaPK : this.rhCategoriaPK;
        this.ctaAnticipos = data.ctaAnticipos ? data.ctaAnticipos : this.ctaAnticipos;
        this.ctaPrestamos = data.ctaPrestamos ? data.ctaPrestamos : this.ctaPrestamos;
        this.ctaPorPagarBonos = data.ctaPorPagarBonos ? data.ctaPorPagarBonos : this.ctaPorPagarBonos;
        this.ctaPorPagarSueldo = data.ctaPorPagarSueldo ? data.ctaPorPagarSueldo : this.ctaPorPagarSueldo;
        this.ctaPorPagarImpuestoRenta = data.ctaPorPagarImpuestoRenta ? data.ctaPorPagarImpuestoRenta : this.ctaPorPagarImpuestoRenta;
        this.ctaPorPagarUtilidades = data.ctaPorPagarUtilidades ? data.ctaPorPagarUtilidades : this.ctaPorPagarUtilidades;
        this.ctaGastoBonos = data.ctaGastoBonos ? data.ctaGastoBonos : this.ctaGastoBonos;
        this.ctaGastoHorasExtras = data.ctaGastoHorasExtras ? data.ctaGastoHorasExtras : this.ctaGastoHorasExtras;
        this.ctaGastoHorasExtras100 = data.ctaGastoHorasExtras100 ? data.ctaGastoHorasExtras100 : this.ctaGastoHorasExtras100;
        this.ctaGastoBonosNd = data.ctaGastoBonosNd ? data.ctaGastoBonosNd : this.ctaGastoBonosNd;
        this.ctaGastoBonoFijo = data.ctaGastoBonoFijo ? data.ctaGastoBonoFijo : this.ctaGastoBonoFijo;
        this.ctaGastoBonoFijoNd = data.ctaGastoBonoFijoNd ? data.ctaGastoBonoFijoNd : this.ctaGastoBonoFijoNd;
        this.ctaGastoOtrosIngresos = data.ctaGastoOtrosIngresos ? data.ctaGastoOtrosIngresos : this.ctaGastoOtrosIngresos;
        this.ctaGastoOtrosIngresosNd = data.ctaGastoOtrosIngresosNd ? data.ctaGastoOtrosIngresosNd : this.ctaGastoOtrosIngresosNd;
        this.ctaPermisoMedico = data.ctaPermisoMedico ? data.ctaPermisoMedico : this.ctaPermisoMedico;
        this.ctaGastoSueldos = data.ctaGastoSueldos ? data.ctaGastoSueldos : this.ctaGastoSueldos;
        this.ctaAportepersonal = data.ctaAportepersonal ? data.ctaAportepersonal : this.ctaAportepersonal;
        this.ctaAporteExtension = data.ctaAporteExtension ? data.ctaAporteExtension : this.ctaAporteExtension;
        this.ctaPrestamoQuirografario = data.ctaPrestamoQuirografario ? data.ctaPrestamoQuirografario : this.ctaPrestamoQuirografario;
        this.ctaPrestamoHipotecario = data.ctaPrestamoHipotecario ? data.ctaPrestamoHipotecario : this.ctaPrestamoHipotecario;
        this.ctaAportepatronal = data.ctaAportepatronal ? data.ctaAportepatronal : this.ctaAportepatronal;
        this.ctaIece = data.ctaIece ? data.ctaIece : this.ctaIece;
        this.ctaSecap = data.ctaSecap ? data.ctaSecap : this.ctaSecap;
        this.ctaXiii = data.ctaXiii ? data.ctaXiii : this.ctaXiii;
        this.ctaXiv = data.ctaXiv ? data.ctaXiv : this.ctaXiv;
        this.ctaFondoreserva = data.ctaFondoreserva ? data.ctaFondoreserva : this.ctaFondoreserva;
        this.ctaVacaciones = data.ctaVacaciones ? data.ctaVacaciones : this.ctaVacaciones;
        this.ctaDesahucio = data.ctaDesahucio ? data.ctaDesahucio : this.ctaDesahucio;
        this.ctaGastoAporteindividual = data.ctaGastoAporteindividual ? data.ctaGastoAporteindividual : this.ctaGastoAporteindividual;
        this.ctaGastoAportepatronal = data.ctaGastoAportepatronal ? data.ctaGastoAportepatronal : this.ctaGastoAportepatronal;
        this.ctaGastoIece = data.ctaGastoIece ? data.ctaGastoIece : this.ctaGastoIece;
        this.ctaGastoSecap = data.ctaGastoSecap ? data.ctaGastoSecap : this.ctaGastoSecap;
        this.ctaGastoXiii = data.ctaGastoXiii ? data.ctaGastoXiii : this.ctaGastoXiii;
        this.ctaGastoXiv = data.ctaGastoXiv ? data.ctaGastoXiv : this.ctaGastoXiv;
        this.ctaGastoFondoreserva = data.ctaGastoFondoreserva ? data.ctaGastoFondoreserva : this.ctaGastoFondoreserva;
        this.ctaGastoVacaciones = data.ctaGastoVacaciones ? data.ctaGastoVacaciones : this.ctaGastoVacaciones;
        this.ctaGastoSalarioDigno = data.ctaGastoSalarioDigno ? data.ctaGastoSalarioDigno : this.ctaGastoSalarioDigno;
        this.ctaGastoDesahucio = data.ctaGastoDesahucio ? data.ctaGastoDesahucio : this.ctaGastoDesahucio;
        this.ctaGastoDesahucioIntempestivo = data.ctaGastoDesahucioIntempestivo ? data.ctaGastoDesahucioIntempestivo : this.ctaGastoDesahucioIntempestivo;
        this.ctaGastoLiquidacionBono = data.ctaGastoLiquidacionBono ? data.ctaGastoLiquidacionBono : this.ctaGastoLiquidacionBono;
        this.tipEmpresa = data.tipEmpresa ? data.tipEmpresa : this.tipEmpresa;
        this.tipCodigo = data.tipCodigo ? data.tipCodigo : this.tipCodigo;
        this.usrEmpresa = data.usrEmpresa ? data.usrEmpresa : this.usrEmpresa;
        this.usrCodigo = data.usrCodigo ? data.usrCodigo : this.usrCodigo;
        this.usrFechaInserta = data.usrFechaInserta ? data.usrFechaInserta : this.usrFechaInserta;
    }
}