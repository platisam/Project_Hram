<template>
    <footer>
		<p>пратите нас</p>
		<div class="social-links">
			<a href="https://sr-rs.facebook.com/crkvasvvasilija/"><i class="fab fa-facebook-f"></i></a>
			<a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fexplore%2Flocations%2F551820990%2Fcrkva-sveti-vasilije-ostroski%2F%3Fhl%3Den%26__coig_login%3D1"><i class="fab fa-instagram"></i></a>
			<a href="https://www.youtube.com/watch?v=PmUC4H0n1J0&t=35s"><i class="fab fa-youtube"></i></a>
		</div>
		<div class="footerCopyright">
		  <small>Copyright &copy; Храм Светог Василија Острошког</small>
		</div>
	</footer>
</template>

<style scoped>
footer {
    text-align: center;
    background-color: rgba(246, 198, 87, 0.9);
    padding: 10px 0 0;
    max-width: 1000px;
	margin: 40px auto 0;
    border: 2px solid orange;
    box-shadow: inset 0 5px 5px rgb(0, 0, 0, 0.1);
  }
 
  .footerCopyright {
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid rgb(94, 94, 12);
    margin-top: 10px;
    color: navy;
  }

  footer p {
    color: navy;
    font-size: 14px;
  }

  footer p::after {
    content: "";
    width: 55px;
    height: 1px;
    display: block;
    background-color: rgb(94, 94, 12);
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>