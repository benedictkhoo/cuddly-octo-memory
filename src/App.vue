<template>
  <div id="app">
    <nav>
      <router-link to="/">My Notes</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

button
  &:active, &:focus
    outline none

.btn
  cursor pointer

.btn-icon
  background transparent
  border 0

  .material-icons
    cursor pointer

.material-icons
  &.md-18
    font-size 18px
  &.md-24
    font-size 24px
  &.md-36
    font-size 36px
  &.md-48
    font-size 48px
</style>
