// Текущий язык интерфейса.
let currentLang = 'ru';

// Словарь переводов: единственный источник текстов интерфейса.
const translations = {
  ru: {
    'tab.for-me': 'Для меня',
    'tab.for-brands': 'Для брендов',
    'tab.about-us': 'О нас',
    'about.desc': 'Эта страница — портфолио-прототип. Его автор — Тамара Воробьёва, проектный менеджер. Задача: из неформального брифа собрать техническое задание и работающий прототип, управляя ИИ как инструментом разработки.',
    'tab.mobile-app': 'Мобильное приложение',

    'menu.aria-me': 'Меню для покупателей',
    'menu.aria-brands': 'Меню для брендов',
    'menu.wardrobe': 'Гардероб',
    'menu.collections': 'Подборки товаров',
    'menu.looks': 'Looks',
    'menu.brands': 'Бренды',
    'menu.try-on': 'Примерка',
    'menu.value-prop': 'Ценностное предложение',
    'menu.conditions': 'Условия',
    'menu.join': 'Присоединиться',

    'hero.title': '<span class="hero__mark">Полный шкаф, но нечего надеть?<br>- Реши эту проблему раз и навсегда</span>',

    'card.wardrobe-title': 'Гардероб',
    'card.wardrobe-desc': 'Соберите свой гардероб в приложении и получайте образы из того, что уже есть.',
    'card.collections-title': 'Подборки товаров',
    'card.collections-desc': 'Разные варианты одной вещи — чтобы сравнить и выбрать.',
    'card.looks-title': 'Looks',
    'card.looks-desc': 'Готовые образы из нескольких вещей.',
    'card.brands-title': 'Бренды',
    'card.brands-desc': 'Твои любимые бренды в одном приложении.',
    'card.brands-badge': 'Обновляется',
    'card.tryon-title': 'Примерка',
    'card.tryon-desc': 'Посмотрите, как вещь может выглядеть на вас.',
    'card.tryon-badge': 'Скоро',

    'cta.waitlist': 'Записаться в лист ожидания',
    'cta.waitlist-go': 'Перейти на лист ожидания',
    'cta.heading': 'Запишитесь, чтобы получить доступ первыми',
    'cta.join': 'Присоединиться',

    'products.title': 'Популярные товары',
    'products.note': 'Раздел обновляется',
    'product.shop': 'В магазин',
    'product.discount': 'Скидка',
    'product.brand-fallback': 'Бренд',

    'brandcard.value-desc': 'Покупатели, которые ищут именно вас.',
    'brandcard.cond-desc': 'Оплата за результат, а не за показы.',
    'brandcard.join-desc': 'Оставьте заявку — мы свяжемся с вами.',
    'brands.cta': 'Готовы к сотрудничеству?',
    'brands.value-title': 'Покупатели, которые ищут именно вас',
    'brands.value-intro': 'Fashion app помогает женщинам 20–35 лет находить одежду модных брендов по поводу, сезону и стилю — в том числе с помощью гардероба в приложении.',
    'val.1': '<strong>Целевой трафик.</strong> Покупательница переходит в ваш магазин, уже выбрав конкретную вещь.',
    'val.2': '<strong>Ваши товары в образах и подборках.</strong> Вещи бренда показываются не только в каталоге, но и в готовых образах и тематических подборках.',
    'val.3': '<strong>Витрина модных брендов.</strong> Ваш бренд — в едином каталоге рядом с другими модными брендами.',
    'val.4': '<strong>Оплата за результат.</strong> Вы платите за продажи, а не за показы.',
    'brands.cond-title': 'Условия партнёрства',
    'cond.1': '<strong>Модель оплаты:</strong> комиссия [X] % с продаж, совершённых по переходу из Fashion app.',
    'cond.2': '<strong>Срок учёта перехода (cookie-окно):</strong> [N] дней.',
    'cond.3': '<strong>Подключение:</strong> [ТЕКСТ: условия подключения — стоимость, сроки].',
    'cond.4': '<strong>Каталог:</strong> товарный фид с изображениями, ценами, наличием и атрибутами. Формат фида — [указать].',
    'cond.5': '<strong>Права на изображения:</strong> бренд предоставляет право использовать фото товаров в каталоге, образах, подборках и в функции виртуальной примерки.',
    'cond.6': '<strong>Продвижение (опционально):</strong> платное размещение в приоритетных позициях; такие карточки маркируются как реклама.',
    'brands.join-title': 'Оставить заявку',

    'form.name': 'Имя',
    'form.brand': 'Название бренда',
    'form.contact': 'Контактное лицо',
    'form.site': 'Сайт / магазин',
    'form.name-ph': 'Ваше имя',
    'form.brand-ph': 'Название вашего бренда',
    'form.email-ph': 'Ваш email',
    'form.consent': 'Я согласен (согласна) на обработку моих персональных данных',
    'form.submit': 'Отправить',
    'form.submit-brand': 'Отправить заявку',
    'form.sending': 'Отправка…',

    'app.desc': 'Скачайте наше мобильное приложение Fashion app и получайте подборки одежды, готовые образы и свой гардероб в любое время. Приложение доступно для iOS и Android.',

    'footer.about': 'О нас',
    'footer.social': 'Соцсети',
    'footer.newsletter': 'Рассылка',
    'footer.newsletter-consent': 'Я согласен (согласна) получать новостную рассылку',
    'footer.subscribe': 'Подписаться',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Пользовательское соглашение',
    'footer.disclaimer': 'Демонстрационный концепт: данные вымышленные, названия и логотипы брендов принадлежат их владельцам.',
    'footer.author': 'Автор: Тамара Воробьёва',

    'cookie.title': 'Мы используем cookies',
    'cookie.necessary': 'Только необходимые',
    'cookie.accept': 'Принять все',

    'modal.close': 'Закрыть окно',
    'modal.wardrobe-body': 'Соберите все вещи в одном месте: добавляйте то, что уже есть в вашем гардеробе, а приложение подскажет, с чем их сочетать и чего не хватает. Так из того, что у вас есть, получаются готовые образы — без лишних покупок. Скачайте мобильное приложение, чтобы гардероб всегда был под рукой.',
    'modal.tryon-body': 'Используйте виртуальную примерку, чтобы увидеть, как вещь будет выглядеть именно на вас. Загрузьте фото, выберите предмет одежды из каталога, и наша технология покажет, как он сидит. Примерка работает для разных типов фигур и телосложения. Это поможет вам принять правильное решение перед покупкой. Скачайте мобильное приложение, чтобы примерять вещи в любое время.',
    'modal.waitlist-title': 'Запишитесь в лист ожидания',

    'toast.email': 'Пожалуйста, укажите корректный email',
    'toast.consent-data': 'Необходимо согласие на обработку данных',
    'toast.consent-news': 'Необходимо согласие на рассылку',
    'toast.waitlist-ok': 'Спасибо! Проверьте вашу почту.',
    'toast.brand-ok': 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    'toast.news-ok': 'Спасибо за подписку! Проверьте почту.',
    'toast.cookies-all': 'Настройки сохранены',
    'toast.cookies-necessary': 'Только необходимые cookies'
  },

  en: {
    'tab.for-me': 'For me',
    'tab.for-brands': 'For brands',
    'tab.about-us': 'About us',
    'about.desc': 'This page is a portfolio prototype by Tamara Vorobyeva, a project manager. The goal: turn an informal brief into a specification and a working prototype, directing AI as a development tool.',
    'tab.mobile-app': 'Mobile app',

    'menu.aria-me': 'Menu for shoppers',
    'menu.aria-brands': 'Menu for brands',
    'menu.wardrobe': 'Wardrobe',
    'menu.collections': 'Collections',
    'menu.looks': 'Looks',
    'menu.brands': 'Brands',
    'menu.try-on': 'Try-on',
    'menu.value-prop': 'Value proposition',
    'menu.conditions': 'Terms',
    'menu.join': 'Join',

    'hero.title': '<span class="hero__mark">Full wardrobe, but nothing to wear?<br>- Solve this problem once and for all</span>',

    'card.wardrobe-title': 'Wardrobe',
    'card.wardrobe-desc': 'Build your wardrobe in the app and get outfits from what you already own.',
    'card.collections-title': 'Collections',
    'card.collections-desc': 'Different versions of one item, so you can compare and choose.',
    'card.looks-title': 'Looks',
    'card.looks-desc': 'Ready-made outfits made of several items.',
    'card.brands-title': 'Brands',
    'card.brands-desc': 'Your favorite brands in one app.',
    'card.brands-badge': 'Updating',
    'card.tryon-title': 'Try-on',
    'card.tryon-desc': 'See how an item could look on you.',
    'card.tryon-badge': 'Coming soon',

    'cta.waitlist': 'Join the waitlist',
    'cta.waitlist-go': 'Go to the waitlist',
    'cta.heading': 'Sign up to get access first',
    'cta.join': 'Join',

    'products.title': 'Popular products',
    'products.note': 'This section is being updated',
    'product.shop': 'Go to store',
    'product.discount': 'Sale',
    'product.brand-fallback': 'Brand',

    'brandcard.value-desc': 'Shoppers who are looking for exactly you.',
    'brandcard.cond-desc': 'You pay for results, not for impressions.',
    'brandcard.join-desc': 'Leave a request and we will get in touch.',
    'brands.cta': 'Ready to work together?',
    'brands.value-title': 'Shoppers who are looking for exactly you',
    'brands.value-intro': 'Fashion app helps women aged 20–35 find clothing from fashion brands by occasion, season and style, including with the wardrobe in the app.',
    'val.1': '<strong>Targeted traffic.</strong> The shopper comes to your store having already chosen a specific item.',
    'val.2': '<strong>Your products in looks and collections.</strong> Brand items are shown not only in the catalog but also in ready-made looks and themed collections.',
    'val.3': '<strong>A showcase of fashion brands.</strong> Your brand is in a single catalog next to other fashion brands.',
    'val.4': '<strong>Pay for results.</strong> You pay for sales, not for impressions.',
    'brands.cond-title': 'Partnership terms',
    'cond.1': '<strong>Payment model:</strong> a commission of [X] % on sales made after a click-through from Fashion app.',
    'cond.2': '<strong>Attribution window (cookie window):</strong> [N] days.',
    'cond.3': '<strong>Onboarding:</strong> [ТЕКСТ: условия подключения — стоимость, сроки].',
    'cond.4': '<strong>Catalog:</strong> a product feed with images, prices, availability and attributes. Feed format: [указать].',
    'cond.5': '<strong>Image rights:</strong> the brand grants the right to use product photos in the catalog, looks, collections and the virtual try-on feature.',
    'cond.6': '<strong>Promotion (optional):</strong> paid placement in priority positions; such cards are labeled as advertising.',
    'brands.join-title': 'Submit a request',

    'form.name': 'Name',
    'form.brand': 'Brand name',
    'form.contact': 'Contact person',
    'form.site': 'Website / store',
    'form.name-ph': 'Your name',
    'form.brand-ph': 'Your brand name',
    'form.email-ph': 'Your email',
    'form.consent': 'I agree to the processing of my personal data',
    'form.submit': 'Submit',
    'form.submit-brand': 'Submit request',
    'form.sending': 'Sending…',

    'app.desc': 'Download our Fashion app and get clothing collections, ready-made looks and your own wardrobe any time. The app is available for iOS and Android.',

    'footer.about': 'About us',
    'footer.social': 'Social media',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter-consent': 'I agree to receive the newsletter',
    'footer.subscribe': 'Subscribe',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of use',
    'footer.disclaimer': 'Demo concept: all data is fictional; brand names and logos belong to their respective owners.',
    'footer.author': 'Author: Tamara Vorobyeva',

    'cookie.title': 'We use cookies',
    'cookie.necessary': 'Essential only',
    'cookie.accept': 'Accept all',

    'modal.close': 'Close',
    'modal.wardrobe-body': 'Keep everything in one place: add what you already own, and the app will suggest what goes with it and what is missing. Turn the clothes you have into ready outfits, with no unnecessary purchases. Download the mobile app to keep your wardrobe at hand.',
    'modal.tryon-body': 'Use virtual try-on to see how an item will look on you. Upload a photo, choose an item of clothing from the catalog, and our technology will show how it fits. Try-on works for different figure types and body shapes. It will help you make the right decision before buying. Download the mobile app to try on items any time.',
    'modal.waitlist-title': 'Join the waitlist',

    'toast.email': 'Please enter a valid email',
    'toast.consent-data': 'Consent to data processing is required',
    'toast.consent-news': 'Consent to the newsletter is required',
    'toast.waitlist-ok': 'Thank you! Check your email.',
    'toast.brand-ok': 'Thank you! We will contact you shortly.',
    'toast.news-ok': 'Thanks for subscribing! Check your email.',
    'toast.cookies-all': 'Settings saved',
    'toast.cookies-necessary': 'Essential cookies only'
  }
};

