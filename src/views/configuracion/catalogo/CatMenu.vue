<template>

  <CNav variant="pills">
    <CNavItem :hidden="permisos(['catalogo.create','catalogo.show','catalogo.edit', 'catalogo.destroy'])" :active="actCL" to="/catalogos" :class="actCL ? 'text-white ' : ''">
      <CIcon name="cilList"/> Paquetes / Reparaciones
    </CNavItem>
    <CNavItem :hidden="permisos(['catalogo.create'])" :active="actCC" to="/catalogos/registrar" :class="actCC ? 'text-white' : ''">
      <b-icon icon="plus-circle"></b-icon> Mano de Obra
    </CNavItem>
  </CNav>
</template>

<script>
import check from '@/repositories/global/check'

export default {
  name: 'SucMenu',
  props:{
    actCL: Boolean,
    actCC: Boolean,
  },
  methods: {
    permisos(permisos) {
      return !check.permiso(permisos)
    }   
  },
}
</script>