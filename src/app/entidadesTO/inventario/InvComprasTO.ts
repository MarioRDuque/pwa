export class InvComprasTO {
    public empCodigo: string = null;
    public compPeriodo: string = null;
    public compMotivo: string = null;
    public compNumero: string = null;
    public compDocumentoProveedor: string = null;
    public compDocumentoTipo: string = null;
    public compDocumentoNumero: string = null;
    public compFecha: string = null;
    public compFechaVencimiento: string = null;
    public compIvaVigente: number = 0;
    public compObservaciones: string = null;
    public compElectronica: boolean = false;
    public compActivoFijo: boolean = false;
    public compImportacion: boolean = false;
    public compPendiente: boolean = false;
    public compRevisado: boolean = false;
    public compAnulado: boolean = false;
    public compFormaPago: string = null;
    public compDocumentoFormaPago: string = null;
    public compBase0: number = 0;
    public compBaseImponible: number = 0;
    public compBaseNoObjeto: number = 0;
    public compBaseExenta: number = 0;
    public compIce: number = 0;
    public compMontoIva: number = 0;
    public compOtrosImpuestos: number = 0;
    public compPropina: number = 0;
    public compTotal: number = 0;
    public compValorRetenido: number = 0;
    public compRetencionAsumida: boolean = false;
    public compSaldo: number = 0;
    public provEmpresa: string = null;
    public provCodigo: string = null;
    public bodEmpresa: string = null;
    public bodCodigo: string = null;
    public secEmpresa: string = null;
    public secCodigo: string = null;
    public ctaEmpresa: string = null;
    public ctaCodigo: string = null;
    public contPeriodo: string = null;
    public contTipo: string = null;
    public contNumero: string = null;
    public usrInsertaCompra: string = null;
    public usrFechaInsertaCompra: string = null;
    //orden de compra
    public ocEmpresa: string = null;
    public ocSector: string = null;
    public ocMotivo: string = null;
    public ocNumero: string = null;

    constructor(data?) {
        data ? this.hydrate(data) : null;
    }

    hydrate(data) {
        this.empCodigo = data.empCodigo ? data.empCodigo : this.empCodigo;
        this.compPeriodo = data.compPeriodo ? data.compPeriodo : this.compPeriodo;
        this.compMotivo = data.compMotivo ? data.compMotivo : this.compMotivo;
        this.compNumero = data.compNumero ? data.compNumero : this.compNumero;
        this.compDocumentoProveedor = data.compDocumentoProveedor ? data.compDocumentoProveedor : this.compDocumentoProveedor;
        this.compDocumentoTipo = data.compDocumentoTipo ? data.compDocumentoTipo : this.compDocumentoTipo;
        this.compDocumentoNumero = data.compDocumentoNumero ? data.compDocumentoNumero : this.compDocumentoNumero;
        this.compFecha = data.compFecha ? data.compFecha : this.compFecha;
        this.compFechaVencimiento = data.compFechaVencimiento ? data.compFechaVencimiento : this.compFechaVencimiento;
        this.compIvaVigente = data.compIvaVigente ? data.compIvaVigente : this.compIvaVigente;
        this.compObservaciones = data.compObservaciones ? data.compObservaciones : this.compObservaciones;
        this.compElectronica = data.compElectronica ? data.compElectronica : this.compElectronica;
        this.compActivoFijo = data.compActivoFijo ? data.compActivoFijo : this.compActivoFijo;
        this.compImportacion = data.compImportacion ? data.compImportacion : this.compImportacion;
        this.compPendiente = data.compPendiente ? data.compPendiente : this.compPendiente;
        this.compRevisado = data.compRevisado ? data.compRevisado : this.compRevisado;
        this.compAnulado = data.compAnulado ? data.compAnulado : this.compAnulado;
        this.compFormaPago = data.compFormaPago ? data.compFormaPago : this.compFormaPago;
        this.compDocumentoFormaPago = data.compDocumentoFormaPago ? data.compDocumentoFormaPago : this.compDocumentoFormaPago;
        this.compBase0 = data.compBase0 ? data.compBase0 : this.compBase0;
        this.compBaseImponible = data.compBaseImponible ? data.compBaseImponible : this.compBaseImponible;
        this.compBaseNoObjeto = data.compBaseNoObjeto ? data.compBaseNoObjeto : this.compBaseNoObjeto;
        this.compBaseExenta = data.compBaseExenta ? data.compBaseExenta : this.compBaseExenta;
        this.compIce = data.compIce ? data.compIce : this.compIce;
        this.compMontoIva = data.compMontoIva ? data.compMontoIva : this.compMontoIva;
        this.compOtrosImpuestos = data.compOtrosImpuestos ? data.compOtrosImpuestos : this.compOtrosImpuestos;
        this.compPropina = data.compPropina ? data.compPropina : this.compPropina;
        this.compTotal = data.compTotal ? data.compTotal : this.compTotal;
        this.compValorRetenido = data.compValorRetenido ? data.compValorRetenido : this.compValorRetenido;
        this.compRetencionAsumida = data.compRetencionAsumida ? data.compRetencionAsumida : this.compRetencionAsumida;
        this.compSaldo = data.compSaldo ? data.compSaldo : this.compSaldo;
        this.provEmpresa = data.provEmpresa ? data.provEmpresa : this.provEmpresa;
        this.provCodigo = data.provCodigo ? data.provCodigo : this.provCodigo;
        this.bodEmpresa = data.bodEmpresa ? data.bodEmpresa : this.bodEmpresa;
        this.bodCodigo = data.bodCodigo ? data.bodCodigo : this.bodCodigo;
        this.secEmpresa = data.secEmpresa ? data.secEmpresa : this.secEmpresa;
        this.secCodigo = data.secCodigo ? data.secCodigo : this.secCodigo;
        this.ctaEmpresa = data.ctaEmpresa ? data.ctaEmpresa : this.ctaEmpresa;
        this.ctaCodigo = data.ctaCodigo ? data.ctaCodigo : this.ctaCodigo;
        this.contPeriodo = data.contPeriodo ? data.contPeriodo : this.contPeriodo;
        this.contTipo = data.contTipo ? data.contTipo : this.contTipo;
        this.contNumero = data.contNumero ? data.contNumero : this.contNumero;
        this.usrInsertaCompra = data.usrInsertaCompra ? data.usrInsertaCompra : this.usrInsertaCompra;
        this.usrFechaInsertaCompra = data.usrFechaInsertaCompra ? data.usrFechaInsertaCompra : this.usrFechaInsertaCompra;
        this.ocEmpresa = data.ocEmpresa ? data.ocEmpresa : this.ocEmpresa;
        this.ocSector = data.ocSector ? data.ocSector : this.ocSector;
        this.ocMotivo = data.ocMotivo ? data.ocMotivo : this.ocMotivo;
        this.ocNumero = data.ocNumero ? data.ocNumero : this.ocNumero;
    }
}