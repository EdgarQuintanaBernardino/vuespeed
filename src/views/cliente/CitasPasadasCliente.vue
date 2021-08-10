<template>
     <table class="table" sm="" >
   
      <thead>
        <tr>
          <th>ID Cita</th>
           <th>Fecha</th>
          <th>Nombre de Cita</th>
          <th>Status</th>
          <th>Concretado</th>
          
         
          <th></th>
        </tr>
      </thead>
      <tbody>
    
           <td>{{ data.id}}</td>
           <td>{{ data.fecha}}</td>
           <td>{{ data.nom_cita}}</td>
           <td>{{ data.name}}</td>
           <td>{{ data.concretado}}</td>
 
      </tbody>
    </table>
</template>