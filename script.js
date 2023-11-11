window.addEventListener("resize", () => {
  debounce(500);
  console.log("resizedd");
});

let timeout;

function debounce(delay) {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    window.location.reload();
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  setContent();
});
function setContent() {
  const isMobile = window.matchMedia("(max-width: 700px)");
  if (isMobile.matches) {
    console.log("is mobile");
    document.body.innerHTML = mobilePage;
  } else {
    console.log("is desktop");
    document.body.innerHTML = desktopPage;
  }
}

//
const mobilePage = `
<body data-aos-easing="ease" data-aos-duration="2000" data-aos-delay="0"><noscript><iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLF66T4" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <div id="__next" data-reactroot="">
        <script>!function () { try { var d = document.documentElement, n = 'data-theme', s = 'setAttribute'; var e = localStorage.getItem('theme'); if ('system' === e || (!e && true)) { var t = '(prefers-color-scheme: dark)', m = window.matchMedia(t); if (m.media !== t || m.matches) { d.style.colorScheme = 'dark'; d[s](n, 'dark') } else { d.style.colorScheme = 'light'; d[s](n, 'light') } } else if (e) { d[s](n, e || '') } if (e === 'light' || e === 'dark') d.style.colorScheme = e } catch (e) { } }()</script>
        <div height="60" class="sc-3bcd9529-5 bINXPs">
            <nav class="sc-3bcd9529-3 hTBhkM">
                <nav class="sc-3bcd9529-4 iYKJQf">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn ilegjh"><a href="/">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn iKdGvr">
                                <div font-size="1.5rem,,,2.5rem" color="text"
                                    class="sc-118b6623-0 sc-3bcd9529-7 OdShl ZOmbH">Base<span
                                        style="color: rgb(1, 84, 254);">Swap</span></div>
                            </div>
                        </a></div>
                    <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat gFdZFN">
                        <div class="sc-de7e8801-1 jHwqWW">
                            <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat eZqYvS"
                                style="position: relative;">
                                <div font-size="16px" font-weight="485" color="text" class="sc-118b6623-0 clcECv">Base
                                </div>
                                <div class="sc-a5d01e72-1 jMItye">
                                    <div>
                                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-40bf34c7-0 a-dzhn cWwvby feQnAS">
                                            <span
                                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                        alt="" aria-hidden="true"
                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e"
                                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                                    src="https://baseswap.fi/_next/static/media/base.c014f382.svg"
                                                    decoding="async" data-nimg="intrinsic"
                                                    style="background: rgb(0, 0, 0); padding: 0px; border-radius: 50px; position: absolute; inset: 0px; box-sizing: border-box; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                                    srcset="https://baseswap.fi/_next/static/media/base.c014f382.svg 1x, https://baseswap.fi/_next/static/media/base.c014f382.svg 2x"></span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><button class="sc-b4087bd6-0 jaZCni" scale="md">
                            <div display="none,,,block" class="sc-de7e8801-1 eNjoic interact-button">Connect Wallet
                            </div>
                            <div display="block,,,none" class="sc-de7e8801-1 lfNePU interact-button">Connect</div>
                        </button>
                    </div>
                </nav>
            </nav>
        </div>
        <div class="sc-de7e8801-1 sc-1080dffc-0 jwjPUx brUklH"></div>
        <div class="sc-de7e8801-1 sc-3bcd9529-6 jQmNfS leBvYC">
            <div class="sc-3bcd9529-8 jaWXUq">
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-0 a-dzhn cWwvby gxzAKJ">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-0 bElFCx cWwvby jfaNVe">
                        <div class="sc-de7e8801-1 sc-1080dffc-0 jMLZcI dafwez">
                            <div class="slider-container" style="font-size: 4.5rem;"><span class="slider-text"
                                    style="left: -100%; color: rgb(255, 255, 255);">Base</span><span class="slider-text"
                                    style="left: 0px; color: rgb(1, 84, 254);">Swap</span></div>
                            <div class="sc-de7e8801-1 sc-1080dffc-0 jMLZcI guNCUW" style="margin-top: 35px;">
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-1 cCrkQR aPteq cyCwoj animate__animated animate__slideInRight"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=640&amp;q=75"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                            srcset="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=256&amp;q=75 1x, https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=640&amp;q=75 2x"><noscript></noscript></span>
                                </div>
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-2 hspsgZ aPteq cAjfNg animate__animated animate__slideInRight"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2780%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                                </div>
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-1 jLFjuO aPteq cyCwoj animate__animated animate__slideInLeft"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsx.06af154d.png&amp;w=640&amp;q=75"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                            srcset="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsx.06af154d.png&amp;w=256&amp;q=75 1x, https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsx.06af154d.png&amp;w=640&amp;q=75 2x"><noscript></noscript></span>
                                </div>
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-2 jclHtK aPteq cAjfNg animate__animated animate__slideInLeft"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2780%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                                </div>
                            </div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-977f2336-0 a-dzhn cWwvby dJvjYG">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 sc-977f2336-1 a-dzhn cWwvby hwzHDL">
                                <div font-size="1.5rem" font-weight="600" class="sc-118b6623-0 sc-1df03a13-2 jnCcpy">
                                    Base Chain's
                                    premier decentralized exchange</div>
                            </div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bLSHUq">
                            <div style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                                <button
                                    class="sc-b4087bd6-0 hIBbMO animate__animated animate__slideInRight interact-button "
                                    height="100%" width="75vw,,,25vw" scale="md">Connect Wallet</button>
                            </div><a href="#" class="sc-a01cb22d-0 ixklkU">
                                <div
                                    style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                                    <button
                                        class="sc-b4087bd6-0 cSPoyf animate__animated animate__slideInLeft interact-button"
                                        width="75vw,,,25vw" scale="md">SWAP NOW</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-1 a-dzhn cWwvby gFlcLU">
                    <div id="homepage-hero" class="sc-de7e8801-1 sc-1080dffc-0 cLcpkv gzZpXq">
                        <div width="95%" class="sc-de7e8801-1 sc-1080dffc-0 gnEiVd gEmIfG">
                            <div data-aos="zoom-in-right" class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW aos-init">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    class="sc-806fbdc9-0 cMseEk" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M64.264 44.704c-88.765 25.213-39.73 158.676-2.108 161.887-8.506 42.218-13.32 84.645-12.642 127.824.355 22.67 51.374 58.424 105.35 86.035C186.48 466.787 238.98 466.876 256 467.296c17.02-.42 69.52-.51 101.137-46.846 53.975-27.61 104.994-63.364 105.35-86.035.677-43.179-4.137-85.606-12.643-127.824 37.623-3.211 86.657-136.674-2.108-161.887-28.433 1.462-55.606 16.152-82.172 37.223C317.64 62.233 293.164 61.296 256 61.296c-37.163 0-61.639.937-109.564 20.63-26.566-21.07-53.739-35.76-82.172-37.222zm4.927 49.928c6.057-.096 17.237 5.625 26.809 14.664 3.362 3.175-22.916 51.05-26.818 50.158-4.59-1.05-14.985-48.285-3.725-63.318.745-.994 2.039-1.477 3.734-1.504zm373.618 0c1.695.027 2.99.51 3.734 1.504 11.26 15.033.865 62.268-3.725 63.318-3.902.893-30.18-46.983-26.818-50.158 9.572-9.04 20.752-14.76 26.809-14.664zm-260.85 82.088c17.457-.304 30.686 24.445 42.041 44.576-53.57 15.878-82.575-17.11-57.752-37.777 5.603-4.665 10.823-6.714 15.711-6.8zm148.082 0c4.888.085 10.108 2.134 15.711 6.799 24.823 20.667-4.181 53.655-57.752 37.777 11.355-20.13 24.584-44.88 42.041-44.576zM256 251.548c17.32.223 36.826 9.567 30.197 36.517-1.444 5.872-12.516 8.617-21.197 9.7v8.972c99.884 41.126 79.565 138.559-9 138.559s-108.884-97.433-9-138.559v-8.972c-8.68-1.083-19.753-3.828-21.197-9.7-6.629-26.95 12.877-36.294 30.197-36.517z">
                                    </path>
                                </svg>
                            </div>
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW">
                                <div data-aos="zoom-in-up" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-2 TqzCd fSYVIT aos-init">Built in a</div>
                                <div data-aos="zoom-in-down" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-3 gDVHIC bKNQeu aos-init">bear.</div>
                            </div>
                        </div>
                        <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 jgdPQj gEmIfG">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW">
                                <div data-aos="zoom-in-up" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-2 TqzCd fSYVIT aos-init">Primed for the</div>
                                <div data-aos="zoom-in-down" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-4 TqzCd iJxKPV aos-init">bull.</div>
                            </div>
                            <div data-aos="zoom-in-left" class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW aos-init"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    class="sc-806fbdc9-1 eAhyuL" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M68.596 28.182c-86.767 50.67-51.027 136.884 123.35 136.884l2.835-70.433c-71.07 14-169.105 15.57-126.184-66.45zm378.455 0c42.92 82.022-55.114 80.45-126.185 66.45l2.836 70.434c174.378 0 210.117-86.213 123.35-136.884zM174.206 220.768c-3.798.104-7.758.785-11.816 2.087-1.887 29.822 11.63 50.308 48.516 39.88-.462-26.26-16.194-42.53-36.7-41.967zm167.213 0c-20.507-.563-36.24 15.707-36.7 41.966 36.886 10.43 50.404-10.057 48.518-39.88-4.058-1.3-8.02-1.982-11.818-2.086zm-53.123 162.7l-10.793 15.266c15.535 10.978 19.19 32.196 8.21 47.73C274.736 462 253.533 465.64 238 454.663c-15.535-10.978-19.19-32.193-8.21-47.728 2.03-2.875 4.483-5.42 7.288-7.543l-11.263-14.894c-4.34 3.283-8.153 7.203-11.292 11.645-16.805 23.784-11.098 56.982 12.685 73.788 23.784 16.806 56.956 11.098 73.762-12.686 16.806-23.783 11.11-56.967-12.672-73.773z">
                                    </path>
                                </svg></div>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-0 a-dzhn cWwvby gxzAKJ">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 cUeoCK bLSHUq">
                        <div font-size="1.9rem,,,3rem" font-weight="400" letter-spacing="0px" color="#fff"
                            class="sc-118b6623-0 iwPqAJ">NEW TO DEFI?</div>
                        <div font-size="1.5rem,,,1.5rem" font-weight="400" color="#0154FD" class="sc-118b6623-0 fmlEdD">
                            GROW YOUR CAPITAL WITH US</div>
                        <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 fdMZQc bLSHUq">
                            <div font-size="14px,,,1.5rem" font-weight="400" color="#fff" class="sc-118b6623-0 DDBef">
                                BaseSwap is the only DEX<br> with a fully doxxed team of US citizens.</div>
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn kUbCea"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 32 32"
                                    class="sc-514e9eac-0 hSrFZX" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z">
                                    </path>
                                </svg> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 32 32" class="sc-514e9eac-2 cplETw" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z">
                                    </path>
                                </svg> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 32 32" class="sc-514e9eac-1 bXGihr" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z">
                                    </path>
                                </svg></div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 jMLZcI dafwez">
                            <div data-aos="fade-right" font-size="14px,,,1.5rem" font-weight="400" color="#fff"
                                class="sc-118b6623-0 ffxcsx aos-init">AND USERS HAVE ENTRUSTED OVER&nbsp;</div>
                            <div data-aos="fade-left" font-size="1.5rem,,,3rem" font-weight="500" color="#0154FD"
                                class="sc-118b6623-0 KOkWb aos-init">$<span>7.50</span> MILLION</div>
                            <div font-size="14px,,,1.5rem" font-weight="400" color="#fff" data-aos="fade-right"
                                class="sc-118b6623-0 fccefh aos-init">OF THEIR FUNDS <span
                                    style="color: rgb(1, 84, 253);">HERE</span></div>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-1 a-dzhn cWwvby gFlcLU">
                    <div width="95%" data-aos="fade-left" class="sc-de7e8801-1 sc-1080dffc-0 gKzsuM bXTMwG aos-init">
                        <div letter-spacing="0px" data-aos="zoom-in-down" font-size="1.5rem,,3rem,3.5rem"
                            font-weight="400" color="#fff" class="sc-118b6623-0 jYZol aos-init">CREATE YOUR <span
                                style="color: rgb(1, 84, 253);">DEFI DESTINY </span></div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn ikyurC bmNThx"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                class="sc-514e9eac-11 hoGftb" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z">
                                </path>
                            </svg>
                            <div data-aos="zoom-in-up" color="text" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 TqzCd bxkqAz aos-init">Trade Crypto Assets in <a
                                    href="#"><u>Swap</u></a></div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx">
                            <div data-aos="zoom-in-down" color="#0154fd" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 hyqCdl cUOLDP aos-init">Provide standard (V2) <a
                                    href="#"><u>liquidity</u></a></div><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 16 16" class="sc-514e9eac-3 fvCMXm" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z">
                                </path>
                            </svg>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                class="sc-514e9eac-10 iQyvEe" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M104.18 23.01c50.773 35.662 91.356 76.39 126.09 114.9 15.712 7.966 31.16 15.66 46.236 23.158 70.055 34.845 132.168 65.335 176.383 101.315 11.834-7.294 21.912-16.734 28.385-27.945h.002c21.716-37.61.99-95.137-34.04-115.36C377.433 78.776 241.073 77.803 104.18 23.01zM54.69 59.322c54.132 74.474 92.96 150.218 125.718 217.496 39.944 82.037 71.7 151.4 110.4 190.104 4.584 4.582 10.223 8.635 16.647 12.115 19.253 13.242 42.552 21.006 67.63 21.006 35.297 0 67.07-15.37 88.99-39.764.15-.146.302-.288.448-.434 8.423-8.423 14.915-18.703 19.547-30.088 6.85-15.06 10.67-31.78 10.67-49.373 0-21.644-5.777-41.964-15.87-59.5l-.007-.01c-5.087-10.377-11.434-19.62-18.847-27.033-40.63-40.636-110.23-75.453-191.832-116.04-66.27-32.963-140.4-70.142-213.493-118.48zm-32.493 51.916c65.29 140.548 59.79 276.762 98.48 343.778 19.21 33.254 83.92 50.075 122.38 27.873 8-4.62 14.782-10.983 20.316-18.47-35.87-43.368-64.494-106.976-99.768-179.42-8.823-18.12-18.076-36.82-27.878-55.867-37.73-33.986-77.67-72.304-113.53-117.895zm379.1 7.5c7.485-.1 15.752 1.51 24.002 4.86-6.418.384-11.73 2.948-14.42 7.61-5.412 9.372 1.8 23.665 16.102 31.923 14.304 8.26 30.285 7.357 35.696-2.015.135-.234.255-.473.375-.713 2.4 7.59 2.116 15.02-1.44 21.178-9.05 15.676-35.78 17.185-59.705 3.37-23.924-13.813-35.983-37.72-26.933-53.395 4.807-8.328 14.606-12.66 26.322-12.817zm-28.203 155.774c8.974-.12 18.76 1.522 28.638 4.97-9.448.138-17.347 3.635-21.226 10.354-7.312 12.665 2.43 31.978 21.762 43.14 19.33 11.16 40.928 9.94 48.24-2.726 2.553-4.423 3.022-9.656 1.734-15.07 14.86 17.575 23.807 40.32 23.807 65.205 0 55.87-45.093 100.967-100.964 100.967-38.8 0-72.395-21.75-89.307-53.752 17.13 15.03 39.58 24.146 64.16 24.146 47.412 0 86.9-33.9 95.562-78.783-17.104 10.354-45.526 8.41-71.56-6.62-33.183-19.16-49.908-52.316-37.356-74.058 6.668-11.55 20.257-17.554 36.508-17.773z">
                                </path>
                            </svg>
                            <div data-aos="zoom-in-up" color="text" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 TqzCd bxkqAz aos-init">Or try concentrated (V3) <a
                                    href="#"><u>liquidity</u></a>!</div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx">
                            <div data-aos="zoom-in-down" color="#0154fd" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 hyqCdl cUOLDP aos-init">Earn on those positions
                                through our <a href="#"><u>Farms</u></a></div><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="sc-514e9eac-4 imSjXd"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M152.864 59l-4.21 20h33.816l-4.211-20zm3.698 38v14h18V97zm-30.715 32l-7.78 94h17.145l6-80h130.545l-2-14zm302.715 23v74.602a593.471 593.471 0 0 1 18 1.666V152zm-270.65 9l-4.651 62h6.3c10.003 0 19.544 4.28 29 10.645V161zm48.65 0v84.26l78 8.681v-21.296L274.327 161zm-121 80c-8 0-23.292 6.759-37.377 18.027-10.908 8.726-21.254 19.89-28.747 31.166l16.813 4.203C56.271 269.225 87.129 253 121.561 253c50.594 0 93.48 35.024 105.586 82h20.409c-9.132-18.739-23.077-40.212-38.323-57.889-9.33-10.819-19.063-20.19-27.945-26.601-8.881-6.412-16.88-9.51-21.726-9.51zm217 .059V351h32.15c9.085-30.155 26.196-50.771 49.125-61.193 12.31-5.596 25.987-8.305 40.736-8.578 11.399-.212 23.445 1.049 35.989 3.54v-36.49c-11.495-1.781-25.084-3.178-39.633-4.203-40.207-2.831-86.16-3-118.367-3.017zm176 10.814V271h14v-13.41c-3.978-2.698-9.906-4.606-14-5.717zM222.7 265.168c.054.063.11.123.164.186 19.996 23.183 37.843 51.59 47.086 75.386l4.762 12.26h-44.53c.247 2.97.38 5.97.38 9 0 7.178-.713 14.198-2.057 21h56.057V272.055zM121.562 271c-50.081 0-91 40.92-91 91s40.919 91 91 91c50.08 0 91-40.92 91-91s-40.92-91-91-91zm357 18v14h14v-14zm-357 4c38.16 0 69 30.84 69 69s-30.84 69-69 69c-38.161 0-69-30.84-69-69s30.839-69 69-69zm307.603 6.27c-12.894.164-27.37 2.264-37.879 6.923-16.839 7.654-29.674 21.545-37.691 44.807h10.57c13.936-22.718 39.012-38 67.397-38a77.97 77.97 0 0 1 29 5.6v-15.448c-11.185-2.416-21.683-3.723-31.397-3.882zM121.562 311c-28.588 0-51 22.413-51 51s22.412 51 51 51c28.587 0 51-22.413 51-51s-22.413-51-51-51zm357 10v7.67a80.334 80.334 0 0 1 14 13.357V321zm-47 10c-33.493 0-61 27.508-61 61 0 33.492 27.507 61 61 61 33.492 0 61-27.508 61-61 0-33.492-27.508-61-61-61zm0 22c21.516 0 39 17.484 39 39s-17.484 39-39 39c-21.517 0-39-17.484-39-39s17.483-39 39-39zm-129 16v15.377l50.01 8.334c-.003-.237-.01-.473-.01-.711 0-7.988 1.219-15.71 3.464-23zm129 2c-12.095 0-21 8.905-21 21s8.905 21 21 21c12.094 0 21-8.905 21-21s-8.906-21-21-21z">
                                </path>
                            </svg>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                class="sc-514e9eac-8 dGeUxj" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M255.55 22.36c-30.93 0-56 25.07-56 56 0 30.927 25.07 56 56 56 30.927 0 56-25.073 56-56 0-30.93-25.073-56-56-56zM105.067 144.47c-3.047.028-6.012.55-8.748 1.536-7.296 2.627-12.95 7.77-17.562 13.617-3.63 4.602-6.523 9.754-9.012 14.992-6.79-6.374-14.215-15.785-21.8-30.117l-15.91 8.418c10.115 19.112 20.597 31.962 31.292 40.066-.405 1.802-.907 3.66-1.164 5.364-2.005 13.302 2.913 24.966 9.637 34.736 5.34 7.757 11.825 14.87 18.132 22.367-7.497 15.76-11.35 32.49-11.368 49.366.07 28.777 11.283 56.823 32.082 80.243l3.655-13.117 17.34 4.832-25.13 90.18c20.857 6.423 41.04 6.52 61.62-1.072l18.727-66.73 17.33 4.865-8.892 31.69c17.887 4.99 36.674 7.578 55.607 7.657 12.386-.065 24.727-1.204 36.81-3.396l-8.942-39.63 17.558-3.963 14.996 66.473c24.936 11.267 48.496 10.575 72.764 1.222l-25.115-78.986 17.152-5.455 4.97 15.636c21.796-38.09 68.757-29.083 91.825-40.08 11.686-3.894 5.42-69.874 4.916-73.04-.38-2.39-29.734-3.818-40.16-2.248-5.975.9-16.344-12.078-27.39-27.597-5.387-10.488-12.357-20.405-20.753-29.527-3.988-5.276-2.735-3.092-6.533-6.474.715 6.697 2.12 12.306 4.152 16.23l-15.986 8.277c-7.378-14.252-7.98-32.853-5.662-52.858 1.583-13.67 4.81-27.957 9.03-41.733-11.81 6.755-22.626 17.48-32.02 30.586-13.665 19.064-24.126 42.55-30.647 62.644l-17.12-5.556c2.777-8.56 6.2-17.655 10.255-26.835-14.467-6.574-35.467-9.76-57.426-8.826-23.852 1.01-48.83 6.716-68.043 16.2l-7.97-16.143c22.13-10.923 49.122-16.934 75.25-18.043 3.267-.138 6.52-.203 9.747-.19 20.69.086 40.372 3.378 56.274 10.78 2.234-4.232 4.608-8.425 7.125-12.537-21.74-7.8-45.253-11.897-69.058-12.03-63.206.056-121.303 27.923-151.383 72.614-4.954-5.81-9.525-11.11-12.89-16-5.26-7.64-7.608-13.682-6.695-21.126 10.458 3.152 20.632 2.07 28.694-1.87 10.316-5.044 17.423-13.85 20.473-23.39 1.526-4.77 2.056-9.862.813-14.928-1.243-5.065-4.63-10.034-9.598-12.953-4.862-2.856-10.17-4.187-15.25-4.142zm.328 17.805c.328-.014.66-.005 1 .03 1.362.138 2.86.687 4.803 1.828.864.508.986.713 1.234 1.722.247 1.01.248 2.895-.475 5.157-1.447 4.523-5.713 10-11.235 12.7-4.346 2.125-9.372 2.917-15.66.847 2.174-5.033 4.823-9.984 7.824-13.787 3.257-4.13 6.74-6.828 9.528-7.832 1.045-.375 1.995-.623 2.978-.665zm278.153 98.647c8.835 0 16 7.163 16 16 0 8.836-7.165 16-16 16-8.838 0-16-7.164-16-16 0-8.837 7.162-16 16-16z">
                                </path>
                            </svg>
                            <div data-aos="zoom-in-up" color="text" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 TqzCd bxkqAz aos-init">And&nbsp; <a
                                    href="#"><u>stake</u></a>&nbsp;your earnings for real yield.</div>
                        </div>
                        <div width="100%" data-aos="zoom-in-up"
                            class="sc-de7e8801-1 sc-1080dffc-0 itctQW bLSHUq aos-init">
                            <div font-size="2rem" color="text" class="sc-118b6623-0 sc-d2e6125a-0 bDptVi dNApIo">And
                            </div>
                            <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 epkEFV bKJrTy"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                                    class="sc-514e9eac-5 cJPwmr" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path
                                        d="M192,80a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h16A12,12,0,0,1,192,80Zm-12,28H164a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24ZM76,92H92a12,12,0,0,0,0-24H76a12,12,0,0,0,0,24Zm16,16H76a12,12,0,0,0,0,24H92a12,12,0,0,0,0-24ZM228,48V224a12,12,0,0,1-24,0V212H140v12a12,12,0,0,1-24,0V212H52v12a12,12,0,0,1-24,0V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM116,188V52H52V188Zm24,0h64V52H140Z">
                                    </path>
                                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 16 16" class="sc-514e9eac-6 jUMuEi" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                    <path
                                        d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z">
                                    </path>
                                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" class="sc-514e9eac-7 kdovfn" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path
                                        d="M112 43.89L97.422 93.464 73 79.51V135h23v-16h32v16h23V79.51l-24.422 13.955L112 43.89zm288 0l-14.578 49.575L361 79.51V135h23v-16h32v16h23V79.51l-24.422 13.955L400 43.89zM73 153v270h78V153H73zm288 0v270h78V153h-78zM96 183h32v36H96v-36zm73 0v18h174v-18H169zm215 0h32v34h-32v-34zM55 218.078c-11.034 17.617-25.57 34.478-39 50.197v27.036c13.07-14 27.55-29.07 39-44.974v-32.258zm402 0v32.258c11.45 15.903 25.93 30.973 39 44.975v-27.035c-13.43-15.72-27.966-32.58-39-50.197zM96 247h32v18H96v-18zm288 0h32v18h-32v-18zM96 311h32v18H96v-18zm288 0h32v18h-32v-18zM16 375v18h39v-18H16zm80 0h32v18H96v-18zm73 0v18h58.47c-22.307 3.12-42.002 9.613-58.47 17.227V423h16v.268C204.803 415.183 228.99 409 256 409c27.01 0 51.197 6.183 71 14.268V423h16v-12.773c-16.468-7.614-36.163-14.106-58.47-17.227H343v-18H169zm215 0h32v18h-32v-18zm73 0v18h39v-18h-39zM57 441v46h110v-46H57zm288 0v46h110v-46H345z">
                                    </path>
                                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" class="sc-514e9eac-9 gHxKRZ" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path
                                        d="M52.47 16.94L16.95 52.45 71.3 106.6h22.59L215 227.7v56.5L93.84 405.4H71.28l-54.26 54.2 35.34 35.5 54.24-54.4v-22.5L227.8 297h56.4l121.2 121.2v22.5l54.2 54.3 35.4-35.4-54.3-54.2h-22.5L297 284.2v-56.5l121.1-121.1h22.6L495 52.36 459.7 17l-54.3 54.25v22.57L284.2 215h-56.4L106.6 93.86V71.28L52.47 16.94z">
                                    </path>
                                </svg></div>
                            <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 eyvLjH gEmIfG">
                                <div color="text" font-size="16px" class="sc-118b6623-0 sc-d2e6125a-1 TqzCd kbtLYO">
                                    There's so much more</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-0 a-dzhn cWwvby gxzAKJ">
                    <div data-aos="zoom-in-up" class="sc-de7e8801-1 sc-1080dffc-0 gBcnLK bXTMwG aos-init">
                        <div color="text" font-size="16px" class="sc-118b6623-0 sc-e47e205f-0 TqzCd fSoZBL">Base<span
                                style="color: rgb(1, 84, 254);">Swap</span></div>
                        <div color="text" font-size="16px" class="sc-118b6623-0 sc-e47e205f-1 gCBCMe bcTQkO">Taller.
                            <span style="color: rgb(1, 84, 254);">Better.</span> Faster. <span
                                style="color: rgb(1, 84, 254);">Stronger.</span>
                        </div>
                    </div>
                    <div class="sc-de7e8801-1 sc-1080dffc-0 fIeycZ gEmIfG">
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-4 cCrkQR aPteq gRgvUT animate__animated animate__slideInRight"
                            style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=640&amp;q=75"
                                    decoding="async" data-nimg="intrinsic"
                                    srcset="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=256&amp;q=75 1x, https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=640&amp;q=75 2x"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"></span>
                        </div>
                        <div
                            class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-5 a-dzhn aPteq cbLmDW animate__animated animate__slideInRight">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=256&amp;q=75"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                    srcset="https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=96&amp;q=75 1x, https://baseswap.fi/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=256&amp;q=75 2x"></span>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-4 jLFjuO aPteq gRgvUT animate__animated animate__slideInLeft"
                            style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                        </div>
                        <div
                            class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-5 a-dzhn aPteq cbLmDW animate__animated animate__slideInLeft">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                        </div>
                    </div>
                </div>
                <div class="sc-4b853a51-0 djIXkA">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 sc-4b853a51-1 a-dzhn XvtXO gqKZYx"><a href="#"
                            class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 256 256" class="sc-4b853a51-5 fUZnCV" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z">
                                </path>
                            </svg></a><a href="#" class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg"
                            color="primary" font-size="16px"><svg viewBox="0 0 24 24" width="36px" color="#0154FD"
                                xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 llpKSr">
                                <path
                                    d="M7.64 6.32c3.116 0 5.641 2.544 5.641 5.68 0 3.137-2.525 5.68-5.64 5.68C4.526 17.68 2 15.136 2 12c0-3.136 2.525-5.68 5.64-5.68zm9.008.333c1.558 0 2.82 2.394 2.82 5.347h.001c0 2.953-1.263 5.347-2.82 5.347-1.558 0-2.82-2.395-2.82-5.347 0-2.952 1.262-5.347 2.82-5.347zm4.36.557c.548 0 .992 2.145.992 4.79s-.444 4.79-.992 4.79-.992-2.145-.992-4.79.444-4.79.992-4.79z">
                                </path>
                            </svg></a><a href="" class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg"
                            color="primary" font-size="16px"><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 24 24" class="sc-4b853a51-6 khVdlG" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z">
                                </path>
                            </svg></a><a href="#" class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg"
                            color="primary" font-size="16px"><svg viewBox="0 0 20 16" width="36px" color="#0154FD"
                                xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 llpKSr">
                                <path
                                    d="M16.93 1.644A16.491 16.491 0 0012.86.38a.062.062 0 00-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 00-4.573 0A10.54 10.54 0 007.2.412a.064.064 0 00-.065-.031 16.447 16.447 0 00-4.07 1.263.058.058 0 00-.028.023C.444 5.54-.266 9.319.083 13.05a.069.069 0 00.026.047 16.584 16.584 0 004.994 2.525.064.064 0 00.07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 00-.035-.088 10.917 10.917 0 01-1.56-.744.064.064 0 01-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 01.065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 01.066.008c.1.083.204.165.31.244a.064.064 0 01-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 00-.034.089c.3.582.643 1.135 1.02 1.66a.063.063 0 00.07.025 16.53 16.53 0 005.003-2.525.064.064 0 00.026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 00-.026-.023zM6.684 10.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.986 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z">
                                </path>
                            </svg></a><a href="#" class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg"
                            color="primary" font-size="16px"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="sc-4b853a51-4 kPYOmE">
                                <path
                                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                                </path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg></a><a href="#" class="sc-118b6623-0 sc-930bb1c9-0 eGKPba jyPezp sc-4b853a51-2 gMFngg"
                            color="primary" font-size="16px"><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 1024 1024" class="sc-4b853a51-3 wuRwb" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z">
                                </path>
                            </svg></a></div>
                </div>
            </div>
        </div>
        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-a2834c8f-0 a-dzhn cWwvby kYhUwk">
            <div class="sc-de7e8801-1 a-dzhn">
                <div class="sc-de7e8801-1 a-dzhn">
                    <div class="sc-de7e8801-1 a-dzhn"><span class="sc-957441a7-0 ddVfwj"><a href="#"
                                class="sc-a01cb22d-0 ixklkU sc-444841-0 dsnYkt">
                                <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat dbjSaM">
                                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn cWwvby"><svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 256 256" color="text"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M228,48V152a20,20,0,0,1-20,20H112.92a12,12,0,0,1-17.41,16.49l-20-20a12,12,0,0,1,0-17l20-20A12,12,0,0,1,112.92,148H204V52H100a12,12,0,0,1-24,0V48A20,20,0,0,1,96,28H208A20,20,0,0,1,228,48ZM168,192a12,12,0,0,0-12,12H52V108h91.08a12,12,0,0,0,17.41,16.49l20-20a12,12,0,0,0,0-17l-20-20A12,12,0,0,0,143.08,84H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H160a20,20,0,0,0,20-20v-4A12,12,0,0,0,168,192Z">
                                            </path>
                                        </svg></div>
                                    <div color="text" font-weight="600" font-size="12px"
                                        class="sc-118b6623-0 sc-444841-1 haAtus cJiiFF">Trade</div>
                                </div>
                            </a><span color="failure" class="sc-957441a7-1 dveGtY"></span></span></div>
                </div>
            </div>
            <div class="sc-de7e8801-1 a-dzhn">
                <div class="sc-de7e8801-1 a-dzhn">
                    <div class="sc-de7e8801-1 a-dzhn"><span class="sc-957441a7-0 ddVfwj"><a href="#"
                                class="sc-a01cb22d-0 ixklkU sc-444841-0 dsnYkt">
                                <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat dbjSaM">
                                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn cWwvby"><svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 16 16" color="text"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z">
                                            </path>
                                        </svg></div>
                                    <div color="text" font-weight="600" font-size="12px"
                                        class="sc-118b6623-0 sc-444841-1 haAtus cJiiFF">Liquidity</div>
                                </div>
                            </a><span color="failure" class="sc-957441a7-1 dveGtY"></span></span></div>
                </div>
            </div>
            <div class="sc-de7e8801-1 a-dzhn">
                <div class="sc-de7e8801-1 a-dzhn">
                    <div class="sc-de7e8801-1 a-dzhn"><span class="sc-957441a7-0 ddVfwj"><a href="#"
                                class="sc-a01cb22d-0 ixklkU sc-444841-0 dsnYkt">
                                <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat dbjSaM">
                                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn cWwvby"><svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="text"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z">
                                            </path>
                                        </svg></div>
                                    <div color="text" font-weight="600" font-size="12px"
                                        class="sc-118b6623-0 sc-444841-1 haAtus cJiiFF">Farms</div>
                                </div>
                            </a><span color="failure" class="sc-957441a7-1 dveGtY"></span></span></div>
                </div>
            </div>
            <div class="sc-de7e8801-1 a-dzhn">
                <div class="sc-de7e8801-1 a-dzhn">
                    <div class="sc-de7e8801-1 a-dzhn"><span class="sc-957441a7-0 ddVfwj"><a href="#"
                                class="sc-a01cb22d-0 ixklkU sc-444841-0 dsnYkt">
                                <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat dbjSaM">
                                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn cWwvby"><svg viewBox="0 0 24 24"
                                            color="text" width="20px" xmlns="http://www.w3.org/2000/svg"
                                            class="sc-8a800401-0 fBCULH">
                                            <path
                                                d="M13 7C13 6.44772 12.5523 6 12 6C11.4478 6 11 6.44772 11 7V7.51206C9.97631 7.76875 9.16137 8.59434 8.94664 9.66796C8.60189 11.3917 9.92035 13 11.6783 13H12.7143C13.1483 13 13.5 13.3518 13.5 13.7857C13.5 14.2197 13.1483 14.5714 12.7143 14.5714H11.4947C11.3096 14.5714 11.1282 14.5201 10.9706 14.4231L10.5241 14.1483C10.0538 13.8589 9.43783 14.0055 9.14838 14.4759C8.85893 14.9463 9.00559 15.5622 9.47594 15.8517L9.92241 16.1264C10.2535 16.3302 10.6197 16.4668 11 16.5304V17C11 17.5523 11.4478 18 12 18C12.5523 18 13 17.5523 13 17V16.557C14.4043 16.4139 15.5 15.2278 15.5 13.7857C15.5 12.2472 14.2528 11 12.7143 11H11.6783C11.1824 11 10.8106 10.5464 10.9078 10.0602C10.9813 9.69293 11.3037 9.42857 11.6783 9.42857H12.2948C12.5269 9.42857 12.7494 9.52076 12.9135 9.68485L13.0786 9.84996C13.4692 10.2405 14.1023 10.2405 14.4929 9.84996C14.8834 9.45944 14.8834 8.82627 14.4929 8.43575L14.3278 8.27064C13.9582 7.90106 13.4983 7.64249 13 7.5164V7Z">
                                            </path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z">
                                            </path>
                                        </svg></div>
                                    <div color="text" font-weight="600" font-size="12px"
                                        class="sc-118b6623-0 sc-444841-1 haAtus cJiiFF">Earn</div>
                                </div>
                            </a><span color="failure" class="sc-957441a7-1 dveGtY"></span></span></div>
                </div>
            </div>
            <div class="sc-de7e8801-1 a-dzhn">
                <div class="sc-de7e8801-1 a-dzhn">
                    <div class="sc-de7e8801-1 a-dzhn"><span class="sc-957441a7-0 ddVfwj"><button type="button"
                                class="sc-444841-0 dsnYkt">
                                <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat dbjSaM">
                                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn cWwvby"><svg stroke="currentColor"
                                            fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="text"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z">
                                            </path>
                                            <path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path>
                                        </svg></div>
                                    <div color="text" font-weight="600" font-size="12px"
                                        class="sc-118b6623-0 sc-444841-1 haAtus cJiiFF">Links</div>
                                </div>
                            </button><span color="failure" class="sc-957441a7-1 dveGtY"></span></span></div>
                </div>
                <div class="sc-cfa97b33-3 fxQIiH"
                    style="position: absolute; inset: auto auto 0px 0px; transform: translate3d(32px, -50px, 0px);"
                    data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="top">
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Twitter</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Discord</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Telegram</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Medium</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">YouTube</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Docs</a></div>
                </div>
            </div>
            <div class="sc-de7e8801-1 a-dzhn">
                <div class="sc-de7e8801-1 a-dzhn">
                    <div class="sc-de7e8801-1 a-dzhn"><span class="sc-957441a7-0 ddVfwj"><button type="button"
                                class="sc-444841-0 dsnYkt">
                                <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat dbjSaM">
                                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn cWwvby"><svg viewBox="0 0 16 5"
                                            color="text" width="20px" xmlns="http://www.w3.org/2000/svg"
                                            class="sc-8a800401-0 fBCULH">
                                            <path
                                                d="M2 0.00384521C0.9 0.00384521 0 0.903845 0 2.00384C0 3.10384 0.9 4.00384 2 4.00384C3.1 4.00384 4 3.10384 4 2.00384C4 0.903845 3.1 0.00384521 2 0.00384521ZM14 0.00384521C12.9 0.00384521 12 0.903845 12 2.00384C12 3.10384 12.9 4.00384 14 4.00384C15.1 4.00384 16 3.10384 16 2.00384C16 0.903845 15.1 0.00384521 14 0.00384521ZM8 0.00384521C6.9 0.00384521 6 0.903845 6 2.00384C6 3.10384 6.9 4.00384 8 4.00384C9.1 4.00384 10 3.10384 10 2.00384C10 0.903845 9.1 0.00384521 8 0.00384521Z">
                                            </path>
                                        </svg></div>
                                    <div color="text" font-weight="600" font-size="12px"
                                        class="sc-118b6623-0 sc-444841-1 haAtus cJiiFF">More</div>
                                </div>
                            </button><span color="failure" class="sc-957441a7-1 dveGtY"></span></span></div>
                </div>
                <div class="sc-cfa97b33-3 fxQIiH"
                    style="position: absolute; inset: auto auto 0px 0px; transform: translate3d(32px, -50px, 0px);"
                    data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="top">
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Basic Swap</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Perpetuals</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">xBSX</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Bridge</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">Locker</a></div>
                    <div class="sc-cfa97b33-1 gdEaAY"><a href="#"
                            class="sc-a01cb22d-0 ixklkU sc-cfa97b33-0 fnxFpL">NFT</a></div>
                </div>
            </div>
        </div>
        <div class="sc-da5f3fdb-0 iGVqZJ">
            <div></div>
        </div>
    </div>
    <div id="portal-root"></div>

</body>

`;

