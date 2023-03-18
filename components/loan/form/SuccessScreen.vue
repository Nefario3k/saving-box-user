<template>
  <div>
    <div class="text-center" style="margin-top: 130px; margin-bottom: 30px">
      <svg
        class="mb-0"
        width="78"
        height="78"
        viewBox="0 0 78 78"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.25 41.4375L36.5625 48.75L48.75 31.6875M68.25 39C68.25 42.8412 67.4934 46.6447 66.0235 50.1935C64.5535 53.7423 62.399 56.9668 59.6829 59.6829C56.9668 62.399 53.7423 64.5535 50.1935 66.0235C46.6447 67.4934 42.8412 68.25 39 68.25C35.1588 68.25 31.3553 67.4934 27.8065 66.0235C24.2577 64.5535 21.0332 62.399 18.3171 59.6829C15.601 56.9668 13.4465 53.7423 11.9765 50.1935C10.5066 46.6447 9.75 42.8412 9.75 39C9.75 31.2424 12.8317 23.8026 18.3171 18.3171C23.8026 12.8317 31.2424 9.75 39 9.75C46.7576 9.75 54.1974 12.8317 59.6829 18.3171C65.1683 23.8026 68.25 31.2424 68.25 39Z"
          stroke="#61CA61"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="right-drawer-title text-center">
      <h1>{{ title }}</h1>
      <p style="width: 80%; margin: 0 auto !important" v-html="body"></p>
    </div>

    <div class="text-center" style="margin-top: 20px">
      <a
        :href="linkTo"
        style="
          text-decoration: none;
          color: #4169e1;
          font-weight: 500;
          font-size: 18px;
        "
        >{{ link }}</a
      >
    </div>
  </div>
</template>
<script lang="js">
export default {
    props: {
        'title': { Type: String, default: 'Loan Application Successful' },
        'body': { Type: String, default: 'Your Loan Application was submitted and it is being processed. you will be notified when it is approved.' },
        'link': { Type: String, default: 'Back to Home' },
        'linkTo': { Type: String, default: '' },
    },
}
</script>