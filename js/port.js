const trigger = new ScrollTrigger.default();
trigger.add("[data-trigger]", {
  // 一回のみ
  once: true,
});

for (let i = 1; i <= 18; i++) {
  const text = document.querySelector(`.text${i}`);
  gsap.timeline().from(text, {
    opacity: 0,
    delay: i * 0.1, // delay を 0.2 ずつ増やす
  });
}

gsap.timeline({ delay: 1.8 }).from(".header__image--content", {
  opacity: 0,
  ease: "ease-out",
});

gsap.timeline({ delay: 2.2 }).from(".header__image--hair", {
  opacity: 0,
  x: -1000,
  y: 1000,
  ease: "ease-out",
});

gsap.timeline({ delay: 2.4 }).from(".header__image--lefteye", {
  opacity: 0,
  x: 1000,
  y: 1000,
  ease: "ease-out",
});

gsap.timeline({ delay: 2.6 }).from(".header__image--righteye", {
  opacity: 0,
  x: 1000,
  y: -1000,
  ease: "ease-out",
});

gsap.timeline({ delay: 2.8 }).from(".header__image--nose", {
  opacity: 0,
  x: -1000,
  Y: 500,
  ease: "ease-out",
});

gsap.timeline({ delay: 3.0 }).from(".header__image--mouse", {
  opacity: 0,
  x: -1000,
  Y: 200,
  ease: "ease-out",
});

gsap.timeline({ delay: 3.2 }).from(".header__image--glass", {
  opacity: 0,
  x: 1000,
  ease: "ease-out",
});

gsap.timeline({ repeat: -1, delay: 4.0 }).from(".arrow", {
  opacity: 0,
  delay: (i) => i * 0.5, // delay を 0.2 ずつ増やす
  yoyo: true,
});

{
  /* ローカルスコープ */

  // DOM取得
  const tabMenus = document.querySelectorAll(".tab__menu-item");

  // イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", tabSwitch);
  });

  // イベントの処理
  function tabSwitch(e) {
    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest(".tab__menu");
    console.log(tabList);
    const tabItems = tabList.querySelectorAll(".tab__menu-item");
    console.log(tabItems);
    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems =
      tabList.nextElementSibling.querySelectorAll(".tab__panel-box");
    console.log(tabPanelItems);

    // クリックされたtabの同階層のmenuとpanelのクラスを削除
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("is-active");
    });
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove("is-show");
    });

    // クリックされたmenu要素にis-activeクラスを付加
    e.currentTarget.classList.add("is-active");
    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel === tabTargetData) {
        tabPanelItem.classList.add("is-show");
      }
    });
  }
}
