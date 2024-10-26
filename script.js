function playSound() {
    const specialWishDiv = document.getElementById('specialWish');
    const birthdaySong = document.getElementById('birthdaySong');

    specialWishDiv.textContent = "Happy Birthday, Fazly Rabby! 🎉 May your day be filled with love and happiness!";
    specialWishDiv.classList.remove('hidden');
    
    birthdaySong.play();
}
