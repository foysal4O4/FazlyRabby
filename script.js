function showWish() {
    const specialWishDiv = document.getElementById('specialWish');
    const birthdaySound = document.getElementById('birthdaySound');

    specialWishDiv.textContent = "Happy Birthday, Fazly Rabby! 🎉 May your day be filled with love and happiness!";
    specialWishDiv.classList.remove('hidden');
    
    birthdaySound.play();
}
