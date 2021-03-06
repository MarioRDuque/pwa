import { Injectable } from '@angular/core';
import { ApiRequestService } from '../../../../serviciosgenerales/api-request.service';
import { ToastrService } from '../../../../../../node_modules/ngx-toastr';
import { UtilService } from '../../../../serviciosgenerales/util.service';
import { LS } from '../../../../constantes/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(
    public api: ApiRequestService,
    public toastr: ToastrService,
    public utilService: UtilService
  ) { }

  listarAfUbicacionesTO(parametro, contexto, empresaSelect) {
    this.api.post("todocompuWS/activosFijosWebController/getListaAfUbicacionesTO", parametro, empresaSelect)
      .then(respuesta => {
        if (respuesta && respuesta.extraInfo) {
          contexto.despuesDeListarAfUbicacionesTO(respuesta.extraInfo);
        } else {
          contexto.cargando = false;
          contexto.despuesDeListarAfUbicacionesTO([]);
          this.toastr.warning(respuesta.operacionMensaje, LS.TOAST_INFORMACION);
        }
      }).catch(err => this.utilService.handleError(err, contexto));
  }
}
