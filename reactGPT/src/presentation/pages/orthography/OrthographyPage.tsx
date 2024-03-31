import { GPTMessage } from "../../components/chat-bubbles/GPTMessage";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import { OpenAITyping } from "../../components/loaders/OpenAITyping";

export const OrthographyPage = () => {
  return (
    <div className='chat-container'>
      <div className='chat-messages'>
        <div className='grid grid-cols-12 gap-y-2'>
          {/* { BIENVENIDA } */}
          <GPTMessage text='¡Hola! Soy un modelo de lenguaje de OpenAI y estoy aquí para ayudarte a aprender sobre ortografía. ¿En qué puedo ayudarte hoy?' />
          {/* { PREGUNTA DE USUARIO } */}
          <MyMessage text='Hola mundo' />

          <OpenAITyping className='fade-in' />
        </div>
      </div>
    </div>
  );
};
