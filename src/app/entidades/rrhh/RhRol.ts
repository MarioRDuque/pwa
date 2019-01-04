import { PrdSector } from "../produccion/PrdSector";
import { ConCuentas } from "../contabilidad/ConCuentas";
import { ConContable } from "../contabilidad/ConContable";
import { RhEmpleado } from "./RhEmpleado";

export class RhRol {
    rolSecuencial: number = null;
    rolDesde: any = null;
    rolHasta: any = null;
    rolFechaUltimoSueldo: any = null;
    rolDiasLaboradosReales: number = 0;
    rolDiasFaltasReales: number = 0;
    rolDiasExtrasReales: number = 0;
    rolDiasDescansoReales: number = 0;
    rolDiasPagadosReales: number = 0;
    rolDiasPermisoMedico: number = 0;
    rolSaldoAnterior: number = 0;
    rolIngresos: number = 0;
    rolHorasExtras: number = 0;
    rolHorasExtras100: number = 0;
    rolBonos: number = 0;
    rolBonosnd: number = 0;
    rolBonoFijo: number = 0;
    rolBonoFijoNd: number = 0;
    rolOtrosIngresos: number = 0;
    rolOtrosIngresosNd: number = 0;
    rolLiqFondoReserva: number = 0;
    rolLiqXiii: number = 0;
    rolLiqXiv: number = 0;
    rolLiqVacaciones: number = 0;
    rolLiqSalarioDigno: number = 0;
    rolLiqDesahucio: number = 0;
    rolLiqDesahucioIntempestivo: number = 0;
    rolLiqBonificacion: number = 0;
    rolAnticipos: number = 0;
    rolPrestamos: number = 0;
    rolPrestamoQuirografario: number = 0;
    rolPrestamoHipotecario: number = 0;
    rolIess: number = 0;
    rolIessExtension: number = 0;
    rolRetencionFuente: number = 0;
    rolDescuentoPermisoMedico: number = 0;
    rolTotal: number = 0;
    rolFormaPago: string;
    rolDocumento: string;
    rolObservaciones: string;
    rolAportePatronal: number = 0;
    rolIece: number = 0;
    rolSecap: number = 0;
    rolXiii: number = 0;
    rolXiv: number = 0;
    rolFondoReserva: number = 0;
    rolVacaciones: number = 0;
    rolDesahucio: number = 0;
    rolAuxiliar: boolean = false;
    empCargo: string;
    empSueldo: number = 0;
    empBonoFijo: number = 0;
    empBonoFijoNd: number = 0;
    empOtrosIngresos: number = 0;
    empOtrosIngresosNd: number = 0;
    empDiasLaborados: number = 0;
    empDiasDescanso: number = 0;
    empCancelarXiiiSueldoMensualmente: boolean = false;
    empCancelarXivSueldoMensualmente: boolean = false;
    empCancelarFondoReservaMensualmente: boolean = false;
    empSalarioNeto: boolean = false;
    prdSector: PrdSector = new PrdSector();
    conCuentas: ConCuentas = new ConCuentas();
    conContable: ConContable = new ConContable();
    conContableProvision: ConContable = new ConContable();
    rhEmpleado: RhEmpleado = new RhEmpleado();

    constructor(data?) {
        data ? this.hydrate(data) : null;
    }

