const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__exit-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileNameEl = document.querySelector('.profile__name');
const profileDescriptionEl = document.querySelector('.profile__description');
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDecriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__newpost-button");
const newPostModal = document.querySelector("#new-post-modal")
const newPostCloseBtn = newPostModal.querySelector(".modal__exit-button");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostImageLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

editProfileBtn.addEventListener("click", function(){
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDecriptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.add("modal_is-opened");
});

function handleProfileSubmitForm(event){
    event.preventDefault();
    console.log("Submitted!");
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDecriptionInput.value;
    editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener('submit', handleProfileSubmitForm);

editProfileCloseBtn.addEventListener("click", function(){
    editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function(){
    newPostModal.classList.add("modal_is-opened");
});

function handleNewPostForm(event){
    event.preventDefault();
    console.log(newPostImageLinkInput.value);
    console.log(newPostCaptionInput.value);
}

newPostForm.addEventListener('submit', handleNewPostForm);

newPostCloseBtn.addEventListener("click", function(){
    newPostModal.classList.remove("modal_is-opened");
});