const desktopPage = `
<body data-aos-easing="ease" data-aos-duration="2000" data-aos-delay="0"><noscript><iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLF66T4" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <div id="__next" data-reactroot="">
        <script>!function () { try { var d = document.documentElement, n = 'data-theme', s = 'setAttribute'; var e = localStorage.getItem('theme'); if ('system' === e || (!e && true)) { var t = '(prefers-color-scheme: dark)', m = window.matchMedia(t); if (m.media !== t || m.matches) { d.style.colorScheme = 'dark'; d[s](n, 'dark') } else { d.style.colorScheme = 'light'; d[s](n, 'light') } } else if (e) { d[s](n, e || '') } if (e === 'light' || e === 'dark') d.style.colorScheme = e } catch (e) { } }()</script>
        <div height="60" class="sc-3bcd9529-5 bINXPs">
            <nav class="sc-3bcd9529-3 hTBhkM">
                <nav class="sc-3bcd9529-4 iYKJQf">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn ilegjh"><a href="/">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn iKdGvr">
                                <div font-size="1.5rem,,,2.5rem" color="text"
                                    class="sc-118b6623-0 sc-3bcd9529-7 OdShl ZOmbH">Base<span
                                        style="color: rgb(1, 84, 254);">Swap</span></div>
                            </div>
                        </a></div>
                    <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn hUcCLR">
                        <div class="sc-3bcd9529-2 caGorz"><a href="/swap" color="primary" font-size="16px"
                                class="sc-118b6623-0 sc-930bb1c9-0 gGYqLh jyPezp">
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-def0d8f6-1 a-dzhn cWwvby gEZtJT"><svg
                                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                                        color="#fff" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"
                                        style="color: rgb(255, 255, 255);">
                                        <path
                                            d="M228,48V152a20,20,0,0,1-20,20H112.92a12,12,0,0,1-17.41,16.49l-20-20a12,12,0,0,1,0-17l20-20A12,12,0,0,1,112.92,148H204V52H100a12,12,0,0,1-24,0V48A20,20,0,0,1,96,28H208A20,20,0,0,1,228,48ZM168,192a12,12,0,0,0-12,12H52V108h91.08a12,12,0,0,0,17.41,16.49l20-20a12,12,0,0,0,0-17l-20-20A12,12,0,0,0,143.08,84H48a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20H160a20,20,0,0,0,20-20v-4A12,12,0,0,0,168,192Z">
                                        </path>
                                    </svg>
                                    <div color="text" font-size="16px" class="sc-118b6623-0 sc-def0d8f6-0 TqzCd eqUlwq">
                                        TRADE</div>
                                </div>
                            </a>
                            <div class="sc-3bcd9529-1 grYitb"><a href="/swap" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">SWAP</div>
                                </a><a href="/basicswap" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">BASIC SWAP</div>
                                </a><a href="http://perpetuals.baseswap.fi" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">PERPETUALS</div>
                                </a></div>
                        </div><a href="/liquidity" color="primary" font-size="16px"
                            class="sc-118b6623-0 sc-930bb1c9-0 gGYqLh jyPezp">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 sc-def0d8f6-1 a-dzhn cWwvby gEZtJT"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                    color="#fff" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"
                                    style="color: rgb(255, 255, 255);">
                                    <path
                                        d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z">
                                    </path>
                                </svg>
                                <div color="text" font-size="16px" class="sc-118b6623-0 sc-def0d8f6-0 TqzCd eqUlwq">
                                    LIQUIDITY</div>
                            </div>
                        </a><a href="/farm" color="primary" font-size="16px"
                            class="sc-118b6623-0 sc-930bb1c9-0 gGYqLh jyPezp">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 sc-def0d8f6-1 a-dzhn cWwvby gEZtJT"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                    color="#fff" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"
                                    style="color: rgb(255, 255, 255);">
                                    <path
                                        d="M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z">
                                    </path>
                                </svg>
                                <div color="text" font-size="16px" class="sc-118b6623-0 sc-def0d8f6-0 TqzCd eqUlwq">
                                    Farms</div>
                            </div>
                        </a><a href="/pools" color="primary" font-size="16px"
                            class="sc-118b6623-0 sc-930bb1c9-0 gGYqLh jyPezp">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 sc-def0d8f6-1 a-dzhn cWwvby gEZtJT"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                    color="#fff" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"
                                    style="color: rgb(255, 255, 255);">
                                    <path
                                        d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z">
                                    </path>
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                    </path>
                                    <path
                                        d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <div color="text" font-size="16px" class="sc-118b6623-0 sc-def0d8f6-0 TqzCd eqUlwq">Earn
                                </div>
                            </div>
                        </a>
                        <div class="sc-3bcd9529-2 caGorz"><a href="/" color="primary" font-size="16px"
                                class="sc-118b6623-0 sc-930bb1c9-0 gGYqLh jyPezp">
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-def0d8f6-1 a-dzhn cWwvby gEZtJT"><svg
                                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                        color="#fff" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"
                                        style="color: rgb(255, 255, 255);">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            d="M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z">
                                        </path>
                                    </svg>
                                    <div color="text" font-size="16px" class="sc-118b6623-0 sc-def0d8f6-0 TqzCd eqUlwq">
                                        MORE!</div>
                                </div>
                            </a>
                            <div class="sc-3bcd9529-1 grYitb"><a href="/xbsx" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">xBSX</div>
                                </a><a href="/finishedfarms" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">Finished Farms</div>
                                </a><a href="/bridge" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">Bridge</div>
                                </a><a href="/locker" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">Token Locker</div>
                                </a><a href="https://marketplace.baseswap.fi" color="primary" font-size="16px"
                                    class="sc-118b6623-0 sc-930bb1c9-0 jshnOE jyPezp">
                                    <div class="sc-3bcd9529-0 gjJVcJ">NFT</div>
                                </a></div>
                        </div>
                    </div>
                    <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat gFdZFN">
                        <div class="sc-de7e8801-1 jHwqWW">
                            <div height="100%" class="sc-de7e8801-1 sc-1080dffc-0 faQLat eZqYvS"
                                style="position: relative;">
                                <div font-size="16px" font-weight="485" color="text" class="sc-118b6623-0 clcECv">Base
                                </div>
                                <div class="sc-a5d01e72-1 jMItye">
                                    <div>
                                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-40bf34c7-0 a-dzhn cWwvby feQnAS">
                                            <span
                                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                        alt="" aria-hidden="true"
                                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2736%27%20height=%2736%27/%3e"
                                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                                    src="/_next/static/media/base.c014f382.svg" decoding="async"
                                                    data-nimg="intrinsic"
                                                    style="background: rgb(0, 0, 0); padding: 0px; border-radius: 50px; position: absolute; inset: 0px; box-sizing: border-box; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                                    srcset="/_next/static/media/base.c014f382.svg 1x, /_next/static/media/base.c014f382.svg 2x"></span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><button class="sc-b4087bd6-0 jaZCni" scale="md">
                            <div display="none,,,block" class="sc-de7e8801-1 eNjoic interact-button">Connect Wallet
                            </div>
                            <div display="block,,,none" class="sc-de7e8801-1 lfNePU interact-button">Connect</div>
                        </button>
                    </div>
                </nav>
            </nav>
        </div>
        <div class="sc-de7e8801-1 sc-1080dffc-0 jwjPUx brUklH"></div>
        <div class="sc-de7e8801-1 sc-3bcd9529-6 jQmNfS leBvYC">
            <div class="sc-3bcd9529-8 jaWXUq">
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-0 a-dzhn cWwvby gxzAKJ">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-0 HRuLX cWwvby jfaNVe">
                        <div class="sc-de7e8801-1 sc-1080dffc-0 jMLZcI dafwez">
                            <div class="slider-container" style="font-size: 14rem;"><span class="slider-text"
                                    style="left: -100%; color: rgb(255, 255, 255);">Base</span><span class="slider-text"
                                    style="left: 0px; color: rgb(1, 84, 254);">Swap</span></div>
                            <div class="sc-de7e8801-1 sc-1080dffc-0 jMLZcI guNCUW">
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-1 cCrkQR aPteq cyCwoj animate__animated animate__slideInRight"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=640&amp;q=75"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnewlogo.4884563a.png&amp;w=640&amp;q=75 2x"><noscript></noscript></span>
                                </div>
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-2 hspsgZ aPteq cAjfNg animate__animated animate__slideInRight"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2780%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                                </div>
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-1 jLFjuO aPteq cyCwoj animate__animated animate__slideInLeft"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsx.06af154d.png&amp;w=640&amp;q=75"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
                                            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsx.06af154d.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbsx.06af154d.png&amp;w=640&amp;q=75 2x"><noscript></noscript></span>
                                </div>
                                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-bfa6f3fc-2 jclHtK aPteq cAjfNg animate__animated animate__slideInLeft"
                                    style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                                    <span
                                        style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                            style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                                alt="" aria-hidden="true"
                                                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2780%27/%3e"
                                                style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                            alt="logo"
                                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                            decoding="async" data-nimg="intrinsic"
                                            style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                                </div>
                            </div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-977f2336-0 a-dzhn cWwvby dJvjYG">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 sc-977f2336-1 a-dzhn cWwvby hwzHDL">
                                <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" font-size="2rem"
                                    font-weight="600" color="text"
                                    class="sc-118b6623-0 sc-1df03a13-2 cdzEgg hCIkRV aos-init aos-animate">Base Chain's
                                    premier decentralized exchange</div>
                            </div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn gEmIfG">
                            <div style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                                <button
                                    class="sc-b4087bd6-0 hIBbMO animate__animated animate__slideInRight interact-button "
                                    height="100%" width="75vw,,,25vw" scale="md">Connect Wallet</button>
                            </div><a href="/swap" class="sc-a01cb22d-0 ixklkU">
                                <div
                                    style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
                                    <button
                                        class="sc-b4087bd6-0 cSPoyf animate__animated animate__slideInLeft interact-button"
                                        width="75vw,,,25vw" scale="md">SWAP NOW</button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-1 a-dzhn cWwvby gFlcLU">
                    <div id="homepage-hero" class="sc-de7e8801-1 sc-1080dffc-0 cLcpkv gzZpXq">
                        <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 fFboFM gEmIfG">
                            <div data-aos="zoom-in-right" class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW aos-init">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    class="sc-806fbdc9-0 cMseEk" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M64.264 44.704c-88.765 25.213-39.73 158.676-2.108 161.887-8.506 42.218-13.32 84.645-12.642 127.824.355 22.67 51.374 58.424 105.35 86.035C186.48 466.787 238.98 466.876 256 467.296c17.02-.42 69.52-.51 101.137-46.846 53.975-27.61 104.994-63.364 105.35-86.035.677-43.179-4.137-85.606-12.643-127.824 37.623-3.211 86.657-136.674-2.108-161.887-28.433 1.462-55.606 16.152-82.172 37.223C317.64 62.233 293.164 61.296 256 61.296c-37.163 0-61.639.937-109.564 20.63-26.566-21.07-53.739-35.76-82.172-37.222zm4.927 49.928c6.057-.096 17.237 5.625 26.809 14.664 3.362 3.175-22.916 51.05-26.818 50.158-4.59-1.05-14.985-48.285-3.725-63.318.745-.994 2.039-1.477 3.734-1.504zm373.618 0c1.695.027 2.99.51 3.734 1.504 11.26 15.033.865 62.268-3.725 63.318-3.902.893-30.18-46.983-26.818-50.158 9.572-9.04 20.752-14.76 26.809-14.664zm-260.85 82.088c17.457-.304 30.686 24.445 42.041 44.576-53.57 15.878-82.575-17.11-57.752-37.777 5.603-4.665 10.823-6.714 15.711-6.8zm148.082 0c4.888.085 10.108 2.134 15.711 6.799 24.823 20.667-4.181 53.655-57.752 37.777 11.355-20.13 24.584-44.88 42.041-44.576zM256 251.548c17.32.223 36.826 9.567 30.197 36.517-1.444 5.872-12.516 8.617-21.197 9.7v8.972c99.884 41.126 79.565 138.559-9 138.559s-108.884-97.433-9-138.559v-8.972c-8.68-1.083-19.753-3.828-21.197-9.7-6.629-26.95 12.877-36.294 30.197-36.517z">
                                    </path>
                                </svg>
                            </div>
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW">
                                <div data-aos="zoom-in-up" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-2 TqzCd fSYVIT aos-init">Built in a</div>
                                <div data-aos="zoom-in-down" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-3 gDVHIC bKNQeu aos-init">bear.</div>
                            </div>
                        </div>
                        <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 jgdPQj gEmIfG">
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW">
                                <div data-aos="zoom-in-up" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-2 TqzCd fSYVIT aos-init">Primed for the</div>
                                <div data-aos="zoom-in-down" color="text" font-size="16px"
                                    class="sc-118b6623-0 sc-806fbdc9-4 TqzCd iJxKPV aos-init">bull.</div>
                            </div>
                            <div data-aos="zoom-in-left" class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn bKMOLW aos-init"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                    class="sc-806fbdc9-1 eAhyuL" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M68.596 28.182c-86.767 50.67-51.027 136.884 123.35 136.884l2.835-70.433c-71.07 14-169.105 15.57-126.184-66.45zm378.455 0c42.92 82.022-55.114 80.45-126.185 66.45l2.836 70.434c174.378 0 210.117-86.213 123.35-136.884zM174.206 220.768c-3.798.104-7.758.785-11.816 2.087-1.887 29.822 11.63 50.308 48.516 39.88-.462-26.26-16.194-42.53-36.7-41.967zm167.213 0c-20.507-.563-36.24 15.707-36.7 41.966 36.886 10.43 50.404-10.057 48.518-39.88-4.058-1.3-8.02-1.982-11.818-2.086zm-53.123 162.7l-10.793 15.266c15.535 10.978 19.19 32.196 8.21 47.73C274.736 462 253.533 465.64 238 454.663c-15.535-10.978-19.19-32.193-8.21-47.728 2.03-2.875 4.483-5.42 7.288-7.543l-11.263-14.894c-4.34 3.283-8.153 7.203-11.292 11.645-16.805 23.784-11.098 56.982 12.685 73.788 23.784 16.806 56.956 11.098 73.762-12.686 16.806-23.783 11.11-56.967-12.672-73.773z">
                                    </path>
                                </svg></div>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-0 a-dzhn cWwvby gxzAKJ">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 cUeoCK bLSHUq">
                        <div font-size="1.9rem,,,3rem" font-weight="400" letter-spacing="0px" color="#fff"
                            class="sc-118b6623-0 iwPqAJ">NEW TO DEFI?</div>
                        <div font-size="1.5rem,,,1.5rem" font-weight="400" color="#0154FD" class="sc-118b6623-0 fmlEdD">
                            GROW YOUR CAPITAL WITH US</div>
                        <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 fdMZQc bLSHUq">
                            <div font-size="14px,,,1.5rem" font-weight="400" color="#fff" class="sc-118b6623-0 DDBef">
                                BaseSwap is the only DEX<br> with a fully doxxed team of US citizens.</div>
                            <div class="sc-de7e8801-1 sc-1080dffc-0 a-dzhn kUbCea"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 32 32"
                                    class="sc-514e9eac-0 hSrFZX" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z">
                                    </path>
                                </svg> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 32 32" class="sc-514e9eac-2 cplETw" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z">
                                    </path>
                                </svg> <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 32 32" class="sc-514e9eac-1 bXGihr" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z">
                                    </path>
                                </svg></div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 jMLZcI dafwez">
                            <div data-aos="fade-right" font-size="14px,,,1.5rem" font-weight="400" color="#fff"
                                class="sc-118b6623-0 ffxcsx aos-init">AND USERS HAVE ENTRUSTED OVER&nbsp;</div>
                            <div data-aos="fade-left" font-size="1.5rem,,,3rem" font-weight="500" color="#0154FD"
                                class="sc-118b6623-0 KOkWb aos-init">$<span>7.50</span> MILLION</div>
                            <div font-size="14px,,,1.5rem" font-weight="400" color="#fff" data-aos="fade-right"
                                class="sc-118b6623-0 fccefh aos-init">OF THEIR FUNDS <span
                                    style="color: rgb(1, 84, 253);">HERE</span></div>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-1 a-dzhn cWwvby gFlcLU">
                    <div width="95%" data-aos="fade-left" class="sc-de7e8801-1 sc-1080dffc-0 gKzsuM bXTMwG aos-init">
                        <div letter-spacing="0px" data-aos="zoom-in-down" font-size="1.5rem,,3rem,3.5rem"
                            font-weight="400" color="#fff" class="sc-118b6623-0 jYZol aos-init">CREATE YOUR <span
                                style="color: rgb(1, 84, 253);">DEFI DESTINY </span></div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn ikyurC bmNThx"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16"
                                class="sc-514e9eac-11 hoGftb" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z">
                                </path>
                            </svg>
                            <div data-aos="zoom-in-up" color="text" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 TqzCd bxkqAz aos-init">Trade Crypto Assets in <a
                                    href="/swap"><u>Swap</u></a></div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx">
                            <div data-aos="zoom-in-down" color="#0154fd" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 hyqCdl cUOLDP aos-init">Provide standard (V2) <a
                                    href="/liquidity"><u>liquidity</u></a></div><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="sc-514e9eac-3 fvCMXm"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z">
                                </path>
                                <path fill-rule="evenodd"
                                    d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z">
                                </path>
                            </svg>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                class="sc-514e9eac-10 iQyvEe" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M104.18 23.01c50.773 35.662 91.356 76.39 126.09 114.9 15.712 7.966 31.16 15.66 46.236 23.158 70.055 34.845 132.168 65.335 176.383 101.315 11.834-7.294 21.912-16.734 28.385-27.945h.002c21.716-37.61.99-95.137-34.04-115.36C377.433 78.776 241.073 77.803 104.18 23.01zM54.69 59.322c54.132 74.474 92.96 150.218 125.718 217.496 39.944 82.037 71.7 151.4 110.4 190.104 4.584 4.582 10.223 8.635 16.647 12.115 19.253 13.242 42.552 21.006 67.63 21.006 35.297 0 67.07-15.37 88.99-39.764.15-.146.302-.288.448-.434 8.423-8.423 14.915-18.703 19.547-30.088 6.85-15.06 10.67-31.78 10.67-49.373 0-21.644-5.777-41.964-15.87-59.5l-.007-.01c-5.087-10.377-11.434-19.62-18.847-27.033-40.63-40.636-110.23-75.453-191.832-116.04-66.27-32.963-140.4-70.142-213.493-118.48zm-32.493 51.916c65.29 140.548 59.79 276.762 98.48 343.778 19.21 33.254 83.92 50.075 122.38 27.873 8-4.62 14.782-10.983 20.316-18.47-35.87-43.368-64.494-106.976-99.768-179.42-8.823-18.12-18.076-36.82-27.878-55.867-37.73-33.986-77.67-72.304-113.53-117.895zm379.1 7.5c7.485-.1 15.752 1.51 24.002 4.86-6.418.384-11.73 2.948-14.42 7.61-5.412 9.372 1.8 23.665 16.102 31.923 14.304 8.26 30.285 7.357 35.696-2.015.135-.234.255-.473.375-.713 2.4 7.59 2.116 15.02-1.44 21.178-9.05 15.676-35.78 17.185-59.705 3.37-23.924-13.813-35.983-37.72-26.933-53.395 4.807-8.328 14.606-12.66 26.322-12.817zm-28.203 155.774c8.974-.12 18.76 1.522 28.638 4.97-9.448.138-17.347 3.635-21.226 10.354-7.312 12.665 2.43 31.978 21.762 43.14 19.33 11.16 40.928 9.94 48.24-2.726 2.553-4.423 3.022-9.656 1.734-15.07 14.86 17.575 23.807 40.32 23.807 65.205 0 55.87-45.093 100.967-100.964 100.967-38.8 0-72.395-21.75-89.307-53.752 17.13 15.03 39.58 24.146 64.16 24.146 47.412 0 86.9-33.9 95.562-78.783-17.104 10.354-45.526 8.41-71.56-6.62-33.183-19.16-49.908-52.316-37.356-74.058 6.668-11.55 20.257-17.554 36.508-17.773z">
                                </path>
                            </svg>
                            <div data-aos="zoom-in-up" color="text" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 TqzCd bxkqAz aos-init">Or try concentrated (V3) <a
                                    href="/liquidity"><u>liquidity</u></a>!</div>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx">
                            <div data-aos="zoom-in-down" color="#0154fd" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 hyqCdl cUOLDP aos-init">Earn on those positions
                                through our <a href="/farm"><u>Farms</u></a></div><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="sc-514e9eac-4 imSjXd"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M152.864 59l-4.21 20h33.816l-4.211-20zm3.698 38v14h18V97zm-30.715 32l-7.78 94h17.145l6-80h130.545l-2-14zm302.715 23v74.602a593.471 593.471 0 0 1 18 1.666V152zm-270.65 9l-4.651 62h6.3c10.003 0 19.544 4.28 29 10.645V161zm48.65 0v84.26l78 8.681v-21.296L274.327 161zm-121 80c-8 0-23.292 6.759-37.377 18.027-10.908 8.726-21.254 19.89-28.747 31.166l16.813 4.203C56.271 269.225 87.129 253 121.561 253c50.594 0 93.48 35.024 105.586 82h20.409c-9.132-18.739-23.077-40.212-38.323-57.889-9.33-10.819-19.063-20.19-27.945-26.601-8.881-6.412-16.88-9.51-21.726-9.51zm217 .059V351h32.15c9.085-30.155 26.196-50.771 49.125-61.193 12.31-5.596 25.987-8.305 40.736-8.578 11.399-.212 23.445 1.049 35.989 3.54v-36.49c-11.495-1.781-25.084-3.178-39.633-4.203-40.207-2.831-86.16-3-118.367-3.017zm176 10.814V271h14v-13.41c-3.978-2.698-9.906-4.606-14-5.717zM222.7 265.168c.054.063.11.123.164.186 19.996 23.183 37.843 51.59 47.086 75.386l4.762 12.26h-44.53c.247 2.97.38 5.97.38 9 0 7.178-.713 14.198-2.057 21h56.057V272.055zM121.562 271c-50.081 0-91 40.92-91 91s40.919 91 91 91c50.08 0 91-40.92 91-91s-40.92-91-91-91zm357 18v14h14v-14zm-357 4c38.16 0 69 30.84 69 69s-30.84 69-69 69c-38.161 0-69-30.84-69-69s30.839-69 69-69zm307.603 6.27c-12.894.164-27.37 2.264-37.879 6.923-16.839 7.654-29.674 21.545-37.691 44.807h10.57c13.936-22.718 39.012-38 67.397-38a77.97 77.97 0 0 1 29 5.6v-15.448c-11.185-2.416-21.683-3.723-31.397-3.882zM121.562 311c-28.588 0-51 22.413-51 51s22.412 51 51 51c28.587 0 51-22.413 51-51s-22.413-51-51-51zm357 10v7.67a80.334 80.334 0 0 1 14 13.357V321zm-47 10c-33.493 0-61 27.508-61 61 0 33.492 27.507 61 61 61 33.492 0 61-27.508 61-61 0-33.492-27.508-61-61-61zm0 22c21.516 0 39 17.484 39 39s-17.484 39-39 39c-21.517 0-39-17.484-39-39s17.483-39 39-39zm-129 16v15.377l50.01 8.334c-.003-.237-.01-.473-.01-.711 0-7.988 1.219-15.71 3.464-23zm129 2c-12.095 0-21 8.905-21 21s8.905 21 21 21c12.094 0 21-8.905 21-21s-8.906-21-21-21z">
                                </path>
                            </svg>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-d2e6125a-2 a-dzhn cWwvby bmNThx"><svg
                                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                                class="sc-514e9eac-8 dGeUxj" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M255.55 22.36c-30.93 0-56 25.07-56 56 0 30.927 25.07 56 56 56 30.927 0 56-25.073 56-56 0-30.93-25.073-56-56-56zM105.067 144.47c-3.047.028-6.012.55-8.748 1.536-7.296 2.627-12.95 7.77-17.562 13.617-3.63 4.602-6.523 9.754-9.012 14.992-6.79-6.374-14.215-15.785-21.8-30.117l-15.91 8.418c10.115 19.112 20.597 31.962 31.292 40.066-.405 1.802-.907 3.66-1.164 5.364-2.005 13.302 2.913 24.966 9.637 34.736 5.34 7.757 11.825 14.87 18.132 22.367-7.497 15.76-11.35 32.49-11.368 49.366.07 28.777 11.283 56.823 32.082 80.243l3.655-13.117 17.34 4.832-25.13 90.18c20.857 6.423 41.04 6.52 61.62-1.072l18.727-66.73 17.33 4.865-8.892 31.69c17.887 4.99 36.674 7.578 55.607 7.657 12.386-.065 24.727-1.204 36.81-3.396l-8.942-39.63 17.558-3.963 14.996 66.473c24.936 11.267 48.496 10.575 72.764 1.222l-25.115-78.986 17.152-5.455 4.97 15.636c21.796-38.09 68.757-29.083 91.825-40.08 11.686-3.894 5.42-69.874 4.916-73.04-.38-2.39-29.734-3.818-40.16-2.248-5.975.9-16.344-12.078-27.39-27.597-5.387-10.488-12.357-20.405-20.753-29.527-3.988-5.276-2.735-3.092-6.533-6.474.715 6.697 2.12 12.306 4.152 16.23l-15.986 8.277c-7.378-14.252-7.98-32.853-5.662-52.858 1.583-13.67 4.81-27.957 9.03-41.733-11.81 6.755-22.626 17.48-32.02 30.586-13.665 19.064-24.126 42.55-30.647 62.644l-17.12-5.556c2.777-8.56 6.2-17.655 10.255-26.835-14.467-6.574-35.467-9.76-57.426-8.826-23.852 1.01-48.83 6.716-68.043 16.2l-7.97-16.143c22.13-10.923 49.122-16.934 75.25-18.043 3.267-.138 6.52-.203 9.747-.19 20.69.086 40.372 3.378 56.274 10.78 2.234-4.232 4.608-8.425 7.125-12.537-21.74-7.8-45.253-11.897-69.058-12.03-63.206.056-121.303 27.923-151.383 72.614-4.954-5.81-9.525-11.11-12.89-16-5.26-7.64-7.608-13.682-6.695-21.126 10.458 3.152 20.632 2.07 28.694-1.87 10.316-5.044 17.423-13.85 20.473-23.39 1.526-4.77 2.056-9.862.813-14.928-1.243-5.065-4.63-10.034-9.598-12.953-4.862-2.856-10.17-4.187-15.25-4.142zm.328 17.805c.328-.014.66-.005 1 .03 1.362.138 2.86.687 4.803 1.828.864.508.986.713 1.234 1.722.247 1.01.248 2.895-.475 5.157-1.447 4.523-5.713 10-11.235 12.7-4.346 2.125-9.372 2.917-15.66.847 2.174-5.033 4.823-9.984 7.824-13.787 3.257-4.13 6.74-6.828 9.528-7.832 1.045-.375 1.995-.623 2.978-.665zm278.153 98.647c8.835 0 16 7.163 16 16 0 8.836-7.165 16-16 16-8.838 0-16-7.164-16-16 0-8.837 7.162-16 16-16z">
                                </path>
                            </svg>
                            <div data-aos="zoom-in-up" color="text" font-size="16px"
                                class="sc-118b6623-0 sc-d2e6125a-0 TqzCd bxkqAz aos-init">And&nbsp; <a
                                    href="/pools"><u>stake</u></a>&nbsp;your earnings for real yield.</div>
                        </div>
                        <div width="100%" data-aos="zoom-in-up"
                            class="sc-de7e8801-1 sc-1080dffc-0 itctQW bLSHUq aos-init">
                            <div font-size="2rem" color="text" class="sc-118b6623-0 sc-d2e6125a-0 bDptVi dNApIo">And
                            </div>
                            <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 epkEFV bKJrTy"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                                    class="sc-514e9eac-5 cJPwmr" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path
                                        d="M192,80a12,12,0,0,1-12,12H164a12,12,0,0,1,0-24h16A12,12,0,0,1,192,80Zm-12,28H164a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24ZM76,92H92a12,12,0,0,0,0-24H76a12,12,0,0,0,0,24Zm16,16H76a12,12,0,0,0,0,24H92a12,12,0,0,0,0-24ZM228,48V224a12,12,0,0,1-24,0V212H140v12a12,12,0,0,1-24,0V212H52v12a12,12,0,0,1-24,0V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM116,188V52H52V188Zm24,0h64V52H140Z">
                                    </path>
                                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 16 16" class="sc-514e9eac-6 jUMuEi" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
                                    <path
                                        d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z">
                                    </path>
                                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" class="sc-514e9eac-7 kdovfn" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path
                                        d="M112 43.89L97.422 93.464 73 79.51V135h23v-16h32v16h23V79.51l-24.422 13.955L112 43.89zm288 0l-14.578 49.575L361 79.51V135h23v-16h32v16h23V79.51l-24.422 13.955L400 43.89zM73 153v270h78V153H73zm288 0v270h78V153h-78zM96 183h32v36H96v-36zm73 0v18h174v-18H169zm215 0h32v34h-32v-34zM55 218.078c-11.034 17.617-25.57 34.478-39 50.197v27.036c13.07-14 27.55-29.07 39-44.974v-32.258zm402 0v32.258c11.45 15.903 25.93 30.973 39 44.975v-27.035c-13.43-15.72-27.966-32.58-39-50.197zM96 247h32v18H96v-18zm288 0h32v18h-32v-18zM96 311h32v18H96v-18zm288 0h32v18h-32v-18zM16 375v18h39v-18H16zm80 0h32v18H96v-18zm73 0v18h58.47c-22.307 3.12-42.002 9.613-58.47 17.227V423h16v.268C204.803 415.183 228.99 409 256 409c27.01 0 51.197 6.183 71 14.268V423h16v-12.773c-16.468-7.614-36.163-14.106-58.47-17.227H343v-18H169zm215 0h32v18h-32v-18zm73 0v18h39v-18h-39zM57 441v46h110v-46H57zm288 0v46h110v-46H345z">
                                    </path>
                                </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512" class="sc-514e9eac-9 gHxKRZ" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;">
                                    <path
                                        d="M52.47 16.94L16.95 52.45 71.3 106.6h22.59L215 227.7v56.5L93.84 405.4H71.28l-54.26 54.2 35.34 35.5 54.24-54.4v-22.5L227.8 297h56.4l121.2 121.2v22.5l54.2 54.3 35.4-35.4-54.3-54.2h-22.5L297 284.2v-56.5l121.1-121.1h22.6L495 52.36 459.7 17l-54.3 54.25v22.57L284.2 215h-56.4L106.6 93.86V71.28L52.47 16.94z">
                                    </path>
                                </svg></div>
                            <div width="100%" class="sc-de7e8801-1 sc-1080dffc-0 eyvLjH gEmIfG">
                                <div color="text" font-size="16px" class="sc-118b6623-0 sc-d2e6125a-1 TqzCd kbtLYO">
                                    There's so much more</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sc-de7e8801-1 sc-1080dffc-0 sc-fb1d3714-0 a-dzhn cWwvby gxzAKJ">
                    <div data-aos="zoom-in-up" class="sc-de7e8801-1 sc-1080dffc-0 gBcnLK bXTMwG aos-init">
                        <div color="text" font-size="16px" class="sc-118b6623-0 sc-e47e205f-0 TqzCd fSoZBL">Base<span
                                style="color: rgb(1, 84, 254);">Swap</span></div>
                        <div color="text" font-size="16px" class="sc-118b6623-0 sc-e47e205f-1 gCBCMe bcTQkO">Taller.
                            <span style="color: rgb(1, 84, 254);">Better.</span> Faster. <span
                                style="color: rgb(1, 84, 254);">Stronger.</span>
                        </div>
                    </div>
                    <div class="sc-de7e8801-1 sc-1080dffc-0 fIeycZ gEmIfG">
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-4 cCrkQR aPteq gRgvUT animate__animated animate__slideInRight"
                            style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                        </div>
                        <div
                            class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-5 a-dzhn aPteq cbLmDW animate__animated animate__slideInRight">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                        </div>
                        <div class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-4 jLFjuO aPteq gRgvUT animate__animated animate__slideInLeft"
                            style="background-color: rgb(255, 255, 255); border-radius: 200px; box-shadow: rgb(255, 255, 255) 0px 8px 7px, rgb(1, 84, 253) 12px 0px 19px, rgb(104, 185, 255) -12px 0px 24px;">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27200%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                        </div>
                        <div
                            class="sc-de7e8801-1 sc-1080dffc-0 sc-e47e205f-5 a-dzhn aPteq cbLmDW animate__animated animate__slideInLeft">
                            <span
                                style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                        alt="" aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2770%27%20height=%2770%27/%3e"
                                        style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                    alt="logo"
                                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                    decoding="async" data-nimg="intrinsic"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"><noscript></noscript></span>
                        </div>
                    </div>
                </div>
                <div class="sc-4b853a51-0 djIXkA">
                    <div class="sc-de7e8801-1 sc-1080dffc-0 sc-4b853a51-1 a-dzhn XvtXO gqKZYx"><a
                            href="https://t.me/BaseswapFi"
                            class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 256 256" class="sc-4b853a51-5 fUZnCV" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z">
                                </path>
                            </svg></a><a href="https://medium.com/@BaseSwap"
                            class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg viewBox="0 0 24 24" width="36px" color="#0154FD"
                                xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 llpKSr">
                                <path
                                    d="M7.64 6.32c3.116 0 5.641 2.544 5.641 5.68 0 3.137-2.525 5.68-5.64 5.68C4.526 17.68 2 15.136 2 12c0-3.136 2.525-5.68 5.64-5.68zm9.008.333c1.558 0 2.82 2.394 2.82 5.347h.001c0 2.953-1.263 5.347-2.82 5.347-1.558 0-2.82-2.395-2.82-5.347 0-2.952 1.262-5.347 2.82-5.347zm4.36.557c.548 0 .992 2.145.992 4.79s-.444 4.79-.992 4.79-.992-2.145-.992-4.79.444-4.79.992-4.79z">
                                </path>
                            </svg></a><a href="https://twitter.com/BaseSwap_Fi"
                            class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 24 24" class="sc-4b853a51-6 khVdlG" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z">
                                </path>
                            </svg></a><a href="https://discord.gg/2zUzjyGxw2"
                            class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg viewBox="0 0 20 16" width="36px" color="#0154FD"
                                xmlns="http://www.w3.org/2000/svg" class="sc-8a800401-0 llpKSr">
                                <path
                                    d="M16.93 1.644A16.491 16.491 0 0012.86.38a.062.062 0 00-.066.031c-.175.313-.37.72-.506 1.041a15.226 15.226 0 00-4.573 0A10.54 10.54 0 007.2.412a.064.064 0 00-.065-.031 16.447 16.447 0 00-4.07 1.263.058.058 0 00-.028.023C.444 5.54-.266 9.319.083 13.05a.069.069 0 00.026.047 16.584 16.584 0 004.994 2.525.064.064 0 00.07-.023c.385-.526.728-1.08 1.022-1.662a.063.063 0 00-.035-.088 10.917 10.917 0 01-1.56-.744.064.064 0 01-.007-.106c.105-.079.21-.16.31-.243a.062.062 0 01.065-.009c3.273 1.495 6.817 1.495 10.051 0a.062.062 0 01.066.008c.1.083.204.165.31.244a.064.064 0 01-.005.106c-.499.291-1.017.537-1.561.743a.064.064 0 00-.034.089c.3.582.643 1.135 1.02 1.66a.063.063 0 00.07.025 16.53 16.53 0 005.003-2.525.064.064 0 00.026-.046c.417-4.314-.699-8.061-2.957-11.384a.05.05 0 00-.026-.023zM6.684 10.778c-.985 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.111-.796 2.016-1.798 2.016zm6.646 0c-.986 0-1.797-.905-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.111-.788 2.016-1.797 2.016z">
                                </path>
                            </svg></a><a href="https://www.youtube.com/@BaseSwap"
                            class="sc-118b6623-0 sc-930bb1c9-0 hjuKNH jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="sc-4b853a51-4 kPYOmE">
                                <path
                                    d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z">
                                </path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg></a><a href="https://docs.baseswap.fi"
                            class="sc-118b6623-0 sc-930bb1c9-0 eGKPba jyPezp sc-4b853a51-2 gMFngg" color="primary"
                            font-size="16px"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                viewBox="0 0 1024 1024" class="sc-4b853a51-3 wuRwb" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-40 824H232V687h97.9c11.6 32.8 32 62.3 59.1 84.7 34.5 28.5 78.2 44.3 123 44.3s88.5-15.7 123-44.3c27.1-22.4 47.5-51.9 59.1-84.7H792v-63H643.6l-5.2 24.7C626.4 708.5 573.2 752 512 752s-114.4-43.5-126.5-103.3l-5.2-24.7H232V136h560v752zM320 341h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 160h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z">
                                </path>
                            </svg></a></div>
                </div>
            </div>
        </div>
        <div class="sc-da5f3fdb-0 iGVqZJ">
            <div></div>
        </div>
    </div>
    <script id="__NEXT_DATA__"
        type="application/json">{"props":{"pageProps":{}},"page":"/","query":{},"buildId":"W3ahFI2eEWsg2ZsL0t104","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script>
    <div id="portal-root"></div>
    <script async="" id="netlify-rum-container" src="https://netlify-rum.netlify.app/netlify-rum.js"
        data-netlify-rum-site-id="eec5e385-fef0-4682-ab09-8f452c126949" data-netlify-deploy-branch="main"
        data-netlify-deploy-context="production"
        data-netlify-cwv-token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaXRlX2lkIjoiZWVjNWUzODUtZmVmMC00NjgyLWFiMDktOGY0NTJjMTI2OTQ5IiwiYWNjb3VudF9pZCI6IjYyNTA1MGM4NjE5OTE4MWQxZGQyZDdlMSIsImRlcGxveV9pZCI6IjY1NGQyYTM2MGMzY2NkMDAwODk0ZTU5YSIsImlzc3VlciI6Im5mc2VydmVyIn0.Y9S0fwde843eK2OGOlnfV2G3eOMLMhgXdylwtgh_5nM"></script>
    <script id="google-tag" data-nscript="afterInteractive">
            (function (w, d, s, l, i) {
                w[l] = w[l] || []; w[l].push({
                    'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                }); var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-TLF66T4');
    </script><next-route-announcer>
        <p aria-live="assertive" id="__next-route-announcer__" role="alert"
            style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;">
        </p>
    </next-route-announcer>
</body>
`;
