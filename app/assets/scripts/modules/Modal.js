import $ from 'jquery';

class Modal {
  constructor(){
    this.openBtn = $(".open-modal");
    this.modal = $(".modal");
    this.closeBtn = $(".modal__close");
    this.events();
  }
  events(){
    this.openBtn.click(this.openModal.bind(this));
    this.closeBtn.click(this.closeModal.bind(this));

    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false;
  }
  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
