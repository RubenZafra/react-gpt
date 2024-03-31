import "./OpenAITyping.css";

interface OpenAITypingProps {
  className?: string;
}

export const OpenAITyping = ({ className }: OpenAITypingProps) => {
  return (
    <div className={`typing ${className}`}>
      <span className='circle scaling'></span>
      <span className='circle scaling'></span>
      <span className='circle scaling'></span>
    </div>
  );
};
