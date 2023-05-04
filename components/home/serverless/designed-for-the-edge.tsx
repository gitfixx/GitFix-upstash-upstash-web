import { ServerlessBox, ServerlessSummary, ServerlessTitle } from "./comp";
import { LogoIcon } from "@/components/logo";
import { HTMLProps } from "react";
import Image from "next/image";
import cx from "@/utils/cx";

export default function DesignedForTheEdge() {
  const duration = 120000;

  return (
    <ServerlessBox className="overflow-hidden md:col-span-2">
      <header className="relative z-20">
        <ServerlessTitle link="https://docs.upstash.com/redis/features/globaldatabase">
          Designed for the edge
        </ServerlessTitle>
        <ServerlessSummary>
          Tested and optimized for Vercel Edge, Cloudflare Workers and Fastly
          Edge.
        </ServerlessSummary>
      </header>

      {/* body */}
      <div
        className="relative z-0 h-[320px] animate-spin"
        style={{
          animationDuration: `${duration}ms`,
        }}
      >
        {/* upstash */}
        <div
          className="absolute left-1/2 top-1/2 z-0 flex
          h-[490px] w-[490px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        >
          {/* circles line */}
          <svg
            className="absolute left-0 top-0 z-0"
            width="490"
            height="490"
            viewBox="0 0 490 490"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="245" cy="245" r="47.5" stroke="white" />
            <circle opacity="0.08" cx="245" cy="245" r="96.5" stroke="white" />
            <circle opacity="0.06" cx="245" cy="245" r="146.5" stroke="white" />
            <circle opacity="0.04" cx="245" cy="245" r="195.5" stroke="white" />
            <circle opacity="0.02" cx="245" cy="245" r="244.5" stroke="white" />
          </svg>

          <LogoIcon
            className="animate-spin"
            style={{
              animationDirection: "reverse",
              animationDuration: `${duration}ms`,
            }}
          />

          <ProductOut className="h-[118px] rotate-[120deg]">
            <ProductIn className="rotate-[-120deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                viewBox="0 0 35 15"
                fill="none"
                className="animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: `${duration}ms`,
                }}
              >
                <path
                  fill="#F6821F"
                  d="m23.567 14.788.17-.587c.202-.698.127-1.343-.213-1.817-.312-.437-.832-.694-1.465-.724l-11.97-.151a.238.238 0 0 1-.189-.1.244.244 0 0 1-.027-.216.318.318 0 0 1 .278-.212l12.082-.153c1.433-.066 2.984-1.228 3.528-2.645l.689-1.8a.436.436 0 0 0 .018-.237A7.867 7.867 0 0 0 18.791 0a7.87 7.87 0 0 0-7.451 5.333A3.543 3.543 0 0 0 5.787 9.04a5.032 5.032 0 0 0-4.832 5.755.234.234 0 0 0 .23.201l22.1.003h.007a.292.292 0 0 0 .275-.212Z"
                />
                <path
                  fill="#FBAD41"
                  d="M27.554 6.514c-.11 0-.221.003-.331.008a.185.185 0 0 0-.052.012.19.19 0 0 0-.12.127l-.471 1.624c-.203.698-.128 1.343.212 1.817.312.437.832.694 1.464.724l2.552.153a.232.232 0 0 1 .182.099.24.24 0 0 1 .027.217.318.318 0 0 1-.277.212l-2.652.153c-1.44.066-2.99 1.228-3.534 2.645l-.191.5a.141.141 0 0 0 .126.192h9.131a.242.242 0 0 0 .235-.176 6.541 6.541 0 0 0-6.301-8.307Z"
                />
              </svg>
            </ProductIn>
          </ProductOut>

          <ProductOut className="h-[118px] rotate-[240deg]">
            <ProductIn className="rotate-[-240deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                viewBox="0 0 35 16"
                fill="none"
                className="animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: `${duration}ms`,
                }}
              >
                <path
                  fill="#FF282D"
                  d="M23.227 3.152v8.275h2.486v-1.264h-.822V1.89h-1.664v1.26ZM1.642 10.163h.845V6.17h-.845V5.072l.845-.139V3.822c0-1.347.293-1.93 2.01-1.93.37 0 .81.054 1.195.123L5.464 3.37a3.105 3.105 0 0 0-.555-.05c-.605 0-.758.061-.758.652v.962h1.256V6.17H4.151v3.993h.836v1.264H1.642v-1.264ZM22.38 9.763c-.26.055-.488.048-.652.052-.685.017-.626-.208-.626-.854v-2.79h1.304V4.932h-1.304V1.891h-1.665v7.416c0 1.455.36 2.12 1.926 2.12.37 0 .88-.095 1.265-.178l-.247-1.486ZM32.72 10.17a.629.629 0 1 1 0 1.255.627.627 0 1 1 0-1.256Zm0 1.156a.53.53 0 0 0 .528-.529.524.524 0 0 0-.528-.522.522.522 0 0 0-.525.522c0 .29.235.53.525.53Zm.117-.22-.128-.187h-.087v.187h-.142v-.617h.258c.153 0 .248.077.248.213 0 .1-.05.169-.13.192l.155.212h-.174Zm-.215-.31h.113c.064 0 .107-.026.107-.094 0-.064-.043-.09-.104-.09h-.116v.184ZM17.36 6.168v-.222a7.165 7.165 0 0 0-1.275-.093c-.775 0-.87.411-.87.634 0 .315.108.485.947.669 1.227.275 2.459.562 2.459 2.083 0 1.443-.742 2.188-2.305 2.188-1.046 0-2.06-.224-2.835-.42V9.762h1.26v.221c.543.105 1.111.094 1.408.094.826 0 .96-.444.96-.68 0-.328-.237-.485-1.011-.642-1.46-.25-2.617-.748-2.617-2.23 0-1.403.938-1.953 2.5-1.953 1.06 0 1.864.164 2.639.36v1.235h-1.26ZM9.701 7.26l-.126-.126-.644.56a.306.306 0 0 0-.103-.018.319.319 0 0 0-.314.323c0 .179.14.323.314.323A.319.319 0 0 0 9.142 8a.33.33 0 0 0-.014-.097L9.7 7.26Z"
                />
                <path
                  fill="#FF282D"
                  d="m12.251 9.763-.001-5.18h-1.665v.486a3.403 3.403 0 0 0-1.131-.428h.01v-.575h.202v-.423H7.99v.423h.203v.575h.012a3.422 3.422 0 1 0 2.386 6.296l.3.49h1.758V9.763h-.398ZM8.928 9.76v-.195h-.2v.195a1.761 1.761 0 0 1-1.654-1.665h.198v-.2h-.197a1.76 1.76 0 0 1 1.653-1.65v.195h.2v-.196a1.76 1.76 0 0 1 1.658 1.602v.057h-.2v.2h.2v.054A1.76 1.76 0 0 1 8.928 9.76ZM29.926 4.933h3.433V6.17h-.82l-2.106 5.18c-.604 1.455-1.595 2.825-3.104 2.825-.372 0-.866-.042-1.208-.124l.15-1.51c.22.04.508.068.66.068.7 0 1.489-.434 1.736-1.19l-2.134-5.25h-.82V4.934h3.435V6.17h-.82l1.208 2.973 1.208-2.973h-.818V4.933Z"
                />
              </svg>
            </ProductIn>
          </ProductOut>

          <ProductOut className="h-[118px] rotate-[360deg]">
            <ProductIn className="rotate-[-360deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                viewBox="0 0 25 20"
                fill="none"
                className="animate-spin"
                style={{
                  animationDirection: "reverse",
                  animationDuration: `${duration}ms`,
                }}
              >
                <path fill="#000" d="m12.5 0 11.547 20H.953L12.5 0Z" />
              </svg>
            </ProductIn>
          </ProductOut>

          {/* orta halka */}

          <ProductOut className="h-[170px] rotate-[180deg]">
            <ProductIn className="rotate-[-180deg]">
              <svg
                className="animate-spin text-black"
                style={{
                  animationDirection: "reverse",
                  animationDuration: `${duration}ms`,
                }}
                width="25"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Deno Logo"
              >
                <g clipPath="url(#clip0_29_599)">
                  <path
                    d="M15 0C23.2843 0 30 6.71572 30 15C30 23.2843 23.2843 30 15 30C6.71572 30 0 23.2843 0 15C0 6.71572 6.71572 0 15 0Z"
                    fill="currentColor"
                  />
                  <path
                    d="M14.6635 22.3394C14.2788 22.2357 13.8831 22.4584 13.7705 22.8381L13.7655 22.8558L12.7694 26.5472L12.7649 26.565C12.6711 26.9498 12.9011 27.3414 13.2858 27.4451C13.6704 27.549 14.0661 27.3263 14.1787 26.9465L14.1837 26.9289L15.1797 23.2375L15.1843 23.2196C15.1911 23.1919 15.1962 23.164 15.1997 23.1362L15.2026 23.1084L15.179 22.9888L15.1445 22.8166L15.1227 22.7091C15.076 22.619 15.0111 22.5396 14.932 22.4759C14.853 22.4123 14.7615 22.3658 14.6635 22.3394ZM7.7224 18.5379C7.70424 18.5741 7.68883 18.6123 7.67658 18.6522L7.66967 18.6763L6.67358 22.3677L6.669 22.3856C6.57525 22.7704 6.80524 23.1619 7.1899 23.2657C7.57451 23.3695 7.97026 23.1469 8.08287 22.7671L8.08779 22.7494L8.99096 19.4023C8.51793 19.1518 8.09336 18.8628 7.7224 18.5379ZM5.34707 14.2929C4.9624 14.1891 4.56666 14.4117 4.4541 14.7915L4.44912 14.8092L3.45303 18.5006L3.44846 18.5184C3.35471 18.9032 3.58469 19.2947 3.96936 19.3985C4.35397 19.5023 4.74971 19.2797 4.86232 18.8999L4.86725 18.8822L5.86334 15.1908L5.86791 15.173C5.96166 14.7882 5.73174 14.3967 5.34707 14.2929ZM27.682 13.4546C27.2973 13.3508 26.9015 13.5734 26.789 13.9532L26.784 13.9709L25.7879 17.6623L25.7833 17.6801C25.6896 18.0649 25.9196 18.4564 26.3042 18.5602C26.6889 18.664 27.0846 18.4414 27.1972 18.0616L27.2021 18.0439L28.1982 14.3525L28.2028 14.3347C28.2965 13.9499 28.0666 13.5584 27.682 13.4546ZM3.17781 8.52527C2.34361 10.0444 1.81243 11.7112 1.61377 13.4329C1.7088 13.5412 1.83381 13.619 1.97301 13.6563C2.35768 13.7602 2.75342 13.5375 2.86598 13.1577L2.87096 13.1401L3.86705 9.44865L3.87162 9.43084C3.96537 9.04599 3.73539 8.65447 3.35072 8.5507C3.2943 8.53547 3.23623 8.52694 3.17781 8.52527ZM25.159 8.5507C24.7744 8.44687 24.3786 8.66953 24.266 9.04933L24.2611 9.06697L23.265 12.7584L23.2604 12.7762C23.1667 13.161 23.3966 13.5526 23.7813 13.6563C24.1659 13.7602 24.5617 13.5375 24.6743 13.1577L24.6792 13.1401L25.6753 9.44865L25.6799 9.43084C25.7736 9.04599 25.5436 8.65447 25.159 8.5507Z"
                    fill="white"
                  />
                  <path
                    d="M7.51285 5.04065C7.12824 4.93682 6.73249 5.15948 6.61988 5.53929L6.61495 5.55692L5.61886 9.24833L5.61429 9.26614C5.52054 9.65098 5.75052 10.0425 6.13519 10.1463C6.5198 10.2501 6.91554 10.0274 7.02816 9.64764L7.03308 9.63001L8.02917 5.9386L8.03374 5.92079C8.12749 5.53595 7.89751 5.14442 7.51285 5.04065ZM20.3116 5.73845C19.9269 5.63462 19.5312 5.85727 19.4186 6.23708L19.4136 6.25471L18.7443 8.73499C19.1779 8.94915 19.5917 9.20126 19.9809 9.48839L20.0453 9.53643L20.8279 6.63639L20.8324 6.61858C20.9262 6.23374 20.6963 5.84221 20.3116 5.73845ZM13.7968 1.57642C13.3296 1.61771 12.8647 1.68338 12.4043 1.77317L12.3066 1.79263L11.3782 5.23419L11.3736 5.252C11.2799 5.63684 11.5099 6.02837 11.8945 6.13214C12.2792 6.23596 12.6749 6.01331 12.7875 5.6335L12.7924 5.61587L13.7885 1.92446L13.7931 1.90665C13.8196 1.79831 13.8209 1.68533 13.7968 1.57642ZM22.9626 4.1263L22.7669 4.85169L22.7623 4.86944C22.6686 5.25429 22.8986 5.64581 23.2832 5.74958C23.6678 5.85341 24.0636 5.63075 24.1762 5.25095L24.1811 5.23331L24.2025 5.15462C23.8362 4.81205 23.4511 4.49009 23.0491 4.19022L22.9626 4.1263ZM17.1672 1.69677L16.8139 3.00593L16.8094 3.02374C16.7156 3.40858 16.9456 3.80011 17.3303 3.90388C17.7149 4.0077 18.1106 3.78505 18.2233 3.40524L18.2282 3.38761L18.6 2.00966C18.1624 1.88867 17.719 1.79001 17.2714 1.71405L17.1672 1.69677Z"
                    fill="white"
                  />
                  <path
                    d="M9.69085 24.6253C9.80341 24.2455 10.1992 24.0229 10.5838 24.1266C10.9685 24.2303 11.1984 24.6219 11.1047 25.0068L11.1001 25.0246L10.3872 27.6664L10.2876 27.6297C9.85836 27.4694 9.43765 27.2873 9.0271 27.0839L9.68587 24.6429L9.69085 24.6253Z"
                    fill="white"
                  />
                  <path
                    d="M14.4141 8.49082C10.0522 8.49082 6.65918 11.2368 6.65918 14.6517C6.65918 17.8769 9.78123 19.9362 14.6211 19.8331C15.0327 19.8243 15.1517 20.1008 15.2856 20.4734C15.4196 20.846 15.7796 22.8097 16.0665 24.3117C16.3233 25.656 16.5842 27.0052 16.7834 28.3596C19.9439 27.9418 22.8663 26.3807 25.0076 24.0261L22.7237 15.5088C22.1544 13.4518 21.489 11.5564 19.7283 10.1794C18.3118 9.07166 16.5122 8.49082 14.4141 8.49082Z"
                    fill="white"
                  />
                  <path
                    d="M15.3516 10.957C15.8694 10.957 16.2891 11.3767 16.2891 11.8945C16.2891 12.4123 15.8694 12.832 15.3516 12.832C14.8338 12.832 14.4141 12.4123 14.4141 11.8945C14.4141 11.3767 14.8338 10.957 15.3516 10.957Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_29_599">
                    <rect width="30" height="30" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </ProductIn>
          </ProductOut>

          <ProductOut className="h-[170px] rotate-[60deg]">
            <ProductIn className="rotate-[-60deg]">
              <Image
                className="block h-6 w-6 animate-spin text-black"
                style={{
                  animationDirection: "reverse",
                  animationDuration: `${duration}ms`,
                }}
                src="/lagon-icon-black.png"
                width={40}
                height={40}
                alt="lagon logo"
              />
            </ProductIn>
          </ProductOut>

          <ProductOut className="h-[170px] rotate-[300deg]">
            <ProductIn className="rotate-[-300deg]">
              <svg
                className="animate-spin text-black"
                style={{
                  animationDirection: "reverse",
                  animationDuration: `${duration}ms`,
                }}
                width={20}
                viewBox="0 0 128 113"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M80.4595 74.6047H71.6825L70.9494 73.8717V53.3259C70.9494 49.6705 69.513 46.8372 65.1047 46.7382C62.8361 46.6787 60.2406 46.7382 57.4669 46.8471L57.0508 47.2731V55.5746V73.8618L56.3177 74.5948H47.5407L46.8076 73.8618V38.7636L47.5407 38.0305H67.294C74.9714 38.0305 81.1926 44.2517 81.1926 51.9291V73.8717L80.4595 74.6047Z"></path>
                </g>
                <g>
                  <path d="M34.5931 94.0509H33.3845L27.3516 88.0179V86.8094L36.5744 77.5866H42.964L43.8159 78.4385V84.8281L34.5931 94.0509Z"></path>
                  <path d="M27.3516 25.816V24.6074L33.3845 18.5744H34.5931L43.8159 27.7972V34.1868L42.964 35.0388H36.5744L27.3516 25.816Z"></path>
                  <path d="M35.8412 61.4491H0.73307L0 60.716V51.9192L0.73307 51.1861H35.8412L36.5743 51.9192V60.716L35.8412 61.4491Z"></path>
                  <path d="M127.277 61.4491H92.1686L91.4355 60.716V51.9192L92.1686 51.1861H127.277L128.01 51.9192V60.716L127.277 61.4491Z"></path>
                  <path d="M58.9429 27.0642V0.73307L59.6759 0H68.4728L69.2059 0.73307V27.0642L68.4728 27.7972H59.6759L58.9429 27.0642Z"></path>
                  <path d="M58.9429 111.902V85.5711L59.6759 84.838H68.4728L69.2059 85.5711V111.902L68.4728 112.635H59.6759L58.9429 111.902Z"></path>
                </g>
              </svg>
            </ProductIn>
          </ProductOut>

          {/* empty slots */}

          <ProductOut className="h-[220px] rotate-[120deg]">
            <ProductIn className="rotate-[-120deg] opacity-5" />
          </ProductOut>

          <ProductOut className="h-[220px] rotate-[240deg]">
            <ProductIn className="rotate-[240deg] opacity-5" />
          </ProductOut>

          <ProductOut className="h-[220px] rotate-[360deg]">
            <ProductIn className="rotate-[360deg] opacity-5" />
          </ProductOut>
        </div>
      </div>
    </ServerlessBox>
  );
}

function ProductOut({ children, className }: HTMLProps<HTMLDivElement> & {}) {
  return (
    <span
      className={cx(
        "absolute bottom-1/2 left-1/2 z-10",
        "flex w-0 origin-bottom justify-center",
        className
      )}
    >
      {children}
    </span>
  );
}

function ProductIn({ children, className }: HTMLProps<HTMLDivElement> & {}) {
  return (
    <span
      className={cx(
        "flex h-12 w-12 shrink-0 items-center justify-center",
        "rounded-full bg-white",
        className
      )}
    >
      {children}
    </span>
  );
}