// Вернуть перевод по ключу на текущем языке.
function t(key) {
  return translations[currentLang][key] || translations.ru[key] || key;
}

// Вернуть поле данных на текущем языке (для английского — поле с суффиксом _en).
function localized(item, field) {
  return (currentLang === 'en' && item[field + '_en']) || item[field];
}

// Моковые данные
const mockData = {
  brands: [
    { id: 'b01', name: 'Adidas', logo: 'img/adidas-4-logo.png' },
    { id: 'b02', name: 'Calvin Klein', logo: 'img/calvin-klein-logo.png' },
    { id: 'b03', name: 'Chanel', logo: 'img/chanel-2-logo.png' },
    { id: 'b04', name: 'Gucci', logo: 'img/gucci-1-logo.png' },
    { id: 'b05', name: 'Hermès', logo: 'img/hermes-1-logo.png' },
    { id: 'b06', name: 'Louis Vuitton', logo: 'img/louis-vuitton-1-logo.png' },
    { id: 'b07', name: 'Prada', logo: 'img/prada-logo.png' },
    { id: 'b08', name: 'Vans', logo: 'img/vans-3-logo.png' },
    { id: 'b09', name: 'Vogue', logo: 'img/vogue-logo.png' }
  ],

  products: [
    { id: 'p001', brand_id: 'b01', title: 'Льняное платье миди', title_en: 'Linen midi dress', price: 8900, old_price: 11900, currency: 'RUB', image: 'img/p001.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p002', brand_id: 'b02', title: 'Чёрная рубашка', title_en: 'Black shirt', price: 5500, old_price: null, currency: 'RUB', image: 'img/p002.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p003', brand_id: 'b03', title: 'Белая футболка', title_en: 'White T-shirt', price: 7200, old_price: 9000, currency: 'RUB', image: 'img/p003.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p004', brand_id: 'b04', title: 'Синие джинсы', title_en: 'Blue jeans', price: 12500, old_price: null, currency: 'RUB', image: 'img/p004.svg', url: '#', is_promoted: true, ad_label: '[РЕКЛАМОДАТЕЛЬ]' },
    { id: 'p005', brand_id: 'b05', title: 'Кожаная сумка', title_en: 'Leather bag', price: 15800, old_price: 19000, currency: 'RUB', image: 'img/p005.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p006', brand_id: 'b06', title: 'Чёрные туфли', title_en: 'Black shoes', price: 11200, old_price: null, currency: 'RUB', image: 'img/p006.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p007', brand_id: 'b07', title: 'Красное платье коктейльное', title_en: 'Red cocktail dress', price: 9800, old_price: 12500, currency: 'RUB', image: 'img/p007.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p008', brand_id: 'b08', title: 'Спортивные кроссовки', title_en: 'Sports sneakers', price: 4500, old_price: 6000, currency: 'RUB', image: 'img/p008.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p009', brand_id: 'b01', title: 'Серая толстовка', title_en: 'Grey hoodie', price: 3200, old_price: null, currency: 'RUB', image: 'img/p009.svg', url: '#', is_promoted: false, ad_label: null },
    { id: 'p010', brand_id: 'b02', title: 'Бежевый пиджак', title_en: 'Beige blazer', price: 14500, old_price: 17000, currency: 'RUB', image: 'img/p010.svg', url: '#', is_promoted: false, ad_label: null }
  ],

  collections: [
    { id: 's01', title: 'Футболки для летних образов', title_en: 'T-shirts for summer looks', cover: 'img/s01.svg', product_ids: ['p003', 'p007', 'p002'] }
  ],

  looks: [
    { id: 'l01', title: 'Образ для фестиваля', title_en: 'Festival look', image: 'img/l01.svg', product_ids: ['p002', 'p009', 'p008'] }
  ],

  tryOnExamples: [
    { id: 'try-on-1', before: 'img/try-on-before-1.svg', after: 'img/try-on-after-1.svg' },
    { id: 'try-on-2', before: 'img/try-on-before-2.svg', after: 'img/try-on-after-2.svg' }
  ]
};

