<template>
  <div class="footer">
    <div class="info">
      <Logo />

      <div class="menus-container">
        <ul class="menu">
          <li class="menu-topic">Product</li>
          <li><a href="#">Enterprise</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Demo</a></li>
        </ul>

        <ul class="menu">
          <li class="menu-topic">Company</li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Careers</a></li>
        </ul>

        <ul class="menu">
          <li class="menu-topic">Resources</li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
    </div>

    <div class="contact">
      <div>
        <ul>
          <li><a href="#">Status</a></li>
          <li><a href="#">Privacy & Terms</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="social-media-container">
        <a href="#" class="social-media" aria-label="Facebook">
          <font-awesome-icon
            class="media-icon"
            :icon="['fab', 'facebook-square']"
          />
        </a>
        <a href="#" class="social-media" aria-label="Linkedin">
          <font-awesome-icon class="media-icon" :icon="['fab', 'linkedin']" />
        </a>
        <a href="#" class="social-media" aria-label="Twitter">
          <font-awesome-icon class="media-icon" :icon="['fab', 'twitter']" />
        </a>
        <a href="#" class="social-media" aria-label="Youtube">
          <font-awesome-icon class="media-icon" :icon="['fab', 'youtube']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Views/Logo.vue'

export default {
  name: 'Footer',
  components: { Logo },
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  margin: 0 70px 30px 50px;
  border-top-color: #29394a;
  border-top-style: solid;
  border-top-width: 3.5px;
  padding-top: 35px;
}

.info {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.menus-container {
  display: flex;
}

.menu {
  list-style-type: none;
  padding: 0;
}

.menu:not(:first-child) {
  margin-left: 55px;
}

.menu li {
  margin: 11px 0;
  font-size: 14px;
}

.menu .menu-topic {
  font-weight: 500;
  font-size: 15px;
  margin-top: 0;
}

.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 26px;
  margin-top: 50px;
  border-top-color: #29394a;
  border-top-style: solid;
  border-top-width: 1px;
}

.contact ul {
  display: inline;
  padding: 0;
}

.contact li {
  display: inline;
  font-weight: 500;
  font-size: 0.8rem;
}

.contact li:not(:first-child) {
  margin-left: 15px;
}

.social-media:not(:first-child) {
  margin-left: 12px;
}

.media-icon {
  font-size: 28px;
}

/* Mobile screens */
@media only screen and (max-width: 562px) {
  .footer {
    margin: 0 0 30px 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  .info {
    flex-direction: column;
  }

  .logo-container {
    justify-content: center;
  }

  .menus-container {
    justify-content: center;
    margin-top: 15px;
  }

  .contact {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 30px;
  }

  .social-media-container {
    margin-top: 15px;
  }
}
</style>
