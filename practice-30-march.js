$(document).ready(function () {
  $("button:has(i.close-icon)").attr("aria-lebel", "Close");

  // make button accessible - <div class="btn">Save</div>

  $(".btn")
    .attr("tabindex", "0")
    .attr("role", "button")
    .on("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") $(this).click();
    });

  // Link acting like a button <a href="#">Open modal</a>

  $('a[href="#"]').attr("role", "button");

  // missing heading structure

  $(".heading").attr("role", "heading").attr("aria-level", "2");

  // Click works, keyboard nahi

  $("el").addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") el.click();
  });

  // Focus outline remove kiya hua hai - outline set none hai
  $(":focus").css("outline", "2px solid blue");

  // Modal open but focus bahar hai
  $("#modal").attr("tabindex", "-1").focus();

  // . ESC key not working
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // . Menu open but focus move nahi hua
  menu.find("li:first").attr("tabindex", "-1").focus();

  //Arrow keys not working
  if (e.key === "ArrowDown") next.focus();

  // Active tab defined nahi
  tab.attr("aria-selected", "true");

  //All tabs focusable

  tabs.attr("tabindex", "-1");
  activeTab.attr("tabindex", "0");

  // Content update but announce nahi hua

  $("#msg").attr("aria-live", "polite").text("updated");
});
