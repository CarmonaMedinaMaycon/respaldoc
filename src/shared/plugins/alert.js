import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alert = withReactContent(Swal);
export const confirmMsg = "alch esperece a que la accion haga su chamba";
export const confirmTittle = "seguro? asi bien seguro?";
export const successMsg = "ya jalo";
export const successTittle = "ya jalo correctamente";
export const errorMsg ="no jalo cabron, todo es tu culpa, por eso tu familia no te quiere";
export const errorTitle = "no jalo, ya valio chetos todo";

export default Alert;
