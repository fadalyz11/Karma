import $ from "jquery";

const MobileMenu = class MobileMenu {
  constructor() {
    $(".site-header__menu-icon").click(function() {
      console.log("lllll");
    });
  }
};

export default MobileMenu;
