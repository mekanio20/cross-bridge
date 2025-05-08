<template>
    <div class="flex justify-between items-center mt-16 pb-4">
      <div class="flex space-x-8 items-center">
        <span class="footer-text font-medium">CrossBridge</span>
        <span class="footer-text">Company profile</span>
        <span class="footer-text">2025</span>
      </div>
      <div>
        <span class="page-number">{{ pageNumber }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageFooter',
    props: {
      pageNumber: {
        type: Number,
        required: true
      }
    }
  }
  </script>