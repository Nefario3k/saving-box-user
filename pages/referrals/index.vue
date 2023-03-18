<template>
  <v-main>
    <section class="dashboard-content">
      <div class="content__wrapperBox row">
        <div class="col-md-12">
          <div class="my-ref-link">
            <nuxt-link to="/referrals/my-referrals"
              >View Referral Activities</nuxt-link
            >
          </div>
          <div class="ref-image">
            <img src="images/refer-friend.png" alt="referral image" />
          </div>
          <h2 class="text-center my-4">Earn ₦1,000.00 per referral.</h2>
          <p class="referral-info text-center my-4">
            You get a ₦500.00 bonus instantly as soon as your friends signup,
            Verify their BVN, Start a savings plan, and Join an investment plan
          </p>
          <p class="referral-info1 text-center my-4">
            You will also get 1000 naira the first time your referral gets a
            Jollification plan
          </p>
          <p class="link-instruction text-center my-10">
            Copy the link and code below and share with friends
          </p>
          <div class="ref-link d-flex flex-wrap justify-center mb-12">
            <div class="">
              <span class=""> https://get.savingbox.com/r/KenneAfO </span>
              <img src="images/icons/copy.svg" alt="" />
            </div>
            <div class="ml-4 mt-8 mt-md-0">
              <span class=""> KenneAfO </span>
              <img src="images/icons/copy.svg" alt="" />
            </div>
          </div>
          <div class="my-16 social-btn">
            <span class="">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31"
                  cy="31"
                  r="30.5"
                  fill="#F5F8FF"
                  stroke="#E3E3E3"
                />
                <g clip-path="url(#clip0_772_94693)">
                  <path
                    d="M33 32.5H35.5L36.5 28.5H33V26.5C33 25.47 33 24.5 35 24.5H36.5V21.14C36.174 21.097 34.943 21 33.643 21C30.928 21 29 22.657 29 25.7V28.5H26V32.5H29V41H33V32.5Z"
                    fill="#4169E1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_772_94693">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(19 19)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span class="ml-6">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="31"
                  cy="31"
                  r="30.5"
                  fill="#F5F8FF"
                  stroke="#E3E3E3"
                />
                <g clip-path="url(#clip0_772_94698)">
                  <path
                    d="M41.1603 24.655C40.3969 24.9926 39.5873 25.2144 38.7583 25.313C39.6321 24.7904 40.2861 23.968 40.5983 22.9989C39.7783 23.4869 38.8793 23.8289 37.9423 24.0139C37.313 23.3405 36.4787 22.8939 35.5693 22.7435C34.6599 22.5932 33.7263 22.7474 32.9136 23.1824C32.1009 23.6174 31.4547 24.3086 31.0755 25.1487C30.6962 25.9889 30.6051 26.9307 30.8163 27.828C29.1535 27.7446 27.5267 27.3125 26.0416 26.5596C24.5566 25.8068 23.2465 24.75 22.1963 23.458C21.8246 24.0964 21.6293 24.8222 21.6303 25.5609C21.6303 27.011 22.3683 28.292 23.4903 29.042C22.8264 29.021 22.177 28.8417 21.5963 28.519V28.5709C21.5965 29.5367 21.9307 30.4726 22.5422 31.22C23.1537 31.9675 24.0048 32.4804 24.9513 32.672C24.335 32.839 23.6887 32.8636 23.0613 32.7439C23.3282 33.5752 23.8484 34.3021 24.5489 34.8231C25.2495 35.344 26.0955 35.6327 26.9683 35.6489C26.1008 36.3303 25.1075 36.8339 24.0452 37.1311C22.9829 37.4283 21.8725 37.5132 20.7773 37.3809C22.689 38.6104 24.9144 39.2631 27.1873 39.2609C34.8803 39.2609 39.0873 32.888 39.0873 27.361C39.0873 27.181 39.0823 26.999 39.0743 26.821C39.8932 26.2291 40.5999 25.496 41.1613 24.656L41.1603 24.655Z"
                    fill="#4169E1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_772_94698">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(19 19)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  </v-main>
</template>

<script>
export default {
  layout: "dashboard",
  components: {},
  data() {
    return {};
  },
  // page properties go here
};
</script>

<style lang="scss" scoped>
.v-main {
  .my-ref-link {
    text-align: right;

    a {
      color: var(--primary-color);
      font-size: 1.8rem;
      line-height: 2.8rem;
      font-weight: 600;
      text-decoration: none;
    }
  }

  .ref-image {
    text-align: center;
  }

  h2 {
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 500;
    color: var(--black);
  }

  p.referral-info {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  p.referral-info1 {
  }

  p.link-instruction,
  p.referral-info1 {
    font-size: 1.6rem;
    line-height: 2.8rem;
    font-weight: 400;
    color: var(--gray-darken1);
  }

  .ref-link {
    div {
      background-color: var(--faded-blue);
      color: var(--primary-color);
      font-size: 1.8rem;
      line-height: 3.51rem;
      font-weight: 500;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      grid-gap: 20px;
      min-height: 4.6rem;
      padding: 9px 24px;
    }
  }

  .social-btn {
    display: flex;
    justify-content: center;

    span {
      width: 6.2rem;
      height: 6.2rem;
      border-radius: 50%;
      display: flex;
      background-color: var(--faded-blue-darken1);
      justify-content: center;
      align-items: center;
    }
  }
}
section.dashboard-content {
  background: transparent;
  padding: 0 0 20px;
  & > .content__wrapperBox {
    margin: 0 25px;
    border-radius: 16px;
    // padding: 31px 32px;
    background-color: #fff;
    & > .col-md-12 {
      padding: 45px 32px 31px;
    }
  }
}

@media screen and (max-width: 800px) {
  .v-main {
    h2 {
      font-size: 2rem;
      line-height: 3.5rem;
      font-weight: 500;
      color: var(--black);
    }

    .ref-link {
      div {
        background-color: var(--faded-blue);
        color: var(--primary-color);
        font-size: 1.3rem;
        line-height: 3.51rem;
        font-weight: 500;
        border-radius: 1rem;

        img {
          padding-left: 2rem;
        }
      }
    }
  }
}
@media (max-width: 599px) {
  section.dashboard-content {
    & > .content__wrapperBox {
      padding: 17px 26px !important;
      & > .col-md-12 {
        padding: 0 !important;

        .my-ref-link {
          a {
            font-size: 1.6rem;
            font-weight: 500;
            text-decoration: underline;
          }
        }
        .ref-image {
          margin-top: 24px;
          img {
            width: 10.2rem;
            height: 10.2rem;
          }
        }
        p.referral-info {
          font-size: 1.6rem;
        }
        p.referral-info1,
        p.link-instruction {
          font-size: 1.4rem;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
