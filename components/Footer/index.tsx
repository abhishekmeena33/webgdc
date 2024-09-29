"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="index.html" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    // src="/images/logo/Gamedev.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
                  Studio Centauri.<br></br>
                  learn. play. create.
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>
                <a
                  href="mailto: gamedeviitk@gmail.com"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  gamedeviitk@gmail.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Product
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Careers
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Pricing
                      </a>
                    </li> */}
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Support
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Press media
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Our Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>

                {/* <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Newsletter
                  </h4>
                  <p className="mb-4 w-[90%]">
                    Subscribe to receive future updates
                  </p>

                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      />

                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4"
                      >
                        <svg
                          className="fill-[#757693] hover:fill-primary dark:fill-white"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div> */}
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            {/* <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div> */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Studio Centauri. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://www.facebook.com/gamedev.iitk/" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://studiocentauri.itch.io/" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                      <path d="M2.847 22.089c1.953.453 5.546.66 9.15.661h.001c3.605-.001 7.197-.208 9.15-.661 1.26-1.28 1.008-6.49 1.029-8.813l-.006-1.162v-.004a39.958 39.958 0 0 0-.168-2.938.854.854 0 0 1-.263.052h-.002a2.781 2.781 0 0 1-1.949-.792h.001a2.738 2.738 0 0 1-.485-.588h-.001c-.127.221-.265.41-.446.588a2.785 2.785 0 0 1-1.948.792h-.003a2.783 2.783 0 0 1-1.947-.792 2.76 2.76 0 0 1-.461-.586l-.007-.013a2.778 2.778 0 0 1-.463.6 2.786 2.786 0 0 1-1.949.792h-.003l-.079-.002h-.001a2.083 2.083 0 0 1-.08.002h-.003a2.781 2.781 0 0 1-1.949-.792h.001a2.801 2.801 0 0 1-.455-.589l-.007-.013.001.002c-.133.23-.288.427-.467.599l-.001.001a2.786 2.786 0 0 1-1.947.791h-.003a2.781 2.781 0 0 1-1.949-.792 2.557 2.557 0 0 1-.446-.587c-.127.22-.302.41-.485.587a2.785 2.785 0 0 1-1.949.791h-.003a.825.825 0 0 1-.263-.052 39.958 39.958 0 0 0-.168 2.938v.004l-.006 1.162c.021 2.325-.231 7.534 1.029 8.814zm.613-4.742 1.123-4.01c1.044-2.921 2.543-2.923 2.919-2.923v.001h.001c.794.002 1.498 0 2.372.949A20.263 20.263 0 0 1 12 11.257c.719-.001 1.437.035 2.125.107.873-.949 1.578-.948 2.372-.949h.001v-.001c.375 0 1.875 0 2.92 2.923l1.122 4.01c.832 2.983-.266 3.056-1.636 3.059-2.031-.076-3.156-1.545-3.156-3.014-1.124.183-2.436.275-3.748.275h-.001c-1.312 0-2.624-.092-3.748-.275 0 1.469-1.125 2.938-3.156 3.014-1.369-.004-2.467-.076-1.635-3.059z"></path>
                      <path d="M11.999 12.712h-.001v.001h.001zM2.325 8.445c1.329 0 2.436-1.097 2.436-2.398a2.41 2.41 0 0 0 2.398 2.398c1.329 0 2.364-1.097 2.364-2.398 0 1.302 1.137 2.398 2.466 2.398h.024c1.329 0 2.466-1.097 2.466-2.398 0 1.302 1.035 2.398 2.364 2.398a2.41 2.41 0 0 0 2.398-2.398c0 1.302 1.107 2.398 2.436 2.398 1.107 0 2.325-1.141 2.325-2.44V4.98c-.02-.618-2.082-2.979-3.129-3.597-3.254-.114-5.51-.133-8.87-.133-3.363.001-7.946.053-8.872.133h-.002C2.082 2.002.02 4.361 0 4.98v1.025c0 1.299 1.219 2.44 2.325 2.44zm8.55 8.078c0 .057.561.034 1.123.008h.001c.562.026 1.123.049 1.123-.008v-1.215l1.399.056c-.384-.695-2.519-2.648-2.522-2.651-.005.004-2.138 1.956-2.522 2.651l1.399-.056v1.215z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/game-development-club-iitk" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@gamedeviitk8173/featured" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 32 32"
                      xmlSpace="preserve"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1508)">
                        <path d="M30.409 5.787c-1.217-1.358-2.581-1.366-3.206-1.443-4.478-.347-11.196-.347-11.196-.347h-.015s-6.717 0-11.194.347c-.626.076-1.988.084-3.207 1.443C.633 6.823.32 9.177.32 9.177S0 11.939 0 14.701v2.589c0 2.764.32 5.525.32 5.525s.312 2.353 1.271 3.387c1.218 1.358 2.816 1.317 3.528 1.459 2.56.262 10.881.343 10.881.343s6.724-.012 11.203-.355c.625-.08 1.989-.088 3.206-1.447.958-1.034 1.271-3.387 1.271-3.387s.32-2.762.32-5.525v-2.589c0-2.763-.32-5.525-.32-5.525s-.312-2.353-1.271-3.389zM12.004 22.002V9.998L22.007 16l-10.003 6.002z"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1508">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
