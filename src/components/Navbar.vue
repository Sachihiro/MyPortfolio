<template>
    <div>
  <nav class="navbar bg-dark navbar-expand-lg sticky-top" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rex Sobrido</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style="justify-content: center;">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Projects</a>
        <!-- <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {

}
</script>

<style>
.navbar-brand{
  margin-left:0.5rem
}

/* ::v-deep nav{
  background: #333333 !important;
} */

.navbar-brand{
  color: gold ;
}

::v-deep #navbarNavAltMarkup{
  background: white !important;
}
</style>