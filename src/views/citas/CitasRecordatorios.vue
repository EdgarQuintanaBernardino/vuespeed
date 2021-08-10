<template>
    <CNav variant="pills" color="info">
    <CNavItem color="info" :active="citas" to="/citas" :class="citas ? 'text-white ' : ''">
      <CIcon name="cilCalendar"/> Citas
    </CNavItem>
    <CNavItem color="info" :active="listadecitas" to="/listadecitas" :class="listadecitas ? 'text-white' : ''">
       <CIcon name="cilListRich"/> Lista de citas
    </CNavItem>
    
  </CNav>
</template>
<script>
  export default {
     name: 'Citas',
  props:{
    citas: Boolean,
    listadecitas: Boolean,
  },
    data() {
      return {
        
      }
    },
    computed: {
      
      }
    }
</script>