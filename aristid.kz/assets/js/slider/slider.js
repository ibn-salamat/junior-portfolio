let productsSliderWrap = document.querySelector(".slider-content");

let productsData = {
  contents: [
    {
      miniImg: "../../aristid.kz/imgs/team/1.jpg",
      fullImg: "../../aristid.kz/imgs/team/1.jpg",
      position: "BOSS",
      name: {
        firstName: "Aidar",
        lastName: "Week"
      },
      description: `Комплекс SmartBoardExpert — это автоматизированная система на основе технологии искусственного интеллекта,
       осуществляющая управление бизнес-процессами планирования, подготовки, проведения и документирования заседаний Коллегиальных органов организации `
    },
    {
      miniImg: "../../aristid.kz/imgs/team/1.jpg",
      fullImg: "../../aristid.kz/imgs/team/1.jpg",
      position: "BOSS",
      name: {
        firstName: "Aidar",
        lastName: "Week"
      },
      description: `Комплекс SmartBoardExpert — это автоматизированная система на основе технологии искусственного интеллекта,
       осуществляющая управление бизнес-процессами планирования, подготовки, проведения и документирования заседаний Коллегиальных органов организации `
    },
    {
      miniImg: "../../aristid.kz/imgs/team/1.jpg",
      fullImg: "../../aristid.kz/imgs/team/1.jpg",
      position: "BOSS",
      name: {
        firstName: "Aidar",
        lastName: "Week"
      },
      description: `Комплекс SmartBoardExpert — это автоматизированная система на основе технологии искусственного интеллекта,
       осуществляющая управление бизнес-процессами планирования, подготовки, проведения и документирования заседаний Коллегиальных органов организации `
    },
    {
      miniImg: "../../aristid.kz/imgs/team/1.jpg",
      fullImg: "../../aristid.kz/imgs/team/1.jpg",
      position: "BOSS",
      name: {
        firstName: "Aidar",
        lastName: "Week"
      },
      description: `Комплекс SmartBoardExpert — это автоматизированная система на основе технологии искусственного интеллекта,
       осуществляющая управление бизнес-процессами планирования, подготовки, проведения и документирования заседаний Коллегиальных органов организации `
    },
    {
      miniImg:"../../aristid.kz/imgs/team/1.jpg",
      fullImg:"../../aristid.kz/imgs/team/1.jpg",
      position: "BOSS",
      name: {
        firstName: "Aidar",
        lastName: "Week"
      },
      description: `Комплекс SmartBoardExpert — это автоматизированная система на основе технологии искусственного интеллекта,
       осуществляющая управление бизнес-процессами планирования, подготовки, проведения и документирования заседаний Коллегиальных органов организации `
    }
  ]
};

// Product
let productsSlides = productsData.contents
  .map(content => {
    return `<div class='my-slide'>
    <div class="image">
      <img class="mini" src="${content.miniImg}" alt="">
      <img class="full" src="${content.fullImg}" alt="">
      <div class="description">
        <h4>${content.name.firstName + " " + content.name.lastName}</h4>
        <h5>${content.position}</h5>
        <p>${content.description}</p>
      </div>
    </div>
    <p class="name">${content.name.firstName + " " + content.name.lastName}</p>
    <button class="close-slide">&times;</button>
  </div>`;
  })
  .join("");

productsSliderWrap.innerHTML += productsSlides;
