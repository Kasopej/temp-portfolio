<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Lagos, Nigeria",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "kasopej@gmail.com",
          link: "mailto:kasopej@gmailcom",
          icon: "mail",
        },
        {
          id: 3,
          name: "+234 902 964 6160",
          link: "tel:+234 902 964 6160",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
