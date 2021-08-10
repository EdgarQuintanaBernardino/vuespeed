<template>
<CRow>
    <CCol>
   
            
			<div class="navbar-header" >
				<h3 class="text-info text-center">Comentarios del servicio</h3>
                <br>
			</div>
			<div class="navbar-collapse collapse" >
				<ul class="navbar-right navbar-nav nav" >
					<li>
						<a href="#">{{total_comments}} Comentarios</a>
					</li>
				</ul>
			</div>
	
		<div>  
			<div class="row" >
				<!-- form -->
				<form class="col-sm-6 col-sm-offset-4" v-on:submit.prevent='submit' >
					<h4 class="text-info">Crear Nuevo Comentario</h4>
					<div class="form-group">
						<textarea required="required" placeholder="Escribe un comentario" v-model='input' class="form-control" ></textarea>
					</div>
					<button class="btn btn-info" >Crear</button>
					<br />
					<br />
					<legend></legend>
				</form>
				<!-- form -->
				
					<div class="col-sm-4 col-sm-offset-4" >
						<div v-if='total_comments == 0' >
                            <br>
                        
							<div class="alert alert-info" >
								Este servicio no tiene Comentarios
							</div>
						</div>
						<div class="list-group" >
							<div class="list-group-item" v-for="comment,index in comments" >
								<p><strong>Comentario(s): </strong> {{comment.comment}}</p>
							<!--	<p>
									<strong>Total Likes:</strong>
									{{comment.total_likes}}
								</p>
								<p>
									<button v-on:click='like(index)' class="btn btn-xs btn-info">Like</button>
							</p>	-->
								<h5>Respuestas</h5>
								<div class="list-group" >
									<div class="list-group-item" v-for='reply,index in comment.replies' >
										<p>
											<strong>Respuesta:</strong> {{reply.reply}}
										</p>
									</div>
									<div class="list-group-item"  style="padding: 00;" >
										<form v-on:submit.prevent='addReply(index)' >
											<input v-model='reply' placeholder="respuesta" class="form-control" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </CCol>
</CRow>
</template>
<script>
export default {
    data(){
        return{
        input: "",
		reply: "",
		total_comments: 0,
		comments: [],
        }
    },
    methods: {
		getReplySingleton: function (reply) {
			return function () {
				return {
					reply
				};
			}
		},
		getSingleTon: function (comment) {
			return function () {
				return {
					comment,replies: []
				}
			}
		},
		submit() {
			var comment = this.getSingleTon(this.input);
			var old = this.comments;
			var newc = [...old,comment()];
			this.comments = newc;
			this.input = "";
			this.total_comments  = this.comments.length;
		},
		//like(index) {
		//	this.comments[index].total_likes = this.comments[index].total_likes + 1;
		//},
		addReply(index) {
			var s = this.getReplySingleton(this.reply);
			var replies = this.comments[index].replies;
			var n = [...replies,s()];
			this.comments[index].replies = n;
			this.reply = "";
		}
	}
}
</script>