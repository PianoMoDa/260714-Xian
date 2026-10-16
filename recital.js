'use strict';
document.querySelectorAll('.play-video').forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.vid;
    if (!/^BV[a-zA-Z0-9]+$/.test(id || '')) return;
    const frame = document.createElement('iframe');
    frame.src = 'https://player.bilibili.com/player.html?bvid=' + encodeURIComponent(id) + '&autoplay=1&danmaku=0';
    frame.title = button.dataset.title + ' · bilibili 참고 영상';
    frame.allow = 'autoplay; fullscreen; picture-in-picture';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    button.parentElement.replaceChildren(frame);
    frame.focus();
  });
});
