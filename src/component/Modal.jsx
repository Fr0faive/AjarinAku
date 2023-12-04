import { Button } from "./Button";

const Modal = (props) => {
  const { children, title } = props;
  return (
    <>
      <Button
        type="button"
        value="open modal"
        color="primary"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      />

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
