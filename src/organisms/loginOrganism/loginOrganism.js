import ComplexNode from "../../components/ComplexNode/ComplexNode.js";
import inputFieldAtom from "../../atoms/inputFieldAtom/inputFieldAtom.js";
import buttonAtom from "../../atoms/buttonAtom/buttonAtom.js";

/**
 * @type{import('../../typedef.js').AtomicNode}
 */
const loginOrganism = {
  ComponentClass: ComplexNode,
  args: {
    elementType: 'div',
    defaults: {
      id: 'id_login_organism',
    },
    children: [
      {
        atomicNode: inputFieldAtom,
        overrides: {
          attributes: {
            placeholder: "username",
            id: "id_login_username",
          },
        }
      },
      {
        atomicNode: inputFieldAtom,
        overrides: {
          attributes: {
            placeholder: "password",
            id: "id_login_password",
          },
        }
      },
      {
        atomicNode: buttonAtom,
        overrides: {
          attributes: {
            id: "id_login_button",
          },
          textContent: "Login",
        }
      },
      {
        atomicNode: buttonAtom,
        overrides: {
          attributes: {
            id: "id_register_button",
          },
          textContent: "Register",
        }
      },
    ],
  },
};

export default loginOrganism;
