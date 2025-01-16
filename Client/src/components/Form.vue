<template>
    <div class="container py-5">
        <h2 class="text-center mb-4">Contacto</h2>
        <form  @submit.prevent="enviarCorreo" class="row g-3">

            <div class="col-md-6">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" v-model="form.nombre" class="form-control" id="nombre" required>
            </div>
        
            <div class="col-md-6">
                <label for="correo" class="form-label">Correo Electronico</label>
                <input type="email" v-model="form.correo" class="form-control" id="correo" required>
            </div>
        
            <div class="col-md-12">
                <label for="asunto" class="form-label">Asunto</label>
                <input type="text" v-model="form.asunto" class="form-control" id="asunto" required>
            </div>

            <div class="col-md-12">
                <label for="mensaje" class="form-label">Mensaje</label>
                <textarea v-model="form.mensaje" class="form-control" id="mensaje" rows="4" required></textarea>

            </div>


            <div class="col-md-12">
                <button type="submit" class="btn btn-primary w-100">Enviar Mensaje</button>

            </div>
        </form>

        <div v-if="mensajeEnviado" class="alert alert-success mt-4">
            ¡Tu mensaje ha sido enviado con exito

        </div>

        <div v-if="mensajeError" class="alert alert-danger mt-4">
            Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.

        </div>
    </div>
</template>




<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        nombre: '',
        correo: '',
        asunto: '',
        mensaje: '',
      },
      mensajeEnviado: false,
      mensajeError: false,
    };
  },
  methods: {
    async enviarCorreo() {
      const { nombre, correo, asunto, mensaje } = this.form;

      const templateParams = {
        from_name: nombre,
        from_email: correo,
        subject: asunto,
        message: mensaje,
      };

      try {
        // Usar EmailJS para enviar el correo
        const response = await emailjs.send(
          'YOUR_SERVICE_ID', // Reemplaza con tu Service ID
          'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
          templateParams,
          'YOUR_USER_ID' // Reemplaza con tu User ID
        );

        if (response.status === 200) {
          this.mensajeEnviado = true;
          this.mensajeError = false;
          this.form = { nombre: '', correo: '', asunto: '', mensaje: '' }; // Limpiar formulario
        } else {
          this.mensajeError = true;
          this.mensajeEnviado = false;
        }
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        this.mensajeError = true;
        this.mensajeEnviado = false;
      }
    },
  },
};
</script>



<style scoped>

.container {
    max-width: 600px;
    margin: 0 auto;
}

</style>

