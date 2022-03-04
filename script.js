"use strict";

// HTML Elements

const btnsEl = document.querySelectorAll(".btn");
const btnsContainerEl = document.querySelector(".tab__btn-container");
const tabContainersEl = document.querySelectorAll(".tab-container");
const imgsEl = document.querySelectorAll('.tab-img');

// Functions

const removeClass = function () {
  // Remove active class from btn
  btnsEl.forEach((btn) => btn.classList.remove("btn__active"));

  // Remove active class from content
  tabContainersEl.forEach((c) => c.classList.remove("tab-container__active"));

  // Remove active class from img
  imgsEl.forEach(img => img.classList.remove('tab-img__active'))
};

const addActiveClass = function (activeClick, activeContent, activeImg) {
  // Add active class to btn
  activeClick.classList.add("btn__active");

  // Add active class to content
  activeContent.classList.add("tab-container__active");

  // Add active class to image
  activeImg.classList.add('tab-img__active');
};

const tabbedComponent = function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("btn")) {
    const activeContent = document.querySelector(
      `.tab-container__${clicked.dataset.tab}`
    );
    const activeImg = document.querySelector(`.tab-img__${clicked.dataset.tab}`)
    removeClass();
    addActiveClass(clicked, activeContent, activeImg);
  } else return;
}

// Event listener 

btnsContainerEl.addEventListener("click", tabbedComponent)