    hydrate(data) {
        this.rolSecuencial = data.rolSecuencial ? data.rolSecuencial : this.rolSecuencial;
        this.rolDesde = data.rolDesde ? data.rolDesde : this.rolDesde;
        this.rolFechaUltimoSueldo = data.rolFechaUltimoSueldo ? data.rolFechaUltimoSueldo : this.rolFechaUltimoSueldo;
        this.rolDiasLaboradosReales = data.rolDiasLaboradosReales ? data.rolDiasLaboradosReales : this.rolDiasLaboradosReales;
        this.rolDiasFaltasReales = data.rolDiasFaltasReales ? data.rolDiasFaltasReales : this.rolDiasFaltasReales;
        this.rolDiasExtrasReales = data.rolDiasExtrasReales ? data.rolDiasExtrasReales : this.rolDiasExtrasReales;
        this.rolDiasDescansoReales = data.rolDiasDescansoReales ? data.rolDiasDescansoReales : this.rolDiasDescansoReales;
        this.rolDiasPagadosReales = data.rolDiasPagadosReales ? data.rolDiasPagadosReales : this.rolDiasPagadosReales;
        this.rolDiasPermisoMedico = data.rolDiasPermisoMedico ? data.rolDiasPermisoMedico : this.rolDiasPermisoMedico;
        this.rolSaldoAnterior = data.rolSaldoAnterior ? data.rolSaldoAnterior : this.rolSaldoAnterior;
        this.rolIngresos = data.rolIngresos ? data.rolIngresos : this.rolIngresos;
        this.rolHorasExtras = data.rolHorasExtras ? data.rolHorasExtras : this.rolHorasExtras;
        this.rolBonos = data.rolBonos ? data.rolBonos : this.rolBonos;
        this.rolBonosnd = data.rolBonosnd ? data.rolBonosnd : this.rolBonosnd;
        this.rolBonoFijo = data.rolBonoFijo ? data.rolBonoFijo : this.rolBonoFijo;
        this.rolOtrosIngresos = data.rolOtrosIngresos ? data.rolOtrosIngresos : this.rolOtrosIngresos;
        this.rolOtrosIngresosNd = data.rolOtrosIngresosNd ? data.rolOtrosIngresosNd : this.rolOtrosIngresosNd;
        this.rolLiqFondoReserva = data.rolLiqFondoReserva ? data.rolLiqFondoReserva : this.rolLiqFondoReserva;
        this.rolLiqXiii = data.rolLiqXiii ? data.rolLiqXiii : this.rolLiqXiii;
        this.rolLiqXiv = data.rolLiqXiv ? data.rolLiqXiv : this.rolLiqXiv;
        this.rolLiqVacaciones = data.rolLiqVacaciones ? data.rolLiqVacaciones : this.rolLiqVacaciones;
        this.rolLiqSalarioDigno = data.rolLiqSalarioDigno ? data.rolLiqSalarioDigno : this.rolLiqSalarioDigno;
        this.rolLiqDesahucio = data.rolLiqDesahucio ? data.rolLiqDesahucio : this.rolLiqDesahucio;
        this.rolLiqDesahucioIntempestivo = data.rolLiqDesahucioIntempestivo ? data.rolLiqDesahucioIntempestivo : this.rolLiqDesahucioIntempestivo;
        this.rolLiqBonificacion = data.rolLiqBonificacion ? data.rolLiqBonificacion : this.rolLiqBonificacion;
        this.rolAnticipos = data.rolAnticipos ? data.rolAnticipos : this.rolAnticipos;
        this.rolPrestamos = data.rolPrestamos ? data.rolPrestamos : this.rolPrestamos;
        this.rolPrestamoQuirografario = data.rolPrestamoQuirografario ? data.rolPrestamoQuirografario : this.rolPrestamoQuirografario;
        this.rolPrestamoHipotecario = data.rolPrestamoHipotecario ? data.rolPrestamoHipotecario : this.rolPrestamoHipotecario;
        this.rolIess = data.rolIess ? data.rolIess : this.rolIess;
        this.rolIessExtension = data.rolIessExtension ? data.rolIessExtension : this.rolIessExtension;
        this.rolRetencionFuente = data.rolRetencionFuente ? data.rolRetencionFuente : this.rolRetencionFuente;
        this.rolDescuentoPermisoMedico = data.rolDescuentoPermisoMedico ? data.rolDescuentoPermisoMedico : this.rolDescuentoPermisoMedico;
        this.rolTotal = data.rolTotal ? data.rolTotal : this.rolTotal;
        this.rolFormaPago = data.rolFormaPago ? data.rolFormaPago : this.rolFormaPago;
        this.rolDocumento = data.rolDocumento ? data.rolDocumento : this.rolDocumento;
        this.rolObservaciones = data.rolObservaciones ? data.rolObservaciones : this.rolObservaciones;
        this.rolAportePatronal = data.rolAportePatronal ? data.rolAportePatronal : this.rolAportePatronal;
        this.rolIece = data.rolIece ? data.rolIece : this.rolIece;
        this.rolSecap = data.rolSecap ? data.rolSecap : this.rolSecap;
        this.rolXiii = data.rolXiii ? data.rolXiii : this.rolXiii;
        this.rolXiv = data.rolXiv ? data.rolXiv : this.rolXiv;
        this.rolFondoReserva = data.rolFondoReserva ? data.rolFondoReserva : this.rolFondoReserva;
        this.rolVacaciones = data.rolVacaciones ? data.rolVacaciones : this.rolVacaciones;
        this.rolDesahucio = data.rolDesahucio ? data.rolDesahucio : this.rolDesahucio;
        this.rolAuxiliar = data.rolAuxiliar ? data.rolAuxiliar : this.rolAuxiliar;
        this.empCargo = data.empCargo ? data.empCargo : this.empCargo;
        this.empSueldo = data.empSueldo ? data.empSueldo : this.empSueldo;
        this.empBonoFijo = data.empBonoFijo ? data.empBonoFijo : this.empBonoFijo;
        this.empBonoFijoNd = data.empBonoFijoNd ? data.empBonoFijoNd : this.empBonoFijoNd;
        this.empOtrosIngresos = data.empOtrosIngresos ? data.empOtrosIngresos : this.empOtrosIngresos;
        this.empOtrosIngresosNd = data.empOtrosIngresosNd ? data.empOtrosIngresosNd : this.empOtrosIngresosNd;
        this.empDiasLaborados = data.empDiasLaborados ? data.empDiasLaborados : this.empDiasLaborados;
        this.empDiasDescanso = data.empDiasDescanso ? data.empDiasDescanso : this.empDiasDescanso;
        this.empCancelarXiiiSueldoMensualmente = data.empCancelarXiiiSueldoMensualmente ? data.empCancelarXiiiSueldoMensualmente : this.empCancelarXiiiSueldoMensualmente;
        this.empCancelarXivSueldoMensualmente = data.empCancelarXivSueldoMensualmente ? data.empCancelarXivSueldoMensualmente : this.empCancelarXivSueldoMensualmente;
        this.empCancelarFondoReservaMensualmente = data.empCancelarFondoReservaMensualmente ? data.empCancelarFondoReservaMensualmente : this.empCancelarFondoReservaMensualmente;
        this.empSalarioNeto = data.empSalarioNeto ? data.empSalarioNeto : this.empSalarioNeto;
        this.prdSector = data.prdSector ? data.prdSector : this.prdSector;
        this.conCuentas = data.conCuentas ? data.conCuentas : this.conCuentas;
        this.conContable = data.conContable ? data.conContable : this.conContable;
        this.conContableProvision = data.conContableProvision ? data.conContableProvision : this.conContableProvision;
        this.rhEmpleado = data.rhEmpleado ? data.rhEmpleado : this.rhEmpleado;
    }
}