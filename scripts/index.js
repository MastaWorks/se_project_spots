const initialCards = [
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
    },
    {
        name: "Landscape",
        link: " https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"
    },
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"
    },
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"
    }
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__exit-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameEl = document.querySelector('.profile__name');
const profileDescriptionEl = document.querySelector('.profile__description');
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__newpost-button");
const newPostModal = document.querySelector("#new-post-modal")
const newPostCloseBtn = newPostModal.querySelector(".modal__exit-button");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostImageLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
const cardList = document.querySelector(".cards__list");


function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__caption");
    const cardImgEl = cardElement.querySelector(".card__image");

    cardImgEl.src = data.link;
    cardImgEl.alt = data.name;
    cardTitleEl.textContent = data.name;

    const cardLikeBtnEl = cardElement.querySelector(".card__like-button");
    cardLikeBtnEl.addEventListener("click", () => {
        cardLikeBtnEl.classList.toggle("card__like-button_active");
    });

    const cardDeleteBtnEl = cardElement.querySelector(".card__delete-button");
    cardDeleteBtnEl.addEventListener("click", () => {
        cardElement.remove();
    })

    return cardElement;
};

function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened)");
}

function handleProfileSubmitForm(event) {
    event.preventDefault();
    console.log("Submitted!");
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
}

function handleNewPostForm(event) {
    event.preventDefault();
    console.log(newPostImageLinkInput.value);
    console.log(newPostCaptionInput.value);
    newPostModal.classList.remove("modal_is-opened");

    cardList.prepend(getCardElement({ name: newPostCaptionInput.value, link: newPostImageLinkInput.value }));
    event.target.reset();
}

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);
});

editProfileForm.addEventListener('submit', handleProfileSubmitForm);

editProfileCloseBtn.addEventListener("click", function () {
    closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
    openModal(newPostModal);
});

newPostForm.addEventListener('submit', handleNewPostForm);

newPostCloseBtn.addEventListener("click", function () {
    closeModal(newPostModal);
});

initialCards.forEach(function (item) {
    const cardElement = getCardElement(item);
    cardList.append(cardElement);
    console.log(item);
});