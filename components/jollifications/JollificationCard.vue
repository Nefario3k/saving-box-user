<template>
  <section>
    <div
      style="grid-gap: 14px; min-height: 8rem"
      class="jolli-card d-flex align-items-center justify-content-between"
      @click="$refs.rightDraw.showPanel()"
    >
      <div
        class="jolly__holder"
        @click="$refs.rightDraw.showPanel()"
        style="background-image: url(/images/temporary/investibox-image.jpg)"
      ></div>
      <div
        style="grid-gap: 15px"
        class="flex-grow-1 d-flex justify-content-between"
      >
        <div class="key">
          <h3>December Jolly Items</h3>
          <span class="d-block">December Jolly Items</span>
          <p class="mt-6">2/11</p>
          <span class="">Months Remaining</span>
        </div>
        <div class="value text-right">
          <h3>₦100,000</h3>
          <span class="d-block">Amount</span>
          <p class="mt-6">₦100,000</p>
          <span>Monthly</span>
        </div>
      </div>
    </div>
    <RightDrawer
      ref="rightDrawFirst"
      :showDrawer="showJolliDetails"
      @closeDrawer="showJolliDetails = false"
    >
      <div class="right-drawer-title">
        <h1 class="">December Jolly Items</h1>
        <p>For Members who want to get Items For December</p>
      </div>
      <section class="jolli-details">
        <h3>Benefits</h3>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="keyvalue-container">
          <div class="simple-card-progress">
            <div class="font-weight-medium">Current Progress</div>
            <v-progress-linear
              rounded
              value="10"
              height="8px"
              background-color="rgba(227, 227, 227, 1)"
              color="rgba(97, 202, 97, 1)"
            ></v-progress-linear>
            <div class="d-flex justify-content-between">
              <small class="text-left">10% Completed</small>
              <small class="text-right">6 Months Left</small>
            </div>
          </div>
          <div class="key-value d-flex justify-space-between">
            <div class="">
              <span>Worth of items</span>
              <p>₦100,000</p>
              <span>Duration</span>
              <p>11 Months</p>
              <span>Date Started</span>
              <p>1st January 2023</p>
            </div>
            <div class="">
              <span>Amount / Month</span>
              <p>₦10,000</p>
              <span>Members</span>
              <p>2,398</p>
              <span>Months Left</span>
              <p>8 Months</p>
            </div>
          </div>
        </div>
        <div class="see-rule">
          <button class="see-rule" @click="$refs.rightDrawSecond.showPanel()">
            See Rules
          </button>
          <button class="join" @click="displayJoinForm()">Join</button>
        </div>
      </section>
    </RightDrawer>
    <RightDrawer
      ref="rightDraw"
      :showDrawer="showJoinForm"
      @closeDrawer="showJoinForm = false"
    >
      <JoinJollificationForm />
    </RightDrawer>
    <RightDrawer
      ref="rightDrawSecond"
      :showDrawer="showJolliRule"
      @closeDrawer="showJolliRule = false"
    >
      <JollificationRule />
    </RightDrawer>
  </section>
</template>
<script>
import RightDrawer from "../assets/RightDrawer.vue";
import JoinJollificationForm from "./JoinJollificationForm.vue";
import JollificationRule from "./JollificationRule.vue";
export default {
  components: {
    RightDrawer,
    JoinJollificationForm,
    JollificationRule,
  },
  data() {
    return {
      showJolliDetails: false,
      showJoinForm: false,
      showJolliRule: false,
      desserts: [
        {
          name: "Generator X2",
          calories: "₦98,300",
        },
        {
          name: "TV Sets",
          calories: "₦104,000",
        },
        {
          name: "Refrigerator",
          calories: "₦175,000",
        },
        {
          name: "50 Tins of Tomatoes",
          calories: "₦18,500",
        },
        {
          name: "A tin of Thailand Rice",
          calories: "₦25,000",
        },
        {
          name: "Provisions",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: "₦13, 000",
        },
      ],
    };
  },
  methods: {
    displayJoinForm() {
      this.showJolliDetails = false;
      this.showJoinForm = true;
      this.$refs.rightDraw.showPanel();
    },
  },
};
</script>
<style lang="scss" scoped>
.jolly__holder {
  width: 160px;
  min-height: 160px;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  border-radius: 6px;
  cursor: pointer;
}
.jolli-card {
  border: 1px solid var(--primary-color);
  border-radius: 1rem;
  height: 100%;
  padding: 10px 12px;
  border-radius: 10px;
  &:hover {
    box-shadow: 1.5px 1px 2px var(--gray-darken2);
    cursor: pointer;
  }

  div.key {
    h3 {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--black2);
      margin-bottom: 0;
    }

    h3 + span {
      font-size: 1.4rem;
    }

    p {
      color: var(--black2);
      margin: 0rem;
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 0;
    }

    p + span {
      font-size: 1.2rem;
      color: var(--gray-darken2);
    }
  }

  div.value {
    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: 0;
    }

    h3 + span {
      font-size: 1.4rem;
    }

    p {
      color: var(--black2);
      margin: 0rem;
      font-size: 1.8rem;
      font-weight: 500;
    }

    p + span {
      font-size: 1.2rem;
      color: var(--gray-darken2);
    }
  }
}

.jolli-details {
  h3 {
    padding: 1.4rem;
  }

  .keyvalue-container {
    border: 1px solid #d0d0d0;
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    padding: 2.2rem 2.8rem;

    .key-value {
      margin-top: 2.2rem;

      p {
        font-weight: 500;
        font-size: 1.6rem;
      }

      span {
        color: #666b70;
        font-size: 1.4rem;
      }
    }
  }

  button {
    color: var(--primary-color);
    margin: auto;
    margin-top: 2.2rem;
    display: block;
    width: 80%;
    font-size: 2rem;
  }

  button.see-rule {
    font-weight: 600;
    color: var(--primary-color);
  }

  button.join {
    color: white;
    background-color: var(--primary-color);
    padding: 1.4rem 12rem;
    border-radius: 0.8rem;
    margin-top: 4.3rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 800px) {
  .jolli-card {
    /*     padding: 1.9rem 2.6rem; */

    // width: 51.2rem;
    // height: 16.4rem;
    &:hover {
    }

    div.key {
      h3 {
        font-size: 1.4rem;
      }

      h3 + span {
        font-size: 1.2rem;
      }

      p {
        font-size: 1.2rem;
      }

      p + span {
        font-size: 1.2rem;
      }
    }

    div.value {
      h3 {
        font-size: 1.6rem;
      }

      h3 + span {
        font-size: 1.2rem;
      }

      p {
        font-size: 1.4rem;
      }

      p + span {
        font-size: 1.2rem;
      }
    }
  }

  .jolli-details {
    h3 {
      padding: 1.4rem;
    }

    .keyvalue-container {
      margin-top: 2.4rem;
      padding: 2.2rem 2.8rem;

      .key-value {
        margin-top: 2.2rem;

        p {
          font-size: 1.6rem;
        }

        span {
          font-size: 1.4rem;
        }
      }
    }

    button {
      margin-top: 2.2rem;
      font-size: 2rem;
    }

    button.see-rule {
      font-weight: 600;
    }

    button.join {
      padding: 1.4rem 12rem;
      margin-top: 4.3rem;
    }
  }
}
</style>