const initialCards = [
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"
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

function openModal(modal){
  modal.classList.add("modal_is-opened");
}

function closeModal(modal)
{
  modal.classList.remove("modal_is-opened)");
}

function handleProfileSubmitForm(event){
    event.preventDefault();
    console.log("Submitted!");
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    // editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal);
}

function handleNewPostForm(event){
    event.preventDefault();
    console.log(newPostImageLinkInput.value);
    console.log(newPostCaptionInput.value);
    newPostModal.classList.remove("modal_is-opened");    
    event.target.reset();
}

editProfileBtn.addEventListener("click", function(){
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    // editProfileModal.classList.add("modal_is-opened");
    openModal(editProfileModal);
});

editProfileForm.addEventListener('submit', handleProfileSubmitForm);

editProfileCloseBtn.addEventListener("click", function(){
    // editProfileModal.classList.remove("modal_is-opened");
    closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function(){
    // newPostModal.classList.add("modal_is-opened");
    openModal(newPostModal);
});

newPostForm.addEventListener('submit', handleNewPostForm);

newPostCloseBtn.addEventListener("click", function(){
    // newPostModal.classList.remove("modal_is-opened");
    closeModal(newPostModal);
});

initialCards.forEach(function (item){
    console.log(item.name);
});