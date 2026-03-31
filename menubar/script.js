$(document).ready(function () {
  // Open submenu on focus
  $(".menu-btn").on("focus", function () {
    closeAllMenus();

    $(this).attr("aria-expanded", "true");
    $(this).next(".submenu").show();
  });

  // Hover support (sync ARIA)
  $(".menubar > li").hover(
    function () {
      $(this).find(".menu-btn").attr("aria-expanded", "true");
      $(this).find(".submenu").show();
    },
    function () {
      $(this).find(".menu-btn").attr("aria-expanded", "false");
      $(this).find(".submenu").hide();
    },
  );

  // Keyboard navigation
  $(".menu-btn").on("keydown", function (e) {
    let current = $(this).parent();

    if (e.key === "ArrowRight") {
      e.preventDefault();
      current.next().find(".menu-btn").focus();
    }

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      current.prev().find(".menu-btn").focus();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      $(this).next(".submenu").find('[role="menuitem"]').first().focus();
    }

    if (e.key === "Escape") {
      closeAllMenus();
      $(this).focus();
    }
  });

  // Submenu keyboard
  $('[role="menuitem"]').on("keydown", function (e) {
    let items = $(this).closest(".submenu").find('[role="menuitem"]');

    let index = items.index(this);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      items.eq(index + 1).focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      items.eq(index - 1).focus();
    }

    if (e.key === "Escape") {
      closeAllMenus();
      $(this).closest("li").parent().prev(".menu-btn").focus();
    }
  });

  function closeAllMenus() {
    $(".submenu").hide();
    $(".menu-btn").attr("aria-expanded", "false");
  }
});
