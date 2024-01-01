import React from "react";

const ProductWarranty = () => {
  return (
    <div className="bg-white flex items-center justify-between mt-8 px-20 py-12 rounded-3xl font-yekanReg">
      <div className="flex flex-col items-center gap-4">
        <svg
          width="46"
          height="45"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.9985 0.00227551C23.1928 -0.000908827 20.4195 0.599316 17.8677 1.76198C15.3159 2.92465 13.0459 4.6224 11.2124 6.73934C11.7259 6.99841 12.1944 7.33771 12.6003 7.74435L15.1204 10.2631C16.3954 8.75788 17.9701 7.53307 19.7449 6.66632C21.5197 5.79956 23.4558 5.30976 25.4304 5.22794C27.405 5.14613 29.3752 5.4741 31.216 6.19106C33.0568 6.90801 34.7281 7.99833 36.124 9.39289C37.5199 10.7875 38.61 12.4559 39.3251 14.2924C40.0402 16.1289 40.3648 18.0935 40.2782 20.0616C40.1917 22.0297 39.6959 23.9584 38.8224 25.7255C37.9488 27.4926 36.7165 29.0595 35.2035 30.327L37.228 32.3506C37.8091 32.9303 38.2493 33.6349 38.5147 34.4105C41.5984 31.8494 43.8153 28.4031 44.8632 24.5409C45.9112 20.6787 45.7395 16.5884 44.3714 12.827C43.0032 9.06568 40.5052 5.81607 37.2176 3.52079C33.9299 1.2255 30.0124 -0.00390481 25.9985 9.31728e-06V0.00227551Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M37.8529 31.7276L34.9463 28.8236C34.3826 28.2591 33.7126 27.8112 32.9748 27.5056C32.2369 27.1999 31.4458 27.0426 30.6468 27.0426C29.8478 27.0426 29.0566 27.1999 28.3188 27.5056C27.5809 27.8112 26.9109 28.2591 26.3472 28.8236L23.7226 31.4488L13.5037 21.239L16.1317 18.6103C17.2698 17.4691 17.9086 15.9253 17.9086 14.3161C17.9086 12.7069 17.2698 11.1631 16.1317 10.0219L13.2252 7.11789C12.6426 6.53461 11.9502 6.07178 11.1877 5.75597C10.4252 5.44016 9.60757 5.27759 8.78185 5.27759C7.95613 5.27759 7.13855 5.44016 6.37603 5.75597C5.61351 6.07178 4.92109 6.53461 4.33851 7.11789C4.31429 7.14223 4.29152 7.16796 4.2703 7.19494L2.85057 8.99421C1.49126 10.7145 0.579853 12.7432 0.19752 14.8996C-0.184937 17.0605 -0.0100955 19.2829 0.705624 21.358C1.0893 22.6197 1.74932 23.7807 2.63801 24.7571L20.2341 42.3283C20.9687 43.017 21.8277 43.5606 22.7655 43.9304C24.3464 44.6038 26.0478 44.9507 27.767 44.9502C30.6565 44.9449 33.4635 43.989 35.7523 42.2309L37.7756 40.6809C37.8064 40.6571 37.8357 40.6314 37.8631 40.6038C39.038 39.423 39.6964 37.8267 39.6945 36.1636C39.6926 34.5005 39.0305 32.9057 37.8529 31.7276ZM36.6366 39.311L34.661 40.8202C33.092 42.0332 31.2279 42.8088 29.2593 43.0677C27.2908 43.3265 25.2886 43.0592 23.4577 42.2932C22.7298 42.0116 22.0613 41.5965 21.4867 41.0695L3.89747 23.4994C3.20114 22.7111 2.68596 21.7807 2.38793 20.7733C1.77064 18.9809 1.61744 17.062 1.94253 15.1948C2.26762 13.3276 3.06047 11.5725 4.24757 10.0921L5.63661 8.33592C6.48258 7.50648 7.62355 7.04457 8.81015 7.05116C9.99676 7.05774 11.1325 7.53227 11.9692 8.37104L14.8757 11.275C15.6821 12.0835 16.1348 13.1772 16.1348 14.3172C16.1348 15.4573 15.6821 16.551 14.8757 17.3595L11.6213 20.6147C11.4552 20.781 11.362 21.006 11.362 21.2407C11.362 21.4753 11.4552 21.7004 11.6213 21.8667L23.102 33.332C23.1845 33.4146 23.2827 33.4802 23.3907 33.5249C23.4988 33.5696 23.6147 33.5927 23.7317 33.5927C23.8487 33.5927 23.9646 33.5696 24.0726 33.5249C24.1807 33.4802 24.2788 33.4146 24.3614 33.332L27.6158 30.0779C28.0142 29.6785 28.4879 29.3616 29.0097 29.1454C29.5314 28.9291 30.0908 28.8178 30.6559 28.8178C31.2209 28.8178 31.7804 28.9291 32.3021 29.1454C32.8238 29.3616 33.2975 29.6785 33.696 30.0779L36.6025 32.9807C37.439 33.8211 37.9112 34.9551 37.9175 36.1389C37.9239 37.3227 37.464 38.4617 36.6366 39.311Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M32.1117 19.4342H32.0117C32.0219 17.5681 32.0276 15.574 32.0048 15.2975C31.9932 15.0102 31.8955 14.7329 31.7243 14.5015C31.5531 14.2701 31.3163 14.095 31.0444 13.999C30.769 13.9262 30.4779 13.9394 30.2103 14.0368C29.9428 14.1343 29.7117 14.3114 29.5485 14.544C29.1051 15.0879 27.0614 18.7771 26.4453 19.8943C26.3711 20.0293 26.3335 20.1812 26.3361 20.3352C26.3387 20.4891 26.3814 20.6397 26.46 20.7722C26.5387 20.9047 26.6506 21.0144 26.7847 21.0908C26.9189 21.1671 27.0706 21.2073 27.225 21.2075H30.2214C30.2214 21.7049 30.2146 22.1819 30.21 22.6124C30.209 22.7289 30.2309 22.8444 30.2747 22.9524C30.3185 23.0603 30.3832 23.1587 30.4651 23.2417C30.547 23.3247 30.6446 23.3908 30.7522 23.4363C30.8598 23.4817 30.9753 23.5055 31.0921 23.5064H31.1C31.3346 23.5064 31.5597 23.414 31.7262 23.2493C31.8927 23.0846 31.9872 22.861 31.989 22.6272C31.989 22.3609 31.9957 21.8465 32.0003 21.2075H32.114C32.3444 21.1993 32.5626 21.1022 32.7227 20.9369C32.8827 20.7715 32.9722 20.5507 32.9722 20.3209C32.9722 20.0911 32.8827 19.8702 32.7227 19.7048C32.5626 19.5395 32.3444 19.4425 32.114 19.4342H32.1117ZM30.2327 19.4342H28.7334C29.2893 18.4383 29.8315 17.4843 30.243 16.7795C30.2384 17.5069 30.2384 18.4542 30.2327 19.4342Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M25.1249 21.98C24.3429 21.9902 23.5131 21.9958 22.8242 21.9981C23.2562 21.4203 23.8575 20.5977 24.6702 19.4352C25.1147 18.8353 25.4418 18.1572 25.6341 17.4365C25.6682 17.2715 25.6887 17.104 25.6955 16.9357C25.697 16.2216 25.4315 15.5325 24.9507 15.0031C24.4699 14.4736 23.8085 14.1417 23.0955 14.0722C22.3825 14.0027 21.669 14.2006 21.0945 14.6272C20.5199 15.0538 20.1255 15.6785 19.9882 16.3794C19.943 16.6101 19.9916 16.8494 20.1233 17.0444C20.255 17.2395 20.4591 17.3744 20.6907 17.4195C20.9222 17.4646 21.1622 17.4161 21.3579 17.2848C21.5536 17.1535 21.6889 16.95 21.7341 16.7193C21.7862 16.4554 21.9336 16.2197 22.1485 16.057C22.3633 15.8942 22.6306 15.8158 22.8996 15.8365C23.1686 15.8572 23.4207 15.9755 23.6079 16.1692C23.7952 16.3628 23.9046 16.6182 23.9155 16.887L23.8916 17.0762C23.7449 17.5604 23.5141 18.0153 23.2096 18.42C21.9774 20.183 21.2419 21.1472 20.8464 21.665C20.3576 22.3052 20.1348 22.5975 20.2871 23.087C20.3308 23.2289 20.4081 23.3582 20.5126 23.4639C20.6171 23.5696 20.7456 23.6486 20.8873 23.6943C21.4631 23.799 22.0504 23.8253 22.6333 23.7725C23.2266 23.7725 24.0371 23.7668 25.1465 23.7521C25.3772 23.7414 25.5947 23.6419 25.7531 23.4744C25.9115 23.3069 25.9984 23.0846 25.9954 22.8545C25.9924 22.6244 25.8999 22.4043 25.7372 22.241C25.5746 22.0776 25.3546 21.9836 25.1238 21.9788L25.1249 21.98Z"
            fill="#FFAA00"
          ></path>
        </svg>
        <p>مشاوره و پشتیبانی</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <svg
          width="38"
          height="40"
          viewBox="0 0 38 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.6712 39.2018C29.4542 39.2018 30.8996 37.7565 30.8996 35.9735C30.8996 34.1905 29.4542 32.7451 27.6712 32.7451C25.8883 32.7451 24.4429 34.1905 24.4429 35.9735C24.4429 37.7565 25.8883 39.2018 27.6712 39.2018Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M12.9129 39.2018C14.6959 39.2018 16.1413 37.7565 16.1413 35.9735C16.1413 34.1905 14.6959 32.7451 12.9129 32.7451C11.13 32.7451 9.68457 34.1905 9.68457 35.9735C9.68457 37.7565 11.13 39.2018 12.9129 39.2018Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M6.62276 4.96246L6.2538 9.48216C6.18001 10.3492 6.86258 11.0687 7.72962 11.0687H35.9732C36.748 11.0687 37.3937 10.4783 37.449 9.70354C37.6888 6.43828 35.1984 3.7818 31.9331 3.7818H9.26079C9.07631 2.97009 8.70736 2.19529 8.13547 1.54961C7.21309 0.571881 5.92174 0 4.5935 0H1.38358C0.627225 0 0 0.627225 0 1.38358C0 2.13994 0.627225 2.76717 1.38358 2.76717H4.5935C5.16538 2.76717 5.70037 3.00699 6.08777 3.41284C6.47517 3.83714 6.65965 4.39057 6.62276 4.96246Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M35.5302 13.8359H7.23124C6.45644 13.8359 5.82921 14.4263 5.75542 15.1826L5.0913 23.2074C4.83303 26.362 7.30503 29.0554 10.4596 29.0554H30.9735C33.7407 29.0554 36.1758 26.7863 36.3787 24.0191L36.9875 15.404C37.0613 14.5554 36.3972 13.8359 35.5302 13.8359Z"
            fill="#FFAA00"
          ></path>
        </svg>
        <p>خرید مطمئن و با کیفیت</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <svg
          width="34"
          height="40"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.535 4.89669L18.9934 0.948359C17.9009 0.545859 16.1184 0.545859 15.0259 0.948359L4.4842 4.89669C2.45253 5.66336 0.804199 8.04003 0.804199 10.2059V25.7309C0.804199 27.2834 1.82003 29.3342 3.06587 30.2542L13.6075 38.1317C15.4667 39.5309 18.5142 39.5309 20.3734 38.1317L30.915 30.2542C32.1609 29.315 33.1767 27.2834 33.1767 25.7309V10.2059C33.1959 8.04003 31.5475 5.66336 29.535 4.89669ZM23.67 15.63L15.4284 23.8717C15.1409 24.1592 14.7767 24.2934 14.4125 24.2934C14.0484 24.2934 13.6842 24.1592 13.3967 23.8717L10.33 20.7667C9.7742 20.2109 9.7742 19.2909 10.33 18.735C10.8859 18.1792 11.8059 18.1792 12.3617 18.735L14.4317 20.805L21.6575 13.5792C22.2134 13.0234 23.1334 13.0234 23.6892 13.5792C24.245 14.135 24.245 15.0742 23.67 15.63Z"
            fill="#FFAA00"
          ></path>
        </svg>
        <p>تضمین اصالت کالا</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.2085 29.7083C41.7452 29.7083 42.1668 30.1299 42.1668 30.6666V32.5833C42.1668 35.7649 39.5985 38.3333 36.4168 38.3333C36.4168 35.1708 33.8293 32.5833 30.6668 32.5833C27.5043 32.5833 24.9168 35.1708 24.9168 38.3333H21.0835C21.0835 35.1708 18.496 32.5833 15.3335 32.5833C12.171 32.5833 9.5835 35.1708 9.5835 38.3333C6.40183 38.3333 3.8335 35.7649 3.8335 32.5833V28.7499C3.8335 27.6958 4.696 26.8333 5.75016 26.8333H23.9585C26.6035 26.8333 28.7502 24.6866 28.7502 22.0416V11.4999C28.7502 10.4458 29.6127 9.58325 30.6668 9.58325H32.2768C33.6568 9.58325 34.9218 10.3308 35.6118 11.5191L36.8385 13.6658C37.011 13.9724 36.781 14.3749 36.4168 14.3749C33.7718 14.3749 31.6252 16.5216 31.6252 19.1666V24.9166C31.6252 27.5616 33.7718 29.7083 36.4168 29.7083H41.2085Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M15.3333 42.1667C17.4504 42.1667 19.1667 40.4504 19.1667 38.3333C19.1667 36.2162 17.4504 34.5 15.3333 34.5C13.2162 34.5 11.5 36.2162 11.5 38.3333C11.5 40.4504 13.2162 42.1667 15.3333 42.1667Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M30.6668 42.1667C32.7839 42.1667 34.5002 40.4504 34.5002 38.3333C34.5002 36.2162 32.7839 34.5 30.6668 34.5C28.5497 34.5 26.8335 36.2162 26.8335 38.3333C26.8335 40.4504 28.5497 42.1667 30.6668 42.1667Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M42.1667 24.0158V26.8333H36.4167C35.3625 26.8333 34.5 25.9708 34.5 24.9167V19.1667C34.5 18.1125 35.3625 17.25 36.4167 17.25H38.8892L41.6683 22.1183C41.9942 22.6933 42.1667 23.345 42.1667 24.0158Z"
            fill="#FFAA00"
          ></path>
          <path
            d="M25.0702 3.83325H10.906C6.996 3.83325 3.8335 6.99575 3.8335 10.9058V23.1341C3.8335 24.1883 4.696 25.0508 5.75016 25.0508H23.2877C25.2427 25.0508 26.8335 23.4599 26.8335 21.5049V5.59659C26.8335 4.61909 26.0477 3.83325 25.0702 3.83325ZM19.301 13.5508L15.2952 17.4224C15.0077 17.6908 14.6435 17.8249 14.2985 17.8249C13.9343 17.8249 13.5702 17.6908 13.3018 17.4224L11.366 15.5824C10.791 15.0266 10.7718 14.1066 11.3277 13.5316C11.8643 12.9566 12.7843 12.9566 13.3593 13.4933L14.2985 14.3941L17.3077 11.4808C17.8827 10.9249 18.7835 10.9441 19.3393 11.5191C19.8952 12.0941 19.876 12.9949 19.301 13.5508Z"
            fill="#FFAA00"
          ></path>
        </svg>
        <p>ارسال به سراسر ایران</p>
      </div>
    </div>
  );
};

export default ProductWarranty;