document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const image = document.getElementById('bulb_img');
    const switchImage = document.getElementById('switch_img');
    const catStage = document.getElementById('cat-stage');
    const catAudio = document.getElementById('cat-audio');
    const bananaAudio = document.getElementById('banana-audio');
    let isOn = false;

    btn.addEventListener('click', () => {
        isOn = !isOn;
        image.src = isOn ? 'images/cat on.png' : 'images/cat off.png';
        image.alt = isOn ? 'Cat light is on' : 'Cat light is off';
        switchImage.src = isOn ? 'images/button-on.png' : 'images/button-off.png';
        catStage.hidden = !isOn;
        document.body.classList.toggle('light-on', isOn);
        btn.setAttribute('aria-pressed', String(isOn));
        btn.setAttribute('aria-label', isOn ? 'Turn light off' : 'Turn light on');

        if (isOn) {
            bananaAudio.pause();
            bananaAudio.currentTime = 0;
            catAudio.play().catch(error => {
                console.error('Could not play the cat audio:', error);
            });
        } else {
            catAudio.pause();
            catAudio.currentTime = 0;
            bananaAudio.play().catch(error => {
                console.error('Could not play the banana cry audio:', error);
            });
        }
    });
});