<template>
  <div style="overflow: hidden">
    <v-container>
      <v-row no-gutters>
        <v-col md="6" class="">
          <div class="d-flex justify-center justify-md-start flex-wrap">
            <v-btn data-aos="fade-up" data-aos-duration="500" class="">
              <img src="/images/icons/play-store.svg" alt="sena homes play store" />
              <p>Get it on <span>Google Play</span></p>
            </v-btn>
            <v-btn class="mt-3" data-aos="fade-up" data-aos-duration="500">
              <img src="/images/icons/app-store.svg" alt="sena homes app store" />
              <p>Download on the <span>App Store</span></p>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["pageData"],
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0 12px;

  .row {
    margin: 0;
    // padding: 6rem 1rem 0;

    .col {
      color: var(--secondary-color);
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-weight: 700;
        font-size: 56px;
        line-height: 57px;
        text-transform: capitalize;
        margin-bottom: 6.4rem;
        width: 95%;
      }

      p {
        font-weight: 400;
        font-size: 22px;
        line-height: 36px;
        margin-bottom: 3rem;
      }

      .v-btn {
        width: 19.8rem;
        height: 6rem;
        background: black;
        color: #ffffff;
        border-radius: var(--normal-radius);
        font-weight: 500;

        p {
          font-size: 10px;
          line-height: 180%;
          text-transform: initial;
          text-align: left;
          margin-left: 1.5rem;
          margin-right: auto;
          margin-block: auto;

          span {
            display: block;
            font-size: 18px;
          }
        }
      }

      .mobile-apps-img {
        margin-left: auto;
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 1264px) {
  .container {
    .row {
      padding: 0 1rem;

      .col {
        h3 {
          font-size: 40px;
          margin-bottom: 4.8rem;
        }

        p {
          font-size: 18px;
          line-height: 32px;
        }

        .v-btn {
          width: 14.7rem;
          height: 4.5rem;

          img {
            height: 23px;
          }

          p {
            font-size: 7.4px;
            text-transform: initial;
            margin-left: 1rem;

            span {
              display: block;
              font-size: 13.8px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 959px) {
  .container {
    .row {
      .col {
        text-align: center;
        padding: 6.5rem 0;

        h3 {
          font-size: 32px;
          line-height: 33px;
          margin-bottom: 4rem;
          text-transform: initial;
          width: 100%;
        }

        p {
          font-size: 16px;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
