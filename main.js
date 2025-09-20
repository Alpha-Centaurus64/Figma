// Responsive gallery and category filter
const galleryData = [
  {
    title: "Abstract Art",
    desc: "A vibrant abstract piece with bold colors.",
    category: "abstract",
    img: "https://placehold.co/448x446?text=Abstract",
  },
  {
    title: "Mountain View",
    desc: "A beautiful nature landscape.",
    category: "nature",
    img: "https://placehold.co/448x446?text=Nature",
  },
  {
    title: "Portrait of Anna",
    desc: "A classic portrait shot.",
    category: "portrait",
    img: "https://placehold.co/448x446?text=Portrait",
  },
  {
    title: "Colorful Shapes",
    desc: "Modern abstract composition.",
    category: "abstract",
    img: "https://placehold.co/448x446?text=Abstract",
  },
  {
    title: "Forest Path",
    desc: "Serene nature walk.",
    category: "nature",
    img: "https://placehold.co/448x446?text=Nature",
  },
  {
    title: "Portrait of John",
    desc: "Expressive portrait photography.",
    category: "portrait",
    img: "https://placehold.co/448x446?text=Portrait",
  },
];

function renderGallery(category = "all") {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = "";
  const filtered =
    category === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === category);
  filtered.forEach((item) => {
    const el = document.createElement("div");
    el.className = "gallery-item";
    el.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <div class="gallery-item__info">
        <div class="gallery-item__title">${item.title}</div>
        <div class="gallery-item__desc">${item.desc}</div>
      </div>
    `;
    gallery.appendChild(el);
  });
}

function setupCategoryButtons() {
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.category);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  setupCategoryButtons();
});
import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 448px;
  height: 320px;
  left: 0px;
  top: 0px;
  position: absolute;
  background: #d9d9d9;
`;

const StyledProjectnamespan = styled.span`
  color: black;
  font-size: 28px;
  font-family: Satoshi;
  font-weight: 700;
  word-wrap: break-word;
`;

const StyledShortdescriptionoftheprojectspan = styled.span`
  color: black;
  font-size: 16px;
  font-family: Plus Jakarta Sans;
  font-weight: 400;
  word-wrap: break-word;
`;

const StyledProjectdesc = styled.div`
  width: 327px;
  left: 40px;
  top: 353px;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  display: inline-flex;
`;

const StyledProject = styled.div`
  width: 448px;
  height: 448px;
  position: relative;
  background: white;
  overflow: hidden;
`;

export const Project = () => {
  return (
    <StyledProject>
      <StyledImage />
      <StyledProjectdesc>
        <StyledProjectName>Project Name</StyledProjectName>
        <StyledShortdescriptionoftheproject>
          Short description of the project
        </StyledShortdescriptionoftheproject>
      </StyledProjectdesc>
    </StyledProject>
  );
};
