import { Modal, Slide } from "@mui/material";
import DetailPokemon from "../organims/detailPokemon";

export default function ModalPokemon({open, handleClose}) {
  return (
    <Modal
            open={open}
            onClose={handleClose}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
            keepMounted
        >
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div className="body_modal">
            <DetailPokemon showClose={true} handleClose={handleClose} />
        </div>
        </Slide>
    
    </Modal>
  )
}