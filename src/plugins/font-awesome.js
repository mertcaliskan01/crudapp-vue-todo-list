import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHome,
  faTasks,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faCheck,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome,faTasks, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faCheck, faXmark);

export { FontAwesomeIcon };