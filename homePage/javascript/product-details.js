const productImage = document.querySelector(".product-image");
const modalFullScreen = document.querySelector(".image-modal-container");
const modalImage = document.querySelector(".modal-image");

const incrementImageSize = () => {
  modalFullScreen.style.display = "block";
  modalImage.style.display = "block";
};

const closeImageModal = () => {
  modalFullScreen.style.display = "none";
  modalImage.style.display = "none";
};
