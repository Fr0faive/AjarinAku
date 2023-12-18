import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const { children, title } = props;
  return (
    <>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white border-none mb-3"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <FontAwesomeIcon icon={faPlus} /> Add Category
      </button>

      <dialog id="my_modal_3" className="modal bg-white/30 backdrop-blur-sm">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-3xl font-bold text-black">{title}</h3>
          {children}
        </div>
      </dialog>
    </>
  );
};

export default Modal;
