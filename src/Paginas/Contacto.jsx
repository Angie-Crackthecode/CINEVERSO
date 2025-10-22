import { FormContacto } from "../Componentes/FormContacto";

export default function Contacto() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl text-[#00CED1] font-bold mb-6 text-center">
        📩 Contáctanos
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Si tienes alguna duda o comentario, completa el siguiente formulario:
      </p>
      <FormContacto />
    </div>
  );
}
