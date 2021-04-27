'use strict'


const hori = document.querySelector('.horisontal');
const verti = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');



window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    hori.style.top = `${y}px`;
    verti.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.innerHTML = `${x}px, ${y}px`;
})