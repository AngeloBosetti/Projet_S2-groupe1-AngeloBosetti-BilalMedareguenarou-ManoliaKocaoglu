<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <h1>Ravie de vous revoir  Lorem Ipsum</h1>
    <h4>Accès rapide</h4>
    <div
  class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 px-[15px] py-[13px] rounded-lg bg-[#c6c4e4]"
>
  <p class="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">Chat</p>
  <div
    class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-md bg-neutral-50"
  >
    <div class="flex-grow-0 flex-shrink-0 w-[294px] h-[52px] relative">
      <p class="absolute left-[198px] top-[3px] text-base text-center text-[#989592]">
        - Sam, 18h15
      </p>
      <p class="absolute left-[74px] top-px text-lg text-left text-black">Julie Casser</p>
      <p class="absolute left-[74px] top-7 text-sm font-medium text-center text-[#1c1514]">
        Salut mec comment ca va ? Je ...
      </p>
      <div
        class="flex justify-center items-center w-[50px] h-[50px] absolute left-0 top-0.5 overflow-hidden gap-2.5"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="self-stretch flex-grow"
          preserveAspectRatio="none"
        >
          <circle cx="25" cy="25" r="25" fill="#989592"></circle></svg
        ><svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M14.4792 12.7686C12.8225 12.7686 11.4035 12.1804 10.2223 11.004C9.041 9.82765 8.45105 8.41519 8.45239 6.76666C8.45239 5.11545 9.04234 3.70166 10.2223 2.52528C11.4022 1.35157 12.8211 0.764709 14.4792 0.764709C16.1372 0.764709 17.5562 1.35157 18.7361 2.52528C19.916 3.70166 20.506 5.11545 20.506 6.76666C20.506 8.41653 19.916 9.82899 18.7361 11.004C17.5562 12.1791 16.1372 12.7673 14.4792 12.7686ZM0.416672 27.2333V23.9422C0.416672 23.1166 0.657743 22.3444 1.13989 21.6255C1.62337 20.9052 2.27292 20.3464 3.08855 19.9489C4.98497 19.0433 6.88207 18.3644 8.77984 17.9123C10.6789 17.4588 12.5787 17.2321 14.4792 17.2321C16.381 17.2321 18.2807 17.4588 20.1785 17.9123C22.0763 18.3658 23.9727 19.0446 25.8678 19.9489C26.6848 20.3464 27.3343 20.9052 27.8164 21.6255C28.2999 22.3444 28.5417 23.1166 28.5417 23.9422V27.2353L0.416672 27.2333Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
    <div class="flex-grow-0 flex-shrink-0 w-[294px] h-[52px] relative">
      <p class="absolute left-[198px] top-[3px] text-base text-center text-[#989592]">
        - Sam, 18h15
      </p>
      <p class="absolute left-[74px] top-px text-lg text-left text-black">Julie Casser</p>
      <p class="absolute left-[74px] top-7 text-sm font-medium text-center text-[#1c1514]">
        Salut mec comment ca va ? Je ...
      </p>
      <div
        class="flex justify-center items-center w-[50px] h-[50px] absolute left-0 top-0.5 overflow-hidden gap-2.5"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="self-stretch flex-grow"
          preserveAspectRatio="none"
        >
          <circle cx="25" cy="25" r="25" fill="#989592"></circle></svg
        ><svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M14.4792 12.7686C12.8225 12.7686 11.4035 12.1804 10.2223 11.004C9.041 9.82765 8.45105 8.41519 8.45239 6.76666C8.45239 5.11545 9.04234 3.70166 10.2223 2.52528C11.4022 1.35157 12.8211 0.764709 14.4792 0.764709C16.1372 0.764709 17.5562 1.35157 18.7361 2.52528C19.916 3.70166 20.506 5.11545 20.506 6.76666C20.506 8.41653 19.916 9.82899 18.7361 11.004C17.5562 12.1791 16.1372 12.7673 14.4792 12.7686ZM0.416672 27.2333V23.9422C0.416672 23.1166 0.657743 22.3444 1.13989 21.6255C1.62337 20.9052 2.27292 20.3464 3.08855 19.9489C4.98497 19.0433 6.88207 18.3644 8.77984 17.9123C10.6789 17.4588 12.5787 17.2321 14.4792 17.2321C16.381 17.2321 18.2807 17.4588 20.1785 17.9123C22.0763 18.3658 23.9727 19.0446 25.8678 19.9489C26.6848 20.3464 27.3343 20.9052 27.8164 21.6255C28.2999 22.3444 28.5417 23.1166 28.5417 23.9422V27.2353L0.416672 27.2333Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
    <div class="flex-grow-0 flex-shrink-0 w-[294px] h-[52px] relative">
      <p class="absolute left-[198px] top-[3px] text-base text-center text-[#989592]">
        - Sam, 18h15
      </p>
      <p class="absolute left-[74px] top-px text-lg text-left text-black">Julie Casser</p>
      <p class="absolute left-[74px] top-7 text-sm font-medium text-center text-[#1c1514]">
        Salut mec comment ca va ? Je ...
      </p>
      <div
        class="flex justify-center items-center w-[50px] h-[50px] absolute left-0 top-0.5 overflow-hidden gap-2.5"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="self-stretch flex-grow"
          preserveAspectRatio="none"
        >
          <circle cx="25" cy="25" r="25" fill="#989592"></circle></svg
        ><svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="none"
        >
          <path
            d="M14.4792 12.7686C12.8225 12.7686 11.4035 12.1804 10.2223 11.004C9.041 9.82765 8.45105 8.41519 8.45239 6.76666C8.45239 5.11545 9.04234 3.70166 10.2223 2.52528C11.4022 1.35157 12.8211 0.764709 14.4792 0.764709C16.1372 0.764709 17.5562 1.35157 18.7361 2.52528C19.916 3.70166 20.506 5.11545 20.506 6.76666C20.506 8.41653 19.916 9.82899 18.7361 11.004C17.5562 12.1791 16.1372 12.7673 14.4792 12.7686ZM0.416672 27.2333V23.9422C0.416672 23.1166 0.657743 22.3444 1.13989 21.6255C1.62337 20.9052 2.27292 20.3464 3.08855 19.9489C4.98497 19.0433 6.88207 18.3644 8.77984 17.9123C10.6789 17.4588 12.5787 17.2321 14.4792 17.2321C16.381 17.2321 18.2807 17.4588 20.1785 17.9123C22.0763 18.3658 23.9727 19.0446 25.8678 19.9489C26.6848 20.3464 27.3343 20.9052 27.8164 21.6255C28.2999 22.3444 28.5417 23.1166 28.5417 23.9422V27.2353L0.416672 27.2333Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</div>
</template>