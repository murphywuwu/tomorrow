import { Faqs } from "./components/faqs";
import { Feature } from "./components/feature";
import { Pricing } from "./components/pricing";

export default function Home() {
  const faqItems = [
    {
      question: 'Can I get a refund?',
      answer:
        'Yes, you can get a refund within 30 days of your purchase. No questions asked.',
    },
    {
      question: 'What technologies are used?',
      answer:
        'We use Next.js, Tailwind CSS, and Vercel for the deployment.',
    },
    {
      question: 'What do I get if I pre-order?',
      answer:
        'With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.',
    },
  ]

  return (
    <main className="prose-base md:prose-xl lg:prose-2xl max-w-[100%]">
      {/* navbar */}
      <div className="navbar">
        <div className="navbar-start">
          <div className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
            Logo
          </div>
        </div>
        <div className="navbar-center gap-x-6 hidden lg:block">
          <a className="btn btn-ghost hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#pricing">Pricing</a>
          <a className="btn btn-ghost hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#feature">How it works</a>
          <a className="btn btn-ghost hover:bg-transparent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#faqs">Faqs</a>
        </div>
        <div className="navbar-end">
          <button className="btn bg-gradient-to-tl from-primary to-secondary rounded-full text-white" href="#">Start for free</button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        {/* hero */}
        <div className="hero min-h-screen relative">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,var(--primary-color-light-300),transparent)] lg:bg-[radial-gradient(circle_500px_at_20%_200px,var(--primary-color-light-300),transparent)]"></div>
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col items-center text-center lg:text-start lg:items-start">
              <div className="flex h-12 dark:invert text-primary dark:text-primary-500">
                <div className="relative flex h-14 lg:left-[280%] lg:top-[-80%]">
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1241 1996" className="relative h-12  -mt-0.5">
                    <g clipPath="url(#a)"><path d="M919.561 1957.48c227.639 88.15 320.199 4.64 320.199-48.06-80.64-6.8-273.323-17.86-320.199 48.06Zm-288.971-72.07a295.902 295.902 0 0 0 195.96 56.75 295.961 295.961 0 0 0 186.12-83.56c-77.682-21.58-289.784-47.15-382.08 26.81Zm385.1-171.33c-8.63 109.67 103.67 171.33 224.94 180.23-22.12-110.32-135.34-159.57-224.94-180.23Zm-217.446-101.1c-12.839 46.88 4.801 174.14 179.251 224.63-7.498-85.93-53.187-197.82-179.251-224.63ZM452.31 1740.57a269.972 269.972 0 0 0 344.423 30.8c-69.909-36.04-237.779-84.7-344.423-30.8Zm184.321-253.87c-23.896 46.17-28.967 177.75 125.471 256.94 8.955-84.69-25.083-229.54-125.471-256.94Zm-382.075 51.14a236.74 236.74 0 0 0 59.379 74.52 236.892 236.892 0 0 0 83.946 45.08 228.845 228.845 0 0 0 93.929 7.36 228.969 228.969 0 0 0 88.937-31.1c-97.367-91.55-252.721-126.67-326.191-95.86Zm230.874-245.3c-69.262 120.84 3.938 258.84 80.105 315.53 33.876-112.31 2.805-234.71-80.051-315.53h-.054Zm-359.365-5.23c-8.362 187.68 187.612 177.48 279.638 178.73-28.967-39.44-189.986-182.4-279.638-178.73Zm241.662-175.32c-36.411 40.08-91.055 194.15 29.939 319.84 37.921-90.9 46.228-230.45-29.939-319.84Zm-344.37-83.19c-6.257 151.59 121.318 228.3 244.361 227.12-37.005-73.05-135.936-213.85-244.36-227.12Zm258.116-104.436c-81.561 48.012-72.283 203.056-24.166 283.756 54.05-75.15 94.4-168.53 24.166-283.756Zm-263.51-142.04C-22.385 920.372 96.18 1013.75 167.332 1021.74c-18.233-65.926-42.13-182.719-149.421-239.416h.053Zm248.514-45.908C176.555 781.461 133.94 889.191 167.6 986.294c62.736-50.548 138.309-157.469 98.877-249.878ZM13.756 569.399c-55.56 167.934 72.013 222.797 119.483 236.284-5.664-71.425-51.084-213.788-119.483-236.284Zm249.161-44.073c-36.465 10.519-140.413 95.862-121.587 248.69 68.4-38.517 151.471-111.883 121.587-248.69Zm-211.51-210.39c-62.141 206.398 41.537 291.147 75.575 308.032 5.394-65.275 11.975-217.78-75.574-308.032Zm230.012 5.179c-65.108 18.18-147.263 137.724-143.379 252.683 64.515-29.562 161.019-152.505 143.379-252.683ZM262 0C110.853 156.227 89.653 279.44 133.832 431.352 202.285 369.746 256.929 184.873 262 0Z" fill="currentColor"></path></g>
                    <defs><clipPath id="a"><path fill="#fff" d="M0 0h1241v1996H0z"></path></clipPath></defs>
                  </svg>
                  <div className="-mx-1 h-full flex flex-col justify-between items-center font-sans">
                    <span className="font-bold text-current text-[12px]">Product of the Day</span>
                    <span className="font-bold text-current text-[16px]">1st</span>
                  </div>
                  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1241 1996" className="relative h-12  -mt-0.5">
                    <g clipPath="url(#a)" fill="currentColor"><path d="M321.121 1957.48C93.483 2045.63.917 1962.12.917 1909.42c80.644-6.8 273.328-17.86 320.204 48.06ZM414.077 1942.16a295.904 295.904 0 0 0 195.96-56.75c-92.296-73.96-304.398-48.39-382.076-26.81a295.942 295.942 0 0 0 186.116 83.56ZM224.94 1714.08c8.631 109.67-103.677 171.33-224.94 180.23 22.116-110.32 135.342-159.57 224.94-180.23ZM442.438 1612.98c12.838 46.88-4.802 174.14-179.252 224.63 7.498-85.93 53.188-197.82 179.252-224.63ZM621.738 1818.35a269.974 269.974 0 0 0 166.633-77.78c-106.644-53.9-274.514-5.24-344.423 30.8a269.98 269.98 0 0 0 177.79 46.98ZM604.049 1486.7c23.897 46.17 28.967 177.75-125.47 256.94-8.955-84.69 25.083-229.54 125.47-256.94ZM926.746 1612.36a236.754 236.754 0 0 0 59.379-74.52c-73.47-30.81-228.824 4.31-326.191 95.86a228.969 228.969 0 0 0 88.937 31.1 228.839 228.839 0 0 0 93.928-7.36 236.896 236.896 0 0 0 83.947-45.08ZM755.251 1292.54c69.262 120.84-3.938 258.84-80.105 315.53-33.876-112.31-2.751-234.71 80.105-315.53ZM1114.62 1287.31c8.36 187.68-187.616 177.48-279.642 178.73 28.967-39.44 189.982-182.4 279.642-178.73ZM872.953 1111.99c36.412 40.08 91.056 194.15-29.938 319.84-37.921-90.9-46.229-230.45 29.938-319.84ZM1217.38 1028.8c6.25 151.59-121.32 228.3-244.363 227.12 37.003-73.05 135.933-213.85 244.363-227.12ZM959.261 924.364c81.559 48.012 72.279 203.056 24.167 283.756-54.051-75.15-94.4-168.53-24.167-283.756ZM1222.72 782.324c40.35 138.048-78.22 231.426-149.37 239.416 18.23-65.926 42.08-182.719 149.37-239.416ZM974.204 736.416c89.926 45.045 132.536 152.775 98.876 249.878-62.74-50.548-138.308-157.468-98.876-249.878ZM1226.92 569.399c55.57 167.934-72.01 222.797-119.48 236.284 5.67-71.425 51.09-213.788 119.48-236.284ZM977.764 525.326c36.466 10.519 140.416 95.862 121.586 248.69-68.4-38.517-151.47-111.883-121.586-248.69ZM1189.27 314.936c62.14 206.398-41.53 291.147-75.57 308.032-5.39-65.275-11.98-217.78 75.57-308.032ZM959.261 320.115c65.109 18.18 147.269 137.724 143.379 252.683-64.51-29.562-161.018-152.505-143.379-252.683ZM978.681 0c151.149 156.227 172.349 279.44 128.169 431.352C1038.4 369.746 983.751 184.873 978.681 0Z"></path></g>
                    <defs><clipPath id="a"><path fill="#fff" d="M0 0h1241v1996H0z"></path></clipPath></defs>
                  </svg>
                </div>
              </div>
              <h2 className="!mt-5 !mb-5">
                Headline Headline
              </h2>
              <h2 className="mr-[-0.4em] ml-[-0.4em] text-current bg-[linear-gradient(to_right,var(--primary-color-light-500),var(--primary-color)_4%,var(--primary-color-light-500))] box-decoration-clone my-[0em] px-[0.4em] py-[0.1em] rounded-[0.8em_0.3em] bg-transparent">emphasize</h2>
              <p className="font-twklausanne-200 text-base">
                description description description<span className="text-primary underline underline-offset-4 font-extrabold italic">emphasize{' '}</span>description description<span className="text-primary underline underline-offset-4 font-extrabold italic">emphasize{' '}</span>description
              </p>
              <button className="btn bg-gradient-to-tl from-primary to-secondary rounded-full text-white" href="#">Get Start For Free</button>
              <p className="text-base flex items-center gap-1">
                <span className="text-primary font-semibold animate-pulse inline-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  80% off
                </span>
                for the first 888 customers (8 left)
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3">
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-12">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-col">
                  <span className="absolute animate-ping top-[-25%] left-[48%] lg:top-[40%] lg:left-[-5%] h-[8px] w-[8px] rounded-full opacity-50 bg-primary"></span>
                  <div className="inline-flex justify-center lg:justify-start text-secondary">
                    <svg className="w-5 h-5 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"><path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path></svg>
                  </div>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    loved by 2500+ customers
                  </span>
                </div>
              </div>
            </div>
            <video
              className="w-full lg:max-w-lg rounded-lg shadow-[0_10px_20px_rgba(251,_171,_126,_0.9)]"
              src=""
              preload="auto"
              controls
              controlsList="nodownload"
              disablePictureInPicture
            >
            </video>
          </div>
        </div>

        {/* promise */}
        <Feature/>

        {/* pricing */}
        <Pricing/>

        {/* faqs */}
        <Faqs items={faqItems}/>
      </div>

      {/* footer */}
      <footer className="footer p-10  bg-primary-500 text-gray-800">
        <aside className="w-72">
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p>
            Capture any part of the web and seamlessly build personalized live dashboards with snapshots.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Chrome Extension</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Security and Privacy</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
