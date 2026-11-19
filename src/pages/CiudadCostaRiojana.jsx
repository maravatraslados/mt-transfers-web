import LaRiojaExcursion from "../LaRiojaExcursion"
import { excursiones } from "../laRiojaData"

function CiudadCostaRiojana() {
  return <LaRiojaExcursion excursion={excursiones[1]} />
}

export default CiudadCostaRiojana