// Отрисовать витрину товаров на текущем языке.
function renderProducts() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  productsGrid.innerHTML = '';
  mockData.products.forEach(product => {
    const brand = mockData.brands.find(b => b.id === product.brand_id);
    const title = localized(product, 'title');
    const oldPriceHtml = product.old_price ? `<span class="product-card__price-old">${product.old_price} ₽</span>` : '';
    const badgeHtml = product.is_promoted ? `<span class="product-card__badge">${t('product.discount')}</span>` : '';
    const labelHtml = product.ad_label ? `<span class="product-card__label">${product.ad_label}</span>` : '';

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.position = 'relative';
    card.innerHTML = `
      <img src="${product.image}" alt="${title}" class="product-card__image">
      ${badgeHtml}
      ${labelHtml}
      <div class="product-card__content">
        <div class="product-card__brand">${brand ? brand.name : t('product.brand-fallback')}</div>
        <h3 class="product-card__title">${title}</h3>
        <div class="product-card__price">
          <span class="product-card__price-current">${product.price} ₽</span>
          ${oldPriceHtml}
        </div>
        <a href="${product.url}" target="_blank" class="product-card__link">${t('product.shop')}</a>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// Применить текущий язык ко всей странице.
function applyTranslations() {
  document.documentElement.lang = currentLang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel));
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle('lang-btn--active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  renderProducts();
}

// Переключить язык и запомнить выбор.
function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('language', lang);
  } catch (e) {
    // localStorage недоступен (file:// или приватный режим).
  }
  applyTranslations();
}

// Переключение вкладок
function switchTab(tabName) {
  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach(tab => {
    tab.setAttribute('aria-selected', tab.getAttribute('data-tab') === tabName ? 'true' : 'false');
  });

  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.classList.remove('tab-content--active');
    content.style.display = 'none';
  });

  const activeContent = document.getElementById(tabName);
  if (activeContent) {
    activeContent.classList.add('tab-content--active');
    activeContent.style.display = 'block';
  }

  const menus = document.querySelectorAll('.menu');
  menus.forEach(menu => {
    menu.style.display = 'none';
  });

  // Снять выделение пунктов меню при смене вкладки.
  document.querySelectorAll('.menu__item[aria-current]').forEach(item => item.removeAttribute('aria-current'));

  const activeMenu = document.querySelector(`.menu--${tabName}`);
  if (activeMenu) {
    activeMenu.style.display = 'block';
  }
}

// Открыть модальное окно
window.openModal = function(modalName, isExpanded = false) {
  const modal = document.getElementById('modal');
  const modalInner = document.querySelector('.modal__inner');

  if (!modal) return;

  window.modalTrigger = document.activeElement;

  document.documentElement.style.overflow = 'hidden';

  let content = '';

  if (modalName === 'wardrobe') {
    content = `
      <h2>${t('card.wardrobe-title')}</h2>
      <p style="font-size: 16px; line-height: 1.6; margin-top: 16px;">${t('modal.wardrobe-body')}</p>
    `;
  } else if (modalName === 'try-on') {
    content = `
      <h2>${t('card.tryon-title')}</h2>
      <p style="font-size: 16px; line-height: 1.6; margin-top: 16px;">${t('modal.tryon-body')}</p>
    `;
  } else if (modalName === 'brands') {
    content = `<h2>${t('card.brands-title')}</h2>`;
    content += '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 24px;">';
    mockData.brands.forEach(brand => {
      content += `
        <div style="text-align: center; padding: 16px; border: 1px solid #E8E8E8; border-radius: 12px; background-color: #FFF;">
          <img src="${brand.logo}" alt="${brand.name}" style="max-width: 100%; height: 80px; object-fit: contain;">
        </div>
      `;
    });
    content += '</div>';
  } else if (modalName === 'collections' && mockData.collections[0]) {
    const collection = mockData.collections[0];
    content = `<h2>${t('card.collections-title')}</h2>`;
    content += '<div style="display: flex; overflow-x: auto; gap: 16px; margin-top: 16px; scrollbar-width: none;">';

    collection.product_ids.forEach(productId => {
      const product = mockData.products.find(p => p.id === productId);
      if (product) {
        const brand = mockData.brands.find(b => b.id === product.brand_id);
        const title = localized(product, 'title');
        const oldPriceHtml = product.old_price ? `<s style="color: #999;">${product.old_price} ₽</s>` : '';
        content += `
          <div style="flex-shrink: 0; width: 180px; border: 1px solid #E8E8E8; padding: 12px; border-radius: 12px;">
            <img src="${product.image}" alt="${title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 8px;">
            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">${brand.name}</div>
            <div style="font-size: 14px; margin-bottom: 8px;">${title}</div>
            <div style="font-size: 14px; margin-bottom: 8px;">
              <strong>${product.price} ₽</strong> ${oldPriceHtml}
            </div>
            <a href="${product.url}" target="_blank" style="display: inline-block; padding: 8px 12px; background-color: #C24B7F; color: white; border-radius: 8px; font-size: 14px; text-decoration: none;">${t('product.shop')}</a>
          </div>
        `;
      }
    });

    content += '</div>';
  } else if (modalName === 'looks' && mockData.looks[0]) {
    const look = mockData.looks[0];
    content = `<h2>${t('card.looks-title')}</h2>`;
    content += `<img src="${look.image}" alt="${localized(look, 'title')}" style="width: 100%; max-height: 60vh; object-fit: cover; margin-top: 16px; border-radius: 8px;">`;

    content += '<div style="display: flex; overflow-x: auto; gap: 12px; margin-top: 16px; scrollbar-width: none;">';
    look.product_ids.forEach(productId => {
      const product = mockData.products.find(p => p.id === productId);
      if (product) {
        const brand = mockData.brands.find(b => b.id === product.brand_id);
        const title = localized(product, 'title');
        content += `
          <a href="${product.url}" target="_blank" style="flex-shrink: 0; width: 100px; text-decoration: none; color: inherit;">
            <img src="${product.image}" alt="${title}" style="width: 100%; height: 130px; object-fit: cover; border-radius: 8px; margin-bottom: 4px;">
            <div style="font-size: 12px; font-weight: 600;">${brand.name}</div>
            <div style="font-size: 12px;">${product.price} ₽</div>
          </a>
        `;
      }
    });
    content += '</div>';
  } else {
    content = `<h2>${modalName}</h2>`;
  }

  modalInner.innerHTML = content;

  modal.hidden = false;
  modal.focus();

  history.pushState({ modal: modalName }, '');
};

// Закрыть модальное окно
window.closeModal = function() {
  const modal = document.getElementById('modal');

  document.documentElement.style.overflow = '';

  modal.hidden = true;

  if (window.modalTrigger) {
    window.modalTrigger.focus();
    window.modalTrigger = null;
  }
};

// Открыть модалку листа ожидания
window.openWaitlistModal = function() {
  const modal = document.getElementById('modal');
  const modalInner = document.querySelector('.modal__inner');

  if (!modal) return;

  window.modalTrigger = document.activeElement;
  document.documentElement.style.overflow = 'hidden';

  const content = `
    <h2>${t('modal.waitlist-title')}</h2>
    <form id="waitlist-form" style="margin-top: 24px;">
      <div style="margin-bottom: 16px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">${t('form.name')}</label>
        <input type="text" name="name" placeholder="${t('form.name-ph')}" required style="width: 100%; padding: 12px; border: 1px solid #E8E8E8; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 16px;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Email</label>
        <input type="email" name="email" placeholder="your@email.com" required style="width: 100%; padding: 12px; border: 1px solid #E8E8E8; border-radius: 8px; font-size: 16px; box-sizing: border-box;">
      </div>
      <div style="margin-bottom: 16px;">
        <label style="display: flex; align-items: flex-start; gap: 8px; font-size: 14px;">
          <input type="checkbox" name="consent" required style="margin-top: 2px;">
          <span>${t('form.consent')}</span>
        </label>
      </div>
      <button type="submit" class="button button--primary" style="width: 100%; cursor: pointer;">${t('form.submit')}</button>
    </form>
  `;

  modalInner.innerHTML = content;
  modal.hidden = false;
  modal.focus();
  history.pushState({ modal: 'waitlist' }, '');

  // Обработчик формы листа ожидания
  const form = document.getElementById('waitlist-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    handleFormSubmit(form);
  });
};

// Функция для отправки формы (имитация)
window.handleFormSubmit = function(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Валидация
  if (!data.email || !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showToast(t('toast.email'), 'error');
    return;
  }

  if (!data.consent) {
    showToast(t('toast.consent-data'), 'error');
    return;
  }

  // Заблокировать кнопку
  submitBtn.disabled = true;
  submitBtn.setAttribute('aria-busy', 'true');
  submitBtn.textContent = t('form.sending');

  // Имитация отправки (1-1.5 с)
  setTimeout(function() {
    console.log('Форма отправлена:', data);

    // Очистить форму
    form.reset();

    // Вернуть кнопку в норму
    submitBtn.disabled = false;
    submitBtn.setAttribute('aria-busy', 'false');
    submitBtn.textContent = t('form.submit');

    // Закрыть модалку и показать уведомление
    window.closeModal();
    showToast(t('toast.waitlist-ok'), 'success');
  }, 1000 + Math.random() * 500);
};

// Функция для показа toast-уведомлений
window.showToast = function(message, type = 'success') {
  const container = document.getElementById('toast-container');

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;

  container.appendChild(toast);

  // Удалить старые уведомления
  const toasts = container.querySelectorAll('.toast');
  if (toasts.length > 1) {
    toasts[0].remove();
  }

  // Удалить через 4 секунды
  setTimeout(function() {
    toast.remove();
  }, 4000);
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
  try {
    currentLang = localStorage.getItem('language') === 'en' ? 'en' : 'ru';
  } catch (e) {
    // localStorage недоступен (file:// или приватный режим).
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const tabs = document.querySelectorAll('[role="tab"]');
  // Вернуть страницу в начальное состояние по клику на логотип.
  const logoHome = document.getElementById('logo-home');
  if (logoHome) {
    logoHome.addEventListener('click', function() {
      switchTab('for-me');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Открыть вкладку «О нас» по ссылке в подвале, без смены адреса.
  const footerAbout = document.getElementById('footer-about');
  if (footerAbout) {
    footerAbout.addEventListener('click', function(event) {
      event.preventDefault();
      switchTab('about-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Выделить выбранный пункт меню, пока не выбран другой.
  document.querySelectorAll('.menu__item').forEach(item => {
    item.addEventListener('click', function() {
      this.closest('.menu').querySelectorAll('.menu__item').forEach(other => other.removeAttribute('aria-current'));
      this.setAttribute('aria-current', 'true');
    });
  });

  // Открыть раздел «Мобильное приложение» по ссылке в подвале.
  const footerApp = document.getElementById('footer-app');
  if (footerApp) {
    footerApp.addEventListener('click', function(event) {
      event.preventDefault();
      switchTab('mobile-app');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  tabs.forEach(tab => tab.addEventListener('click', function() {
    switchTab(this.getAttribute('data-tab'));
  }));

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setLanguage(this.dataset.lang);
    });
  });

  const cards = document.querySelectorAll('.function-card[data-modal]');
  cards.forEach(card => {
    card.addEventListener('click', function() {
      window.openModal(this.dataset.modal);
    });
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
  });

  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.modal__close');
  const backdrop = document.querySelector('.modal__backdrop');

  closeBtn.addEventListener('click', function() { window.closeModal(); });
  backdrop.addEventListener('click', function() { window.closeModal(); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.hidden) window.closeModal();
  });

  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.modal) {
      if (e.state.modal === 'waitlist') {
        window.openWaitlistModal();
      } else {
        window.openModal(e.state.modal);
      }
    } else {
      window.closeModal();
    }
  });

  // Обработчики CTA кнопок
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      if (action === 'waitlist') {
        window.openWaitlistModal();
      } else if (action === 'scroll-to-join') {
        document.getElementById('join').scrollIntoView({behavior: 'smooth'});
      }
    });
  });

  // Обработчик формы заявки бренда
  const brandForm = document.querySelector('section#join form');
  if (brandForm) {
    brandForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Валидация
      const emailInput = this.querySelector('input[type="email"]');
      if (!emailInput.value || !emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showToast(t('toast.email'), 'error');
        return;
      }

      const checkbox = this.querySelector('input[type="checkbox"]');
      if (!checkbox.checked) {
        showToast(t('toast.consent-data'), 'error');
        return;
      }

      // Заблокировать кнопку
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.textContent = t('form.sending');

      // Имитация отправки
      setTimeout(function() {
        console.log('Заявка бренда отправлена:', data);

        // Очистить форму
        brandForm.reset();

        // Вернуть кнопку в норму
        submitBtn.disabled = false;
        submitBtn.setAttribute('aria-busy', 'false');
        submitBtn.textContent = t('form.submit-brand');

        // Показать уведомление
        showToast(t('toast.brand-ok'), 'success');
      }, 1000 + Math.random() * 500);
    });
  }

  // Обработчик формы рассылки
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = this.querySelector('button[type="submit"]');
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // Валидация
      const emailInput = this.querySelector('input[type="email"]');
      if (!emailInput.value || !emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showToast(t('toast.email'), 'error');
        return;
      }

      const checkbox = this.querySelector('input[type="checkbox"]');
      if (!checkbox.checked) {
        showToast(t('toast.consent-news'), 'error');
        return;
      }

      // Заблокировать кнопку
      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.textContent = t('form.sending');

      // Имитация отправки
      setTimeout(function() {
        console.log('Подписка на рассылку:', data);

        // Очистить форму
        newsletterForm.reset();

        // Вернуть кнопку в норму
        submitBtn.disabled = false;
        submitBtn.setAttribute('aria-busy', 'false');
        submitBtn.textContent = t('footer.subscribe');

        // Показать уведомление
        showToast(t('toast.news-ok'), 'success');
      }, 1000 + Math.random() * 500);
    });
  }

  // Cookie-баннер
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAcceptBtn = document.getElementById('cookie-accept');
  const cookieNecessaryBtn = document.getElementById('cookie-necessary');

  let cookieConsent = false;
  try {
    cookieConsent = localStorage.getItem('cookieConsent');
  } catch (e) {
    // localStorage недоступен (data: URL или другие ограничения)
  }

  if (cookieBanner && !cookieConsent) {
    cookieBanner.style.display = 'block';
  } else {
    cookieBanner.style.display = 'none';
  }

  cookieAcceptBtn.addEventListener('click', function() {
    try {
      localStorage.setItem('cookieConsent', 'all');
    } catch (e) {}
    cookieBanner.style.display = 'none';
    showToast(t('toast.cookies-all'), 'success');
  });

  cookieNecessaryBtn.addEventListener('click', function() {
    try {
      localStorage.setItem('cookieConsent', 'necessary');
    } catch (e) {}
    cookieBanner.style.display = 'none';
    showToast(t('toast.cookies-necessary'), 'success');
  });

  applyTranslations();
  switchTab('for-me');
});
